import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
from langchain_core.documents import Document
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_groq import ChatGroq
from langchain_classic.prompts import ChatPromptTemplate

def Consolidated_Embedder(Base_url):
    splitter = RecursiveCharacterTextSplitter(separators=['.','!','\n','\n\n'], chunk_size=500, chunk_overlap=100)
    embedding_function = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
    vectorDB = Chroma(embedding_function=embedding_function, persist_directory='./ChromaDB')
    base_url = Base_url
    max_pages = 5
    to_visit_queue = [base_url]
    visited_urls = []
    pages_visited = 0


    while pages_visited<max_pages and to_visit_queue:
        
        url = to_visit_queue.pop(0)

        print(f"Visiting URL: {url}")
        if url in visited_urls:
            print(f"URL: {url} has been already visited...")
            continue

        try:
            response = requests.get(url)
            if response.status_code==200:
                print("Succesful Retrieval of Website!!!")

            soup = BeautifulSoup(response.content, "html.parser")

            tags = soup.find_all(['h1','li','td','h2','h3','h4'])
            seen_text = set()
            content = ''
            
            for text in tags:
                t = text.get_text(strip=True)
                if len(t) > 10:
                    if t not in seen_text:
                        content += t + '\n'
                        seen_text.add(content)

            if len(content) < 100:
                print("Insufficient Data")
                visited_urls.append(url)
                print(f"Content in URL: {url} very short...")
                continue
            
            print(f"Content from URL: {url} extracted...")

            h1_tag = soup.find('h1')
            if h1_tag:
                category = h1_tag.get_text(strip=True)
            else:
                category = url.split('/')[-1].replace('-',' ').title()
            
            
            

            if pages_visited==0:
                links = soup.find_all('a', href = True)

                for link in links:
                    link_text = link.get_text(strip=True)
                    link_url = link.get('href')

                    if link_url.startswith('/'):
                        full_link = urljoin(url,link_url)
                        if full_link not in visited_urls and full_link not in to_visit_queue:
                            to_visit_queue.append(full_link)
                print(f"Total sub-links discovered {len(to_visit_queue)} ...")

                    
            
            doc = Document(
                page_content=content,
                metadata={"url":url, "category":category}
            ) 

            chunks = splitter.split_documents([doc])
            print(f"Total chunks from {url} : {len(chunks)}")
            vectorDB.add_documents(chunks)


            visited_urls.append(url)
            pages_visited+=1

            print(f"Success in embedding {url} to Vector-DB")
        
        except Exception as e:
            print(f'Error: {e}')

    return vectorDB



# if __name__ == "__main__":
#     print("Starting the crawler!!")
#     db = Consolidated_Embedder("https://www.india.gov.in/category/agriculture-rural-environment")

#     count = db._collection.count()
#     print(f"\n✅ CRAWLING FINISHED! Total Chunks Stored: {count}")


def query_answer_generation(query):
    key='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'
    
    db = Chroma(persist_directory='./ChromaDB',
                embedding_function=HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2"))
    similar = db.similarity_search(query, k=3)

    context = ""

    for doc in similar:
        context += doc.page_content + '\n\n'

    if not context:
        return "I couldn't find any info."

    llm = ChatGroq(model_name = "llama-3.3-70b-versatile", temperature=0 , api_key=key)

    template = """
    Answer the question based ONLY on the context below:
    
    Context:
    {context}
    
    Question: {query}
    """

    prompt = ChatPromptTemplate.from_template(template)
    chain = prompt | llm

    response = chain.invoke({
        "context": context, 
        "query": query
    })

    return response.content


if __name__ == "__main__":
    print(query_answer_generation("I need info on transport"))    
from RAG_Functions import Consolidated_Embedder
import logging

# Configure logging to see output
logging.basicConfig(level=logging.INFO)

print("Starting ChromaDB Rebuild with FastEmbed (Lightweight)...")
print("This will overwrite the existing vector database to be compatible with Render.")

# Define the base URL to scrape (Assuming this is the target)
# You can change this if needed
BASE_URL = "https://myscheme.gov.in" 

# Run the embedder
try:
    vector_db = Consolidated_Embedder(Base_url=BASE_URL)
    print("✅ Success! ChromaDB has been rebuilt with FastEmbed.")
    print("Now run: git add python_backend/ChromaDB && git commit -m 'feat: update db' && git push")
except Exception as e:
    print(f"❌ Error: {e}")

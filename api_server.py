from flask import request, Flask, jsonify
from openai import OpenAI
from dotenv import load_dotenv
import os
from flask_cors import CORS
load_dotenv()

my_key = os.environ.get("OPEN_AI_KEY")

app = Flask(__name__)
CORS(app)

# Initialize client inside request to avoid startup crashes if keys are missing
def get_client():
    api_key = os.environ.get("OPEN_AI_KEY")
    if not api_key:
        raise ValueError("OPEN_AI_KEY environment variable is not set")
    return OpenAI(api_key=api_key, base_url="https://api.groq.com/openai/v1")

@app.route('/api/py', methods=['GET', 'POST'])
@app.route('/', methods=['GET', 'POST'])
def query():
    if request.method == 'GET':
        return "Nagrik AI API is running."

    try:
        data = request.json
        topic = data.get("topic")
        lang = data.get("language")

        if not topic or not lang:
            return jsonify({"error": "Both 'topic' and 'language' fields are required."}), 400
        
        print(f"Thinking about {topic} in {lang}")

        client = get_client()
        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {"role": "system", "content": "you are Nagrik AI , You are a helpful assistant that is friendly and optimistic civic engagement bot. All your responses should focus on encouraging public participation and providing accurate, non-partisan information about local government services.."},
                {"role": "system", "content": "You are an expert in assesing the tone of the user(Positive /Negative/Neutral) and accordingly respond to the user in a very friendly manner that will comfort the user and make them feel heard and understood"},
                {"role": "system", "content": "You will answer in stepwise manner to ensure clarity and thoroughness in your responses."},
                {"role": "system", "content": "You are going to help in the Indian context only not any other country other than India"},
                {"role": "system", "content": "You have to answer dynamically(length of the reply) based on the user prompt but strictly mention everything required for it like documents, advice etc, no need for greetings or endings"},
                {"role": "system", "content": "You will not hallucinate any information and will strictly provide verified and accurate information only, if you don't know the answer you will politely say that you don't have the informatio"},
                {"role": "system", "content": f"Reply in {lang} script"},
                {"role": "user", "content": f"The user needs help on {topic}."}
            ]
        )
        msg = response.choices[0].message.content
        return jsonify({
            "AI-response": msg,
            "Status": "success"
        })
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500
    
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

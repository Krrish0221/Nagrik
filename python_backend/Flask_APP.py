from dotenv import load_dotenv
import os
from RAG_Functions import query_answer_generation 

# Load .env from the root directory (one level up)
dotenv_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), '.env')
load_dotenv(dotenv_path)

from flask import request, Flask, jsonify
from flask_cors import CORS


GROQ_AI_KEY = os.environ.get("GROQ_API_KEY")
print(f"DEBUG: Current Environment Keys: {list(os.environ.keys())}") # Debugging Render

if not GROQ_AI_KEY:
    raise ValueError(f"GROQ_API_KEY not found! Available keys: {list(os.environ.keys())}")

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def home():
    return "Nagrik API is Runnig"


@app.route('/api/Flask_APP/chat', methods = ['POST'])
def query():
    if request.method == 'GET':
        return 'Nagrik API is Running'
    try:
        data = request.json
        topic = data.get('topic')
        lang = data.get('language') 
        if not topic or not lang:
            return jsonify({"error": "Both 'topic' and 'language' fields are required."}), 400
        
        response = query_answer_generation(query=topic, lang=lang, my_key=GROQ_AI_KEY)

        return jsonify({
            "AI-response": response,
            "Status": "Success"
        })
    except Exception as e:
        print(f"Critical Error: {e} ")
        return jsonify({"Status": "Error", "AI-response": f"Server Error: {str(e)}"}), 500




    
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True, use_reloader=False)

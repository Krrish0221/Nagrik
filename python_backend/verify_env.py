
import os
from dotenv import load_dotenv

# Mimic Flask_APP.py logic
current_dir = os.path.dirname(os.path.abspath(__file__))
root_dir = os.path.dirname(current_dir) # Go up one level to 'nagrik'
dotenv_path = os.path.join(root_dir, '.env')

print(f"Checking for .env at: {dotenv_path}")
print(f"File exists? {os.path.exists(dotenv_path)}")

load_dotenv(dotenv_path)

key = os.environ.get("GROQ_API_KEY")
print(f"GROQ_API_KEY found: {'Yes' if key else 'NO'}")
if key:
    print(f"Key preview: {key[:5]}...")

backend_url = os.environ.get("PYTHON_BACKEND_URL")
print(f"PYTHON_BACKEND_URL found: {backend_url}")


import sys
import os

print(f"Python Executable: {sys.executable}")
print(f"Python Version: {sys.version}")

try:
    import sentence_transformers
    print("\nSUCCESS: sentence_transformers is installed!")
    print(f"Location: {os.path.dirname(sentence_transformers.__file__)}")
except ImportError as e:
    print(f"\nFAILURE: Could not import sentence_transformers. Error: {e}")
    print("Please run: pip install sentence-transformers")

try:
    import langchain_huggingface
    print("\nSUCCESS: langchain_huggingface is installed!")
except ImportError as e:
    print(f"\nFAILURE: Could not import langchain_huggingface. Error: {e}")

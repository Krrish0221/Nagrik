import sys
import os

print(f"Python Executable: {sys.executable}")
print(f"Python Version: {sys.version}")

print("\n--- Testing FastEmbed Dependencies ---")

try:
    import langchain_community
    print("✅ SUCCESS: langchain_community is installed!")
except ImportError as e:
    print(f"❌ FAILURE: Could not import langchain_community. Error: {e}")

try:
    from langchain_community.embeddings.fastembed import FastEmbedEmbeddings
    print("✅ SUCCESS: FastEmbedEmbeddings is available!")
except ImportError as e:
    print(f"❌ FAILURE: Could not import FastEmbedEmbeddings. Error: {e}")

try:
    import chromadb
    print("✅ SUCCESS: chromadb is installed!")
except ImportError as e:
    print(f"❌ FAILURE: Could not import chromadb. Error: {e}")

try:
    import sentence_transformers
    print("⚠️  NOTE: sentence_transformers is still installed (but acts as legacy/unused).")
except ImportError:
    print("✅ CLEANUP: sentence_transformers is NOT installed (Good for saving space).")

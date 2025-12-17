# Nagrik - AI Government Assistant

Nagrik is a next-generation platform designed to simplify access to government schemes and services. It features a powerful AI assistant ("Nagrik AI") that provides real-time, context-aware answers to user queries in multiple languages.

## 🚀 Key Features

*   **Hybrid Architecture**: Fast **Next.js** frontend coupled with a robust **Python Flask** backend.
*   **Nagrik AI**: An intelligent chat assistant powered by **OpenAI/Groq**, capable of answering complex questions about government schemes.
*   **Smart UI/UX**:
    *   **Premium Animations**: Bouncy, slide-in message effects for a modern feel.
    *   **Reading Mode Scroll**: Auto-scrolls to the *start* of the answer or frames the *User Question*, ensuring context is never lost.
    *   **High-Contrast Indicators**: Clear typing indicators for better visibility.
*   **Multi-Language Support**: Built with localization in mind to serve diverse demographics.

## 🛠️ Architecture

*   **Frontend**: Next.js 15 (App Router), React, Tailwind CSS, Framer Motion.
*   **Backend**: Python Flask, OpenAI API (Groq).
*   **Data**: JSON-based scheme data storage.

## 📦 Getting Started

### Prerequisites

*   Node.js (v18+)
*   Python (v3.8+)
*   API Key (OpenAI or Groq)

### 1. Backend Setup

The backend handles AI processing and API requests.

```bash
# Navigate to the project root
# Install dependencies
pip install -r requirements.txt

# Create a .env file in the root directory and add your key:
# OPEN_AI_KEY=your_api_key_here

# Run the Python Server
python api/py.py
```

*The server will start on `http://localhost:5000`.*

### 2. Frontend Setup

The frontend provides the user interface.

```bash
# Install Node dependencies
npm install

# Run the development server
npm run dev
```

*The app will be available at `http://localhost:3000`.*

## 🌟 Usage

1.  Open the app in your browser.
2.  Click on the Chat Widget to open **Nagrik AI**.
3.  Ask a question (e.g., *"How do I apply for a passport?"*).
4.  Observe the premium animations and smart scrolling as the AI responds!

## 🤝 Contributing

Contributions are welcome! Please feel free to verify the backend logic in `api/py.py` or tweak the UI animations in `app/globals.css`.

---
*Built with ❤️ for the Nagrik Hackathon 2025*

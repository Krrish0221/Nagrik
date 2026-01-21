# Nagrik - AI Government Assistant 🇮🇳

**Nagrik** is a next-generation platform designed to bridge the gap between citizens and government services. It combines a powerful **AI Assistant** with a rich ecosystem of tools for jobs, schemes, and social welfare, all available in **14+ Indian languages**.

## 🚀 Key Features

### 🤖 Nagrik AI Assistant
*   **Context-Aware**: Understands follow-up questions and maintains conversation history.
*   **Multilingual**: Speaks Hindi, Marathi, Gujarati, Tamil, Telugu, and more fluently.
*   **Voice-Enabled**: Just ask! (Future integration ready).
*   **Smart UI**: Features "Reading Mode" auto-scroll and premium bouncy animations.

### 💼 Skills Hub & Jobs
*   **Local Opportunities**: Find government and skill-based jobs (e.g., Krishi Vigyan Kendra, Anganwadi).
*   **Deep Localization**: Job titles, locations, and details are fully translated into local languages—not just Google Translated, but culturally adapted.
*   **One-Click Actions**: View on Map, Contact HR directly.

### 🤝 Helping Hand (NGOs)
*   **Connect with Causes**: Search for NGOs (Elderly Care, Child Rights, Disaster Relief) across India.
*   **Instant Access**: Direct contact numbers and location mapping.

### 📜 Government Schemes
*   **Comprehensive Data**: Detailed guides on PM-KISAN, Ayushman Bharat, Atal Pension Yojana, etc.
*   **Easy Apply**: Clear "How to Apply" steps, eligibility criteria, and required documents.
*   **Internationalized**: All scheme details available in regional languages.

## 🛠️ Tech Stack

*   **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS v4, Framer Motion.
*   **Icons**: Iconoir React.
*   **Backend**: Python Flask (for AI logic).
*   **AI Engine**: Groq (Llama 3) / OpenAI.
*   **OCR**: Tesseract.js (for document scanning).

## 📦 Getting Started

### Prerequisites
*   Node.js (v18+)
*   Python (v3.8+)
*   API Key (OpenAI or Groq)

### 1. Backend Setup (AI Server)
The Python backend handles the heavy lifting for AI responses.

```bash
# Navigate to project root
pip install -r requirements.txt

# Create .env file with your API keys:
# GROQ_API_KEY=your_key_here

# Run the server
python api/py.py
```
*Server runs on `http://localhost:5000`*

### 2. Frontend Setup (Next.js)
The modern UI interface.

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```
*App opens at `http://localhost:3000`*

## 🌟 Supported Languages
Nagrik supports deep internationalization for:
*   English
*   Hindi (हिन्दी)
*   Marathi (मराठी)
*   Gujarati (ગુજરાતી)
*   Tamil (தமிழ்)
*   Telugu (తెలుగు)
*   Kannada (ಕನ್ನಡ)
*   Malayalam (മലയാളം)
*   Punjabi (ਪੰਜਾਬੀ)
*   Odia (ଓଡ଼ିଆ)
*   Urdu (اردو)
*   Assamese (অসমীয়া)
*   Maithili (मैथिली)
*   Bhojpuri (भोजपुरी)
*   Sanskrit (संस्कृतम्)

## 🤝 Contributing
Contributions are welcome! Check out `nav-dialogs.tsx` for UI components or `schemesData.ts` to add more schemes.

---
*Built with ❤️ for the Nagrik Hackathon 2025*

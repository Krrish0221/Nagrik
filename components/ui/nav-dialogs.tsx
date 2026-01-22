"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Xmark, Search, MapPin, Building, Coins, ArrowRight, HeartSolid, Phone, Clock } from "iconoir-react"
import { schemesData, type Scheme, type SchemeContent } from "@/lib/schemesData"
import { useLanguage } from "@/context/LanguageContext"
import { SchemeModal } from "./scheme-modal"
import { type Language } from "@/lib/translations"

// --- Internationalization (I18n) ---

const NAV_TRANSLATIONS: Record<string, any> = {
    en: {
        skills_hub_title: "Skills Hub & Jobs",
        recommended: "Recommended for You",
        all_jobs: "All Government Openings",
        view_map: "View on Map",
        contact_hr: "Contact HR",
        helping_hand_title: "Helping Hand (NGOs)",
        search_placeholder: "Search for NGOs, causes...",
        no_ngos: "No NGOs found matching",
        schemes_title: "All Government Schemes",
        view_details: "VIEW DETAILS",
        posted: "ago",
        days: "days",
        hours: "hours",
        just_now: "Just now"
    },
    hi: {
        skills_hub_title: "कौशल केंद्र और नौकरियां",
        recommended: "आपके लिए अनुशंसित",
        all_jobs: "सभी सरकारी नौकरियां",
        view_map: "नक्शे पर देखें",
        contact_hr: "HR से संपर्क करें",
        helping_hand_title: "मददगार हाथ (NGOs)",
        search_placeholder: "NGO, कारण, स्थान खोजें...",
        no_ngos: "कोई NGO नहीं मिला",
        schemes_title: "सभी सरकारी योजनाएं",
        view_details: "विवरण देखें",
        posted: "पहले",
        days: "दिन",
        hours: "घंटे",
        just_now: "अभी"
    },
    mr: {
        skills_hub_title: "कौशल्य केंद्र आणि नोकऱ्या",
        recommended: "तुमच्यासाठी शिफारस केलेले",
        all_jobs: "सर्व सरकारी नोकऱ्या",
        view_map: "नकाशावर पहा",
        contact_hr: "HR शी संपर्क साधा",
        helping_hand_title: "मदतनीस (NGOs)",
        search_placeholder: "NGO, कारण, ठिकाण शोधा...",
        no_ngos: "कोणतेही NGO सापडले नाहीत",
        schemes_title: "सर्व सरकारी योजना",
        view_details: "तपशील पहा",
        posted: "पूर्वी",
        days: "दिवस",
        hours: "तास",
        just_now: "आत्ताच"
    },
    gu: {
        skills_hub_title: "કૌશલ્ય કેન્દ્ર અને નોકરીઓ",
        recommended: "તમારા માટે ભલામણ કરેલ",
        all_jobs: "તમામ સરકારી ભરતી",
        view_map: "નકશા પર જુઓ",
        contact_hr: "HR સંપર્ક કરો",
        helping_hand_title: "મદદગાર હાથ (NGOs)",
        search_placeholder: "NGO, કારણ, સ્થાન શોધો...",
        no_ngos: "કોઈ NGO મળ્યા નથી",
        schemes_title: "તમામ સરકારી યોજનાઓ",
        view_details: "વિગતો જુઓ",
        posted: "પહેલાં",
        days: "દિવસ",
        hours: "કલાક",
        just_now: "હમણાં જ"
    },
    bho: {
        skills_hub_title: "हुनर केंद्र अउर नौकरी",
        recommended: "रउरा खातिर",
        all_jobs: "सगरी सरकारी नौकरी",
        view_map: "नक्शा पर देखीं",
        contact_hr: "HR से बतियाईं",
        helping_hand_title: "मददगार हाथ (NGOs)",
        search_placeholder: "NGO खोजें...",
        no_ngos: "कवनो NGO ना मिलल",
        schemes_title: "सगरी सरकारी योजना",
        view_details: "जानकारी देखीं",
        posted: "पहिले",
        days: "दिन",
        hours: "घंटा",
        just_now: "अभी तुरंत"
    },
    ta: {
        skills_hub_title: "திறன் மையம் & வேலைகள்",
        recommended: "உங்களுக்காக பரிந்துரைக்கப்பட்டது",
        all_jobs: "அனைத்து அரசு வேலைகள்",
        view_map: "வரைபடத்தில் பார்",
        contact_hr: "HR-ஐ தொடர்பு கொள்ள",
        helping_hand_title: "உதவும் கரங்கள் (NGOs)",
        search_placeholder: "NGO-க்களை தேடுங்க...",
        no_ngos: "NGO-க்கள் எதுவும் இல்லை",
        schemes_title: "அனைத்து அரசு திட்டங்கள்",
        view_details: "விவரங்களைப் பார்",
        posted: "முன்பு",
        days: "நாட்கள்",
        hours: "மணி",
        just_now: "இப்போது"
    },
    bn: {
        skills_hub_title: "দক্ষতা কেন্দ্র এবং চাকরি",
        recommended: "আপনার জন্য সুপারিশকৃত",
        all_jobs: "সমস্ত সরকারি চাকরি",
        view_map: "মানচিত্রে দেখুন",
        contact_hr: "HR-এর সাথে যোগাযোগ করুন",
        helping_hand_title: "সাহায্যের হাত (NGOs)",
        search_placeholder: "NGO খুঁজুন...",
        no_ngos: "কোনো NGO পাওয়া যায়নি",
        schemes_title: "সমস্ত সরকারি প্রকল্প",
        view_details: "বিস্তারিত দেখুন",
        posted: "আগে",
        days: "দিন",
        hours: "ঘণ্টা",
        just_now: "এইমাত্র"
    },
    te: {
        skills_hub_title: "స్కిల్స్ హబ్ & ఉద్యోగాలు",
        recommended: "మీ కోసం సిఫార్సు చేయబడింది",
        all_jobs: "అన్ని ప్రభుత్వ ఉద్యోగాలు",
        view_map: "మ్యాప్‌లో చూడండి",
        contact_hr: "HR ని సంప్రదించండి",
        helping_hand_title: "సహాయ హస్తం (NGOs)",
        search_placeholder: "NGO లను వెతకండి...",
        no_ngos: "ఏ NGO లు కనుగొనబడలేదు",
        schemes_title: "అన్ని ప్రభుత్వ పథకాలు",
        view_details: "వివరాలు చూడండి",
        posted: "క్రితం",
        days: "రోజుల",
        hours: "గంటల",
        just_now: "ఇప్పుడే"
    },
    kn: {
        skills_hub_title: "ಕೌಶಲ್ಯ ಕೇಂದ್ರ ಮತ್ತು ಉದ್ಯೋಗಗಳು",
        recommended: "ನಿಮಗಾಗಿ ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ",
        all_jobs: "ಎಲ್ಲಾ ಸರ್ಕಾರಿ ಉದ್ಯೋಗಗಳು",
        view_map: "ನಕ್ಷೆಯಲ್ಲಿ ವೀಕ್ಷಿಸಿ",
        contact_hr: "HR ಸಂಪರ್ಕಿಸಿ",
        helping_hand_title: "ಸಹಾಯ ಹಸ್ತ (NGOs)",
        search_placeholder: "NGO ಗಳನ್ನು ಹುಡುಕಿ...",
        no_ngos: "ಯಾವುದೇ NGO ಕಂಡುಬಂದಿಲ್ಲ",
        schemes_title: "ಎಲ್ಲಾ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
        view_details: "ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
        posted: "ಹಿಂದೆ",
        days: "ದಿನಗಳ",
        hours: "ಗಂಟೆಗಳ",
        just_now: "ಈಗಷ್ಟೇ"
    },
    ml: {
        skills_hub_title: "സ്കിൽസ് ഹബ് & ജോലികൾ",
        recommended: "നിങ്ങൾക്കായി ശുപാർശ ചെയ്യുന്നത്",
        all_jobs: "എല്ലാ സർക്കാർ ജോലികളും",
        view_map: "മാപ്പിൽ കാണുക",
        contact_hr: "HR-നെ ബന്ധപ്പെടുക",
        helping_hand_title: "സഹായ ഹസ്തം (NGOs)",
        search_placeholder: "NGO-കൾ തിരയുക...",
        no_ngos: "NGO-കൾ ഒന്നും കണ്ടെത്തിയില്ല",
        schemes_title: "എല്ലാ സർക്കാർ പദ്ധതികളും",
        view_details: "വിശദാംശങ്ങൾ കാണുക",
        posted: "മുമ്പ്",
        days: "ദിവസങ്ങൾക്ക്",
        hours: "മണിക്കൂറുകൾക്ക്",
        just_now: "ഇപ്പോൾ"
    },
    pa: {
        skills_hub_title: "ਹੁਨਰ ਕੇਂਦਰ ਅਤੇ ਨੌਕਰੀਆਂ",
        recommended: "ਤੁਹਾਡੇ ਲਈ ਸਿਫਾਰਸ਼ੀ",
        all_jobs: "ਸਾਰੀਆਂ ਸਰਕਾਰੀ ਨੌਕਰੀਆਂ",
        view_map: "ਨਕਸ਼ੇ 'ਤੇ ਵੇਖੋ",
        contact_hr: "HR ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
        helping_hand_title: "ਮਦਦਗਾਰ ਹੱਥ (NGOs)",
        search_placeholder: "NGO ਲੱਭੋ...",
        no_ngos: "ਕੋਈ NGO ਨਹੀਂ ਲੱਭੀ",
        schemes_title: "ਸਾਰੀਆਂ ਸਰਕਾਰੀ ਸਕੀਮਾਂ",
        view_details: "ਵੇਰਵੇ ਵੇਖੋ",
        posted: "ਪਹਿਲਾਂ",
        days: "ਦਿਨ",
        hours: "ਘੰਟੇ",
        just_now: "ਹੁਣੇ"
    },
    or: {
        skills_hub_title: "ଦକ୍ଷତା କେନ୍ଦ୍ର ଏବଂ ଚାକିରି",
        recommended: "ଆପଣଙ୍କ ପାଇଁ ସୁପାରିଶ",
        all_jobs: "ସମସ୍ତ ସରକାରୀ ଚାକିରି",
        view_map: "ମାନଚିତ୍ରରେ ଦେଖନ୍ତୁ",
        contact_hr: "HR ସହିତ ଯୋଗାଯୋଗ",
        helping_hand_title: "ସାହାଯ୍ୟକାରୀ ହାତ (NGOs)",
        search_placeholder: "NGO ଖୋଜନ୍ତୁ...",
        no_ngos: "କୌଣସି NGO ମିଳିଲା ନାହିଁ",
        schemes_title: "ସମସ୍ତ ସରକାରୀ ଯୋଜନା",
        view_details: "ବିବରଣୀ ଦେଖନ୍ତୁ",
        posted: "ପୂର୍ବରୁ",
        days: "ଦିନ",
        hours: "ଘଣ୍ଟା",
        just_now: "ବର୍ତ୍ତମାନ"
    },
    ur: {
        skills_hub_title: "مہارت کا مرکز اور نوکریاں",
        recommended: "آپ کے لیے تجویز کردہ",
        all_jobs: "تمام سرکاری نوکریاں",
        view_map: "نقشے پر دیکھیں",
        contact_hr: "HR سے رابطہ کریں",
        helping_hand_title: "مددگار ہاتھ (NGOs)",
        search_placeholder: "این جی او کو تلاش کریں...",
        no_ngos: "کوئی این جی او نہیں ملی",
        schemes_title: "تمام سرکاری اسکیمیں",
        view_details: "تفصیلات دیکھیں",
        posted: "پہلے",
        days: "دن",
        hours: "گھنٹے",
        just_now: "ابھی ابھی"
    },
    as: {
        skills_hub_title: "দক্ষতা কেন্দ্ৰ আৰু চাকৰি",
        recommended: "আপোনাৰ বাবে পৰামৰ্শ দিয়া হৈছে",
        all_jobs: "সকলো চৰকাৰী চাকৰি",
        view_map: "মেপত চাওক",
        contact_hr: "HR যোগাযোগ",
        helping_hand_title: "সহায়কাৰী হাত (NGOs)",
        search_placeholder: "NGO বিচাৰক...",
        no_ngos: "কোনো NGO পোৱা নগল",
        schemes_title: "সকলো চৰকাৰী আঁচনি",
        view_details: "বিৱৰণ চাওক",
        posted: "আগতে",
        days: "দিন",
        hours: "ঘণ্টা",
        just_now: "এইমাত্ৰ"
    },
    mai: {
        skills_hub_title: "हुनर केंद्र आ नौकरी",
        recommended: "अहां क लेल",
        all_jobs: "सब सरकारी नौकरी",
        view_map: "नक्शा पर देखू",
        contact_hr: "HR स संपर्क",
        helping_hand_title: "मददगार हाथ (NGOs)",
        search_placeholder: "NGO खोजू...",
        no_ngos: "कोनो NGO नहि भेटल",
        schemes_title: "सब सरकारी योजना",
        view_details: "विवरण देखू",
        posted: "पहिने",
        days: "दिन",
        hours: "घंटा",
        just_now: "एखन तुरंत"
    },
    sa: {
        skills_hub_title: "कौशल-केन्द्रम् उद्योगाः च",
        recommended: "भवते अनुशंसितम्",
        all_jobs: "सर्वाः सर्वकारीय-वृत्तयः",
        view_map: "मानचित्रे पश्यतु",
        contact_hr: "प्रबन्धकेन सह संपर्कं कुरुत",
        helping_hand_title: "सहायक-हस्ताः (NGOs)",
        search_placeholder: "NGO अन्विष्यतु...",
        no_ngos: "कोऽपि NGO न प्राप्तः",
        schemes_title: "सर्वाः सर्वकारीय-योजनाः",
        view_details: "विवरणं पश्यतु",
        posted: "पूर्वम्",
        days: "दिनानि",
        hours: "होराः",
        just_now: "इदानीमेव"
    }
}

// --- Types & Mock Data (Internationalized) ---

interface Job {
    id: string
    contact: string
    gmapsLink: string
    isRecommended?: boolean
    postedTimeValue: { value: number, unit: 'days' | 'hours' | 'now' }
    // Localized fields container
    content: Record<string, {
        title: string
        company: string
        location: string
        salary: string
        type: string
        tags: string[]
    }>
}

const JOBS_DATA: Job[] = [
    {
        id: "1",
        contact: "02162-245388",
        gmapsLink: "https://www.google.com/maps/search/Krishi+Vigyan+Kendra+Satara",
        isRecommended: true,
        postedTimeValue: { value: 2, unit: 'days' },
        content: {
            en: { title: "Krishi Vigyan Kendra Assistant", company: "Govt of India - Dept of Agriculture", location: "Satara, Maharashtra", salary: "₹25,000 - ₹35,000 / month", type: "Full Time", tags: ["Agriculture", "Govt", "Field Work"] },
            hi: { title: "कृषि विज्ञान केंद्र सहायक", company: "भारत सरकार - कृषि विभाग", location: "सतारा, महाराष्ट्र", salary: "₹25,000 - ₹35,000 / माह", type: "पूर्ण कलिक", tags: ["कृषि", "सरकारी", "फील्ड वर्क"] },
            mr: { title: "कृषी विज्ञान केंद्र सहाय्यक", company: "भारत सरकार - कृषी विभाग", location: "सातारा, महाराष्ट्र", salary: "₹25,000 - ₹35,000 / महिना", type: "पूर्ण वेळ", tags: ["कृषी", "सरकारी", "फील्ड वर्क"] },
            gu: { title: "કૃષિ વિજ્ઞાન કેન્દ્ર સહાયક", company: "ભારત સરકાર - કૃષિ વિભાગ", location: "સાતારા, મહારાષ્ટ્ર", salary: "₹25,000 - ₹35,000 / મહિનો", type: "પૂર્ણ સમય", tags: ["કૃષિ", "સરકારી", "ફીલ્ડ વર્ક"] },
            bho: { title: "कृषि विज्ञान केंद्र सहायक", company: "भारत सरकार - कृषि विभाग", location: "सतारा, महाराष्ट्र", salary: "₹25,000 - ₹35,000 / महीना", type: "पूरा समय", tags: ["कृषि", "सरकारी", "फील्ड वर्क"] },

            // Auto-generated Fallbacks for remaining indic languages to avoid blank screens, using English structure transliterated or translated where known
            ta: { title: "வேளாண் அறிவியல் மைய உதவியாளர்", company: "இந்திய அரசு - வேளாண் துறை", location: "சதாரா, மகாராஷ்டிரா", salary: "₹25,000 - ₹35,000 / மாதம்", type: "முழு நேரம்", tags: ["விவசாயம்", "அரசு", "களப்பணி"] },
            bn: { title: "কৃষি বিজ্ঞান কেন্দ্র সহকারী", company: "ভারত সরকার - কৃষি বিভাগ", location: "সাতারা, মহারাষ্ট্র", salary: "₹25,000 - ₹35,000 / মাস", type: "পূর্ণ সময়", tags: ["কৃষি", "সরকারি", "মাঠ কর্মী"] },
            te: { title: "కృషి విజ్ఞాన కేంద్ర అసిస్టెంట్", company: "భారత ప్రభుత్వం - వ్యవసాయ శాఖ", location: "సతారా, మహారాష్ట్ర", salary: "₹25,000 - ₹35,000 / నెల", type: "పూర్తి సమయం", tags: ["వ్యవసాయం", "ప్రభుత్వం", "ఫీల్డ్ వర్క్"] },
            kn: { title: "ಕೃಷಿ ವಿಜ್ಞಾನ ಕೇಂದ್ರ ಸಹಾಯಕ", company: "ಭಾರತ ಸರ್ಕಾರ - ಕೃಷಿ ಇಲಾಖೆ", location: "ಸತಾರಾ, ಮಹಾರಾಷ್ಟ್ರ", salary: "₹25,000 - ₹35,000 / ತಿಂಗಳು", type: "ಪೂರ್ಣ ಸಮಯ", tags: ["ಕೃಷಿ", "ಸರ್ಕಾರಿ", "ಕ್ಷೇತ್ರ ಕಾರ್ಯ"] },
            ml: { title: "കൃഷി വിജ്ഞാന കേന്ദ്ര അസിസ്റ്റന്റ്", company: "ഭാരത സർക്കാർ - കാർഷിക വകുപ്പ്", location: "സത്താറ, മഹാരാഷ്ട്ര", salary: "₹25,000 - ₹35,000 / മാസം", type: "മുഴു നീള സമയം", tags: ["കൃഷി", "സർക്കാർ", "ഫീൽഡ് വർക്ക്"] },
            pa: { title: "ਕ੍ਰਿਸ਼ੀ ਵਿਗਿਆਨ ਕੇਂਦਰ ਸਹਾਇਕ", company: "ਭਾਰਤ ਸਰਕਾਰ - ਖੇਤੀਬਾੜੀ ਵਿਭਾਗ", location: "ਸਤਾਰਾ, ਮਹਾਰਾਸ਼ਟਰ", salary: "₹25,000 - ₹35,000 / ਮਹੀਨਾ", type: "ਪੂਰਾ ਸਮਾਂ", tags: ["ਖੇਤੀਬਾੜੀ", "ਸਰਕਾਰੀ", "ਫੀਲਡ ਵਰਕ"] },
            or: { title: "କୃଷି ବିଜ୍ଞାନ କେନ୍ଦ୍ର ସହାୟକ", company: "ଭାରତ ସରକାର - କୃଷି ବିଭାଗ", location: "ସତର, ମହାରାଷ୍ଟ୍ର", salary: "₹25,000 - ₹35,000 / ମାସ", type: "ପୂର୍ଣ୍ଣ ସମୟ", tags: ["କୃଷି", "ସରକାରୀ", "କ୍ଷେତ୍ର କାର୍ଯ୍ୟ"] },
            ur: { title: "زرعی سائنس سنٹر اسسٹنٹ", company: "حکومت ہند - محکمہ زراعت", location: "ستارہ، مہاراشٹر", salary: "₹25,000 - ₹35,000 / مہینہ", type: "بھرپور وقت", tags: ["زراعت", "حکومت", "فیلڈ ورک"] },
            as: { title: "কৃষি বিজ্ঞান কেন্দ্ৰ সহকাৰী", company: "ভাৰত চৰকাৰ - কৃষি বিভাগ", location: "সাতাৰা, মহাৰাষ্ট্ৰ", salary: "₹25,000 - ₹35,000 / মাহ", type: "পূৰ্ণ সময়", tags: ["কৃষি", "চৰকাৰী", "ক্ষেত্ৰ কৰ্ম"] },
            mai: { title: "कृषि विज्ञान केंद्र सहायक", company: "भारत सरकार - कृषि विभाग", location: "सतारा, महाराष्ट्र", salary: "₹25,000 - ₹35,000 / माह", type: "पूर्ण कलिक", tags: ["कृषि", "सरकारी", "फील्ड वर्क"] },
            sa: { title: "कृषि विज्ञान केन्द्र सहायक", company: "भारत सर्वकार - कृषि विभाग", location: "सतारा, महाराष्ट्र", salary: "₹25,000 - ₹35,000 / मासम्", type: "पूर्ण कालिन", tags: ["कृषि", "शासकीय", "क्षेत्र कार्य"] }
        }
    },
    // Repeat structure for other jobs with placeholders/translations as needed for robust fallback
    {
        id: "2",
        contact: "020-25537555",
        gmapsLink: "https://www.google.com/maps/search/MSSDS+Pune",
        isRecommended: true,
        postedTimeValue: { value: 5, unit: 'hours' },
        content: {
            en: { title: "Organic Farming Instructor", company: "Maharashtra State Skill Dev Society", location: "Pune (Rural), Maharashtra", salary: "₹1,500 / session", type: "Part Time / Contract", tags: ["Training", "Organic Farming"] },
            hi: { title: "जैविक खेती प्रशिक्षक", company: "महाराष्ट्र राज्य कौशल विकास सोसायटी", location: "पुणे (ग्रामीण), महाराष्ट्र", salary: "₹1,500 / सत्र", type: "अंशकालिक / अनुबंध", tags: ["प्रशिक्षण", "जैविक खेती"] },
            mr: { title: "सेंद्रिय शेती प्रशिक्षक", company: "महाराष्ट्र राज्य कौशल्य विकास सोसायटी", location: "पुणे (ग्रामीण), महाराष्ट्र", salary: "₹1,500 / सत्र", type: "अर्धवेळ / कंत्राटी", tags: ["प्रशिक्षण", "सेंद्रिय शेती"] },
            // Generic fallbacks for others to ensure no undefined error
            gu: { title: "ઓર્ગેનિક ખેતી પ્રશિક્ષક", company: "મહારાષ્ટ્ર રાજ્ય કૌશલ્ય વિકાસ સોસાયટી", location: "પુણે (ગ્રામીણ)", salary: "₹1,500 / સત્ર", type: "પાર્ટ ટાઈમ", tags: ["તાલીમ", "ઓર્ગેનિક ખેતી"] },
            bho: { title: "जैविक खेती प्रशिक्षक", company: "महाराष्ट्र राज्य कौशल विकास सोसायटी", location: "पुणे (ग्रामीण)", salary: "₹1,500 / सत्र", type: "अंशकालिक", tags: ["प्रशिक्षण", "जैविक खेती"] },
            // ... implicit fallback to english handled by getJobContent, but key presence helps debug ...
        }
    },
    {
        id: "3",
        contact: "02164-222333",
        gmapsLink: "https://www.google.com/maps/search/Soil+Testing+Lab+Karad",
        isRecommended: true,
        postedTimeValue: { value: 1, unit: 'days' },
        content: {
            en: { title: "Soil Health Card Analyst", company: "Soil Testing Lab (Govt Aided)", location: "Karad, Maharashtra", salary: "₹18,000 / month", type: "Full Time", tags: ["Lab Tech", "Soil Science"] },
            hi: { title: "मृदा स्वास्थ्य कार्ड विश्लेषक", company: "मृदा परीक्षण लैब (सरकारी सहायता प्राप्त)", location: "कराड, महाराष्ट्र", salary: "₹18,000 / माह", type: "पूर्ण कलिक", tags: ["लैब टेक", "मृदा विज्ञान"] },
            mr: { title: "मृदा आरोग्य कार्ड विश्लेषक", company: "मृदा चाचणी प्रयोगशाळा (सरकारी अनुदानित)", location: "कराड, महाराष्ट्र", salary: "₹18,000 / महिना", type: "पूर्ण वेळ", tags: ["लॅब टेक", "मृदा विज्ञान"] },
            gu: { title: "સોઈલ હેલ્થ કાર્ડ વિશ્લેષક", company: "સોઈલ ટેસ્ટિંગ લેબ", location: "કરાડ, મહારાષ્ટ્ર", salary: "₹18,000 / મહિનો", type: "પૂર્ણ સમય", tags: ["લેબ ટેક", "સોઈલ સાયન્સ"] }
        }
    },
    {
        id: "4",
        contact: "022-22621450",
        gmapsLink: "https://www.google.com/maps/search/CST+Mumbai",
        postedTimeValue: { value: 3, unit: 'days' },
        content: {
            en: { title: "Junior Clerk (Railways)", company: "Indian Railways", location: "Mumbai, Maharashtra", salary: "₹21,700 / month + DA", type: "Full Time", tags: ["Clerical", "Railways"] },
            hi: { title: "जूनियर क्लर्क (रेलवे)", company: "भारतीय रेलवे", location: "मुंबई, महाराष्ट्र", salary: "₹21,700 / माह + डीए", type: "पूर्ण कलिक", tags: ["लिपिकीय", "रेलवे"] },
            mr: { title: "कनिष्ठ लिपिक (रेल्वे)", company: "भारतीय रेल्वे", location: "मुंबई, महाराष्ट्र", salary: "₹21,700 / महिना + डीए", type: "पूर्ण वेळ", tags: ["लिपिकीय", "रेल्वे"] },
            gu: { title: "જુનિયર ક્લાર્ક (રેલવે)", company: "ભારતીય રેલવે", location: "મુંબઈ, મહારાષ્ટ્ર", salary: "₹21,700 / મહિનો", type: "પૂર્ણ સમય", tags: ["ક્લાર્ક", "રેલવે"] }
        }
    },
    {
        id: "5",
        contact: "02162-234567",
        gmapsLink: "https://www.google.com/maps/search/SBI+Satara",
        postedTimeValue: { value: 0, unit: 'now' },
        content: {
            en: { title: "Banking Associate", company: "State Bank of India", location: "Satara Branch", salary: "₹32,000 / month", type: "Full Time", tags: ["Banking", "Finance"] },
            hi: { title: "बैंकिंग एसोसिएट", company: "भारतीय स्टेट बैंक", location: "सतारा शाखा", salary: "₹32,000 / माह", type: "पूर्ण कलिक", tags: ["बैंकिंग", "वित्त"] },
            mr: { title: "बँकिंग असोसिएट", company: "स्टेट बँक ऑफ इंडिया", location: "सातारा शाखा", salary: "₹32,000 / महिना", type: "पूर्ण वेळ", tags: ["बँकिंग", "वित्त"] },
            gu: { title: "બેંકિંગ એસોસિયેટ", company: "સ્ટેટ બેંક ઓફ ઇન્ડિયા", location: "સાતારા શાખા", salary: "₹32,000 / મહિનો", type: "પૂર્ણ સમય", tags: ["બેંકિંગ", "ફાઇનાન્સ"] }
        }
    },
    {
        id: "6",
        contact: "02167-220022",
        gmapsLink: "https://www.google.com/maps/search/Post+Office+Wai",
        postedTimeValue: { value: 6, unit: 'hours' },
        content: {
            en: { title: "Postman / Mail Guard", company: "India Post", location: "Wai, Satara", salary: "₹22,000 / month", type: "Full Time", tags: ["Postal Service", "Local"] },
            hi: { title: "डाकिया / मेल गार्ड", company: "भारतीय डाक", location: "वाई, सतारा", salary: "₹22,000 / माह", type: "पूर्ण कलिक", tags: ["डाक सेवा", "स्थानीय"] },
            mr: { title: "पोस्टमन / मेल गार्ड", company: "इंडिया पोस्ट", location: "वाई, सातारा", salary: "₹22,000 / महिना", type: "पूर्ण वेळ", tags: ["पोस्ट सेवा", "स्थानिक"] },
            gu: { title: "પોસ્ટમેન / મેઇલ ગાર્ડ", company: "ભારતીય પોસ્ટ", location: "વાઈ, સાતારા", salary: "₹22,000 / મહિનો", type: "પૂર્ણ સમય", tags: ["પોસ્ટ", "સ્થાનિક"] }
        }
    },
    {
        id: "7",
        contact: "02162-288999",
        gmapsLink: "https://www.google.com/maps/search/MahaOnline+Satara",
        postedTimeValue: { value: 7, unit: 'days' },
        content: {
            en: { title: "Data Entry Operator", company: "MahaOnline Center", location: "Satara City", salary: "₹12,000 - ₹15,000 / month", type: "Full Time", tags: ["Computer Operator", "Admin"] },
            hi: { title: "डेटा एंट्री ऑपरेटर", company: "महाऑनलाइन केंद्र", location: "सतारा शहर", salary: "₹12,000 - ₹15,000 / माह", type: "पूर्ण कलिक", tags: ["कंप्यूटर ऑपरेटर", "प्रशासन"] },
            mr: { title: "डेटा एंट्री ऑपरेटर", company: "महाऑनलाइन केंद्र", location: "सातारा शहर", salary: "₹12,000 - ₹15,000 / महिना", type: "पूर्ण वेळ", tags: ["संगणक ऑपरेटर", "प्रशासन"] },
            gu: { title: "ડેટા એન્ટ્રી ઓપરેટર", company: "મહાઓનલાઇન કેન્દ્ર", location: "સાતારા શહેર", salary: "₹12,000 - ₹15,000 / મહિનો", type: "પૂર્ણ સમય", tags: ["કમ્પ્યુટર", "એડમિન"] }
        }
    },
    {
        id: "8",
        contact: "02162-234100",
        gmapsLink: "https://www.google.com/maps/search/Civil+Hospital+Satara",
        postedTimeValue: { value: 14, unit: 'days' },
        content: {
            en: { title: "Security Guard", company: "Govt Hospital Satara", location: "Satara", salary: "₹15,000 / month", type: "Contract", tags: ["Security", "Local"] },
            hi: { title: "सुरक्षा गार्ड", company: "सरकारी अस्पताल सतारा", location: "सतारा", salary: "₹15,000 / माह", type: "अनुबंध", tags: ["सुरक्षा", "स्थानीय"] },
            mr: { title: "सुरक्षा रक्षक", company: "शासकीय रुग्णालय सातारा", location: "सातारा", salary: "₹15,000 / महिना", type: "कंत्राटी", tags: ["सुरक्षा", "स्थानिक"] },
            gu: { title: "સુરક્ષા ગાર્ડ", company: "સરકારી હોસ્પિટલ સાતારા", location: "સાતારા", salary: "₹15,000 / મહિનો", type: "કરાર", tags: ["સુરક્ષા", "સ્થાનિક"] }
        }
    },
    {
        id: "9",
        contact: "02162-250050",
        gmapsLink: "https://www.google.com/maps/search/Satara+Municipal+Corporation",
        postedTimeValue: { value: 4, unit: 'days' },
        content: {
            en: { title: "Tractor Driver (Municipal)", company: "Satara Municipal Corporation", location: "Satara", salary: "₹18,000 / month", type: "Contract", tags: ["Driver", "Municipal"] },
            hi: { title: "ट्रैक्टर चालक (नगरपालिका)", company: "सतारा नगर निगम", location: "सतारा", salary: "₹18,000 / माह", type: "अनुबंध", tags: ["चालक", "नगरपालिका"] },
            mr: { title: "ट्रॅक्टर चालक (महानगरपालिका)", company: "सातारा महानगरपालिका", location: "सातारा", salary: "₹18,000 / महिना", type: "कंत्राटी", tags: ["चालक", "महानगरपालिका"] },
            gu: { title: "ટ્રેક્ટર ડ્રાઈવર", company: "સાતારા મ્યુનિસિપલ કોર્પોરેશન", location: "સાતારા", salary: "₹18,000 / મહિનો", type: "કરાર", tags: ["ડ્રાઈવર", "મ્યુનિસિપલ"] }
        }
    },
    {
        id: "10",
        contact: "02163-220123",
        gmapsLink: "https://www.google.com/maps/search/Anganwadi+Koregaon",
        postedTimeValue: { value: 3, unit: 'days' },
        content: {
            en: { title: "Anganwadi Helper", company: "WCD Ministry", location: "Koregaon, Satara", salary: "₹10,000 / month", type: "Part Time", tags: ["Women & Child Dev", "Social"] },
            hi: { title: "आंगनवाड़ी हेल्पर", company: "महिला एवं बाल विकास मंत्रालय", location: "कोरेगांव, सतारा", salary: "₹10,000 / माह", type: "अंशकालिक", tags: ["महिला एवं बाल विकास", "सामाजिक"] },
            mr: { title: "अंगणवाडी मदतनीस", company: "महिला व बाल विकास मंत्रालय", location: "कोरेगाव, सातारा", salary: "₹10,000 / महिना", type: "अर्धवेळ", tags: ["महिला व बाल विकास", "सामाजिक"] },
            gu: { title: "આંગણવાડી હેલ્પર", company: "મહિલા અને બાળ વિકાસ", location: "કોરેગાંવ, સાતારા", salary: "₹10,000 / મહિનો", type: "પાર્ટ ટાઈમ", tags: ["મહિલા વિકાસ", "સામાજિક"] }
        }
    }
]

// Helping Hand Data
interface NGO {
    id: string
    contact: string
    // Localized
    content: Record<string, {
        name: string
        cause: string
        location: string
    }>
}

const NGOS_DATA: NGO[] = [
    {
        id: "1", contact: "011-26972351", content: {
            en: { name: "Goonj", cause: "Disaster Relief & Clothing", location: "New Delhi (Pan India)" },
            hi: { name: "गूँज", cause: "आपदा राहत और कपड़े", location: "नई दिल्ली (पूरे भारत में)" },
            mr: { name: "गूँज", cause: "आपत्ती निवारण आणि कपडे", location: "नवी दिल्ली (संपूर्ण भारत)" },
            gu: { name: "ગુંજ", cause: "આપત્તિ રાહત અને કપડાં", location: "નવી દિલ્હી" }
        }
    },
    {
        id: "2", contact: "1800-180-1253", content: {
            en: { name: "HelpAge India", cause: "Elderly Care", location: "Mumbai / All India" },
            hi: { name: "हेल्पएज इंडिया", cause: "बुजुर्गों की देखभाल", location: "मुंबई / पूरे भारत में" },
            mr: { name: "हेल्पएज इंडिया", cause: "वृद्ध सेवा", location: "मुंबई / संपूर्ण भारत" },
            gu: { name: "હેલ્પએજ ઈન્ડિયા", cause: "વૃદ્ધ સંભાળ", location: "મુંબઈ / સમગ્ર ભારત" }
        }
    },
    {
        id: "3", contact: "011-29533451", content: {
            en: { name: "CRY (Child Rights and You)", cause: "Child Rights", location: "Mumbai / All India" },
            hi: { name: "क्राई (चाइल्ड राइट्स एंड यू)", cause: "बाल अधिकार", location: "मुंबई / पूरे भारत में" },
            mr: { name: "क्राय (बाल हक्क)", cause: "बाल हक्क", location: "मुंबई / संपूर्ण भारत" },
            gu: { name: "CRY", cause: "બાળ અધિકાર", location: "મુંબઈ" }
        }
    },
    {
        id: "4", contact: "011-43123700", content: {
            en: { name: "Smile Foundation", cause: "Education & Health", location: "New Delhi" },
            hi: { name: "स्माइल फाउंडेशन", cause: "शिक्षा और स्वास्थ्य", location: "नई दिल्ली" }
        }
    },
    {
        id: "5", contact: "022-22819561", content: {
            en: { name: "Pratham", cause: "Education", location: "Mumbai" },
            hi: { name: "प्रथम", cause: "शिक्षा", location: "मुंबई" }
        }
    },
    {
        id: "6", contact: "080-30143400", content: {
            en: { name: "Akshaya Patra Foundation", cause: "Mid-day Meals", location: "Bengaluru" },
            hi: { name: "अक्षय पात्र फाउंडेशन", cause: "मिड-डे मील", location: "बेंगलुरु" }
        }
    },
    {
        id: "7", contact: "info@giveindia.org", content: {
            en: { name: "GiveIndia", cause: "Donation Platform", location: "Bengaluru" },
            hi: { name: "गिवइंडिया", cause: "दान मंच", location: "बेंगलुरु" }
        }
    },
    {
        id: "8", contact: "011-41723229", content: {
            en: { name: "CARE India", cause: "Women Empowerment", location: "New Delhi" },
            hi: { name: "केयर इंडिया", cause: "महिला सशक्तिकरण", location: "नई दिल्ली" }
        }
    },
    {
        id: "9", contact: "022-22004245", content: {
            en: { name: "Nanhi Kali", cause: "Girl Child Education", location: "Mumbai" },
            hi: { name: "नन्ही कली", cause: "बालिका शिक्षा", location: "मुंबई" }
        }
    },
    {
        id: "10", contact: "Social Media", content: {
            en: { name: "Robin Hood Army", cause: "Food Surplus Distribution", location: "Global / Local" },
            hi: { name: "रॉबिन हुड आर्मी", cause: "भोजन वितरण", location: "वैश्विक" }
        }
    },
    { id: "11", contact: "011-41716900", content: { en: { name: "Sewa International", cause: "Disaster Relief / Development", location: "New Delhi" } } },
    { id: "12", contact: "044-42823862", content: { en: { name: "Bhumi", cause: "Volunteer Education", location: "Chennai" } } },
    { id: "13", contact: "022-25139090", content: { en: { name: "Teach For India", cause: "Education Fellowship", location: "Mumbai" } } },
    { id: "14", contact: "080-25586293", content: { en: { name: "ActionAid India", cause: "Social Justice", location: "Bengaluru" } } },
    { id: "15", contact: "011-46538000", content: { en: { name: "Oxfam India", cause: "Inequality & Poverty", location: "New Delhi" } } },
    { id: "16", contact: "0124-4752000", content: { en: { name: "Save the Children", cause: "Child Protection", location: "Gurugram" } } },
    { id: "17", contact: "011-46558484", content: { en: { name: "Plan India", cause: "Child Centred Community Dev", location: "New Delhi" } } },
    { id: "18", contact: "044-24807000", content: { en: { name: "World Vision India", cause: "Child Focus", location: "Chennai" } } },
    { id: "19", contact: "040-27802139", content: { en: { name: "Lepra India", cause: "Health (Leprosy)", location: "Secunderabad" } } },
    { id: "20", contact: "011-28520347", content: { en: { name: "Deepalaya", cause: "Urban Poor Education", location: "New Delhi" } } },
]

// --- Helper Functions to get Content safely ---

function getJobContent(job: Job, lang: string) {
    // Return specific language content if exists, else fallback to English, else first available
    return job.content[lang] || job.content['en'] || Object.values(job.content)[0];
}

function getNGOContent(ngo: NGO, lang: string) {
    return ngo.content[lang] || ngo.content['en'] || Object.values(ngo.content)[0];
}


// --- Components ---

export function SkillsHubModal({ isOpen, onClose }: ModalProps) {
    if (!isOpen) return null
    const { language } = useLanguage()
    const t = NAV_TRANSLATIONS[language] || NAV_TRANSLATIONS['en']

    return (
        <ModalWrapper onClose={onClose} title={t.skills_hub_title} color="bg-black">
            <div className="space-y-6">
                {/* Recommended Section */}
                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-4 border border-blue-100">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">★</span>
                        <h3 className="font-bold text-blue-900">{t.recommended}</h3>
                    </div>
                    <div className="grid gap-3">
                        {JOBS_DATA.filter(j => j.isRecommended).map(job => (
                            <JobCard key={job.id} job={job} recommended language={language} t={t} />
                        ))}
                    </div>
                </div>

                {/* All Jobs */}
                <div>
                    <h3 className="mb-3 font-bold text-slate-700">{t.all_jobs}</h3>
                    <div className="grid gap-3">
                        {JOBS_DATA.filter(j => !j.isRecommended).map(job => (
                            <JobCard key={job.id} job={job} language={language} t={t} />
                        ))}
                    </div>
                </div>
            </div>
        </ModalWrapper>
    )
}

function JobCard({ job, recommended, language, t }: { job: Job, recommended?: boolean, language: string, t: any }) {
    const content = getJobContent(job, language);

    // Debug log to trace what content is being rendered
    // console.log(`JobCard [${job.id}]: Lang=${language}, Title=${content?.title}`);

    const resolveTime = () => {
        const { value, unit } = job.postedTimeValue
        if (unit === 'now') return t.just_now

        const unitLabel = unit === 'days' ? t.days : t.hours
        return `${value} ${unitLabel} ${t.posted}`
    }

    return (
        <div key={language} className={`group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg p-4 transition-all hover:shadow-md ${recommended ? "bg-white border border-blue-200" : "bg-slate-50 border border-slate-100 hover:border-slate-300"}`}>
            <div>
                <div className="flex items-start justify-between">
                    <div>
                        <h4 className="font-bold text-slate-900">{content.title}</h4>
                        <p className="text-sm font-medium text-slate-600">{content.company}</p>
                    </div>
                    <span className="flex items-center gap-1 text-[10px] font-medium text-slate-400 bg-slate-100 rounded px-1.5 py-0.5 whitespace-nowrap ml-2">
                        <Clock className="h-3 w-3" /> {resolveTime()}
                    </span>
                </div>

                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    <span className="flex items-center gap-1 rounded bg-slate-200 px-2 py-0.5 text-slate-700">
                        <MapPin className="h-3 w-3" /> {content.location}
                    </span>
                    <span className="flex items-center gap-1 rounded bg-green-100 px-2 py-0.5 text-green-700 font-medium">
                        <Coins className="h-3 w-3" /> {content.salary}
                    </span>
                    {content.tags.map(tag => (
                        <span key={tag} className="rounded border border-slate-200 px-2 py-0.5 text-slate-500">{tag}</span>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-2 w-full sm:w-auto mt-4 sm:mt-0">
                <a
                    href={job.gmapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition-colors hover:bg-slate-50 hover:text-slate-900 w-full group-hover:ring-slate-300"
                >
                    {t.view_map} <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <button
                    className="flex items-center justify-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100 transition-colors w-full"
                    onClick={() => alert(`Contacting ${content.company} at ${job.contact}`)}
                >
                    <Phone className="h-3.5 w-3.5" />
                    {t.contact_hr}
                </button>
            </div>
        </div>
    )
}


export function HelpingHandModal({ isOpen, onClose }: ModalProps) {
    const { language } = useLanguage()
    const t = NAV_TRANSLATIONS[language] || NAV_TRANSLATIONS['en']
    const [search, setSearch] = useState("")

    if (!isOpen) return null

    const filteredNGOs = NGOS_DATA.filter(ngo => {
        const content = getNGOContent(ngo, language);
        const searchLower = search.toLowerCase();
        return (
            content.name.toLowerCase().includes(searchLower) ||
            content.cause.toLowerCase().includes(searchLower) ||
            content.location.toLowerCase().includes(searchLower)
        )
    })

    return (
        <ModalWrapper onClose={onClose} title={t.helping_hand_title} color="bg-black">
            <div className="space-y-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder={t.search_placeholder}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="max-h-[60vh] overflow-y-auto pr-2 space-y-3">
                    {filteredNGOs.length > 0 ? (
                        filteredNGOs.map(ngo => {
                            const content = getNGOContent(ngo, language);
                            return (
                                <div key={ngo.id} className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm hover:border-rose-200 hover:shadow-md transition-all">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg">{content.name}</h4>
                                            <div className="flex items-center gap-2 mt-1">
                                                <HeartSolid className="h-3.5 w-3.5 text-rose-500" />
                                                <span className="text-sm font-medium text-rose-600">{content.cause}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs font-semibold text-slate-500 flex items-center justify-end gap-1">
                                                <MapPin className="h-3 w-3" /> {content.location}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-600">
                                        <Phone className="h-4 w-4" />
                                        <span className="font-mono">{ngo.contact}</span>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div className="py-10 text-center text-slate-500">
                            {t.no_ngos} "{search}"
                        </div>
                    )}
                </div>
            </div>
        </ModalWrapper>
    )
}

interface ModalProps {
    isOpen: boolean
    onClose: () => void
}

export function SchemesListModal({ isOpen, onClose }: ModalProps) {
    const { language } = useLanguage()
    const t = NAV_TRANSLATIONS[language] || NAV_TRANSLATIONS['en']
    const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null)
    const [isSchemeModalOpen, setIsSchemeModalOpen] = useState(false)

    const handleSchemeClick = (scheme: Scheme) => {
        setSelectedScheme(scheme)
        setIsSchemeModalOpen(true)
    }

    if (!isOpen) return null

    return (
        <>
            <ModalWrapper onClose={onClose} title={t.schemes_title} color="bg-black">
                <div className="max-h-[70vh] overflow-y-auto pr-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {schemesData.map((scheme, idx) => {
                        const content = scheme[language] as SchemeContent || scheme["en"]
                        return (
                            <div key={idx} className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-amber-300 hover:shadow-md transition-all">
                                <div>
                                    <h4 className="font-bold text-slate-900 leading-tight mb-2">{content.title}</h4>
                                    <span className="inline-block rounded-full bg-amber-50 px-2 py-1 text-[10px] font-bold text-amber-700 uppercase tracking-wider mb-2">
                                        {content.highlight}
                                    </span>
                                    <p className="text-sm text-slate-600 line-clamp-3 mb-4">
                                        {content.desc}
                                    </p>
                                </div>
                                <div className="pt-3 border-t border-slate-100 mt-auto">
                                    <button
                                        onClick={() => handleSchemeClick(scheme)}
                                        className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 w-full"
                                    >
                                        {t.view_details} <ArrowRight className="h-3 w-3" />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </ModalWrapper>

            {/* Detailed Scheme Modal - Stacked on top */}
            <SchemeModal
                isOpen={isSchemeModalOpen}
                onClose={() => setIsSchemeModalOpen(false)}
                scheme={selectedScheme}
            />
        </>
    )
}

function ModalWrapper({ children, onClose, title, color }: { children: React.ReactNode, onClose: () => void, title: string, color: string }) {
    return (
        <AnimatePresence>
            <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
                key="modal-content"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="fixed left-1/2 top-1/2 z-[70] w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 p-4"
            >
                <div className="flex max-h-[90vh] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-900/5">
                    <div className={`flex items-center justify-between px-6 py-4 ${color}`}>
                        <h2 className="text-xl font-bold text-white">{title}</h2>
                        <button
                            onClick={onClose}
                            className="rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors backdrop-blur-md"
                        >
                            <Xmark className="h-5 w-5" strokeWidth={2.5} />
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
                        {children}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

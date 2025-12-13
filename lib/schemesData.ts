
export interface SchemeContent {
    title: string
    highlight: string
    desc: string
    long_description: string
    modal_content: {
        summary: string
        highlights: string[]
    }
    full_page_content: {
        documents: string[]
        process: string
        application_steps: string[]
        nagrik_support: string
        eligibility: string[]
        eligibility_detailed: string[]
        important_note: string
    }
}

export interface Scheme {
    id: string
    en: SchemeContent
    hi: SchemeContent
    [key: string]: string | SchemeContent
}

const schemesEn: Record<string, SchemeContent> = {
    "atal-pension-yojana": {
        title: "Atal Pension Yojana (APY)",
        highlight: "Pension ₹1,000 - ₹5,000/mo",
        desc: "Guaranteed pension for unorganized sector workers (Age 18-40). Spouse receives same pension on death.",
        long_description: "The Atal Pension Yojana (APY) is a flagship social security scheme of the Government of India, focused on the unorganized sector to provide a safety net for workers in their old age. Subscribers receive a guaranteed minimum pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 per month at the age of 60 years, depending on their contributions. The scheme also ensures that the spouse receives the same pension amount upon the death of the subscriber, and the accumulated corpus is returned to the nominee.",
        modal_content: {
            summary: "A government-backed pension scheme targeted at the unorganized sector. Subscribers receive a guaranteed minimum pension ranging from ₹1,000 to ₹5,000 per month at the age of 60 years.",
            highlights: ["Guaranteed Pension", "Tax Benefits", "Government Co-contribution"],
        },
        full_page_content: {
            documents: ["Aadhaar Card", "Active Savings Bank Account", "Mobile Number"],
            process: "Visit your bank branch or use net banking. Fill the APY registration form, authorize auto-debit for contributions, and you will receive a PRAN card.",
            application_steps: [
                "1. Visit your bank branch or Post Office where you have an active savings account.",
                "2. Ask for the 'Atal Pension Yojana Registration Form' (available in multiple languages).",
                "3. Fill in the required details, including your bank account number and Aadhaar number.",
                "4. Authorize the bank for auto-debit of the monthly contribution from your account.",
                "5. Submit the form. You will receive an acknowledgment receipt and a PRAN (Permanent Retirement Account Number) card."
            ],
            nagrik_support: "Nagrik AI can guide you through the APY form filling process in your local language and help calculate your monthly contribution tailored to your age.",
            eligibility: ["Indian Citizen", "Age 18-40 years", "Have a savings bank account"],
            eligibility_detailed: [
                "Must be a citizen of India.",
                "Age group: Must be between 18 and 40 years of age.",
                "Must have a valid savings bank account or post office savings bank account.",
                "Should not be an income tax payer (as per new rules effective from Oct 1, 2022)."
            ],
            important_note: "It is mandatory to provide nominee details in your APY account. Contributions can be made on a monthly, quarterly, or half-yearly basis, and auto-debit facilitates hassle-free payments."
        },
    },
    "pm-suraksha-bima-yojana": {
        title: "PM Suraksha Bima Yojana (PMSBY)",
        highlight: "₹2 Lakh Accident Cover",
        desc: "Affordable accidental death & disability insurance for just ₹20 per annum. (Age 18-70).",
        long_description: "Pradhan Mantri Suraksha Bima Yojana (PMSBY) is an accident insurance scheme offering accidental death and disability cover for death or disability on account of an accident. It is a one-year cover, renewable from year to year, offering coverage for death or disability due to an accident. The scheme is available to people in the age group 18 to 70 years with a bank account who give their consent to join and enable auto-debit.",
        modal_content: {
            summary: "An accident insurance scheme offering accidental death and disability cover for death or disability on account of an accident.",
            highlights: ["₹2 Lakh Cover", "Premium ₹20/year", "Auto-debit facility"],
        },
        full_page_content: {
            documents: ["Aadhaar Card", "Bank Account Details (for auto-debit)"],
            process: "Contact your bank where you have a savings account. Submit the PMSBY consent form to enable auto-debit of the premium.",
            application_steps: [
                "1. Contact your participating bank or Post Office where you hold a savings account.",
                "2. Fill out the PMSBY application form (Consent-cum-Declaration Form).",
                "3. Submit a copy of your Aadhaar card along with the form.",
                "4. Instruct the bank to link your Aadhaar to the bank account if not already done.",
                "5. Ensure you have a sufficient balance (₹20) in your account for the auto-debit of the premium."
            ],
            nagrik_support: "We help you understand the claim process and can instantly answer questions about coverage exceptions and renewal dates.",
            eligibility: ["Age 18-70 years", "Savings Bank Account", "Consent for auto-debit"],
            eligibility_detailed: [
                "Indian citizens or residents within the age group of 18 to 70 years.",
                "Must hold a participating savings bank account.",
                "Must give consent for auto-debit of the premium amount.",
                "In case of multiple bank accounts, the person is eligible to join the scheme through one savings bank account only."
            ],
            important_note: "The coverage period is 1st June to 31st May. The premium of ₹20 is deducted automatically from the subscriber's bank account in one installment."
        },
    },
    "pm-jeevan-jyoti-bima-yojana": {
        title: "PM Jeevan Jyoti Bima Yojana (PMJJBY)",
        highlight: "₹2 Lakh Life Cover",
        desc: "Pure term life insurance for death due to any reason. Premium ₹436/year. (Age 18-50).",
        long_description: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) is a one-year life insurance scheme renewable from year to year, offering coverage for death due to any reason. It is available to people in the age group of 18 to 50 years (life cover up to age 55) having a savings bank or post office account who give their consent to join and enable auto-debit. The scheme provides a life cover of ₹2 Lakhs in case of death of the insured, due to any reason.",
        modal_content: {
            summary: "A one-year cover term life insurance scheme, renewable from year to year, offering life insurance coverage for death due to any reason.",
            highlights: ["₹2 Lakh Life Cover", "Premium ₹436/year", "No medical check-up required"],
        },
        full_page_content: {
            documents: ["Aadhaar Card", "Bank Account"],
            process: "Approach your bank or post office. Fill the PMJJBY enrolment form and link it to your savings account for premium deduction.",
            application_steps: [
                "1. Visit the bank branch or post office where you have a savings account.",
                "2. Request the PMJJBY enrolment form.",
                "3. Fill in your details and provide authorization for auto-debit of the premium.",
                "4. Submit the form along with a self-attested copy of your Aadhaar card.",
                "5. Collect the acknowledgment slip or certificate of insurance."
            ],
            nagrik_support: "Use Nagrik Voice Assistant to verify if your bank supports online enrollment for PMJJBY without visiting a branch.",
            eligibility: ["Age 18-50 years", "Savings Bank Account"],
            eligibility_detailed: [
                "Individuals in the age group of 18 to 50 years.",
                "Must have a savings bank or post office account.",
                "Must consent to auto-debit of the premium.",
                "Those adjusting to the scheme after the initial enrollment period must submit a self-declaration of good health."
            ],
            important_note: "The risk cover starts from 45 days after the date of enrollment (Lien period), except for death due to accident. The premium is ₹436 per annum."
        },
    },
    "pm-kisan-samman-nidhi": {
        title: "PM Kisan Samman Nidhi",
        highlight: "₹6,000/Year Support",
        desc: "100% Govt funded financial support for farmers, transferred directly to bank accounts.",
        long_description: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a Central Sector Scheme with 100% funding from the Government of India. The scheme aims to supplement the financial needs of the Small and Marginal Farmers in procuring various inputs to ensure proper crop health and appropriate yields, commensurate with the anticipated farm income at the end of each crop cycle. Under the scheme, an income support of ₹6,000 per year is provided in three equal installments.",
        modal_content: {
            summary: "An initiative by the government of India in which all farmers will get up to ₹6,000 per year as minimum income support.",
            highlights: ["₹6,000 per year", "Direct Benefit Transfer (DBT)", "3 Installments of ₹2,000"],
        },
        full_page_content: {
            documents: ["Aadhaar Card", "Land Ownership Papers (Khasra/Khatauni)", "Bank Passbook"],
            process: "Register online at the PM Kisan portal or visit your local CSC. Verify Aadhaar seeding with your bank account for DBT.",
            application_steps: [
                "1. Go to the official website pmkisan.gov.in.",
                "2. Under the 'Farmers Corner' section, click on 'New Farmer Registration'.",
                "3. Enter your Aadhaar number, Mobile number, and select your State, then click 'Get OTP'.",
                "4. Verify via OTP sent to your mobile.",
                "5. Fill in the required details (personal, land records, bank details) and click 'Save'.",
                "6. Note down your registration ID for future reference."
            ],
            nagrik_support: "Our AI can check your application status deeply by simply asking for your mobile number or Aadhaar, explaining any rejection reasons clearly.",
            eligibility: ["Small and Marginal Farmers", "Indian Citizen", "Valid Landholding"],
            eligibility_detailed: [
                "Landholding farmers' families with cultivable landholding in their names.",
                "Must be an Indian citizen.",
                "Exclusions: Institutional Land holders.",
                "Exclusions: Farmer families holding constitutional posts, serving/retired officers and employees of State/Central Government.",
                "Exclusions: Professionals like Doctors, Engineers, Lawyers, Chartered Accountants, and Architects registered with professional bodies."
            ],
            important_note: "eKYC is mandatory for all PMKISAN registered farmers. OTP Based eKYC is available on PMKISAN Portal, or you may contact nearest CSC centers for Biometric based eKYC."
        },
    },
    "ayushman-bharat": {
        title: "Ayushman Bharat (PM-JAY)",
        highlight: "₹5 Lakh Health Cover",
        desc: "Free health insurance coverage per family per year for secondary and tertiary care hospitalization.",
        long_description: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) is the world's largest government-funded health assurance scheme. It offers a cover of ₹5 lakhs per family per year for secondary and tertiary care hospitalization across public and private empaneled hospitals in India. It aims to reduce out-of-pocket hospitalization expenses for poor and vulnerable families.",
        modal_content: {
            summary: "The world's largest government-funded healthcare program, providing a cover of ₹5 lakhs per family per year for secondary and tertiary care hospitalization.",
            highlights: ["₹5 Lakh Cover", "Cashless Treatment", "Portable across India"],
        },
        full_page_content: {
            documents: ["Aadhaar Card", "Ration Card", "Income Certificate"],
            process: "Check eligibility on the PMJAY website. If eligible, visit an empaneled hospital or CSC to generate your Golden Card.",
            application_steps: [
                "1. Visit the official 'Am I Eligible' portal at pmjay.gov.in.",
                "2. Enter your Mobile Number and Captcha, then verify utilizing the OTP.",
                "3. Search for your name using HHD Number, Ration Card Number, Mobile Number, or Name.",
                "4. If your name appears in the list, visit a designated public hospital or Common Service Center (CSC).",
                "5. Provide your documents for KYC verification to generate your Ayushman (Golden) Card."
            ],
            nagrik_support: "Not sure if you are eligible? Just tell Nagrik your details, and we'll cross-check the official database criteria for you.",
            eligibility: ["Families in SECC Database", "Occupational criteria in urban areas"],
            eligibility_detailed: [
                "Families identified under the Socio-Economic Caste Census (SECC) 2011 database.",
                "Households with no adult member between age 16-59.",
                "Female-headed households with no adult male member between age 16-59.",
                "Disabled members and no able-bodied adult member in the family.",
                "SC/ST households.",
                "Landless households deriving major part of their income from manual casual labor."
            ],
            important_note: "There is no cap on family size or age of members. Pre-existing diseases are covered from day one. Aadhaar is not mandatory for enrollment but desirable."
        },
    },
    "pm-mitra-scheme": {
        title: "PM Mitra Scheme",
        highlight: "Textile Industry Growth",
        desc: 'Integrated large-scale textile regions to boost the "Farm to Fiber to Factory to Fashion" vision.',
        long_description: "The PM MITRA (Pradhan Mantri Mega Integrated Textile Region and Apparel) Parks scheme aims to create world-class industrial infrastructure that would attract cutting-edge technology and boost FDI and local investment in the textiles sector. The scheme envisions an integrated textiles value chain at one location, reducing logistics costs and improving the competitiveness of Indian textiles. The 5F vision: Farm to Fibre to Factory to Fashion to Foreign.",
        modal_content: {
            summary: "Seven Pradhan Mantri Mega Integrated Textile Region and Apparel (PM MITRA) Parks will be set up to create world-class industrial infrastructure.",
            highlights: ["World-class infrastructure", "FDI promotion", "Employment generation"],
        },
        full_page_content: {
            documents: ["Business Registration", "Project Report", "Land Details"],
            process: "State governments and private players submit proposals. Special Purpose Vehicles (SPVs) are formed to implement the parks.",
            application_steps: [
                "1. State Governments submit proposals for setting up PM MITRA Parks.",
                "2. Private players participate through the selection process for setting up units in these parks.",
                "3. For Entrepreneurs: Keep an eye on the official Ministry of Textiles website for tender notices.",
                "4. Submit your Expression of Interest (EoI) or bid as per the guidelines in the tender document."
            ],
            nagrik_support: "For entrepreneurs, Nagrik provides summaries of the latest tender documents and policy updates related to PM Mitra Parks.",
            eligibility: ["State Governments", "Private Players (PPP mode)"],
            eligibility_detailed: [
                "State Governments having ready availability of contiguous and encumbrance-free land of 1000+ acres.",
                "Private Companies/Master Developers willing to invest in park infrastructure.",
                "Manufacturing units in the textile value chain (Spinning, Weaving, Processing/Dyeing, Garmenting)."
            ],
            important_note: "This is primarily an infrastructure development scheme initiated by the Central Government in partnership with State Governments. Individual application is for setting up units within the park."
        },
    },
    "kisan-e-mitra": {
        title: "Kisan e-Mitra",
        highlight: "AI Agriculture Assistant",
        desc: "Your virtual assistant for agriculture queries. Available 24/7 with multilingual support.",
        long_description: "Kisan e-Mitra is an AI-powered grievance redressal and knowledge assistant launched by the Ministry of Agriculture and Farmers Welfare. It leverages advanced AI technology to provide farmers with instant, accurate, and personalized answers to their queries regarding government schemes, farming techniques, market prices, and weather conditions. It is designed to overcome language barriers and make information accessible.",
        modal_content: {
            summary: "An AI-powered chatbot designed to answer farmers' queries regarding government schemes, farming techniques, and market prices.",
            highlights: ["24/7 Availability", "Multilingual Support", "Instant Queries"],
        },
        full_page_content: {
            documents: ["Mobile Number"],
            process: "Access the Kisan e-Mitra portal or app. Select your language and start asking questions about agriculture or schemes.",
            application_steps: [
                "1. Visit the official Kisan e-Mitra portal or download the mobile application (if available).",
                "2. Select your preferred language from the available options (Hindi, English, Regional languages).",
                "3. Login using your mobile number and OTP if required, or continue as a guest.",
                "4. Type your query or use the microphone button to ask your question via voice.",
                "5. Receive instant, AI-generated responses tailored to your query."
            ],
            nagrik_support: "Kisan e-Mitra is the official government tool. Nagrik acts as a bridge, helping you navigate to the right official resource if our database deems it best.",
            eligibility: ["All Farmers", "Agriculture Researchers"],
            eligibility_detailed: [
                "All Farmers across India.",
                "Agriculture Students and Researchers.",
                "Anyone seeking information about Indian Agriculture and Farmers Welfare schemes."
            ],
            important_note: "The service is available 24x7 and supports multiple Indian languages to ensure inclusivity. It is currently integrated with the PM Kisan Grievance Redressal System."
        },
    },
}

const schemesHi: Record<string, SchemeContent> = {
    "atal-pension-yojana": {
        title: "अटल पेंशन योजना (APY)",
        highlight: "पेंशन ₹1,000 - ₹5,000/माह",
        desc: "असंगठित क्षेत्र के श्रमिकों के लिए गारंटीकृत पेंशन (आयु 18-40)। मृत्यु पर जीवनसाथी को समान पेंशन मिलती है।",
        long_description: "अटल पेंशन योजना (APY) भारत सरकार की एक प्रमुख सामाजिक सुरक्षा योजना है, जो असंगठित क्षेत्र पर केंद्रित है ताकि श्रमिकों को उनके बुढ़ापे में सुरक्षा जाल प्रदान किया जा सके। सब्सक्राइबर्स को उनके योगदान के आधार पर 60 साल की उम्र में ₹1,000, ₹2,000, ₹3,000, ₹4,000, या ₹5,000 प्रति माह की गारंटीकृत न्यूनतम पेंशन मिलती है। यह योजना यह भी सुनिश्चित करती है कि सब्सक्राइबर की मृत्यु पर जीवनसाथी को समान पेंशन राशि मिले, और संचित कोष नॉमिनी को वापस कर दिया जाए।",
        modal_content: {
            summary: "असंगठित क्षेत्र को लक्षित एक सरकार समर्थित पेंशन योजना। सब्सक्राइबर्स को 60 साल की उम्र में ₹1,000 से ₹5,000 प्रति माह तक की गारंटीकृत न्यूनतम पेंशन मिलती है।",
            highlights: ["गारंटीकृत पेंशन", "कर लाभ", "सरकारी सह-योगदान"],
        },
        full_page_content: {
            documents: ["आधार कार्ड", "सक्रिय बचत बैंक खाता", "मोबाइल नंबर"],
            process: "अपनी बैंक शाखा पर जाएँ या नेट बैंकिंग का उपयोग करें। APY पंजीकरण फॉर्म भरें, योगदान के लिए ऑटो-डेबिट अधिकृत करें, और आपको एक PRAN कार्ड प्राप्त होगा।",
            application_steps: [
                "1. अपनी बैंक शाखा या डाकघर पर जाएँ जहाँ आपका सक्रिय बचत खाता है।",
                "2. 'अटल पेंशन योजना पंजीकरण फॉर्म' की मांग करें (कई भाषाओं में उपलब्ध)।",
                "3. आवश्यक विवरण भरें, जिसमें आपका बैंक खाता संख्या और आधार संख्या शामिल है।",
                "4. अपने खाते से मासिक योगदान के ऑटो-डेबिट के लिए बैंक को अधिकृत करें।",
                "5. फॉर्म जमा करें। आपको एक पावती रसीद और एक PRAN (स्थायी सेवानिवृत्ति खाता संख्या) कार्ड प्राप्त होगा।"
            ],
            nagrik_support: "नागरिक एआई आपको आपकी स्थानीय भाषा में APY फॉर्म भरने की प्रक्रिया के माध्यम से मार्गदर्शन कर सकता है और आपकी आयु के अनुरूप आपके मासिक योगदान की गणना करने में मदद कर सकता है।",
            eligibility: ["भारतीय नागरिक", "आयु 18-40 वर्ष", "बचत बैंक खाता होना चाहिए"],
            eligibility_detailed: [
                "भारत का नागरिक होना चाहिए।",
                "आयु समूह: 18 से 40 वर्ष की आयु के बीच होना चाहिए।",
                "एक वैध बचत बैंक खाता या डाकघर बचत बैंक खाता होना चाहिए।",
                "आयकर दाता नहीं होना चाहिए (1 अक्टूबर, 2022 से प्रभावी नए नियमों के अनुसार)।"
            ],
            important_note: "अपने APY खाते में नॉमिनी का विवरण प्रदान करना अनिवार्य है। योगदान मासिक, त्रैमासिक या अर्ध-वार्षिक आधार पर किया जा सकता है, और ऑटो-डेबिट परेशानी मुक्त भुगतान की सुविधा प्रदान करता है।"
        },
    },
    "pm-suraksha-bima-yojana": {
        title: "प्रधान प्रधान मंत्री सुरक्षा बीमा योजना (PMSBY)",
        highlight: "₹2 लाख दुर्घटना कवर",
        desc: "मात्र ₹20 प्रति वर्ष में किफायती दुर्घटना मृत्यु और विकलांगता बीमा। (आयु 18-70)।",
        long_description: "प्रधान मंत्री सुरक्षा बीमा योजना (PMSBY) एक दुर्घटना बीमा योजना है जो दुर्घटना के कारण मृत्यु या विकलांगता के लिए आकस्मिक मृत्यु और विकलांगता कवर प्रदान करती है। यह एक साल का कवर है, जिसे साल-दर-साल नवीनीकृत किया जा सकता है, जो दुर्घटना के कारण मृत्यु या विकलांगता के लिए कवरेज प्रदान करता है। यह योजना 18 से 70 वर्ष के आयु वर्ग के लोगों के लिए उपलब्ध है, जिनका बैंक खाता है और जो इसमें शामिल होने के लिए अपनी सहमति देते हैं और ऑटो-डेबिट सक्षम करते हैं।",
        modal_content: {
            summary: "एक दुर्घटना बीमा योजना जो दुर्घटना के कारण मृत्यु या विकलांगता के लिए आकस्मिक मृत्यु और विकलांगता कवर प्रदान करती है।",
            highlights: ["₹2 लाख कवर", "प्रीमियम ₹20/वर्ष", "ऑटो-डेबिट सुविधा"],
        },
        full_page_content: {
            documents: ["आधार कार्ड", "बैंक खाता विवरण (ऑटो-डेबिट के लिए)"],
            process: "अपने बैंक से संपर्क करें जहाँ आपका बचत खाता है। प्रीमियम के ऑटो-डेबिट को सक्षम करने के लिए PMSBY सहमति फॉर्म जमा करें।",
            application_steps: [
                "1. अपने भाग लेने वाले बैंक या डाकघर से संपर्क करें जहाँ आपका बचत खाता है।",
                "2. PMSBY आवेदन फॉर्म (सहमति-सह-घोषणा फॉर्म) भरें।",
                "3. फॉर्म के साथ अपने आधार कार्ड की एक प्रति जमा करें।",
                "4. यदि पहले से नहीं किया गया है तो बैंक को अपने आधार को बैंक खाते से लिंक करने का निर्देश दें।",
                "5. सुनिश्चित करें कि प्रीमियम के ऑटो-डेबिट के लिए आपके खाते में पर्याप्त शेष राशि (₹20) है।"
            ],
            nagrik_support: "हम आपको दावा प्रक्रिया को समझने में मदद करते हैं और कवरेज अपवादों और नवीनीकरण तिथियों के बारे में तुरंत सवालों के जवाब दे सकते हैं।",
            eligibility: ["आयु 18-70 वर्ष", "बचत बैंक खाता", "ऑटो-डेबिट के लिए सहमति"],
            eligibility_detailed: [
                "18 से 70 वर्ष के आयु वर्ग के भारतीय नागरिक या निवासी।",
                "एक भाग लेने वाला बचत बैंक खाता होना चाहिए।",
                "प्रीमियम राशि के ऑटो-डेबिट के लिए सहमति होनी चाहिए।",
                "कई बैंक खातों के मामले में, व्यक्ति केवल एक बचत बैंक खाते के माध्यम से योजना में शामिल होने के लिए पात्र है।"
            ],
            important_note: "कवरेज अवधि 1 जून से 31 मई तक है। ₹20 का प्रीमियम ग्राहक के बैंक खाते से एक किस्त में स्वचालित रूप से काटा जाता है।"
        },
    },
    "pm-jeevan-jyoti-bima-yojana": {
        title: "प्रधानमंत्री जीवन ज्योति बीमा योजना (PMJJBY)",
        highlight: "₹2 लाख जीवन कवर",
        desc: "किसी भी कारण से मृत्यु के लिए शुद्ध सावधि जीवन बीमा। प्रीमियम ₹436/वर्ष। (आयु 18-50)।",
        long_description: "प्रधानमंत्री जीवन ज्योति बीमा योजना (PMJJBY) एक साल की जीवन बीमा योजना है जो साल-दर-साल नवीनीकृत होती है, जो किसी भी कारण से मृत्यु के लिए कवरेज प्रदान करती है। यह 18 से 50 वर्ष (55 वर्ष की आयु तक जीवन कवर) के आयु वर्ग के लोगों के लिए उपलब्ध है, जिनके पास बचत बैंक या डाकघर खाता है और जो इसमें शामिल होने के लिए अपनी सहमति देते हैं और ऑटो-डेबिट सक्षम करते हैं। यह योजना बीमित व्यक्ति की किसी भी कारण से मृत्यु होने पर ₹2 लाख का जीवन कवर प्रदान करती है।",
        modal_content: {
            summary: "एक साल का कवर टर्म लाइफ इंश्योरेंस स्कीम, साल-दर-साल नवीनीकृत, किसी भी कारण से मृत्यु के लिए जीवन बीमा कवरेज प्रदान करता है।",
            highlights: ["₹2 लाख जीवन कवर", "प्रीमियम ₹436/वर्ष", "कोई चिकित्सा जांच आवश्यक नहीं"],
        },
        full_page_content: {
            documents: ["आधार कार्ड", "बैंक खाता"],
            process: "अपने बैंक या डाकघर से संपर्क करें। PMJJBY नामांकन फॉर्म भरें और प्रीमियम कटौती के लिए इसे अपने बचत खाते से लिंक करें।",
            application_steps: [
                "1. उस बैंक शाखा या डाकघर पर जाएँ जहाँ आपका बचत खाता है।",
                "2. PMJJBY नामांकन फॉर्म का अनुरोध करें।",
                "3. अपना विवरण भरें और प्रीमियम के ऑटो-डेबिट के लिए प्राधिकरण प्रदान करें।",
                "4. अपने आधार कार्ड की स्व-सत्यापित प्रति के साथ फॉर्म जमा करें।",
                "5. पावती पर्ची या बीमा प्रमाणपत्र प्राप्त करें।"
            ],
            nagrik_support: "नागरिक वॉयस असिस्टेंट का उपयोग यह सत्यापित करने के लिए करें कि क्या आपका बैंक शाखा का दौरा किए बिना PMJJBY के लिए ऑनलाइन नामांकन का समर्थन करता है।",
            eligibility: ["आयु 18-50 वर्ष", "बचत बैंक खाता"],
            eligibility_detailed: [
                "18 से 50 वर्ष के आयु वर्ग के व्यक्ति।",
                "बचत बैंक या डाकघर खाता होना चाहिए।",
                "प्रीमियम के ऑटो-डेबिट के लिए सहमति होनी चाहिए।",
                "प्रारंभिक नामांकन अवधि के बाद योजना में समायोजित होने वालों को अच्छे स्वास्थ्य की स्व-घोषणा प्रस्तुत करनी होगी।"
            ],
            important_note: "जोखिम कवर नामांकन की तारीख (लियन अवधि) के 45 दिनों के बाद शुरू होता है, सिवाय दुर्घटना के कारण मृत्यु के। प्रीमियम ₹436 प्रति वर्ष है।"
        },
    },
    "pm-kisan-samman-nidhi": {
        title: "प्रधानमंत्री किसान सम्मान निधि",
        highlight: "₹6,000/वर्ष सहायता",
        desc: "किसानों के लिए 100% सरकारी वित्त पोषित वित्तीय सहायता, सीधे बैंक खातों में हस्तांतरित।",
        long_description: "प्रधानमंत्री किसान सम्मान निधि (PM-KISAN) भारत सरकार द्वारा 100% वित्त पोषण के साथ एक केंद्रीय क्षेत्र की योजना है। इस योजना का उद्देश्य छोटे और सीमांत किसानों की वित्तीय आवश्यकताओं को पूरा करना है ताकि वे उचित फसल स्वास्थ्य और उचित पैदावार सुनिश्चित करने के लिए विभिन्न इनपुट प्राप्त कर सकें। योजना के तहत, ₹6,000 प्रति वर्ष की आय सहायता तीन समान किस्तों में प्रदान की जाती है।",
        modal_content: {
            summary: "भारत सरकार की एक पहल जिसमें सभी किसानों को न्यूनतम आय सहायता के रूप में प्रति वर्ष ₹6,000 तक मिलेंगे।",
            highlights: ["₹6,000 प्रति वर्ष", "प्रत्यक्ष लाभ हस्तांतरण (DBT)", "₹2,000 की 3 किस्तें"],
        },
        full_page_content: {
            documents: ["आधार कार्ड", "भूमि स्वामित्व के कागजात (खसरा/खतौनी)", "बैंक पासबुक"],
            process: "पीएम किसान पोर्टल पर ऑनलाइन पंजीकरण करें या अपने स्थानीय सीएससी पर जाएं। डीबीटी के लिए अपने बैंक खाते के साथ आधार सीडिंग सत्यापित करें।",
            application_steps: [
                "1. आधिकारिक वेबसाइट pmkisan.gov.in पर जाएं।",
                "2. 'Farmers Corner' अनुभाग के तहत, 'New Farmer Registration' पर क्लिक करें।",
                "3. अपना आधार नंबर, मोबाइल नंबर दर्ज करें और अपना राज्य चुनें, फिर 'Get OTP' पर क्लिक करें।",
                "4. अपने मोबाइल पर भेजे गए ओटीपी के माध्यम से सत्यापित करें।",
                "5. आवश्यक विवरण भरें (व्यक्तिगत, भूमि रिकॉर्ड, बैंक विवरण) और 'Save' पर क्लिक करें।",
                "6. भविष्य के संदर्भ के लिए अपनी पंजीकरण आईडी नोट करें।"
            ],
            nagrik_support: "हमारा एआई केवल आपका मोबाइल नंबर या आधार मांगकर आपकी आवेदन स्थिति की गहराई से जांच कर सकता है, और किसी भी अस्वीकृति के कारणों को स्पष्ट रूप से समझा सकता है।",
            eligibility: ["छोटे और सीमांत किसान", "भारतीय नागरिक", "वैध भूमि जोत"],
            eligibility_detailed: [
                "खेती योग्य भूमि जोत वाले किसान परिवार।",
                "भारतीय नागरिक होना चाहिए।",
                "बहिष्करण: संस्थागत भूमि धारक।",
                "बहिष्करण: संवैधानिक पदों पर आसीन किसान परिवार, राज्य/केंद्र सरकार के सेवारत/सेवानिवृत्त अधिकारी और कर्मचारी।",
                "बहिष्करण: पेशेवर निकायों के साथ पंजीकृत डॉक्टर, इंजीनियर, वकील, चार्टर्ड अकाउंटेंट और आर्किटेक्ट जैसे पेशेवर।"
            ],
            important_note: "सभी PMKISAN पंजीकृत किसानों के लिए eKYC अनिवार्य है। PMKISAN पोर्टल पर OTP आधारित eKYC उपलब्ध है, या आप बायोमेट्रिक आधारित eKYC के लिए निकटतम CSC केंद्रों से संपर्क कर सकते हैं।"
        },
    },
    "ayushman-bharat": {
        title: "आयुष्मान भारत (PM-JAY)",
        highlight: "₹5 लाख स्वास्थ्य कवर",
        desc: "माध्यमिक और तृतीयक देखभाल अस्पताल में भर्ती के लिए प्रति परिवार प्रति वर्ष मुफ्त स्वास्थ्य बीमा कवरेज।",
        long_description: "आयुष्मान भारत प्रधान मंत्री जन आरोग्य योजना (AB-PMJAY) दुनिया की सबसे बड़ी सरकार द्वारा वित्त पोषित स्वास्थ्य आश्वासन योजना है। यह भारत में सार्वजनिक और निजी सूचीबद्ध अस्पतालों में माध्यमिक और तृतीयक देखभाल अस्पताल में भर्ती के लिए प्रति परिवार प्रति वर्ष ₹5 लाख का कवर प्रदान करता है। इसका उद्देश्य गरीब और कमजोर परिवारों के लिए जेब से होने वाले अस्पताल के खर्च को कम करना है।",
        modal_content: {
            summary: "दुनिया का सबसे बड़ा सरकार द्वारा वित्त पोषित स्वास्थ्य सेवा कार्यक्रम, जो माध्यमिक और तृतीयक देखभाल अस्पताल में भर्ती के लिए प्रति परिवार प्रति वर्ष ₹5 लाख का कवर प्रदान करता है।",
            highlights: ["₹5 लाख कवर", "कैशलेस उपचार", "पूरे भारत में पोर्टेबल"],
        },
        full_page_content: {
            documents: ["आधार कार्ड", "राशन कार्ड", "आय प्रमाण पत्र"],
            process: "PMJAY वेबसाइट पर पात्रता की जाँच करें। यदि पात्र हैं, तो अपना गोल्डन कार्ड बनाने के लिए सूचीबद्ध अस्पताल या CSC पर जाएँ।",
            application_steps: [
                "1. pmjay.gov.in पर आधिकारिक 'Am I Eligible' पोर्टल पर जाएँ।",
                "2. अपना मोबाइल नंबर और कैप्चा दर्ज करें, फिर OTP का उपयोग करके सत्यापित करें।",
                "3. HHD नंबर, राशन कार्ड नंबर, मोबाइल नंबर या नाम का उपयोग करके अपना नाम खोजें।",
                "4. यदि आपका नाम सूची में दिखाई देता है, तो निर्दिष्ट सार्वजनिक अस्पताल या कॉमन सर्विस सेंटर (CSC) पर जाएँ।",
                "5. अपना आयुष्मान (गोल्डन) कार्ड बनाने के लिए केवाईसी सत्यापन के लिए अपने दस्तावेज प्रदान करें।"
            ],
            nagrik_support: "निश्चित नहीं हैं कि आप पात्र हैं या नहीं? बस नागरिक को अपना विवरण बताएं, और हम आपके लिए आधिकारिक डेटाबेस मानदंडों की जांच करेंगे।",
            eligibility: ["SECC डेटाबेस में परिवार", "शहरी क्षेत्रों में व्यावसायिक मानदंड"],
            eligibility_detailed: [
                "सामाजिक-आर्थिक जाति जनगणना (SECC) 2011 डेटाबेस के तहत पहचाने गए परिवार।",
                "ऐसे घर जिनमें 16-59 वर्ष की आयु के बीच कोई वयस्क सदस्य नहीं है।",
                "महिला प्रधान परिवार जिनमें 16-59 वर्ष की आयु के बीच कोई वयस्क पुरुष सदस्य नहीं है।",
                "विकलांग सदस्य और परिवार में कोई सक्षम वयस्क सदस्य नहीं है।",
                "SC/ST परिवार।",
                "भूमिहीन परिवार जो अपनी आय का बड़ा हिस्सा मैनुअल आकस्मिक श्रम से प्राप्त करते हैं।"
            ],
            important_note: "परिवार के आकार या सदस्यों की आयु पर कोई सीमा नहीं है। पहले से मौजूद बीमारियां पहले दिन से कवर की जाती हैं। आधार नामांकन के लिए अनिवार्य नहीं है लेकिन वांछनीय है।"
        },
    },
    "pm-mitra-scheme": {
        title: "पीएम मित्र योजना",
        highlight: "कपड़ा उद्योग विकास",
        desc: '"फार्म टू फाइबर टू फैक्ट्री टू फैशन" विजन को बढ़ावा देने के लिए एकीकृत बड़े पैमाने पर कपड़ा क्षेत्र।',
        long_description: "पीएम मित्र (प्रधान मंत्री मेगा इंटीग्रेटेड टेक्सटাইল रीजन एंड परिधान) पार्क योजना का उद्देश्य विश्व स्तरीय औद्योगिक बुनियादी ढांचा तैयार करना है जो अत्याधुनिक तकनीक को आकर्षित करेगा और कपड़ा क्षेत्र में एफडीआई और स्थानीय निवेश को बढ़ावा देगा। योजना एक ही स्थान पर एक एकीकृत कपड़ा मूल्य श्रृंखला की कल्पना करती है, रसद लागत को कम करती है और भारतीय कपड़ों की प्रतिस्पर्धात्मकता में सुधार करती है। 5F विजन: फार्म टू फाइबर टू फैक्ट्री टू फैशन टू फॉरेन।",
        modal_content: {
            summary: "विश्व स्तरीय औद्योगिक बुनियादी ढांचा तैयार करने के लिए सात प्रधान मंत्री मेगा इंटीग्रेटेड टेक्सटাইল रीजन एंड परिधान (पीएम मित्र) पार्क स्थापित किए जाएंगे।",
            highlights: ["विश्व स्तरीय बुनियादी ढांचा", "एफडीआई संवर्धन", "रोजगार सृजन"],
        },
        full_page_content: {
            documents: ["व्यवसाय पंजीकरण", "परियोजना रिपोर्ट", "भूमि विवरण"],
            process: "राज्य सरकारें और निजी खिलाड़ी प्रस्ताव प्रस्तुत करते हैं। पार्कों को लागू करने के लिए विशेष प्रयोजन वाहन (SPV) बनाए जाते हैं।",
            application_steps: [
                "1. राज्य सरकारें पीएम मित्र पार्क स्थापित करने के लिए प्रस्ताव प्रस्तुत करती हैं।",
                "2. निजी खिलाड़ी इन पार्कों में इकाइयाँ स्थापित करने के लिए चयन प्रक्रिया के माध्यम से भाग लेते हैं।",
                "3. उद्यमियों के लिए: निविदा नोटिस के लिए आधिकारिक कपड़ा मंत्रालय की वेबसाइट पर नज़र रखें।",
                "4. निविदा दस्तावेज में दिशानिर्देशों के अनुसार अपनी रुचि की अभिव्यक्ति (EoI) या बोली जमा करें।"
            ],
            nagrik_support: "उद्यमियों के लिए, नागरिक पीएम मित्र पार्कों से संबंधित नवीनतम निविदा दस्तावेजों और नीति अपडेट का सारांश प्रदान करता है।",
            eligibility: ["राज्य सरकारें", "निजी खिलाड़ी (PPP मोड)"],
            eligibility_detailed: [
                "राज्य सरकारें जिनके पास 1000+ एकड़ की सन्निहित और भार-मुक्त भूमि की तैयार उपलब्धता है।",
                "निजी कंपनियां/मास्टर डेवलपर्स जो पार्क के बुनियादी ढांचे में निवेश करने को तैयार हैं।",
                "कपड़ा मूल्य श्रृंखला में विनिर्माण इकाइयाँ (कताई, बुनाई, प्रसंस्करण/रंगाई, परिधान)।"
            ],
            important_note: "यह मुख्य रूप से राज्य सरकारों के साथ साझेदारी में केंद्र सरकार द्वारा शुरू की गई एक बुनियादी ढांचा विकास योजना है। व्यक्तिगत आवेदन पार्क के भीतर इकाइयाँ स्थापित करने के लिए है।"
        },
    },
    "kisan-e-mitra": {
        title: "किसान ई-मित्र",
        highlight: "एआई कृषि सहायक",
        desc: "कृषि प्रश्नों के लिए आपका आभासी सहायक। बहुभाषी समर्थन के साथ 24/7 उपलब्ध।",
        long_description: "किसान ई-मित्र कृषि और किसान कल्याण मंत्रालय द्वारा शुरू किया गया एक एआई-संचालित शिकायत निवारण और ज्ञान सहायक है। यह उन्नत एआई तकनीक का लाभ उठाता है ताकि किसानों को सरकारी योजनाओं, खेती की तकनीकों, बाजार की कीमतों और मौसम की स्थिति के बारे में उनके प्रश्नों के तत्काल, सटीक और व्यक्तिगत उत्तर प्रदान किए जा सकें। इसे भाषा की बाधाओं को दूर करने और जानकारी को सुलभ बनाने के लिए डिज़ाइन किया गया है।",
        modal_content: {
            summary: "एक एआई-संचालित चैटबॉट जिसे सरकारी योजनाओं, खेती की तकनीकों और बाजार की कीमतों के बारे में किसानों के प्रश्नों का उत्तर देने के लिए डिज़ाइन किया गया है।",
            highlights: ["24/7 उपलब्धता", "बहुभाषी समर्थन", "तत्काल प्रश्न"],
        },
        full_page_content: {
            documents: ["मोबाइल नंबर"],
            process: "किसान ई-मित्र पोर्टल या ऐप तक पहुंचें। अपनी भाषा चुनें और कृषि या योजनाओं के बारे में प्रश्न पूछना शुरू करें।",
            application_steps: [
                "1. आधिकारिक किसान ई-मित्र पोर्टल पर जाएं या मोबाइल एप्लिकेशन डाउनलोड करें (यदि उपलब्ध हो)।",
                "2. उपलब्ध विकल्पों (हिंदी, अंग्रेजी, क्षेत्रीय भाषाओं) में से अपनी पसंदीदा भाषा चुनें।",
                "3. यदि आवश्यक हो तो अपने मोबाइल नंबर और ओटीपी का उपयोग करके लॉगिन करें, या अतिथि के रूप में जारी रखें।",
                "4. अपनी क्वेरी टाइप करें या आवाज के माध्यम से अपना प्रश्न पूछने के लिए माइक्रोफ़ोन बटन का उपयोग करें।",
                "5. अपनी क्वेरी के अनुरूप तत्काल, एआई-जनित प्रतिक्रियाएं प्राप्त करें।"
            ],
            nagrik_support: "किसान ई-मित्र आधिकारिक सरकारी उपकरण है। नागरिक एआई एक पुल के रूप में कार्य करता है, यदि हमारा डेटाबेस इसे सबसे अच्छा मानता है तो आपको सही आधिकारिक संसाधन तक नेविगेट करने में मदद करता है।",
            eligibility: ["सभी किसान", "कृषि शोधकर्ता"],
            eligibility_detailed: [
                "पूरे भारत के सभी किसान।",
                "कृषि छात्र और शोधकर्ता।",
                "भारतीय कृषि और किसान कल्याण योजनाओं के बारे में जानकारी चाहने वाला कोई भी व्यक्ति।"
            ],
            important_note: "सेवा 24x7 उपलब्ध है और समावेशिता सुनिश्चित करने के लिए कई भारतीय भाषाओं का समर्थन करती है। यह वर्तमान में पीएम किसान शिकायत निवारण प्रणाली के साथ एकीकृत है।"
        },
    },
}

// Helper to merge English fallback with translations
const merge = (base: SchemeContent, override: Partial<SchemeContent>): SchemeContent => ({
    ...base,
    ...override,
    modal_content: {
        ...base.modal_content,
        ...(override.modal_content || {})
    },
    full_page_content: {
        ...base.full_page_content,
        ...(override.full_page_content || {})
    }
});

// Translation Overrides (Partial)
const translations: Record<string, Record<string, Partial<SchemeContent>>> = {
    // Gujarati
    gu: {
        "atal-pension-yojana": {
            title: "અટલ પેન્શન યોજના",
            highlight: "પેન્શન ₹1,000 - ₹5,000/માસ",
            desc: "અસંગઠિત ક્ષેત્રના કામદારો માટે ગેરંટીડ પેન્શન (ઉંમર 18-40). મૃત્યુ પર જીવનસાથીને સમાન પેન્શન.",
            long_description: "અટલ પેન્શન યોજના (APY) ભારત સરકારની એક મુખ્ય સામાજિક સુરક્ષા યોજના છે, જે અસંગઠિત ક્ષેત્ર પર કેન્દ્રિત છે જેથી શ્રમિકોને તેમના ઘડપણમાં સુરક્ષા પ્રદાન કરી શકાય. સબસ્ક્રાઇબર્સને તેમના યોગદાનના આધારે 60 વર્ષની ઉંમરે દર મહિને ₹1,000, ₹2,000, ₹3,000, ₹4,000 કે ₹5,000 ની ગેરંટીડ પેન્શન મળે છે.",
            modal_content: {
                summary: "અસંગઠિત ક્ષેત્રના કામદારો માટે સરકાર દ્વારા સમર્થિત પેન્શન યોજના.",
                highlights: ["ગેરંટીડ પેન્શન", "કર લાભ", "સરકારી ફાળો"]
            },
            full_page_content: {
                documents: ["આધાર કાર્ડ", "બચત બેંક ખાતું", "મોબાઈલ નંબર"],
                process: "તમારી બેંક શાખાની મુલાકાત લો. APY ફોર્મ ભરો અને ઓટો-ડેબિટ માટે સંમતિ આપો.",
                application_steps: [
                    "1. તમારી બેંક શાખાની મુલાકાત લો જ્યાં તમારું બચત ખાતું છે.",
                    "2. અટલ પેન્શન યોજના રજીસ્ટ્રેશન ફોર્મ ભરો.",
                    "3. આધાર કાર્ડ અને બેંક એકાઉન્ટ નંબર આપો.",
                    "4. માસિક યોગદાન માટે ઓટો-ડેબિટ સેટ કરો.",
                    "5. ફોર્મ સબમિટ કરો અને PRAN કાર્ડ મેળવો."
                ],
                nagrik_support: "નાગરિક AI તમને તમારી ભાષામાં ફોર્મ ભરવામાં મદદ કરી શકે છે.",
                eligibility: ["ભારતીય નાગરિક", "ઉંમર 18-40 વર્ષ", "બચત ખાતું"],
                eligibility_detailed: [
                    "ભારતનો નાગરિક હોવો જોઈએ.",
                    "ઉંમર 18 થી 40 વર્ષની વચ્ચે હોવી જોઈએ.",
                    "માન્ય બચત બેંક ખાતું હોવું જોઈએ.",
                    "આવકવેરા ભરનાર ન હોવા જોઈએ."
                ],
                important_note: "તમારા APY ખાતામાં નોમિનીની વિગતો આપવી ફરજિયાત છે."
            }
        },
        "pm-suraksha-bima-yojana": {
            title: "પ્રધાનમંત્રી સુરક્ષા વીમા યોજના",
            highlight: "₹2 લાખ અકસ્માત કવચ",
            desc: "માત્ર ₹20/વર્ષમાં અકસ્માત મૃત્યુ અને અપંગતા વીમો. (ઉંમર 18-70).",
            long_description: "પ્રધાનમંત્રી સુરક્ષા વીમા યોજના (PMSBY) એક અકસ્માત વીમા યોજના છે જે અકસ્માતને કારણે મૃત્યુ અથવા અપંગતા માટે કવચ પ્રદાન કરે છે. આ એક વર્ષનું કવર છે, જે દર વર્ષે રિન્યુ કરી શકાય છે.",
            modal_content: {
                summary: "અકસ્માત વીમા યોજના જે અકસ્માતને કારણે મૃત્યુ અથવા અપંગતા માટે કવચ પ્રદાન કરે છે.",
                highlights: ["₹2 લાખ કવચ", "પ્રીમિયમ ₹20/વર્ષ", "ઓટો-ડેબિટ સુવિધા"]
            },
            full_page_content: {
                documents: ["આધાર કાર્ડ", "બેંક એકાઉન્ટ વિગતો"],
                process: "તમારી બેંકનો સંપર્ક કરો અને PMSBY સંમતિ ફોર્મ ભરો.",
                application_steps: [
                    "1. તમારી બેંકની મુલાકાત લો.",
                    "2. PMSBY ફોર્મ ભરો.",
                    "3. આધાર કાર્ડની નકલ સબમિટ કરો.",
                    "4. ઓટો-ડેબિટ માટે પરવાનગી આપો.",
                    "5. ખાતરી કરો કે ખાતામાં ₹20 બેલેન્સ છે."
                ],
                nagrik_support: "અમે ક્લેઈમ પ્રક્રિયા સમજવામાં મદદ કરીએ છીએ.",
                eligibility: ["ઉંમર 18-70 વર્ષ", "બચત ખાતું"],
                eligibility_detailed: [
                    "18 થી 70 વર્ષની વયના ભારતીય નાગરિકો.",
                    "બચત ખાતું હોવું જોઈએ.",
                    "ઓટો-ડેબિટ માટે સંમતિ આપવી જોઈએ."
                ],
                important_note: "કવરેજ સમયગાળો 1 જૂનથી 31 મે સુધીનો છે."
            }
        },
        "pm-jeevan-jyoti-bima-yojana": {
            title: "પ્રધાનમંત્રી જીવન જ્યોતિ વીમા યોજના",
            highlight: "₹2 લાખ જીવન કવચ",
            desc: "કોઈપણ કારણસર મૃત્યુ માટે જીવન વીમો. પ્રીમિયમ ₹436/વર્ષ. (ઉંમર 18-50).",
            long_description: "પ્રધાનમંત્રી જીવન જ્યોતિ વીમા યોજના (PMJJBY) એક વર્ષની જીવન વીમા યોજના છે જે કોઈપણ કારણસર મૃત્યુ માટે કવરેજ આપે છે. આ 18 થી 50 વર્ષની વયના લોકો માટે ઉપલબ્ધ છે.",
            modal_content: {
                summary: "એક વર્ષની ટર્મ લાઈફ ઈન્સ્યોરન્સ સ્કીમ, જે કોઈપણ કારણસર મૃત્યુ માટે કવરેજ આપે છે.",
                highlights: ["₹2 લાખ જીવન કવચ", "પ્રીમિયમ ₹436/વર્ષ", "મેડિકલ ચેક-અપની જરૂર નથી"]
            },
            full_page_content: {
                documents: ["આધાર કાર્ડ", "બેંક ખાતું"],
                process: "તમારી બેંક અથવા પોસ્ટ ઓફિસની મુલાકાત લો. PMJJBY ફોર્મ ભરો.",
                application_steps: [
                    "1. બેંક શાખાની મુલાકાત લો.",
                    "2. PMJJBY એનરોલમેન્ટ ફોર્મ ભરો.",
                    "3. ઓટો-ડેબિટ માટે સંમતિ આપો.",
                    "4. આધાર કાર્ડ સબમિટ કરો.",
                    "5. વીમા પ્રમાણપત્ર મેળવો."
                ],
                nagrik_support: "તમે નાગરિક વોઇસ આસિસ્ટન્ટનો ઉપયોગ કરી શકો છો.",
                eligibility: ["ઉંમર 18-50 વર્ષ", "બચત ખાતું"],
                eligibility_detailed: [
                    "18 થી 50 વર્ષની વયના વ્યક્તિઓ.",
                    "બચત ખાતું હોવું જોઈએ.",
                    "ઓટો-ડેબિટ માટે સંમતિ જરૂરી છે."
                ],
                important_note: "રિસ્ક કવર એનરોલમેન્ટના 45 દિવસ પછી શરૂ થાય છે."
            }
        },
        "pm-kisan-samman-nidhi": {
            title: "પ્રધાનમંત્રી કિસાન સન્માન નિધિ",
            highlight: "₹6,000/વર્ષ સહાય",
            desc: "ખેડૂતો માટે 100% સરકારી ભંડોળવાળી આર્થિક સહાય, સીધી બેંક ખાતામાં.",
            long_description: "પ્રધાનમંત્રી કિસાન સન્માન નિધિ (PM-KISAN) ભારત સરકારની 100% ભંડોળવાળી યોજના છે. આ યોજના નાના અને સીમાંત ખેડૂતોને આર્થિક સહાય પૂરી પાડે છે. યોજના હેઠળ વાર્ષિક ₹6,000 ત્રણ હપ્તામાં આપવામાં આવે છે.",
            modal_content: {
                summary: "ખેડૂતોને લઘુત્તમ આવક સહાય તરીકે વર્ષે ₹6,000 સુધી મળે તેવી સરકારી પહેલ.",
                highlights: ["₹6,000 પ્રતિ વર્ષ", "ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર (DBT)", "₹2,000 નો 3 હપ્તા"]
            },
            full_page_content: {
                documents: ["આધાર કાર્ડ", "જમીનના કાગળો", "બેંક પાસબુક"],
                process: "PM કિસાન પોર્ટલ પર ઓનલાઈન નોંધણી કરો.",
                application_steps: [
                    "1. pmkisan.gov.in વેબસાઈટની મુલાકાત લો.",
                    "2. 'New Farmer Registration' પર ક્લિક કરો.",
                    "3. આધાર અને મોબાઈલ નંબર નાખો.",
                    "4. OTP દ્વારા વેરીફાય કરો.",
                    "5. વિગતો ભરો અને સેવ કરો."
                ],
                nagrik_support: "અમારું AI તમારી અરજીનું સ્ટેટસ તપાસી શકે છે.",
                eligibility: ["નાના અને સીમાંત ખેડૂતો", "ભારતીય નાગરિક"],
                eligibility_detailed: [
                    "ખેતીલાયક જમીન ધરાવતા ખેડૂત પરિવારો.",
                    "ભારતીય નાગરિક હોવા જોઈએ.",
                    "સંસ્થાકીય જમીનદારો પાત્ર નથી."
                ],
                important_note: "PMKISAN માટે eKYC ફરજિયાત છે."
            }
        },
        "ayushman-bharat": {
            title: "આયુષ્માન ભારત (PM-JAY)",
            highlight: "₹5 લાખ આરોગ્ય કવચ",
            desc: "ગૌણ અને તૃતિયક સારવાર માટે પ્રતિ વર્ષ કુટુંબ દીઠ મફત આરોગ્ય વીમો.",
            long_description: "આયુષ્માન ભારત પ્રધાનમંત્રી જન આરોગ્ય યોજના (AB-PMJAY) વિશ્વની સૌથી મોટી સરકારી સ્વાસ્થ્ય યોજના છે. તે ગરીબ પરિવારો માટે હોસ્પિટલના ખર્ચને ઘટાડવા માટે કુટુંબ દીઠ વાર્ષિક ₹5 લાખનું કવચ પૂરું પાડે છે.",
            modal_content: {
                summary: "વિશ્વનો સૌથી મોટો સરકારી હેલ્થકેર પ્રોગ્રામ, કુટુંબ દીઠ વર્ષે ₹5 લાખનું કવચ.",
                highlights: ["₹5 લાખ કવચ", "કેશલેસ સારવાર", "સમગ્ર ભારતમાં ઉપયોગી"]
            },
            full_page_content: {
                documents: ["આધાર કાર્ડ", "રેશન કાર્ડ", "આવકનો દાખલો"],
                process: "PMJAY વેબસાઈટ પર પાત્રતા તપાસો અને ગોલ્ડન કાર્ડ મેળવો.",
                application_steps: [
                    "1. pmjay.gov.in પર 'Am I Eligible' તપાસો.",
                    "2. મોબાઇલ નંબરથી લોગીન કરો.",
                    "3. તમારું નામ શોધો.",
                    "4. જો નામ હોય તો સરકારી હોસ્પિટલની મુલાકાત લો.",
                    "5. ગોલ્ડન કાર્ડ મેળવવા માટે KYC કરો."
                ],
                nagrik_support: "નાગરિક તમને તમારી પાત્રતા તપાસવામાં મદદ કરશે.",
                eligibility: ["SECC ડેટાબેઝ મુજબ", "SC/ST પરિવારો"],
                eligibility_detailed: [
                    "SECC 2011 ડેટાબેઝમાં નોંધાયેલ પરિવારો.",
                    "SC/ST કુટુંબો.",
                    "ભૂમિહીન મજૂર પરિવારો."
                ],
                important_note: "કુટુંબના કદ પર કોઈ મર્યાદા નથી."
            }
        },
        "pm-mitra-scheme": {
            title: "પીએમ મિત્ર યોજના",
            highlight: "ટેક્સટાઇલ ઉદ્યોગ વિકાસ",
            desc: "ટેક્સટાઇલ ઉદ્યોગને પ્રોત્સાહન આપવા માટે સંકલિત વિશાળ ટેક્સટાઇલ પાર્ક.",
            long_description: "પીએમ મિત્ર યોજનાનો ઉદ્દેશ્ય વિશ્વ કક્ષાના ઔદ્યોગિક માળખાનું સર્જન કરવાનો છે જે ટેક્સટાઇલ ક્ષેત્રમાં રોકાણને વેગ આપશે. તે 5F વિઝન પર આધારિત છે: ફાર્મ ટુ ફાઇબર ટુ ફેક્ટરી ટુ ફેશન ટુ ફોરેન.",
            modal_content: {
                summary: "વિશ્વ કક્ષાની ઔદ્યોગિક માળખાગત સુવિધા ઊભી કરવા માટે સાત પીએમ મિત્ર પાર્ક સ્થપાશે.",
                highlights: ["વિશ્વ કક્ષાનું ઇન્ફ્રાસ્ટ્રક્ચર", "રોજગાર સર્જન", "FDI પ્રમોશન"]
            },
            full_page_content: {
                documents: ["બિઝનેસ રજીસ્ટ્રેશન", "પ્રોજેક્ટ રિપોર્ટ"],
                process: "રાજ્ય સરકારો અને ખાનગી કંપનીઓ દરખાસ્તો સબમિટ કરે છે.",
                application_steps: [
                    "1. રાજ્ય સરકારો દરખાસ્તો મોકલે છે.",
                    "2. ખાનગી કંપનીઓ ભાગ લે છે.",
                    "3. ટેન્ડર નોટિસ પર નજર રાખો.",
                    "4. બોલી જમા કરો."
                ],
                nagrik_support: "ઉદ્યોગસાહસિકો માટે ટેન્ડર માહિતી પૂરી પાડે છે.",
                eligibility: ["રાજ્ય સરકારો", "ખાનગી કંપનીઓ"],
                eligibility_detailed: [
                    "1000+ એકર જમીન ધરાવતી રાજ્ય સરકારો.",
                    "રોકાણ કરવા તૈયાર ખાનગી કંપનીઓ."
                ],
                important_note: "આ મુખ્યત્વે ઇન્ફ્રાસ્ટ્રક્ચર ડેવલપમેન્ટ સ્કીમ છે."
            }
        },
        "kisan-e-mitra": {
            title: "કિસાન ઈ-મિત્ર",
            highlight: "AI કૃષિ સહાયક",
            desc: "કૃષિ પ્રશ્નો માટે તમારો વર્ચ્યુઅલ સહાયક. બહુભાષી સપોર્ટ સાથે 24/7 ઉપલબ્ધ.",
            long_description: "કિસાન ઈ-મિત્ર એ કૃષિ મંત્રાલય દ્વારા શરૂ કરાયેલ AI-સંચાલિત સહાયક છે. તે ખેડૂતોને યોજનાઓ અને ખેતીની તકનીકો વિશેના પ્રશ્નોના સચોટ જવાબો આપે છે.",
            modal_content: {
                summary: "ખેડૂતોના પ્રશ્નોના જવાબો આપવા માટે રચાયેલ AI-સંચાલિત ચેટબોટ.",
                highlights: ["24/7 ઉપલબ્ધતા", "બહુભાષી સપોર્ટ", "ત્વરિત ઉકેલ"]
            },
            full_page_content: {
                documents: ["મોબાઈલ નંબર"],
                process: "કિસાન ઈ-મિત્ર પોર્ટલનો ઉપયોગ કરો.",
                application_steps: [
                    "1. કિસાન ઈ-મિત્ર પોર્ટલ પર જાઓ.",
                    "2. તમારી ભાષા પસંદ કરો.",
                    "3. મોબાઈલ નંબરથી લોગીન કરો.",
                    "4. તમારો પ્રશ્ન પૂછો."
                ],
                nagrik_support: "નાગરિક તમને સત્તાવાર સ્ત્રોત સુધી પહોંચાડે છે.",
                eligibility: ["બધા ખેડૂતો", "કૃષિ વિદ્યાર્થીઓ"],
                eligibility_detailed: [
                    "ભારતના તમામ ખેડૂતો.",
                    "કૃષિ વિદ્યાર્થીઓ અને સંશોધકો."
                ],
                important_note: "આ સેવા 24x7 ઉપલબ્ધ છે."
            }
        },
    },

    // Marathi
    mr: {
        "atal-pension-yojana": {
            title: "अटल पेन्शन योजना (APY)",
            highlight: "पेन्शन ₹1,000 - ₹5,000/महिना",
            desc: "असंघटित क्षेत्रातील कामगारांसाठी हमी पेन्शन (वय 18-40). मृत्यूनंतर जोडीदारास समान पेन्शन.",
            long_description: "अटल पेन्शन योजना (APY) ही भारत सरकारची एक प्रमुख सामाजिक सुरक्षा योजना आहे, जी प्रामुख्याने असंघटित क्षेत्रातील कामगारांना वृद्धापकाळात आर्थिक सुरक्षा प्रदान करण्यासाठी सुरू करण्यात आली आहे. या योजनेत प्रवेश करणाऱ्या वयाच्या आणि योगदानाच्या आधारावर, वयाच्या 60 वर्षांनंतर सदस्यांना ₹1,000, ₹2,000, ₹3,000, ₹4,000 किंवा ₹5,000 ची मासिक पेन्शन मिळते.",
            modal_content: {
                summary: "असंघटित क्षेत्राला लक्ष्य करणारी सरकार समर्थित पेन्शन योजना. हमी किमान पेन्शन.",
                highlights: ["हमी पेन्शन", "कर लाभ", "सरकारी सह-योगदान"]
            },
            full_page_content: {
                documents: ["आधार कार्ड", "बचत बँक खाते", "मोबाईल नंबर"],
                process: "तुमच्या बँक शाखेत जा आणि APY फॉर्म भरा.",
                application_steps: [
                    "1. तुमच्या बँक शाखेला भेट द्या जिथे तुमचे बचत खाते आहे.",
                    "2. 'अटल पेन्शन योजना नोंदणी फॉर्म' भरा.",
                    "3. आधार क्रमांक आणि बँक खाते क्रमांक द्या.",
                    "4. खात्यातून मासिक योगदानाच्या ऑटो-डेबिटसाठी संमती द्या.",
                    "5. फॉर्म सबमिट करा आणि PRAN कार्ड प्राप्त करा."
                ],
                nagrik_support: "नागरिक AI तुम्हाला फॉर्म भरण्यात मदत करू शकते.",
                eligibility: ["भारतीय नागरिक", "वय 18-40 वर्षे", "बचत खाते"],
                eligibility_detailed: [
                    "अर्जदार भारताचा नागरिक असावा.",
                    "वय 18 ते 40 वर्षांच्या दरम्यान असावे.",
                    "वैध बचत बँक खाते असावे.",
                    "नवीन नियमांनुसार (1 ऑक्टोबर 2022 पासून) अर्जदार आयकरदाता नसावा."
                ],
                important_note: "पेन्शनची रक्कम तुमच्या योगदानावर अवलंबून असते."
            }
        },
        "pm-suraksha-bima-yojana": {
            title: "प्रधानमंत्री सुरक्षा विमा योजना",
            highlight: "₹2 लाख अपघात विमा",
            desc: "वर्षाला फक्त ₹20 मध्ये परवडणारा अपघात मृत्यू आणि अपंगत्व विमा. (वय 18-70).",
            long_description: "प्रधानमंत्री सुरक्षा विमा योजना (PMSBY) ही एक अपघात विमा योजना आहे जी अपघाती मृत्यू आणि अपंगत्वासाठी सुरक्षा कवच प्रदान करते. ही योजना दरवर्षी नूतनीकरण करावी लागते आणि ती 18 ते 70 वयोगटातील लोकांसाठी उपलब्ध आहे.",
            modal_content: {
                summary: "अपघाती मृत्यू आणि अपंगत्वासाठी संरक्षण देणारी अपघात विमा योजना.",
                highlights: ["₹2 लाख संरक्षण", "प्रीमियम ₹20/वर्ष", "ऑटो-डेबिट सुविधा"]
            },
            full_page_content: {
                documents: ["आधार कार्ड", "बँक खाते तपशील"],
                process: "तुमच्या बँकेशी संपर्क साधा आणि PMSBY संमती फॉर्म भरा.",
                application_steps: [
                    "1. तुमची बँक किंवा पोस्ट ऑफिसमध्ये जा.",
                    "2. PMSBY नोंदणी फॉर्म भरा.",
                    "3. आधार कार्ड जोडा.",
                    "4. तुमच्या खात्यातून ₹20 कापण्यासाठी संमती द्या.",
                    "5. नोंदणीची पावती घ्या."
                ],
                nagrik_support: "विमा दावा प्रक्रियेसाठी आम्ही मदत करतो.",
                eligibility: ["वय 18-70 वर्षे", "बचत खाते"],
                eligibility_detailed: [
                    "वय 18 ते 70 वर्षांच्या दरम्यान असावे.",
                    "बँक खाते असावे लागेल.",
                    "योजनेसाठी ऑटो-डेबिट संमती आवश्यक आहे."
                ],
                important_note: "विमा कालावधी 1 जून ते 31 मे पर्यंत असतो."
            }
        },
        "pm-jeevan-jyoti-bima-yojana": {
            title: "प्रधानमंत्री जीवन ज्योती विमा योजना",
            highlight: "₹2 लाख जीवन विमा",
            desc: "कोणत्याही कारणामुळे मृत्यू झाल्यास टर्म लाइफ इन्शुरन्स. प्रीमियम ₹436/वर्ष. (वय 18-50).",
            long_description: "प्रधानमंत्री जीवन ज्योती विमा योजना (PMJJBY) ही एक वर्षाची टर्म लाइफ इन्शुरन्स योजना आहे. ही योजना कोणत्याही कारणामुळे होणाऱ्या मृत्यूस संरक्षण देते. हे 18 ते 50 वयोगटासाठी उपलब्ध आहे.",
            modal_content: {
                summary: "एक वर्षाची टर्म लाइफ इन्शुरन्स योजना, दरवर्षी नूतनीकरणयोग्य.",
                highlights: ["₹2 लाख जीवन विमा", "प्रीमियम ₹436/वर्ष", "वैद्यकीय तपासणी नाही"]
            },
            full_page_content: {
                documents: ["आधार कार्ड", "बँक खाते"],
                process: "तुमच्या बँकेत जा आणि PMJJBY फॉर्म सबमिट करा.",
                application_steps: [
                    "1. बँकेच्या शाखेला भेट द्या.",
                    "2. PMJJBY नोंदणीसाठी फॉर्म भरा.",
                    "3. आधार कार्ड आणि बँक पासबुक जोडा.",
                    "4. प्रीमियमसाठी ऑटो-डेबिट सेट करा.",
                    "5. सहभाग प्रमाणपत्र मिळवा."
                ],
                nagrik_support: "तुम्ही नागरिक व्हॉइस असिस्टंटचा वापर करू शकता.",
                eligibility: ["वय 18-50 वर्षे", "बचत खाते"],
                eligibility_detailed: [
                    "18 ते 50 वयोगटातील व्यक्ती.",
                    "बचत बँक खाते आवश्यक.",
                    "ऑटो-डेबिट संमती आवश्यक."
                ],
                important_note: "नोंदणीच्या 45 दिवसांनंतर जोखीम संरक्षण सुरू होते (अपघात मृत्यू वगळता)."
            }
        },
        "pm-kisan-samman-nidhi": {
            title: "प्रधानमंत्री किसान सन्मान निधी",
            highlight: "₹6,000/वर्ष मदत",
            desc: "शेतकऱ्यांसाठी 100% सरकारी अर्थसहाय्य, थेट बँक खात्यात जमा.",
            long_description: "प्रधानमंत्री किसान सन्मान निधी (PM-KISAN) ही भारत सरकारची योजना आहे जी सर्व जमीनधारक शेतकरी कुटुंबांना आर्थिक मदत पुरवते. या योजनेअंतर्गत प्रति वर्ष ₹6000 तीन समान हप्त्यांमध्ये दिले जातात.",
            modal_content: {
                summary: "शेतकऱ्यांना किमान उत्पन्न आधार म्हणून वर्षाला ₹6,000 पर्यंत मिळणारी सरकारी योजना.",
                highlights: ["₹6,000 प्रति वर्ष", "थेट लाभ हस्तांतरण (DBT)", "₹2,000 चे 3 हप्ते"]
            },
            full_page_content: {
                documents: ["आधार कार्ड", "जमिनीचे 7/12 उतारे", "बँक पासबुक"],
                process: "PM-Kisan पोर्टलवर ऑनलाइन नोंदणी करा.",
                application_steps: [
                    "1. pmkisan.gov.in वर जा.",
                    "2. 'New Farmer Registration' वर क्लिक करा.",
                    "3. आधार क्रमांक आणि मोबाईल नंबर टाका.",
                    "4. OTP द्वारे पडताळणी करा.",
                    "5. जमिनीची व इतर माहिती भरून सबमिट करा."
                ],
                nagrik_support: "नागरिक AI तुमचा अर्ज तपासायला मदत करेल.",
                eligibility: ["अल्पभूधारक शेतकरी", "भारतीय नागरिक"],
                eligibility_detailed: [
                    "जमीनधारक शेतकरी कुटुंबे.",
                    "संस्थात्मक जमीनधारक पात्र नाहीत.",
                    "कर भरणारे शेतकरी पात्र नाहीत."
                ],
                important_note: "PMKISAN साठी eKYC करणे अनिवार्य आहे."
            }
        },
        "ayushman-bharat": {
            title: "आयुष्यमान भारत (PM-JAY)",
            highlight: "₹5 लाख आरोग्य कवच",
            desc: "दुय्यम आणि तृतीयक उपचारांसाठी प्रति कुटुंब प्रति वर्ष मोफत आरोग्य कवच.",
            long_description: "आयुष्यमान भारत - प्रधानमंत्री जन आरोग्य योजना (PM-JAY) ही जगातील सर्वात मोठी आरोग्य विमा योजना आहे. ही योजना गरीब आणि असुरक्षित कुटुंबांना दुय्यम आणि तृतीयक रुग्णालयात दाखल करण्यासाठी वर्षाला ₹5 लाखांपर्यंतचे कव्हर प्रदान करते.",
            modal_content: {
                summary: "जगातील सर्वात मोठी सरकारी आरोग्य योजना, प्रति कुटुंब ₹5 लाखांचे संरक्षण.",
                highlights: ["₹5 लाख संरक्षण", "कॅशलेस उपचार", "संपूर्ण भारतात पोर्टेबल"]
            },
            full_page_content: {
                documents: ["आधार कार्ड", "रेशन कार्ड", "उत्पन्नाचा दाखला"],
                process: "पात्रता तपासा आणि जवळच्या पॅनेल केलेल्या रुग्णालयात जा.",
                application_steps: [
                    "1. pmjay.gov.in वर पात्रता तपासा ('Am I Eligible').",
                    "2. आधार किंवा रेशन कार्ड घेऊन हॉस्पिटलमध्ये जा.",
                    "3. आरोग्य मित्र तुम्हाला मदत करतील.",
                    "4. मोफत उपचारासाठी गोल्डन कार्ड मिळवा."
                ],
                nagrik_support: "नागरिक तुम्हाला जवळचे हॉस्पिटल शोधण्यात मदत करेल.",
                eligibility: ["SECC डेटाबेस नुसार", "SC/ST कुटुंबे"],
                eligibility_detailed: [
                    "SECC 2011 डेटाबेसमध्ये समाविष्ट कुटुंबे.",
                    "SC/ST आणि भूमिहीन मजुरांची कुटुंबे."
                ],
                important_note: "कुटुंबाच्या आकारावर कोणतीही मर्यादा नाही."
            }
        },
        "pm-mitra-scheme": {
            title: "पीएम मित्र योजना",
            highlight: "वस्त्रोद्योग विकास",
            desc: "वस्त्रोद्योगाला चालना देण्यासाठी एकात्मिक कापड उद्याने (Parks).",
            long_description: "पीएम मित्र (PM MITRA) योजना वस्त्रोद्योग क्षेत्रासाठी जागतिक दर्जाच्या पायाभूत सुविधा निर्माण करण्यासाठी आहे. याचे उद्दिष्ट भारताला कापड उत्पादनाचे जागतिक केंद्र बनवणे आहे.",
            modal_content: {
                summary: "जागतिक दर्जाच्या पायाभूत सुविधा निर्माण करण्यासाठी सात पीएम मित्र पार्क उभारले जातील.",
                highlights: ["जागतिक दर्जाच्या सुविधा", "रोजगार निर्मिती", "गुंतवणूक वाढ"]
            },
            full_page_content: {
                documents: ["उद्योग नोंदणी", "प्रकल्प अहवाल"],
                process: "राज्य सरकारे आणि खाजगी भागीदारांकडून प्रस्ताव मागवले जातात.",
                application_steps: [
                    "1. राज्य सरकारे प्रस्तावासह अर्ज करतात.",
                    "2. एसपीव्ही (SPV) ची स्थापना केली जाते.",
                    "3. मास्टर डेव्हलपरची निवड केली जाते.",
                    "4. उद्योगांना प्लॉट वाटप केले जातात."
                ],
                nagrik_support: "ही योजना मुख्यत्वे मोठ्या उद्योगांसाठी आहे.",
                eligibility: ["राज्य सरकारे", "खाजगी कंपन्या"],
                eligibility_detailed: [
                    "ज्या राज्यांकडे 1000+ एकर सलग जमीन उपलब्ध आहे.",
                    "वस्त्रोद्योगात गुंतवणूक करण्यास इच्छुक खाजगी कंपन्या."
                ],
                important_note: "ही एक पायाभूत सुविधा विकास योजना आहे."
            }
        },
        "kisan-e-mitra": {
            title: "किसान ई-मित्र",
            highlight: "AI कृषी सहाय्यक",
            desc: "शेतीविषयक प्रश्नांसाठी तुमचा व्हर्च्युअल सहाय्यक. बहुभाषिक समर्थनासह 24/7 उपलब्ध.",
            long_description: "किसान ई-मित्र हे कृषी मंत्रालयाने सुरू केलेले एक AI आधारित चॅटबॉट आहे. हे शेतकऱ्यांना त्यांच्या भाषेत सरकारी योजना आणि कृषी तंत्रांबद्दल माहिती पुरवते.",
            modal_content: {
                summary: "शेतकऱ्यांच्या प्रश्नांची उत्तरे देण्यासाठी डिझाइन केलेला AI चॅटबॉट.",
                highlights: ["24/7 उपलब्धता", "बहुभाषिक समर्थन", "त्वरित उत्तरे"]
            },
            full_page_content: {
                documents: ["मोबाईल नंबर"],
                process: "किसान ई-मित्र पोर्टलवर लॉग इन करा.",
                application_steps: [
                    "1. किसान ई-मित्र वेबसाईटवर जा.",
                    "2. तुमची भाषा निवडा (उदा. मराठी).",
                    "3. तुमचा प्रश्न टाइप करा किंवा बोला.",
                    "4. त्वरित समाधान मिळवा."
                ],
                nagrik_support: "हे एक स्वयंचलित AI साधन आहे.",
                eligibility: ["सर्व शेतकरी", "कृषी विद्यार्थी"],
                eligibility_detailed: [
                    "भारतातील कोणताही शेतकरी.",
                    "शेतीमध्ये रस असणारा कोणीही."
                ],
                important_note: "हे पूर्णपणे मोफत आहे."
            }
        },
    },

    // Bengali
    bn: {
        "atal-pension-yojana": {
            title: "অটল পেনশন যোজনা",
            highlight: "পেনশন ₹1,000 - ₹5,000/মাস",
            desc: "অসংগঠিত খাতের কর্মীদের জন্য নিশ্চিত পেনশন (বয়স 18-40)। মৃত্যুর পর স্বামী/স্ত্রী একই পেনশন পাবেন।",
            long_description: "অটল পেনশন যোজনা (APY) ভারত সরকারের একটি সামাজিক নিরাপত্তা প্রকল্প। এটি মূলত অসংগঠিত খাতের শ্রমিকদের বৃদ্ধ বয়সে আর্থিক সুরক্ষা দেওয়ার জন্য তৈরি। এই স্কিমে 60 বছর বয়সের পর গ্রাহকরা প্রতি মাসে ₹1,000 থেকে ₹5,000 পর্যন্ত নিশ্চিত পেনশন পান।",
            modal_content: {
                summary: "অসংগঠিত খাতের জন্য সরকার সমর্থিত পেনশন প্রকল্প।",
                highlights: ["নিশ্চিত পেনশন", "কর সুবিধা", "সরকারি অবদান"]
            },
            full_page_content: {
                documents: ["আধার কার্ড", "সেভিংস ব্যাঙ্ক অ্যাকাউন্ট", "মোবাইল নম্বর"],
                process: "আপনার ব্যাঙ্কে যান এবং APY ফর্ম পূরণ করুন।",
                application_steps: [
                    "1. আপনার ব্যাঙ্ক বা পোস্ট অফিসে যান যেখানে সেভিংস অ্যাকাউন্ট আছে।",
                    "2. 'অটল পেনশন যোজনা রেজিস্ট্রেশন ফর্ম' পূরণ করুন।",
                    "3. আধার এবং ব্যাঙ্ক অ্যাকাউন্ট নম্বর প্রদান করুন।",
                    "4. মাসিক কন্ট্রিবিউশনের জন্য অটো-ডেবিট অনুমোদন করুন।",
                    "5. ফর্ম জমা দিন এবং PRAN কার্ড সংগ্রহ করুন।"
                ],
                nagrik_support: "নাগরিক AI আপনাকে ফর্ম পূরণে সাহায্য করতে পারে।",
                eligibility: ["ভারতীয় নাগরিক", "বয়স 18-40 বছর", "সেভিংস অ্যাকাউন্ট"],
                eligibility_detailed: [
                    "ভারতের নাগরিক হতে হবে।",
                    "বয়স 18 থেকে 40 বছরের মধ্যে হতে হবে।",
                    "একটি বৈধ ব্যাঙ্ক অ্যাকাউন্ট থাকতে হবে।",
                    "আয়কর প্রদানকারী হওয়া যাবে না (অক্টোবর 1, 2022 থেকে)।"
                ],
                important_note: "পেনশনের পরিমাণ আপনার অবদানের ওপর নির্ভর করে।"
            }
        },
        "pm-suraksha-bima-yojana": {
            title: "প্রধানমন্ত্রী সুরক্ষা বিমা যোজনা",
            highlight: "₹2 লক্ষ দুর্ঘটনা বিমা",
            desc: "মাত্র ₹20/বছরে দুর্ঘটনাজনিত মৃত্যু ও অক্ষমতা বিমা। (বয়স 18-70)।",
            long_description: "প্রধানমন্ত্রী সুরক্ষা বিমা যোজনা (PMSBY) একটি দুর্ঘটনা বিমা স্কিম। এটি দুর্ঘটনাজনিত মৃত্যু বা অক্ষমতার ক্ষেত্রে আর্থিক সুরক্ষা দেয়। এটি প্রতি বছর নবায়নযোগ্য এবং প্রিমিয়াম খুব কম।",
            modal_content: {
                summary: "একটি দুর্ঘটনা বিমা প্রকল্প যা দুর্ঘটনাজনিত মৃত্যু এবং অক্ষমতা কভার করে।",
                highlights: ["₹2 লক্ষ কভার", "প্রিমিয়াম ₹20/বছর", "অটো-ডেবিট সুবিধা"]
            },
            full_page_content: {
                documents: ["আধার কার্ড", "ব্যাঙ্ক অ্যাকাউন্ট"],
                process: "আপনার ব্যাঙ্কে এই স্কিমের জন্য আবেদন করুন।",
                application_steps: [
                    "1. আপনার ব্যাঙ্কের শাখায় যান।",
                    "2. PMSBY সম্মতি ফর্ম পূরণ করুন।",
                    "3. আধার কার্ড জমা দিন।",
                    "4. প্রিমিয়াম অটো-ডেবিট করার অনুমতি দিন।",
                    "5. নিশ্চিতকরণ স্লিপ নিন।"
                ],
                nagrik_support: "আমরা আপনাকে দাবি প্রক্রিয়া বুঝতে সাহায্য করি।",
                eligibility: ["বয়স 18-70 বছর", "সেভিংস অ্যাকাউন্ট"],
                eligibility_detailed: [
                    "18 থেকে 70 বছর বয়সী ভারতীয় নাগরিক।",
                    "অংশগ্রহণকারী ব্যাঙ্কে একটি সেভিংস অ্যাকাউন্ট থাকতে হবে।",
                    "অটো-ডেবিট সম্মতি দিতে হবে।"
                ],
                important_note: "পলিসি কভারেজ 1 জুন থেকে 31 মে পর্যন্ত।"
            }
        },
        "pm-jeevan-jyoti-bima-yojana": {
            title: "প্রধানমন্ত্রী জীবন জ্যোতি বিমা যোজনা",
            highlight: "₹2 লক্ষ জীবন বিমা",
            desc: "যেকোনো কারণে মৃত্যুর জন্য টার্ম লাইফ ইন্স্যুরেন্স। প্রিমিয়াম ₹436/বছর। (বয়স 18-50)।",
            long_description: "প্রধানমন্ত্রী জীবন জ্যোতি বিমা যোজনা (PMJJBY) হল একটি এক বছরের জীবন বিমা প্রকল্প। এটি বিমাকৃত ব্যক্তির যেকোনো কারণে মৃত্যুর ক্ষেত্রে নমিনিকে ₹2 লক্ষ টাকা প্রদান করে।",
            modal_content: {
                summary: "এক বছরের মেয়াদী জীবন বিমা প্রকল্প, প্রতি বছর নবায়নযোগ্য।",
                highlights: ["₹2 লক্ষ জীবন বিমা", "প্রিমিয়াম ₹436/বছর", "মেডিকেল চেক-আপ নেই"]
            },
            full_page_content: {
                documents: ["আধার কার্ড", "ব্যাঙ্ক পাসবুক"],
                process: "ব্যাঙ্কে গিয়ে PMJJBY ফর্ম জমা দিন।",
                application_steps: [
                    "1. ব্যাঙ্কে যান।",
                    "2. PMJJBY এনরোলমেন্ট ফর্ম পূরণ করুন।",
                    "3. আধার লিঙ্ক করুন।",
                    "4. অটো-ডেবিট সেট আপ করুন।",
                    "5. ইনস্যুরেন্স সার্টিফিকেট নিন।"
                ],
                nagrik_support: "নাগরিক ভয়েস অ্যাসিস্ট্যান্ট ব্যবহার করতে পারেন।",
                eligibility: ["বয়স 18-50 বছর", "ব্যাঙ্ক অ্যাকাউন্ট"],
                eligibility_detailed: [
                    "18 থেকে 50 বছর বয়সী অ্যাকাউন্ট হোল্ডার।",
                    "আধার কার্ড ব্যাঙ্কের সাথে লিঙ্ক করা আবশ্যক।"
                ],
                important_note: "জয়েন করার 45 দিন পর থেকে কভারেজ শুরু হয়।"
            }
        },
        "pm-kisan-samman-nidhi": {
            title: "প্রধানমন্ত্রী কিষাণ সম্মান নিধি",
            highlight: "₹6,000/বছর সহায়তা",
            desc: "কৃষকদের জন্য 100% সরকারি আর্থিক সহায়তা, সরাসরি ব্যাঙ্ক অ্যাকাউন্টে।",
            long_description: "প্রধানমন্ত্রী কিষাণ সম্মান নিধি (PM-KISAN) হল কৃষকদের আয় বাড়ানোর জন্য একটি কেন্দ্রীয় স্কিম। বছরে ₹6000 তিনটি সমান কিস্তিতে কৃষকদের ব্যাঙ্ক অ্যাকাউন্টে পাঠানো হয়।",
            modal_content: {
                summary: "কৃষকদের ন্যূনতম আয় নিশ্চিত করতে বছরে ₹6,000 পর্যন্ত সহায়তা।",
                highlights: ["₹6,000 প্রতি বছর", "সরাসরি সুবিধা স্থানান্তর (DBT)", "₹2,000 এর 3 কিস্তি"]
            },
            full_page_content: {
                documents: ["আধার কার্ড", "জমির দলিল", "ব্যাঙ্ক অ্যাকাউন্ট"],
                process: "পিএম কিষাণ পোর্টালে নিবন্ধন করুন।",
                application_steps: [
                    "1. pmkisan.gov.in ওয়েবসাইট দেখুন।",
                    "2. 'New Farmer Registration'-এ ক্লিক করুন।",
                    "3. আধার নম্বর এবং মোবাইল দিন।",
                    "4. জমির বিবরণ পূরণ করুন।",
                    "5. সাবমিট করুন।"
                ],
                nagrik_support: "আমাদের AI আপনার আবেদনের স্থিতি পরীক্ষা করতে পারে।",
                eligibility: ["ক্ষুদ্র ও প্রান্তিক কৃষক", "ভারতীয় নাগরিক"],
                eligibility_detailed: [
                    "চাষযোগ্য জমির মালিক কৃষক পরিবার।",
                    "প্রাতিষ্ঠানিক জমির মালিকরা যোগ্য নন।"
                ],
                important_note: "PMKISAN-এর জন্য eKYC বাধ্যতামূলক।"
            }
        },
        "ayushman-bharat": {
            title: "আয়ুষ্মান ভারত (PM-JAY)",
            highlight: "₹5 লক্ষ স্বাস্থ্য কভার",
            desc: "মাধ্যমিক ও তৃতীয় পর্যায়ের চিকিৎসার জন্য প্রতি পরিবারকে বছরে বিনামূল্যে স্বাস্থ্য কভারেজ।",
            long_description: "আয়ুষ্মান ভারত প্রধানমন্ত্রী জন আরোগ্য যোজনা (PM-JAY) বিশ্বের বৃহত্তম স্বাস্থ্য নিশ্চয়তা প্রকল্প। এটি যোগ্য পরিবারগুলোকে বছরে ₹5 লক্ষ পর্যন্ত বিনামূল্যে চিকিৎসা সুবিধা দেয়।",
            modal_content: {
                summary: "বিশ্বের বৃহত্তম সরকারি স্বাস্থ্যসেবা কর্মসূচি, পরিবার প্রতি বছরে ₹5 লক্ষ কভার।",
                highlights: ["₹5 লক্ষ কভার", "ক্যাশলেস চিকিৎসা", "সারা ভারতে ব্যবহারযোগ্য"]
            },
            full_page_content: {
                documents: ["আধার কার্ড", "রেশন কার্ড"],
                process: "PMJAY পোর্টালে যোগ্যতা যাচাই করুন এবং হাসপাতালে যান।",
                application_steps: [
                    "1. pmjay.gov.in-এ 'Am I Eligible' চেক করুন।",
                    "2. আপনার মোবাইল নম্বর দিয়ে লগ ইন করুন।",
                    "3. তালিকাভুক্ত হাসপাতালে যান।",
                    "4. আরোগ্য মিত্রের সহায়তায় গোল্ডেন কার্ড তৈরি করুন।"
                ],
                nagrik_support: "নাগরিক আপনাকে নিকটতম হাসপাতাল খুঁজে পেতে সাহায্য করবে।",
                eligibility: ["SECC তালিকাভুক্ত পরিবার", "SC/ST"],
                eligibility_detailed: [
                    "সামাজিক-অর্থনৈতিক জাতিশুমারি (SECC) 2011 ডেটাবেস অনুযায়ী চিহ্নিত পরিবার।",
                    "SC/ST পরিবার এবং ভূমিহীন শ্রমিক পরিবার।"
                ],
                important_note: "পরিবারের সদস্য সংখ্যার কোনো সীমা নেই।"
            }
        },
        "pm-mitra-scheme": {
            title: "পিএম মিত্র স্কিম",
            highlight: "বস্ত্র শিল্প উন্নয়ন",
            desc: "বস্ত্র শিল্পের বিকাশের জন্য সমন্বিত টেক্সটাইল পার্ক।",
            long_description: "পিএম মিত্র (PM MITRA) স্কিমটি টেক্সটাইল শিল্পের জন্য একটি আধুনিক বাস্তুতন্ত্র তৈরি করার জন্য ডিজাইন করা হয়েছে। 'ফার্ম টু ফাইবার টু ফ্যাক্টরি টু ফ্যাশন টু ফরেন' (5F) ভিশন নিয়ে এটি কাজ করে।",
            modal_content: {
                summary: "বিশ্বমানের শিল্প পরিকাঠামো তৈরির জন্য সাতটি পিএম মিত্র পার্ক স্থাপন করা হবে।",
                highlights: ["বিশ্বমানের পরিকাঠামো", "কর্মসংস্থান সৃষ্টি", "বিনিয়োগ বৃদ্ধি"]
            },
            full_page_content: {
                documents: ["ব্যবসা নিবন্ধন", "প্রজেক্ট রিপোর্ট"],
                process: "রাজ্য সরকার এবং বেসরকারি সংস্থাগুলোর মাধ্যমে বাস্তবায়ন।",
                application_steps: [
                    "1. রাজ্য সরকার প্রস্তাব জমা দেয়।",
                    "2. একটি SPV (Special Purpose Vehicle) গঠন করা হয়।",
                    "3. মাস্টার ডেভেলপার নির্বাচন করা হয়।",
                    "4. ইউনিট স্থাপনের জন্য আবেদন করুন।"
                ],
                nagrik_support: "শিল্পোদ্যোগীদের জন্য তথ্য প্রদান করে।",
                eligibility: ["রাজ্য সরকার", "বেসরকারি সংস্থা"],
                eligibility_detailed: [
                    "যেসব রাজ্যে 1000+ একর জমি আছে।",
                    "টেক্সটাইল সেক্টোরে বিনিয়োগকারী সংস্থা।"
                ],
                important_note: "এটি একটি অবকাঠামো উন্নয়ন প্রকল্প।"
            }
        },
        "kisan-e-mitra": {
            title: "কিষাণ ই-মিত্র",
            highlight: "AI কৃষি সহায়ক",
            desc: "কৃষি প্রশ্নের জন্য আপনার ভার্চুয়াল সহকারী। বহুভাষিক সহায়তা সহ 24/7 উপলব্ধ।",
            long_description: "কিষাণ ই-মিত্র হল একটি এআই-চালিত চ্যাটবট যা কৃষকদের বিভিন্ন সরকারি স্কিম এবং কৃষি সংক্রান্ত প্রশ্নের উত্তর দেয়। এটি একাধিক ভাষায় কাজ করে।",
            modal_content: {
                summary: "কৃষকদের প্রশ্নের উত্তর দেওয়ার জন্য তৈরি একটি AI চ্যাটবট।",
                highlights: ["24/7 উপলব্ধতা", "বহুভাষিক সমর্থন", "তাৎক্ষণিক উত্তর"]
            },
            full_page_content: {
                documents: ["মোবাইল নম্বর"],
                process: "কিষাণ ই-মিত্র পোর্টালে যান।",
                application_steps: [
                    "1. কিষাণ ই-মিত্র ওয়েবসাইটে যান।",
                    "2. ভাষা নির্বাচন করুন (যেমন বাংলা)।",
                    "3. আপনার প্রশ্ন টাইপ করুন বা ভয়েস রেকর্ড করুন।",
                    "4. সমাধান পান।"
                ],
                nagrik_support: "এটি একটি স্বয়ংক্রিয় পরিষেবা।",
                eligibility: ["সকল কৃষক", "ছাত্র"],
                eligibility_detailed: [
                    "ভারতের যেকোনো কৃষক।",
                    "কৃষি ও প্রযুক্তি নিয়ে আগ্রহী ব্যক্তিরা।"
                ],
                important_note: "এটি সম্পূর্ণ বিনামূল্যে।"
            }
        },
    },

    // Tamil
    ta: {
        "atal-pension-yojana": {
            title: "அடல் பென்ஷன் யோஜனா",
            highlight: "ஓய்வூதியம் ₹1,000 - ₹5,000/மாதம்",
            desc: "அமைப்புசாரா தொழிலாளர்களுக்கு உத்தரவாதமான ஓய்வூதியம் (வயது 18-40).",
            long_description: "அடல் பென்ஷன் யோஜனா (APY) என்பது இந்திய அரசாங்கத்தின் ஒரு முதன்மை சமூகப் பாதுகாப்புத் திட்டமாகும், இது அமைப்புசாரா துறையில் உள்ள தொழிலாளர்களுக்கு அவர்களின் முதுமையில் ஒரு பாதுகாப்பு வலையை வழங்குவதை நோக்கமாகக் கொண்டுள்ளது. சந்தாதாரர்கள் தங்கள் பங்களிப்புகளின் அடிப்படையில், 60 வயதில் மாதம் ₹1,000, ₹2,000, ₹3,000, ₹4,000, அல்லது ₹5,000 என்ற குறைந்தபட்ச ஓய்வூதியத்தைப் பெறுவார்கள்.",
            modal_content: {
                summary: "அமைப்புசாரா துறையை இலக்காகக் கொண்ட அரசு ஆதரவு ஓய்வூதியத் திட்டம்.",
                highlights: ["உத்தரவாதமான ஓய்வூதியம்", "வரி சலுகைகள்", "அரசு பங்களிப்பு"]
            },
            full_page_content: {
                documents: ["ஆதார் அட்டை", "வங்கி கணக்கு"],
                process: "உங்கள் வங்கி கிளை அல்லது அஞ்சல் அலுவலகத்திற்குச் செல்லவும்.",
                application_steps: [
                    "1. உங்கள் சேமிப்பு கணக்கு உள்ள வங்கி கிளை அல்லது அஞ்சல் அலுவலகத்திற்குச் செல்லவும்.",
                    "2. 'அடல் பென்ஷன் யோஜனா பதிவு படிவத்தை' கேட்கவும்.",
                    "3. உங்கள் வங்கி கணக்கு எண் மற்றும் ஆதார் எண் விவரங்களை நிரப்பவும்.",
                    "4. மாதாந்திர பங்களிப்பை தானாகப் பற்றுவைக்க வங்கிக்கு அங்கீகாரம் அளிக்கவும்.",
                    "5. படிவத்தை சமர்ப்பிக்கவும். உங்களுக்கு PRAN அட்டை கிடைக்கும்."
                ],
                nagrik_support: "நாக்ரிக் AI உங்களுக்கு படிவத்தை நிரப்ப உதவும்.",
                eligibility: ["இந்திய குடிமகன்", "வயது 18-40", "சேமிப்பு கணக்கு"],
                eligibility_detailed: [
                    "இந்திய குடிமகனாக இருக்க வேண்டும்.",
                    "வயது வரம்பு: 18 முதல் 40 வயதுக்குள் இருக்க வேண்டும்.",
                    "செல்லுபடியாகும் சேமிப்பு வங்கி கணக்கு வைத்திருக்க வேண்டும்.",
                    "வருமான வரி செலுத்துபவராக இருக்கக்கூடாது."
                ],
                important_note: "ஓய்வூதியத் தொகை உங்கள் பங்களிப்பைப் பொறுத்தது."
            }
        },
        "pm-suraksha-bima-yojana": {
            title: "பிரதம மந்திரி சுரக்ஷா பீமா யோஜனா",
            highlight: "₹2 லட்சம் விபத்து காப்பீடு",
            desc: "ஆண்டுக்கு ₹20 மட்டுமே பிரீமியத்தில் விபத்து இறப்பு மற்றும் ஊன முற்றோர் காப்பீடு.",
            long_description: "பிரதம மந்திரி சுரக்ஷா பீமா யோஜனா (PMSBY) என்பது விபத்து காரணமாக இறப்பு அல்லது ஊனத்திற்கு பாதுகாப்பு அளிக்கும் விபத்து காப்பீட்டுத் திட்டமாகும். இது 18 முதல் 70 வயதுடையவர்களுக்கு கிடைக்கும் மற்றும் ஆண்டுதோறும் புதுப்பிக்கத்தக்கது.",
            modal_content: {
                summary: "விபத்து காரணமாக இறப்பு அல்லது ஊனத்திற்கு பாதுகாப்பு அளிக்கும் விபத்து காப்பீட்டுத் திட்டம்.",
                highlights: ["₹2 லட்சம் கவர்", "பிரீமியம் ₹20/ஆண்டு", "தானியங்கி டெபிட்"]
            },
            full_page_content: {
                documents: ["ஆதார் அட்டை", "வங்கி விவரங்கள்"],
                process: "உங்கள் வங்கியை அணுகி PMSBY படிவத்தை நிரப்பவும்.",
                application_steps: [
                    "1. உங்கள் வங்கிக்குச் செல்லவும்.",
                    "2. PMSBY பதிவு படிவத்தை நிரப்பவும்.",
                    "3. ஆதார் அட்டையை இணைக்கவும்.",
                    "4. ஆட்டோ-டெபிட் வசதியை இயக்கவும்.",
                    "5. ஒப்புகைச் சீட்டைப் பெறவும்."
                ],
                nagrik_support: "காப்பீட்டு கோரிக்கை செயல்முறையை நாங்கள் விளக்குகிறோம்.",
                eligibility: ["வயது 18-70", "வங்கி கணக்கு"],
                eligibility_detailed: [
                    "18 முதல் 70 வயது வரையிலான இந்திய குடிமக்கள்.",
                    "வங்கி கணக்கு அவசியம்.",
                    "ஆட்டோ-டெபிட் சம்மதம் தேவை."
                ],
                important_note: "காப்பீடு காலம் ஜூன் 1 முதல் மே 31 வரை."
            }
        },
        "pm-jeevan-jyoti-bima-yojana": {
            title: "பிரதம மந்திரி ஜீவன் ஜோதி பீமா யோஜனா",
            highlight: "₹2 லட்சம் ஆயுள் காப்பீடு",
            desc: "எந்த காரணத்திற்காகவும் இறப்பிற்கு ஆயுள் காப்பீடு. பிரீமியம் ₹436/ஆண்டு.",
            long_description: "பிரதம மந்திரி ஜீவன் ஜோதி பீமா யோஜனா (PMJJBY) என்பது ஒரு வருட ஆயுள் காப்பீட்டுத் திட்டமாகும். இது எந்த காரணத்திற்காகவும் இறப்பிற்கு ₹2 லட்சம் பாதுகாப்பு வழங்குகிறது. 18 முதல் 50 வயதுடையவர்கள் சேரலாம்.",
            modal_content: {
                summary: "ஒவ்வொரு ஆண்டும் புதுப்பிக்கக்கூடிய ஒரு வருட ஆயுள் காப்பீட்டுத் திட்டம்.",
                highlights: ["₹2 லட்சம் காப்பீடு", "பிரீமியம் ₹436/ஆண்டு", "மருத்துவ பரிசோதனை இல்லை"]
            },
            full_page_content: {
                documents: ["ஆதார் அட்டை", "வங்கி பாஸ்புக்"],
                process: "PMJJBY திட்டத்தில் சேர வங்கியை அணுகவும்.",
                application_steps: [
                    "1. வங்கி கிளையை அணுகவும்.",
                    "2. PMJJBY விண்ணப்பத்தை நிரப்பவும்.",
                    "3. ஆதார் விவரங்களை இணைக்கவும்.",
                    "4. பிரீமியம் செலுத்த ஒப்புதல் அளிக்கவும்.",
                    "5. சான்றிதழைப் பெறவும்."
                ],
                nagrik_support: "நாக்ரிக் வாய்ஸ் அசிஸ்டண்ட் மூலம் மேலும் அறியலாம்.",
                eligibility: ["வயது 18-50", "வங்கி கணக்கு"],
                eligibility_detailed: [
                    "18 முதல் 50 வயதுடைய தனிநபர்கள்.",
                    "சேமிப்பு வங்கி கணக்கு வைத்திருத்தல் அவசியம்.",
                    "ஆட்டோ-டெபிட் வசதி தேவை."
                ],
                important_note: "சேர்ந்த 45 நாட்களுக்குப் பிறகு காப்பீடு தொடங்கும்."
            }
        },
        "pm-kisan-samman-nidhi": {
            title: "பிரதம மந்திரி கிசான் சம்மான் நிதி",
            highlight: "₹6,000/ஆண்டு உதவி",
            desc: "விவசாயிகளுக்கு 100% அரசு நிதியுதவி, நேரடியாக வங்கிக் கணக்குகளில்.",
            long_description: "பிரதம மந்திரி கிசான் சம்மான் நிதி (PM-KISAN) என்பது விவசாயிகளுக்கு வருமான ஆதரவு வழங்கும் திட்டமாகும். ஆண்டுக்கு ₹6,000 மூன்று சம தவணைகளில் விவசாயிகளின் வங்கிக் கணக்கில் நேரடியாக வரவு வைக்கப்படுகிறது.",
            modal_content: {
                summary: "விவசாயிகளுக்கு குறைந்தபட்ச வருமான ஆதரவாக ஆண்டுக்கு ₹6,000 வழங்கும் அரசு திட்டம்.",
                highlights: ["ஆண்டுக்கு ₹6,000", "நேரடி பயன் பரிமாற்றம் (DBT)", "3 தவணைகள்"]
            },
            full_page_content: {
                documents: ["ஆதார் அட்டை", "நில ஆவணங்கள்", "வங்கி கணக்கு"],
                process: "PM-Kisan இணையதளத்தில் பதிவு செய்யவும்.",
                application_steps: [
                    "1. pmkisan.gov.in இணையதளத்திற்குச் செல்லவும்.",
                    "2. 'New Farmer Registration' விருப்பத்தைத் தேர்வு செய்யவும்.",
                    "3. ஆதார் எண் மற்றும் மொபைல் எண்ணை உள்ளிடவும்.",
                    "4. நில விவரங்களைச் சேர்த்து சமர்ப்பிக்கவும்."
                ],
                nagrik_support: "உங்கள் விண்ணப்ப நிலையைச் சரிபார்க்க நாங்கள் உதவுகிறோம்.",
                eligibility: ["சிறு/குறு விவசாயிகள்", "இந்திய குடிமக்கள்"],
                eligibility_detailed: [
                    "விளைநிலம் வைத்துள்ள விவசாய குடும்பங்கள்.",
                    "நிறுவன நில உரிமையாளர்கள் தகுதியற்றவர்கள்."
                ],
                important_note: "PMKISAN பெற eKYC கட்டாயம்."
            }
        },
        "ayushman-bharat": {
            title: "ஆயுஷ்மான் பாரத் (PM-JAY)",
            highlight: "₹5 லட்சம் மருத்துவ காப்பீடு",
            desc: "குடும்பத்திற்கு ஆண்டுக்கு ₹5 லட்சம் மருத்துவ காப்பீடு.",
            long_description: "ஆயுஷ்மான் பாரத் - பிரதம மந்திரி ஜன் ஆரோக்கிய யோஜனா (AB-PMJAY) என்பது உலகின் மிகப்பெரிய அரசாங்கத் திட்டமாகும். இது ஏழை குடும்பங்களுக்கு இரண்டாம் நிலை மற்றும் மூன்றாம் நிலை மருத்துவமனை சிகிச்சைக்கு ஆண்டுக்கு ₹5 லட்சம் வரை வழங்குகிறது.",
            modal_content: {
                summary: "உலகின் மிகப்பெரிய அரசு நிதியளிக்கும் சுகாதாரத் திட்டம்.",
                highlights: ["₹5 லட்சம் காப்பீடு", "பணமில்லா சிகிச்சை", "இந்தியா முழுவதும் செல்லுபடியாகும்"]
            },
            full_page_content: {
                documents: ["ஆதார் அட்டை", "ரேஷன் அட்டை"],
                process: "தகுதியைச் சரிபார்த்து மருத்துவமனையை அணுகவும்.",
                application_steps: [
                    "1. pmjay.gov.in தளத்தில் 'Am I Eligible' என்பதைச் சரிபார்க்கவும்.",
                    "2. உங்கள் மொபைல் எண் மூலம் உள்நுழையவும்.",
                    "3. உங்கள் பெயரைக் கண்டறியவும்.",
                    "4. அங்கீகரிக்கப்பட்ட மருத்துவமனையில் கோல்டன் கார்டைப் பெறவும்."
                ],
                nagrik_support: "மருத்துவமனையைக் கண்டறிய உதவுகிறோம்.",
                eligibility: ["SECC பட்டியல்", "SC/ST குடும்பங்கள்"],
                eligibility_detailed: [
                    "SECC 2011 தரவுத்தளத்தில் உள்ள குடும்பங்கள்.",
                    "SC/ST மற்றும் நிலமற்ற தொழிலாளர் குடும்பங்கள்."
                ],
                important_note: "குடும்ப உறுப்பினர்களின் எண்ணிக்கைக்கு வரம்பு இல்லை."
            }
        },
        "pm-mitra-scheme": {
            title: "பிஎம் மித்ரா திட்டம்",
            highlight: "ஜவுளித் துறை வளர்ச்சி",
            desc: "ஜவுளித் துறையை மேம்படுத்த ஒருங்கிணைந்த ஜவுளி பூங்காக்கள்.",
            long_description: "பிஎம் மித்ரா (PM MITRA) திட்டம் ஜவுளித் துறையில் முதலீட்டை ஈர்ப்பதற்கும் உலகத்தரம் வாய்ந்த உள்கட்டமைப்பை உருவாக்குவதற்கும் தொடங்கப்பட்டது. இது 'பண்ணை முதல் ஃபேஷன் வரை' (5F) என்ற கொள்கையை அடிப்படையாகக் கொண்டது.",
            modal_content: {
                summary: "உலகத்தரம் வாய்ந்த உள்கட்டமைப்பை உருவாக்க ஏழு பிஎம் மித்ரா பூங்காக்கள் அமைக்கப்படும்.",
                highlights: ["உலகத்தரம் வாய்ந்த உள்கட்டமைப்பு", "வேலைவாய்ப்பு", "முதலீடு"]
            },
            full_page_content: {
                documents: ["வணிக பதிவு", "திட்ட அறிக்கை"],
                process: "மாநில அரசுகள் மற்றும் தனியார் நிறுவனங்கள் மூலம் செயல்படுத்துதல்.",
                application_steps: [
                    "1. மாநில அரசுகள் முன்மொழிவுகளைச் சமர்ப்பிக்கின்றன.",
                    "2. ஒரு SPV (சிறப்பு நோக்கு வாகனம்) உருவாக்கப்படுகிறது.",
                    "3. முதன்மை டெவலப்பர் தேர்ந்தெடுக்கப்படுகிறார்.",
                    "4. அலகுகளை அமைக்க விண்ணப்பிக்கலாம்."
                ],
                nagrik_support: "தொழில்முனைவோருக்கு தகவல் வழங்குகிறது.",
                eligibility: ["மாநில அரசுகள்", "தனியார் நிறுவனங்கள்"],
                eligibility_detailed: [
                    "1000+ ஏக்கர் நிலம் உள்ள மாநிலங்கள்.",
                    "ஜவுளித் துறையில் முதலீடு செய்யும் நிறுவனங்கள்."
                ],
                important_note: "இது ஒரு உள்கட்டமைப்பு மேம்பாட்டுத் திட்டம்."
            }
        },
        "kisan-e-mitra": {
            title: "கிசான் இ-மித்ரா",
            highlight: "AI விவசாய உதவியாளர்",
            desc: "விவசாய கேள்விகளுக்கான உங்கள் மெய்நிகர் உதவியாளர். 24/7 கிடைக்கும்.",
            long_description: "கிசான் இ-மித்ரா என்பது விவசாய அமைச்சகத்தால் தொடங்கப்பட்ட ஒரு AI சாட்போட் ஆகும். இது விவசாயிகளுக்கு அவர்களின் மொழியில் அரசு திட்டங்கள் மற்றும் விவசாய நுட்பங்கள் பற்றிய கேள்விகளுக்கு பதிலளிக்கிறது.",
            modal_content: {
                summary: "விவசாயிகளின் கேள்விகளுக்கு பதிலளிக்க வடிவமைக்கப்பட்ட AI சாட்போட்.",
                highlights: ["24/7 சேவை", "பன்மொழி ஆதரவு", "உடனடி பதில்கள்"]
            },
            full_page_content: {
                documents: ["மொபைல் எண்"],
                process: "கிசான் இ-மித்ரா தளத்தைப் பயன்படுத்தவும்.",
                application_steps: [
                    "1. கிசான் இ-மித்ரா இணையதளத்திற்குச் செல்லவும்.",
                    "2. உங்கள் மொழியைத் தேர்ந்தெடுக்கவும் (எ.கா. தமிழ்).",
                    "3. உங்கள் கேள்வியைத் தட்டச்சு செய்யவும் அல்லது பேசவும்.",
                    "4. உடனடித் தீர்வைப் பெறவும்."
                ],
                nagrik_support: "இது ஒரு தன்னியக்க கருவியாகும்.",
                eligibility: ["அனைத்து விவசாயிகள்", "மாணவர்கள்"],
                eligibility_detailed: [
                    "இந்தியாவின் அனைத்து விவசாயிகளும்.",
                    "விவசாயத்தில் ஆர்வமுள்ள எவரும்."
                ],
                important_note: "இது முற்றிலும் இலவசம்."
            }
        },
    },

    // Telugu
    te: {
        "atal-pension-yojana": {
            title: "అటల్ పెన్షన్ యోజన",
            highlight: "పెన్షన్ ₹1,000 - ₹5,000/నెల",
            desc: "అసంఘటిత రంగ కార్మికులకు హామీతో కూడిన పెన్షన్ (వయస్సు 18-40). మరణానంతరం జీవిత భాగస్వామికి అదే పెన్షన్ లభిస్తుంది.",
            long_description: "అటల్ పెన్షన్ యోజన (APY) అనేది భారత ప్రభుత్వం ప్రారంభించిన ఒక సామాజిక భద్రతా పథకం. ఇది ప్రధానంగా అసంఘటిత రంగ కార్మికులకు వృద్ధాప్యంలో ఆదాయ భద్రతను కల్పించడం కోసం ఉద్దేశించబడింది. సభ్యులు 60 ఏళ్ల తర్వాత నెలకు ₹1,000 నుండి ₹5,000 వరకు పెన్షన్ పొందుతారు.",
            modal_content: {
                summary: "అసంఘటిత రంగాన్ని లక్ష్యంగా చేసుకున్న ప్రభుత్వ మద్దతు గల పెన్షన్ పథకం.",
                highlights: ["హామీ పెన్షన్", "పన్ను ప్రయోజనాలు", "ప్రభుత్వ సహకారం"]
            },
            full_page_content: {
                documents: ["ఆధార్ కార్డ్", "బ్యాంక్ ఖాతా", "మొబైల్ నంబర్"],
                process: "మీ బ్యాంక్ శాఖను సందర్శించి APY ఫారమ్‌ను పూరించండి.",
                application_steps: [
                    "1. మీ పొదుపు ఖాతా ఉన్న బ్యాంక్ లేదా పోస్టాఫీసును సందర్శించండి.",
                    "2. 'అటల్ పెన్షన్ యోజన రిజిస్ట్రేషన్ ఫారమ్' అడగండి.",
                    "3. మీ ఆధార్ మరియు బ్యాంక్ వివరాలను పూరించండి.",
                    "4. ఆటో-డెబిట్ కోసం అనుమతి ఇవ్వండి.",
                    "5. ఫారమ్‌ను సమర్పించి రసీదు పొందండి."
                ],
                nagrik_support: "నాగరిక్ AI మీకు ఫారమ్ నింపడంలో సహాయపడుతుంది.",
                eligibility: ["భారత పౌరుడు", "వయస్సు 18-40", "సేవింగ్స్ ఖాతా"],
                eligibility_detailed: [
                    "దరఖాస్తుదారు భారతీయ పౌరుడై ఉండాలి.",
                    "వయస్సు 18 నుండి 40 సంవత్సరాల మధ్య ఉండాలి.",
                    "చెల్లుబాటు అయ్యే బ్యాంకు ఖాతా ఉండాలి.",
                    "ఆదాయపు పన్ను చెల్లించేవారు అర్హులు కాదు."
                ],
                important_note: "పెన్షన్ మొత్తం మీ నెలవారీ సహకారంపై ఆధారపడి ఉంటుంది."
            }
        },
        "pm-suraksha-bima-yojana": {
            title: "ప్రధాన మంత్రి సురక్ష బీమా యోజన",
            highlight: "₹2 లక్షల ప్రమాద బీమా",
            desc: "కేవలం ₹20/ఏడాదికి ప్రమాద మరణం & వైకల్య బీమా. (వయస్సు 18-70).",
            long_description: "ప్రధాన మంత్రి సురక్ష బీమా యోజన (PMSBY) అనేది ప్రమాద బీమా పథకం. ఇది ప్రమాదం వల్ల మరణం లేదా వైకల్యం సంభవించినప్పుడు ఆర్థిక రక్షణ కల్పిస్తుంది. బీమా కాలం ఒక సంవత్సరం మరియు ప్రతి ఏటా రెన్యూవల్ చేసుకోవాలి.",
            modal_content: {
                summary: "ప్రమాదం కారణంగా మరణం లేదా వైకల్యానికి కవరేజీని అందించే ప్రమాద బీమా పథకం.",
                highlights: ["₹2 లక్షల కవర్", "ప్రీమియం ₹20/ఏడాది", "ఆటో-డెబిట్ సౌకర్యం"]
            },
            full_page_content: {
                documents: ["ఆధార్ కార్డ్", "బ్యాంక్ వివరాలు"],
                process: "మీ బ్యాంకులో PMSBY ఫారమ్ సమర్పించండి.",
                application_steps: [
                    "1. మీ బ్యాంకు శాఖకు వెళ్లండి.",
                    "2. PMSBY సమ్మతి ఫత్రాన్ని పూరించండి.",
                    "3. ఆధార్ కార్డును జత చేయండి.",
                    "4. ఆటో-డెబిట్ సదుపాయాన్ని ప్రారంభించండి.",
                    "5. నమోదు ధృవీకరణను పొందండి."
                ],
                nagrik_support: "క్లెయిమ్ ప్రక్రియ గురించి మేము మీకు వివరిస్తాము.",
                eligibility: ["వయస్సు 18-70", "బ్యాంక్ ఖాతా"],
                eligibility_detailed: [
                    "18 నుండి 70 సంవత్సరాల వయస్సు గల భారతీయ పౌరులు.",
                    "బ్యాంకులో పొదుపు ఖాతా ఉండాలి.",
                    "ఖాతా నుండి ప్రీమియం కట్టడానికి అనుమతి ఇవ్వాలి."
                ],
                important_note: "బీమా కవరేజ్ జూన్ 1 నుండి మే 31 వరకు ఉంటుంది."
            }
        },
        "pm-jeevan-jyoti-bima-yojana": {
            title: "ప్రధాన మంత్రి జీవన్ జ్యోతి బీమా యోజన",
            highlight: "₹2 లక్షల జీవిత బీమా",
            desc: "ఏదైనా కారణం చేత మరణానికి జీవిత బీమా. ప్రీమియం ₹436/ఏడాది. (వయస్సు 18-50).",
            long_description: "ప్రధాన మంత్రి జీవన్ జ్యోతి బీమా యోజన (PMJJBY) అనేది ఒక టర్మ్ లైఫ్ ఇన్సూరెన్స్ పథకం. ఇది ఏ కారణం చేతనైనా బీమా చేసిన వ్యక్తి మరణిస్తే నామినీకి ₹2 లక్షలు అందిస్తుంది.",
            modal_content: {
                summary: "ఏటా పునరుద్ధరించదగిన ఒక సంవత్సరం టర్మ్ లైఫ్ ఇన్సూరెన్స్.",
                highlights: ["₹2 లక్షల బీమా", "ప్రీమియం ₹436/ఏడాది", "వైద్య పరీక్ష అవసరం లేదు"]
            },
            full_page_content: {
                documents: ["ఆధార్ కార్డ్", "బ్యాంక్ పాస్‌బుక్"],
                process: "బ్యాంకులో PMJJBY కోసం నమోదు చేసుకోండి.",
                application_steps: [
                    "1. మీ బ్యాంకును సందర్శించండి.",
                    "2. PMJJBY నమోదు ఫారమ్‌ను పూరించండి.",
                    "3. ప్రీమియం చెల్లింపు కోసం ఖాతాను లింక్ చేయండి.",
                    "4. ఆధార్ వివరాలు ఇవ్వండి.",
                    "5. బీమా సర్టిఫికెట్ తీసుకోండి."
                ],
                nagrik_support: "నాగరిక్ వాయిస్ అసిస్టెంట్ ద్వారా సహాయం పొందండి.",
                eligibility: ["వయస్సు 18-50", "బ్యాంక్ ఖాతా"],
                eligibility_detailed: [
                    "18 నుండి 50 సంవత్సరాల వయస్సు గలవారు.",
                    "బ్యాంకు ఖాతా తప్పనిసరి.",
                    "ఆటో-డెబిట్ సమ్మతి అవసరం."
                ],
                important_note: "చేరిన 45 రోజుల తర్వాత రిస్క్ కవర్ ప్రారంభమవుతుంది."
            }
        },
        "pm-kisan-samman-nidhi": {
            title: "ప్రధాన మంత్రి కిసాన్ సమ్మాన్ నిధి",
            highlight: "₹6,000/ఏడాది సాయం",
            desc: "రైతులకు 100% ప్రభుత్వ నిధులతో ఆర్థిక సహాయం, నేరుగా బ్యాంకు ఖాతాల్లోకి.",
            long_description: "ప్రధాన మంత్రి కిసాన్ సమ్మాన్ నిధి (PM-KISAN) అనేది రైతులకు ఆదాయ మద్దతు ఇచ్చే కేంద్ర ప్రభుత్వ పథకం. అర్హులైన రైతు కుటుంబాలకు సంవత్సరానికి ₹6,000 మూడు విడతలుగా నేరుగా బ్యాంకు ఖాతాలో జమ చేస్తారు.",
            modal_content: {
                summary: "రైతులకు కనీస ఆదాయ మద్దతుగా ఏడాదికి ₹6,000 అందించే ప్రభుత్వ పథకం.",
                highlights: ["ఏడాదికి ₹6,000", "డైరెక్ట్ బెనిఫిట్ ట్రాన్స్ఫర్ (DBT)", "3 విడతలు"]
            },
            full_page_content: {
                documents: ["ఆధార్ కార్డ్", "భూమి పత్రాలు", "బ్యాంక్ ఖాతా"],
                process: "PM-Kisan పోర్టల్‌లో రిజిస్టర్ చేసుకోండి.",
                application_steps: [
                    "1. pmkisan.gov.in వెబ్‌సైట్‌ను సందర్శించండి.",
                    "2. 'New Farmer Registration' ఎంచుకోండి.",
                    "3. ఆధార్ మరియు మొబైల్ నంబర్‌ను నమోదు చేయండి.",
                    "4. భూమి వివరాలను పూరించి సమర్పించండి."
                ],
                nagrik_support: "మీ అప్లికేషన్ స్టేటస్ తెలుసుకోవడానికి మేము సహాయం చేస్తాము.",
                eligibility: ["చిన్న & సన్నకారు రైతులు", "భారతీయ పౌరులు"],
                eligibility_detailed: [
                    "సాగు భూమి ఉన్న రైతు కుటుంబాలు.",
                    "ఆదాయ పన్ను చెల్లించేవారు మరియు సంస్థాగత భూ యజమానులు అనర్హులు."
                ],
                important_note: "PMKISAN కోసం eKYC తప్పనిసరి."
            }
        },
        "ayushman-bharat": {
            title: "ఆయుష్మాన్ భారత్ (PM-JAY)",
            highlight: "₹5 లక్షల ఆరోగ్య కవర్",
            desc: "కుటుంబానికి ఏడాదికి ₹5 లక్షల ఉచిత ఆరోగ్య బీమా.",
            long_description: "ఆయుష్మాన్ భారత్ - ప్రధాన మంత్రి జన్ ఆరోగ్య యోజన (AB-PMJAY) అనేది ప్రపంచంలోనే అతిపెద్ద ప్రభుత్వ ఆరోగ్య పథకం. ఇది పేద కుటుంబాలకు ఆసుపత్రి ఖర్చుల కోసం సంవత్సరానికి ₹5 లక్షల వరకు కవరేజీని అందిస్తుంది.",
            modal_content: {
                summary: "ప్రపంచంలోనే అతిపెద్ద ప్రభుత్వ నిధులతో నడిచే ఆరోగ్య సంరక్షణ కార్యక్రమం.",
                highlights: ["₹5 లక్షల కవర్", "నగదు రహిత చికిత్స", "భారతదేశం అంతటా చెల్లుబాటు"]
            },
            full_page_content: {
                documents: ["ఆధార్ కార్డ్", "రేషన్ కార్డ్"],
                process: "అర్హతను తనిఖీ చేసి ఆసుపత్రిని సందర్శించండి.",
                application_steps: [
                    "1. pmjay.gov.in లో 'Am I Eligible' తనిఖీ చేయండి.",
                    "2. మొబైల్ నంబర్‌తో లాగిన్ అవ్వండి.",
                    "3. మీ పేరు జాబితాలో ఉందో లేదో చూడండి.",
                    "4. గోల్డెన్ కార్డ్ పొందడానికి ఆసుపత్రిని సంప్రదించండి."
                ],
                nagrik_support: "దగ్గరలోని ఆసుపత్రిని కనుగొనడంలో సహాయం చేస్తాము.",
                eligibility: ["SECC డేటాబేస్", "SC/ST కుటుంబాలు"],
                eligibility_detailed: [
                    "SECC 2011 డేటాబేస్‌లో ఉన్న కుటుంబాలు.",
                    "SC/ST మరియు భూమి లేని కూలీ కుటుంబాలు."
                ],
                important_note: "కుటుంబ సభ్యుల సంఖ్యపై పరిమితి లేదు."
            }
        },
        "pm-mitra-scheme": {
            title: "పీఎం మిత్ర పథకం",
            highlight: "వస్త్ర పరిశ్రమ వృద్ధి",
            desc: "వస్త్ర పరిశ్రమను పెంచడానికి సమీకృత వస్త్ర పార్కులు.",
            long_description: "పీఎం మిత్ర (PM MITRA) పథకం జౌళి రంగాన్ని బలోపేతం చేయడానికి మరియు ప్రపంచ స్థాయి మౌలిక సదుపాయాలను కల్పించడానికి రూపొందించబడింది. ఇది 5F విజన్ (Farm to Foreign) పై ఆధారపడి ఉంది.",
            modal_content: {
                summary: "ప్రపంచ స్థాయి పారిశ్రామిక మౌలిక సదుపాయాలను సృష్టించడానికి ఏడు PM MITRA పార్కులు ఏర్పాటు చేయబడతాయి.",
                highlights: ["ప్రపంచ స్థాయి మౌలిక సదుపాయాలు", "ఉపాధి కల్పన", "పెట్టుబడి పెంపు"]
            },
            full_page_content: {
                documents: ["వ్యాపార రిజిస్ట్రేషన్", "ప్రాజెక్ట్ రిపోర్ట్"],
                process: "రాష్ట్ర ప్రభుత్వాలు మరియు ప్రైవేట్ భాగస్వామ్యంతో అమలు.",
                application_steps: [
                    "1. రాష్ట్ర ప్రభుత్వాలు ప్రతిపాదనలు పంపుతాయి.",
                    "2. SPV (Special Purpose Vehicle) ఏర్పాటు చేయబడుతుంది.",
                    "3. మాస్టర్ డెవలపర్ ఎంపిక జరుగుతుంది.",
                    "4. పరిశ్రమలు ప్లాట్ల కోసం దరఖాస్తు చేసుకోవాలి."
                ],
                nagrik_support: "పారిశ్రామికవేత్తలకు సమాచారం అందిస్తుంది.",
                eligibility: ["రాష్ట్ర ప్రభుత్వాలు", "ప్రైవేట్ సంస్థలు"],
                eligibility_detailed: [
                    "1000+ ఎకరాల భూమి ఉన్న రాష్ట్రాలు.",
                    "టెక్స్‌టైల్ రంగంలో పెట్టుబడి పెట్టే సంస్థలు."
                ],
                important_note: "ఇది మౌలిక సదుపాయాల అభివృద్ధి పథకం."
            }
        },
        "kisan-e-mitra": {
            title: "కిసాన్ ఇ-మిత్ర",
            highlight: "AI వ్యవసాయ సహాయకుడు",
            desc: "వ్యవసాయ ప్రశ్నలకు మీ వర్చువల్ అసిస్టెంట్. బహుభాషా మద్దతుతో 24/7 అందుబాటులో ఉంది.",
            long_description: "కిసాన్ ఇ-మిత్ర అనేది వ్యవసాయ మంత్రిత్వ శాఖ ప్రారంభించిన AI చాట్‌బాట్. ఇది రైతులకు వారి స్వంత భాషలో వ్యవసాయం మరియు పథకాల గురించి సమాచారాన్ని అందిస్తుంది.",
            modal_content: {
                summary: "రైతుల ప్రశ్నలకు సమాధానం ఇవ్వడానికి రూపొందించబడిన AI చాట్‌బాట్.",
                highlights: ["24/7 లభ్యత", "బహుభాషా మద్దతు", "తక్షణ సమాధానాలు"]
            },
            full_page_content: {
                documents: ["మొబైల్ నంబర్"],
                process: "కిసాన్ ఇ-మిత్ర పోర్టల్‌ను ఉపయోగించండి.",
                application_steps: [
                    "1. కిసాన్ ఇ-మిత్ర వెబ్‌సైట్‌కి వెళ్లండి.",
                    "2. మీ భాషను ఎంచుకోండి (ఉదా. తెలుగు).",
                    "3. రేమీ ప్రశ్నను టైప్ చేయండి లేదా వాయిస్ ద్వారా అడగండి.",
                    "4. తక్షణ పరిష్కారాన్ని పొందండి."
                ],
                nagrik_support: "ఇది పూర్తిగా ఆటోమేటెడ్ సేవ.",
                eligibility: ["అందరూ రైతులు", "విద్యార్థులు"],
                eligibility_detailed: [
                    "భారతదేశంలోని ఏ రైతు అయినా.",
                    "వ్యవసాయంపై ఆసక్తి ఉన్న ఎవరైనా."
                ],
                important_note: "ఈ సేవ పూర్తిగా ఉచితం."
            }
        },
    },

    // Kannada
    kn: {
        "atal-pension-yojana": {
            title: "ಅಟಲ್ ಪಿಂಚಣಿ ಯೋಜನೆ",
            highlight: "ಪಿಂಚಣಿ ₹1,000 - ₹5,000/ತಿಂಗಳು",
            desc: "ಅಸಂಘಟಿತ ವಲಯದ ಕಾರ್ಮಿಕರಿಗೆ ಖಾತರಿಪಡಿಸಿದ ಪಿಂಚಣಿ (ವಯಸ್ಸು 18-40). ಮರಣಾ ನಂತರ ಸಂಗಾತಿಗೂ ಅದೇ ಪಿಂಚಣಿ.",
            long_description: "ಅಟಲ್ ಪಿಂಚಣಿ ಯೋಜನೆ (APY) ಭಾರತ ಸರ್ಕಾರದ ಸಾಮಾಜಿಕ ಭದ್ರತಾ ಯೋಜನೆಯಾಗಿದ್ದು, ಅಸಂಘಟಿತ ವಲಯದ ಕಾರ್ಮಿಕರಿಗೆ ವೃದ್ಧಾಪ್ಯದಲ್ಲಿ ಆದಾಯ ರಕ್ಷಣೆ ನೀಡುತ್ತದೆ. ಚಂದಾದಾರರು 60 ವರ್ಷದ ನಂತರ ಮಾಸಿಕ ₹1,000 ದಿಂದ ₹5,000 ವರೆಗೆ ಪಿಂಚಣಿ ಪಡೆಯುತ್ತಾರೆ.",
            modal_content: {
                summary: "ಅಸಂಘಟಿತ ವಲಯವನ್ನು ಗುರಿಯಾಗಿರಿಸಿಕೊಂಡಿರುವ ಸರ್ಕಾರಿ ಬೆಂಬಲಿತ ಪಿಂಚಣಿ ಯೋಜನೆ.",
                highlights: ["ಖಾತರಿ ಪಿಂಚಣಿ", "ತೆರಿಗೆ ಲಾಭಗಳು", "ಸರ್ಕಾರಿ ಕೊಡುಗೆ"]
            },
            full_page_content: {
                documents: ["ಆಧಾರ್ ಕಾರ್ಡ್", "ಬ್ಯಾಂಕ್ ಖಾತೆ", "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ"],
                process: "ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ APY ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡಿ.",
                application_steps: [
                    "1. ನಿಮ್ಮ ಉಳಿತಾಯ ಖಾತೆ ಇರುವ ಬ್ಯಾಂಕ್ ಅಥವಾ ಅಂಚೆ ಕಚೇರಿಗೆ ಭೇಟಿ ನೀಡಿ.",
                    "2. 'ಅಟಲ್ ಪಿಂಚಣಿ ಯೋಜನೆ ನೋಂದಣಿ ಫಾರ್ಮ್' ಪಡೆಯಿರಿ.",
                    "3. ನಿಮ್ಮ ಆಧಾರ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.",
                    "4. ಮಾಸಿಕ ವಂತಿಗೆಗಾಗಿ ಆಟೋ-ಡೆಬಿಟ್ ಸೌಲಭ್ಯವನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ.",
                    "5. ಫಾರ್ಮ್ ಸಲ್ಲಿಸಿ ಮತ್ತು ಸ್ವೀಕೃತಿ ಪಡೆಯಿರಿ."
                ],
                nagrik_support: "ನಾಗರಿಕ್ AI ನಿಮಗೆ ಫಾರ್ಮ್ ತುಂಬಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
                eligibility: ["ಭಾರತೀಯ ಪ್ರಜೆ", "ವಯಸ್ಸು 18-40", "ಉಳಿತಾಯ ಖಾತೆ"],
                eligibility_detailed: [
                    "ಅರ್ಜಿದಾರರು ಭಾರತೀಯ ಪ್ರಜೆಯಾಗಿರಬೇಕು.",
                    "ವಯಸ್ಸು 18 ರಿಂದ 40 ವರ್ಷದೊಳಗಿರಬೇಕು.",
                    "ಸಿಂಧುವಾದ ಉಳಿತಾಯ ಬ್ಯಾಂಕ್ ಖಾತೆ ಹೊಂದಿರಬೇಕು.",
                    "ದಾಯ ತೆರಿಗೆ ಪಾವತಿದಾರರಾಗಿರಬಾರದು."
                ],
                important_note: "ಪಿಂಚಣಿ ಮೊತ್ತವು ನಿಮ್ಮ ವಂತಿಗೆಯನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ."
            }
        },
        "pm-suraksha-bima-yojana": {
            title: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಸುರಕ್ಷಾ ವಿಮಾ ಯೋಜನೆ",
            highlight: "₹2 ಲಕ್ಷ ಅಪಘಾತ ವಿಮೆ",
            desc: "ವರ್ಷಕ್ಕೆ ಕೇವಲ ₹20 ಕ್ಕೆ ಅಪಘಾತ ಮತ್ತು ಅಂಗವೈಕಲ್ಯ ವಿಮೆ. (ವಯಸ್ಸು 18-70).",
            long_description: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಸುರಕ್ಷಾ ವಿಮಾ ಯೋಜನೆ (PMSBY) ಒಂದು ಅಪಘಾತ ವಿಮಾ ಯೋಜನೆಯಾಗಿದೆ. ಅಪಘಾತದಿಂದ ಸಾವು ಅಥವಾ ಅಂಗವೈಕಲ್ಯ ಸಂಭವಿಸಿದಲ್ಲಿ ಇದು ಆರ್ಥಿಕ ರಕ್ಷಣೆ ನೀಡುತ್ತದೆ. ಇದು ವಾರ್ಷಿಕ ನವೀಕರಣಗೊಳ್ಳುವ ಯೋಜನೆಯಾಗಿದೆ.",
            modal_content: {
                summary: "ಅಪಘಾತದಿಂದ ಸಾವು ಅಥವಾ ಅಂಗವೈಕಲ್ಯಕ್ಕೆ ಕವರೇಜ್ ನೀಡುವ ಅಪಘಾತ ವಿಮಾ ಯೋಜನೆ.",
                highlights: ["₹2 ಲಕ್ಷ ಕವರ್", "ಪ್ರೀಮಿಯಂ ₹20/ವರ್ಷ", "ಆಟೋ-ಡೆಬಿಟ್ ಸೌಲಭ್ಯ"]
            },
            full_page_content: {
                documents: ["ಆಧಾರ್ ಕಾರ್ಡ್", "ಬ್ಯಾಂಕ್ ವಿವರಗಳು"],
                process: "ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಿ ಮತ್ತು PMSBY ಫಾರ್ಮ್ ಸಲ್ಲಿಸಿ.",
                application_steps: [
                    "1. ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಶಾಖೆಗೆ ಹೋಗಿ.",
                    "2. PMSBY ಸಮ್ಮತಿ ಪತ್ರವನ್ನು ಭರ್ತಿ ಮಾಡಿ.",
                    "3. ಆಧಾರ್ ಕಾರ್ಡ್ ಲಿಂಕ್ ಮಾಡಿ.",
                    "4. ಪ್ರೀಮಿಯಂ ಕಡಿತಕ್ಕೆ ಅನುಮತಿ ನೀಡಿ.",
                    "5. ನೋಂದಣಿ ದೃಢೀಕರಣ ಪಡೆಯಿರಿ."
                ],
                nagrik_support: "ಕ್ಲೈಮ್ ಪ್ರಕ್ರಿಯೆಯನ್ನು ನಾವು ಸರಳಗೊಳಿಸುತ್ತೇವೆ.",
                eligibility: ["ವಯಸ್ಸು 18-70", "ಬ್ಯಾಂಕ್ ಖಾತೆ"],
                eligibility_detailed: [
                    "18 ರಿಂದ 70 ವರ್ಷ ವಯಸ್ಸಿನ ಭಾರತೀಯ ಪ್ರಜೆಗಳು.",
                    "ಬ್ಯಾಂಕ್ ಉಳಿತಾಯ ಖಾತೆ ಕಡ್ಡಾಯ.",
                    "ಆಟೋ-ಡೆಬಿಟ್ ಸೌಲಭ್ಯಕ್ಕೆ ಒಪ್ಪಿಗೆ."
                ],
                important_note: "ವಿಮಾ ಅವಧಿ ಜೂನ್ 1 ರಿಂದ ಮೇ 31 ರವರೆಗೆ."
            }
        },
        "pm-jeevan-jyoti-bima-yojana": {
            title: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಜೀವನ ಜ್ಯೋತಿ ವಿಮಾ ಯೋಜನೆ",
            highlight: "₹2 ಲಕ್ಷ ಜೀವನ ವಿಮೆ",
            desc: "ಯಾವುದೇ ಕಾರಣದಿಂದ ಸಾವಿಗೆ ಟರ್ಮ್ ಲೈಫ್ ಇನ್ಶುರೆನ್ಸ್. ಪ್ರೀಮಿಯಂ ₹436/ವರ್ಷ. (ವಯಸ್ಸು 18-50).",
            long_description: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಜೀವನ ಜ್ಯೋತಿ ವಿಮಾ ಯೋಜನೆ (PMJJBY) ಒಂದು ವರ್ಷದ ಜೀವ ವಿಮಾ ಪಾಲಿಸಿಯಾಗಿದೆ. ಯಾವುದೇ ಕಾರಣದಿಂದ ಮರಣ ಹೊಂದಿದರೆ ನಾಮಿನಿಗೆ ₹2 ಲಕ್ಷ ಮೊತ್ತ ದೊರೆಯುತ್ತದೆ.",
            modal_content: {
                summary: "ಒಂದು ವರ್ಷದ ಟರ್ಮ್ ಲೈಫ್ ಇನ್ಶುರೆನ್ಸ್ ಯೋಜನೆ, ಪ್ರತಿ ವರ್ಷ ನವೀಕರಿಸಬಹುದು.",
                highlights: ["₹2 ಲಕ್ಷ ವಿಮೆ", "ಪ್ರೀಮಿಯಂ ₹436/ವರ್ಷ", "ವೈದ್ಯಕೀಯ ತಪಾಸಣೆ ಇಲ್ಲ"]
            },
            full_page_content: {
                documents: ["ಆಧಾರ್ ಕಾರ್ಡ್", "ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್"],
                process: "ಬ್ಯಾಂಕ್‌ಗೆ ಭೇಟಿ ನೀಡಿ PMJJBY ಗೆ ನೋಂದಾಯಿಸಿ.",
                application_steps: [
                    "1. ಹತ್ತಿರದ ಬ್ಯಾಂಕ್ ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ.",
                    "2. PMJJBY ಅರ್ಜಿ ನಮೂನೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ.",
                    "3. ಪ್ರೀಮಿಯಂ ಪಾವತಿಗೆ ನಿಮ್ಮ ಖಾತೆಯನ್ನು ಲಿಂಕ್ ಮಾಡಿ.",
                    "4. ಆಧಾರ್ ವಿವರಗಳನ್ನು ಒದಗಿಸಿ.",
                    "5. ವಿಮಾ ಪ್ರಮಾಣಪತ್ರವನ್ನು ಸಂಗ್ರಹಿಸಿ."
                ],
                nagrik_support: "ನಾಗರಿಕ್ ವಾಯ್ಸ್ ಅಸಿಸ್ಟೆಂಟ್ ಮೂಲಕ ಸಹಾಯ ಪಡೆಯಿರಿ.",
                eligibility: ["ವಯಸ್ಸು 18-50", "ಬ್ಯಾಂಕ್ ಖಾತೆ"],
                eligibility_detailed: [
                    "18 ರಿಂದ 50 ವರ್ಷ ವಯಸ್ಸಿನ ವ್ಯಕ್ತಿಗಳು.",
                    "ಉಳಿತಾಯ ಬ್ಯಾಂಕ್ ಖಾತೆ ಅವಶ್ಯಕ.",
                    "ಸ್ವಯಂಚಾಲಿತ ಪ್ರೀಮಿಯಂ ಪಾವತಿ ಸಮ್ಮತಿ."
                ],
                important_note: "ಸೇರ್ಪಡೆಯಾದ 45 ದಿನಗಳ ನಂತರ ರಿಸ್ಕ್ ಕವರ್ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ."
            }
        },
        "pm-kisan-samman-nidhi": {
            title: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಕಿಸಾನ್ ಸಮ್ಮಾನ್ ನಿಧಿ",
            highlight: "₹6,000/ವರ್ಷ ಸಹಾಯ",
            desc: "ರೈತರಿಗೆ 100% ಸರ್ಕಾರಿ ಅನುದಾನಿತ ಆರ್ಥಿಕ ನೆರವು, ನೇರವಾಗಿ ಬ್ಯಾಂಕ್ ಖಾತೆಗಳಿಗೆ.",
            long_description: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಕಿಸಾನ್ ಸಮ್ಮಾನ್ ನಿಧಿ (PM-KISAN) ರೈತರಿಗೆ ಆದಾಯ ಬೆಂಬಲ ನೀಡುವ ಯೋಜನೆಯಾಗಿದೆ. ವರ್ಷಕ್ಕೆ ₹6,000 ಮೊತ್ತವನ್ನು ಮೂರು ಕಂತುಗಳಲ್ಲಿ ನೇರವಾಗಿ ರೈತರ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮಾ ಮಾಡಲಾಗುತ್ತದೆ.",
            modal_content: {
                summary: "ರೈತರಿಗೆ ಕನಿಷ್ಠ ಆದಾಯದ ಬೆಂಬಲವಾಗಿ ವರ್ಷಕ್ಕೆ ₹6,000 ನೀಡುವ ಸರ್ಕಾರಿ ಯೋಜನೆ.",
                highlights: ["ವರ್ಷಕ್ಕೆ ₹6,000", "ನೇರ ಲಾಭ ವರ್ಗಾವಣೆ (DBT)", "3 ಕಂತುಗಳು"]
            },
            full_page_content: {
                documents: ["ಆಧಾರ್ ಕಾರ್ಡ್", "ಭೂಮಿ ದಾಖಲೆಗಳು", "ಬ್ಯಾಂಕ್ ಖಾತೆ"],
                process: "PM-Kisan ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನೋಂದಾಯಿಸಿ.",
                application_steps: [
                    "1. pmkisan.gov.in ವೆಬ್‌ಸೈಟ್‌ಗೆ ಹೋಗಿ.",
                    "2. 'New Farmer Registration' ಆಯ್ಕೆಮಾಡಿ.",
                    "3. ಆಧಾರ್ ಮತ್ತು ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.",
                    "4. ಭೂಮಿ ವಿವರಗಳನ್ನು ಸೇರಿಸಿ ಸಲ್ಲಿಸಿ."
                ],
                nagrik_support: "ನಿಮ್ಮ ಅರ್ಜಿ ಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಲು ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",
                eligibility: ["ಸಣ್ಣ/ಅತಿ ಸಣ್ಣ ರೈತರು", "ಭಾರತೀಯ ಪ್ರಜೆಗಳು"],
                eligibility_detailed: [
                    "ಸಾಗುವಳಿ ಭೂಮಿ ಹೊಂದಿರುವ ರೈತ ಕುಟುಂಬಗಳು.",
                    "ಸಂಸ್ಥಾಗತ ಭೂಮಾಲೀಕರು ಮತ್ತು ಆದಾಯ ತೆರಿಗೆದಾರರು ಅನರ್ಹರು."
                ],
                important_note: "PMKISAN ಲಾಭ ಪಡೆಯಲು eKYC ಕಡ್ಡಾಯವಾಗಿದೆ."
            }
        },
        "ayushman-bharat": {
            title: "ಆಯುಷ್ಮಾನ್ ಭಾರತ್ (PM-JAY)",
            highlight: "₹5 ಲಕ್ಷ ಆರೋಗ್ಯ ಕವರ್",
            desc: "ಕುಟುಂಬಕ್ಕೆ ವರ್ಷಕ್ಕೆ ₹5 ಲಕ್ಷ ಉಚಿತ ಆರೋಗ್ಯ ವಿಮೆ.",
            long_description: "ಆಯುಷ್ಮಾನ್ ಭಾರತ್ - ಪ್ರಧಾನ ಮಂತ್ರಿ ಜನ ಆರೋಗ್ಯ ಯೋಜನೆ (AB-PMJAY) ವಿಶ್ವದ ಅತಿದೊಡ್ಡ ಸರ್ಕಾರಿ ಪ್ರಾಯೋಜಿತ ಆರೋಗ್ಯ ಯೋಜನೆಯಾಗಿದೆ. ಬಡ ಕುಟುಂಬಗಳಿಗೆ ಆಸ್ಪತ್ರೆ ವೆಚ್ಚಕ್ಕಾಗಿ ವಾರ್ಷಿಕ ₹5 ಲಕ್ಷದವರೆಗೆ ಕವರೇಜ್ ನೀಡುತ್ತದೆ.",
            modal_content: {
                summary: "ವಿಶ್ವದ ಅತಿದೊಡ್ಡ ಸರ್ಕಾರಿ ಅನುದಾನಿತ ಆರೋಗ್ಯ ರಕ್ಷಣೆ ಕಾರ್ಯಕ್ರಮ.",
                highlights: ["₹5 ಲಕ್ಷ ಕವರ್", "ನಗದು ರಹಿತ ಚಿಕಿತ್ಸೆ", "ಭಾರತದಾದ್ಯಂತ ಮಾನ್ಯ"]
            },
            full_page_content: {
                documents: ["ಆಧಾರ್ ಕಾರ್ಡ್", "ರೇಷನ್ ಕಾರ್ಡ್"],
                process: "ಅರ್ಹತೆ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಆಸ್ಪತ್ರೆಗೆ ಭೇಟಿ ನೀಡಿ.",
                application_steps: [
                    "1. pmjay.gov.in ನಲ್ಲಿ 'Am I Eligible' ಪರಿಶೀಲಿಸಿ.",
                    "2. ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯೊಂದಿಗೆ ಲಾಗಿನ್ ಮಾಡಿ.",
                    "3. ನಿಮ್ಮ ಹೆಸರನ್ನು ಪಟ್ಟಿಯಲ್ಲಿ ಹುಡುಕಿ.",
                    "4. ಗೋಲ್ಡನ್ ಕಾರ್ಡ್ ಪಡೆಯಲು ಆಸ್ಪತ್ರೆಯನ್ನು ಸಂಪರ್ಕಿಸಿ."
                ],
                nagrik_support: "ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಯನ್ನು ಹುಡುಕಲು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",
                eligibility: ["SECC ಪಟ್ಟಿ", "SC/ST ಕುಟುಂಬಗಳು"],
                eligibility_detailed: [
                    "SECC 2011 ದತ್ತಸಂಚಯದಲ್ಲಿರುವ ಕುಟುಂಬಗಳು.",
                    "SC/ST ಮತ್ತು ಭೂಹೀನ ಕಾರ್ಮಿಕ ಕುಟುಂಬಗಳು."
                ],
                important_note: "ಕುಟುಂಬದ ಸದಸ್ಯರ ಸಂಖ್ಯೆಗೆ ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲ."
            }
        },
        "pm-mitra-scheme": {
            title: "ಪಿಎಂ ಮಿತ್ರ ಯೋಜನೆ",
            highlight: "ಜವಳಿ ಉದ್ಯಮ ಬೆಳವಣಿಗೆ",
            desc: "ಜವಳಿ ಉದ್ಯಮವನ್ನು ಉತ್ತೇಜಿಸಲು ಸಮಗ್ರ ಜವಳಿ ಪಾರ್ಕ್ಗಳು.",
            long_description: "ಪಿಎಂ ಮಿತ್ರ (PM MITRA) ಯೋಜನೆಯು ಜವಳಿ ಕ್ಷೇತ್ರದಲ್ಲಿ ಹೂಡಿಕೆ ಆಕರ್ಷಿಸಲು ಮತ್ತು ವಿಶ್ವದರ್ಜೆಯ ಮೂಲಸೌಕರ್ಯ ನಿರ್ಮಿಸಲು ರೂಪಿಸಲಾಗಿದೆ. ಇದು 'ಫಾರ್ಮ್ ಟು ಫೈಬರ್' (5F) ದೃಷ್ಟಿಕೋನವನ್ನು ಹೊಂದಿದೆ.",
            modal_content: {
                summary: "ವಿಶ್ವ ದರ್ಜೆಯ ಕೈಗಾರಿಕಾ ಮೂಲಸೌಕರ್ಯವನ್ನು ರಚಿಸಲು ಏಳು ಪಿಎಂ ಮಿತ್ರ ಪಾರ್ಕ್‌ಗಳನ್ನು ಸ್ಥಾಪಿಸಲಾಗುವುದು.",
                highlights: ["ವಿಶ್ವ ದರ್ಜೆಯ ಮೂಲಸೌಕರ್ಯ", "ಉದ್ಯೋಗ ಸೃಷ್ಟಿ", "ಹೂಡಿಕೆ ಪ್ರಚಾರ"]
            },
            full_page_content: {
                documents: ["ವ್ಯಾಪಾರ ನೋಂದಣಿ", "ಯೋಜನಾ ವರದಿ"],
                process: "ರಾಜ್ಯ ಸರ್ಕಾರಗಳು ಮತ್ತು ಖಾಸಗಿ ಸಹಭಾಗಿತ್ವದೊಂದಿಗೆ ಅನುಷ್ಠಾನ.",
                application_steps: [
                    "1. ರಾಜ್ಯ ಸರ್ಕಾರಗಳು ಪ್ರಸ್ತಾವನೆಗಳನ್ನು ಸಲ್ಲಿಸುತ್ತವೆ.",
                    "2. SPV (ವಿಶೇಷ ಉದ್ದೇಶದ ವಾಹನ) ರಚಿಸಲಾಗುತ್ತದೆ.",
                    "3. ಮಾಸ್ಟರ್ ಡೆವಲಪರ್ ಆಯ್ಕೆ ನಡೆಯುತ್ತದೆ.",
                    "4. ಘಟಕಗಳನ್ನು ಸ್ಥಾಪಿಸಲು ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು."
                ],
                nagrik_support: "ಉದ್ಯಮಿಗಳಿಗೆ ಮಾಹಿತಿ ಒದಗಿಸುತ್ತದೆ.",
                eligibility: ["ರಾಜ್ಯ ಸರ್ಕಾರಗಳು", "ಖಾಸಗಿ ಕಂಪನಿಗಳು"],
                eligibility_detailed: [
                    "1000+ ಎಕರೆ ಭೂಮಿ ಲಭ್ಯವಿರುವ ರಾಜ್ಯಗಳು.",
                    "ಜವಳಿ ಕ್ಷೇತ್ರದಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುವ ಕಂಪನಿಗಳು."
                ],
                important_note: "ಇದು ಮೂಲಸೌಕರ್ಯ ಅಭಿವೃದ್ಧಿ ಯೋಜನೆಯಾಗಿದೆ."
            }
        },
        "kisan-e-mitra": {
            title: "ಕಿಸಾನ್ ಇ-ಮಿತ್ರ",
            highlight: "AI ಕೃಷಿ ಸಹಾಯಕ",
            desc: "ಕೃಷಿ ಪ್ರಶ್ನೆಗಳಿಗೆ ನಿಮ್ಮ ವರ್ಚುವಲ್ ಸಹಾಯಕ. ಬಹುಭಾಷಾ ಬೆಂಬಲದೊಂದಿಗೆ 24/7 ಲಭ್ಯ.",
            long_description: "ಕಿಸಾನ್ ಇ-ಮಿತ್ರ ಕೃಷಿ ಸಚಿವಾಲಯ ಪ್ರಾರಂಭಿಸಿದ AI ಚಾಟ್‌ಬಾಟ್ ಆಗಿದೆ. ಇದು ರೈತರಿಗೆ ತಮ್ಮದೇ ಭಾಷೆಯಲ್ಲಿ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಮತ್ತು ಕೃಷಿ ತಂತ್ರಜ್ಞಾನಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ ನೀಡುತ್ತದೆ.",
            modal_content: {
                summary: "ರೈತರ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ AI ಚಾಟ್‌ಬಾಟ್.",
                highlights: ["24/7 ಲಭ್ಯತೆ", "ಬಹುಭಾಷಾ ಬೆಂಬಲ", "ತ್ವರಿತ ಪರಿಹಾರ"]
            },
            full_page_content: {
                documents: ["ಮೊಬೈಲ್ ಸಂಖ್ಯೆ"],
                process: "ಕಿಸಾನ್ ಇ-ಮಿತ್ರ ಪೋರ್ಟಲ್ ಬಳಸಿ.",
                application_steps: [
                    "1. ಕಿಸಾನ್ ಇ-ಮಿತ್ರ ವೆಬ್‌ಸೈಟ್‌ಗೆ ಭೇಟಿ ನೀಡಿ.",
                    "2. ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ (ಉದಾ. ಕನ್ನಡ).",
                    "3. ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಧ್ವನಿ ಮೂಲಕ ಕೇಳಿ.",
                    "4. ತ್ವರಿತ ಪರಿಹಾರ ಪಡೆಯಿರಿ."
                ],
                nagrik_support: "ಇದು ಸಂಪೂರ್ಣ ಸ್ವಯಂಚಾಲಿತ ಸೇವೆಯಾಗಿದೆ.",
                eligibility: ["ಎಲ್ಲಾ ರೈತರು", "ವಿದ್ಯಾರ್ಥಿಗಳು"],
                eligibility_detailed: [
                    "ಭಾರತದ ಯಾವುದೇ ರೈತರು.",
                    "ಕೃಷಿಯಲ್ಲಿ ಆಸಕ್ತಿ ಇರುವ ಯಾರಾದರೂ."
                ],
                important_note: "ಈ ಸೇವೆ ಸಂಪೂರ್ಣ ಉಚಿತವಾಗಿದೆ."
            }
        },
    },

    // Malayalam
    ml: {
        "atal-pension-yojana": {
            title: "അടൽ പെൻഷൻ യോജന",
            highlight: "പെൻഷൻ ₹1,000 - ₹5,000/മാസം",
            desc: "അസംഘടിത മേഖലയിലെ തൊഴിലാളികൾക്ക് ഉറപ്പായ പെൻഷൻ (വയസ്സ് 18-40).",
            long_description: "അടൽ പെൻഷൻ യോജന (APY) എന്നത് അസംഘടിത മേഖലയിലെ തൊഴിലാളികൾക്ക് വാർദ്ധക്യകാലത്ത് സുരക്ഷ ഉറപ്പാക്കുന്നതിനുള്ള ഒരു സാമൂഹിക സുരക്ഷാ പദ്ധതിയാണ്. വരിക്കാർ 60 വയസ്സിന് ശേഷം പ്രതിമാസ പെൻഷൻ ലഭിക്കുന്നതിന് അർഹരാകും.",
            modal_content: {
                summary: "അസംഘടിത മേഖലയെ ലക്ഷ്യമിട്ടുള്ള സർക്കാർ പിന്തുണയുള്ള പെൻഷൻ പദ്ധതി.",
                highlights: ["ഉറപ്പായ പെൻഷൻ", "നികുതി ആനുകൂല്യങ്ങൾ", "സർക്കാർ വിഹിതം"]
            },
            full_page_content: {
                documents: ["ആധാർ കാർഡ്", "ബാങ്ക് അക്കൗണ്ട്"],
                process: "നിങ്ങളുടെ ബാങ്ക് ശാഖ സന്ദർശിച്ച് APY അപേക്ഷ പൂരിപ്പിക്കുക.",
                application_steps: [
                    "1. സേവിംഗ്സ് അക്കൗണ്ടുള്ള ബാങ്ക് അല്ലെങ്കിൽ പോസ്റ്റ് ഓഫീസ് സന്ദർശിക്കുക.",
                    "2. 'അടൽ പെൻഷൻ യോജന രജിസ്ട്രേഷൻ ഫോം' പൂരിപ്പിക്കുക.",
                    "3. ആധാർ, മൊബൈൽ വിവരങ്ങൾ നൽകുക.",
                    "4. ഓട്ടോ-ഡെബിറ്റ് സൗകര്യം സജ്ജമാക്കുക.",
                    "5. പ്രാൻ (PRAN) കാർഡ് കൈപ്പറ്റുക."
                ],
                nagrik_support: "നഗ്രിക് AI നിങ്ങൾക്ക് ഫോം പൂരിപ്പിക്കാൻ സഹായിക്കും.",
                eligibility: ["ഇന്ത്യൻ പൗരൻ", "വയസ്സ് 18-40", "സേവിംഗ്സ് അക്കൗണ്ട്"],
                eligibility_detailed: [
                    "ഇന്ത്യൻ പൗരനായിരിക്കണം.",
                    "വയസ്സ് 18-നും 40-നും ഇടയിലായിരിക്കണം.",
                    "സാധുവായ ബാങ്ക് സേവിംഗ്സ് അക്കൗണ്ട് ഉണ്ടായിരിക്കണം.",
                    "ആദായനികുതി അടക്കുന്നവർക്ക് അർഹതയില്ല."
                ],
                important_note: "പെൻഷൻ തുക നിങ്ങളുടെ നിക്ഷേപത്തെ ആശ്രയിച്ചിരിക്കും."
            }
        },
        "pm-suraksha-bima-yojana": {
            title: "പ്രധാനമന്ത്രി സുരക്ഷാ ബീമാ യോജന",
            highlight: "₹2 ലക്ഷം അപകട ഇൻഷുറൻസ്",
            desc: "വർഷത്തിൽ വെറും ₹20 രൂപയ്ക്ക് അപകട മരണ & വൈകല്യ ഇൻഷുറൻസ്. (വയസ്സ് 18-70).",
            long_description: "പ്രധാനമന്ത്രി സുരക്ഷാ ബീമാ യോജന (PMSBY) എന്നത് ഒരു അപകട ഇൻഷുറൻസ് പദ്ധതിയാണ്. അപകടം മൂലം മരണം സംഭവിക്കുകയോ അംഗവൈകല്യം സംഭവിക്കുകയോ ചെയ്താൽ സാമ്പത്തിക സഹായം ലഭിക്കും.",
            modal_content: {
                summary: "അപകടം മൂലമുള്ള മരണം അല്ലെങ്കിൽ വൈകല്യം എന്നിവയ്ക്ക് പരിരക്ഷ നൽകുന്ന അപകട ഇൻഷുറൻസ് പദ്ധതി.",
                highlights: ["₹2 ലക്ഷം കവർ", "പ്രീമിയം ₹20/വർഷം", "ഓട്ടോ-ഡെബിറ്റ് സൗകര്യം"]
            },
            full_page_content: {
                documents: ["ആധാർ കാർഡ്", "ബാങ്ക് വിവരങ്ങൾ"],
                process: "നിങ്ങളുടെ ബാങ്ക് വഴി PMSBY യിൽ ചേരാം.",
                application_steps: [
                    "1. ബാങ്ക് ശാഖയിൽ പോകുക.",
                    "2. PMSBY ഫോം പൂരിപ്പിക്കുക.",
                    "3. ആധാർ കാർഡ് ബന്ധിപ്പിക്കുക.",
                    "4. അക്കൗണ്ടിൽ നിന്ന് തുക പിടിക്കാൻ സമ്മതം നൽകുക.",
                    "5. രസീത് കൈപ്പറ്റുക."
                ],
                nagrik_support: "ക്ലെയിം നടപടികൾ ഞങ്ങൾ വിശദീകരിക്കുന്നു.",
                eligibility: ["വയസ്സ് 18-70", "ബാങ്ക് അക്കൗണ്ട്"],
                eligibility_detailed: [
                    "18 മുതൽ 70 വയസ്സുവരെയുള്ള ഇന്ത്യൻ പൗരന്മാർ.",
                    "സേവിംഗ്സ് ബാങ്ക് അക്കൗണ്ട് നിർബന്ധം.",
                    "ഓട്ടോ-ഡെബിറ്റ് സമ്മതം നൽയകണം."
                ],
                important_note: "ജൂൺ 1 മുതൽ മെയ് 31 വരെയാണ് കാലാവധി."
            }
        },
        "pm-jeevan-jyoti-bima-yojana": {
            title: "പ്രധാനമന്ത്രി ജീവൻ ജ്യോതി ബീമാ യോജന",
            highlight: "₹2 ലക്ഷം ലൈഫ് ഇൻഷുറൻസ്",
            desc: "ഏത് കാരണത്താലുള്ള മരണത്തിനും ടേം ലൈഫ് ഇൻഷുറൻസ്. പ്രീമിയം ₹436/വർഷം.",
            long_description: "പ്രധാനമന്ത്രി ജീവൻ ജ്യോതി ബീമാ യോജന (PMJJBY) എന്നത് ഒരു ടേം ലൈഫ് ഇൻഷുറൻസ് പോളിസിയാണ്. ഏത് കാരണത്താൽ മരണം സംഭവിച്ചാലും നോമിനിക്ക് 2 ലക്ഷം രൂപ ലഭിക്കും.",
            modal_content: {
                summary: "എല്ലാ വർഷവും പുതുക്കാവുന്ന ഒരു വർഷത്തെ ടേം ലൈഫ് ഇൻഷുറൻസ് പദ്ധതി.",
                highlights: ["₹2 ലക്ഷം കവർ", "പ്രീമിയം ₹436/വർഷം", "മെഡിക്കൽ പരിശോധന ആവശ്യമില്ല"]
            },
            full_page_content: {
                documents: ["ആധാർ കാർഡ്", "ബാങ്ക് പാസ്ബുക്ക്"],
                process: "PMJJBY സ്കീമിൽ ചേരാൻ ബാങ്കിനെ സമീപിക്കുക.",
                application_steps: [
                    "1. അടുത്തുള്ള ബാങ്ക് സന്ദർശിക്കുക.",
                    "2. PMJJBY അപേക്ഷാ ഫോം പൂരിപ്പിക്കുക.",
                    "3. പ്രീമിയം അടയ്ക്കാൻ അക്കൗണ്ട് ലിങ്ക് ചെയ്യുക.",
                    "4. ആധാർ വിവരങ്ങൾ നൽകുക.",
                    "5. ഇൻഷുറൻസ് സർട്ടിഫിക്കറ്റ് വാങ്ങുക."
                ],
                nagrik_support: "നഗ്രിക് വോയിസ് അസിസ്റ്റന്റ് വഴി കൂടുതൽ അറിയുക.",
                eligibility: ["വയസ്സ് 18-50", "ബാങ്ക് അക്കൗണ്ട്"],
                eligibility_detailed: [
                    "18 മുതൽ 50 വയസ്സുവരെയുള്ള വ്യക്തികൾ.",
                    "ബാങ്ക് സേവിംഗ്സ് അക്കൗണ്ട് നിർബന്ധം.",
                    "വാർഷിക പ്രീമിയം അടയ്ക്കാൻ സമ്മതം."
                ],
                important_note: "ചേർന്ന് 45 ദിവസത്തിന് ശേഷം പരിരക്ഷ ലഭിക്കും."
            }
        },
        "pm-kisan-samman-nidhi": {
            title: "പ്രധാനമന്ത്രി കിസാൻ സമ്മാൻ നിധി",
            highlight: "₹6,000/വർഷം സഹായം",
            desc: "കർഷകർക്ക് 100% സർക്കാർ ധനസഹായം, നേരിട്ട് ബാങ്ക് അക്കൗണ്ടുകളിലേക്ക്.",
            long_description: "പ്രധാനമന്ത്രി കിസാൻ സമ്മാൻ നിധി (PM-KISAN) കർഷകർക്ക് സാമ്പത്തിക സഹായം നൽകുന്ന കേന്ദ്ര സർക്കാർ പദ്ധതിയാണ്. വർഷത്തിൽ ₹6,000 മൂന്ന് ഗഡുക്കളായി കർഷകരുടെ അക്കൗണ്ടിൽ നേരിട്ടെത്തും.",
            modal_content: {
                summary: "കർഷകർക്ക് കുറഞ്ഞ വരുമാന പിന്തുണയായി വർഷത്തിൽ ₹6,000 നൽകുന്ന സർക്കാർ പദ്ധതി.",
                highlights: ["വർഷത്തിൽ ₹6,000", "നേരിട്ടുള്ള ആനുകൂല്യ കൈമാറ്റം (DBT)", "3 ഗഡുക്കൾ"]
            },
            full_page_content: {
                documents: ["ആധാർ കാർഡ്", "ഭൂമി രേഖകൾ", "ബാങ്ക് അക്കൗണ്ട്"],
                process: "PM-Kisan പോർട്ടലിൽ രജിസ്റ്റർ ചെയ്യുക.",
                application_steps: [
                    "1. pmkisan.gov.in വെബ്സൈറ്റ് സന്ദർശിക്കുക.",
                    "2. 'New Farmer Registration' തിരഞ്ഞെടുക്കുക.",
                    "3. ആധാർ നമ്പറും മൊബൈൽ നമ്പറും നൽകുക.",
                    "4. ഭൂമി വിവരങ്ങൾ ചേർത്ത് സമർപ്പിക്കുക."
                ],
                nagrik_support: "അപേക്ഷയുടെ നില പരിശോധിക്കാൻ ഞങ്ങൾ സഹായിക്കും.",
                eligibility: ["ചെറുകിട കർഷകർ", "ഇന്ത്യൻ പൗരന്മാർ"],
                eligibility_detailed: [
                    "കൃഷിഭൂമിയുള്ള കർഷക കുടുംബങ്ങൾ.",
                    "സ്ഥാപന ഉടമകൾക്കും ആദായനികുതി അടക്കുന്നവർക്കും അർഹതയില്ല."
                ],
                important_note: "ആനുകൂല്യം ലഭിക്കാൻ eKYC നിർബന്ധമാണ്."
            }
        },
        "ayushman-bharat": {
            title: "ആയുഷ്മാൻ ഭാരത് (PM-JAY)",
            highlight: "₹5 ലക്ഷം ആരോഗ്യ പരിരക്ഷ",
            desc: "ഒരു കുടുംബത്തിന് വർഷത്തിൽ ₹5 ലക്ഷം സൗജന്യ ചികിത്സാ സഹായം.",
            long_description: "ആയുഷ്മാൻ ഭാരത് - പ്രധാനമന്ത്രി ജന ആരോഗ്യ യോജന (AB-PMJAY) ലോകത്തിലെ ഏറ്റവും വലിയ ഇൻഷുറൻസ് പദ്ധതിയാണ്. ചികിത്സാ ചെലവുകൾക്കായി, ഒരു കുടുംബത്തിന് വർഷം 5 ലക്ഷം രൂപ വരെ പരിരക്ഷ നൽകുന്നു.",
            modal_content: {
                summary: "ലോകത്തിലെ ഏറ്റവും വലിയ സർക്കാർ ധനസഹായമുള്ള ആരോഗ്യ പരിരക്ഷാ പദ്ധതി.",
                highlights: ["₹5 ലക്ഷം കവർ", "പണമില്ലാത്ത ചികിത്സ", "ഇന്ത്യയിലുടനീളം ഉപയോഗിക്കാം"]
            },
            full_page_content: {
                documents: ["ആധാർ കാർഡ്", "റേഷൻ കാർഡ്"],
                process: "അർഹത പരിശോധിച്ച് ആശുപത്രി സന്ദർശിക്കുക.",
                application_steps: [
                    "1. pmjay.gov.in ൽ 'Am I Eligible' പരിശോധിക്കുക.",
                    "2. മൊബൈൽ നമ്പർ ഉപയോഗിച്ച് ലോഗിൻ ചെയ്യുക.",
                    "3. പട്ടികയിൽ പേരുണ്ടോയെന്ന് നോക്കുക.",
                    "4. ഗോൾഡൻ കാർഡ് ലഭിക്കാൻ ആശുപത്രിയെ സമീപിക്കുക."
                ],
                nagrik_support: "അടുത്തുള്ള ആശുപത്രി കണ്ടെത്താൻ സഹായിക്കുന്നു.",
                eligibility: ["SECC പട്ടിക", "SC/ST കുടുംബങ്ങൾ"],
                eligibility_detailed: [
                    "SECC 2011 ഡാറ്റാബേസിലുള്ള കുടുംബങ്ങൾ.",
                    "SC/ST വിഭാഗങ്ങൾ, ഭൂരഹിതരായ തൊഴിലാളികൾ."
                ],
                important_note: "കുടുംബാംഗങ്ങളുടെ എണ്ണത്തിന് പരിധിയില്ല."
            }
        },
        "pm-mitra-scheme": {
            title: "പിഎം മിത്ര സ്കീം",
            highlight: "ടെക്സ്റ്റൈൽ വ്യവസായ വളർച്ച",
            desc: "ടെക്സ്റ്റൈൽ വ്യവസായം പ്രോത്സാഹിപ്പിക്കുന്നതിനായി സംയോജിത ടെക്സ്റ്റൈൽ പാർക്കുകൾ.",
            long_description: "പിഎം മിത്ര (PM MITRA) പദ്ധതി ടെക്സ്റ്റൈൽ മേഖലയിൽ നിക്ഷേപം ആകർഷിക്കാനും ആധുനിക അടിസ്ഥാന സൗകര്യങ്ങൾ ഒരുക്കാനും ലക്ഷ്യമിടുന്നു. 5F (ഫാം ടു ഫൈബർ) കാഴ്ചപ്പാടിലാണ് ഇത് നടപ്പിലാക്കുന്നത്.",
            modal_content: {
                summary: "ലോകോത്തര വ്യാവസായിക അടിസ്ഥാന സൗകര്യങ്ങൾ സൃഷ്ടിക്കുന്നതിനായി ഏഴ് പിഎം മിത്ര പാർക്കുകൾ സ്ഥാപിക്കും.",
                highlights: ["ലോകോത്തര അടിസ്ഥാന സൗകര്യങ്ങൾ", "തൊഴിൽ സൃഷ്ടിക്കൽ", "നിക്ഷേപം വർദ്ധിപ്പിക്കൽ"]
            },
            full_page_content: {
                documents: ["ബിസിനസ് രജിസ്ട്രേഷൻ", "പ്രോജക്ട് റിപ്പോർട്ട്"],
                process: "സംസ്ഥാന സർക്കാരുകളും സ്വകാര്യ പങ്കാളിത്തവും വഴി നടപ്പിലാക്കുന്നു.",
                application_steps: [
                    "1. സംസ്ഥാന സർക്കാരുകൾ നിർദ്ദേശങ്ങൾ സമർപ്പിക്കുന്നു.",
                    "2. SPV (സ്പെഷ്യൽ പർപ്പസ് വെഹിക്കിൾ) രൂപീകരിക്കുന്നു.",
                    "3. മാസ്റ്റർ ഡെവലപ്പറെ തിരഞ്ഞെടുക്കുന്നു.",
                    "4. യൂണിറ്റുകൾ സ്ഥാപിക്കാൻ അപേക്ഷിക്കാം."
                ],
                nagrik_support: "സംരംഭകർക്ക് വിവരങ്ങൾ നൽകുന്നു.",
                eligibility: ["സംസ്ഥാന സർക്കാരുകൾ", "സ്വകാര്യ കമ്പനികൾ"],
                eligibility_detailed: [
                    "1000 ഏക്കറിലധികം ഭൂമിയുള്ള സംസ്ഥാനങ്ങൾ.",
                    "ടെക്സ്റ്റൈൽ മേഖലയിൽ നിക്ഷേപം നടത്തുന്ന കമ്പനികൾ."
                ],
                important_note: "ഇതൊരു അടിസ്ഥാന സൗകര്യ വികസന പദ്ധതിയാണ്."
            }
        },
        "kisan-e-mitra": {
            title: "കിസാൻ ഇ-മിത്ര",
            highlight: "AI കാർഷിക സഹായി",
            desc: "കാർഷിക സംശയങ്ങൾക്ക് നിങ്ങളുടെ വെർച്വൽ അസിസ്റ്റന്റ്. 24/7 ലഭ്യമാണ്.",
            long_description: "കാർഷിക മന്ത്രാലയം ആരംഭിച്ച ഒരു AI ചാറ്റ്‌ബോട്ടാണ് കിസാൻ ഇ-മിത്ര. കർഷകർക്ക് അവരുടെ സ്വന്തം ഭാഷയിൽ ചോദ്യങ്ങൾ ചോദിക്കാനും ഉത്തരം നേടാനും ഇത് സഹായിക്കുന്നു.",
            modal_content: {
                summary: "കർഷകരുടെ ചോദ്യങ്ങൾക്ക് ഉത്തരം നൽകാൻ രൂപകൽപ്പന ചെയ്ത AI ചാറ്റ്ബോട്ട്.",
                highlights: ["24/7 ലഭ്യത", "ബഹുഭാഷാ പിന്തുണ", "ഉടൻ മറുപടി"]
            },
            full_page_content: {
                documents: ["മൊബൈൽ നമ്പർ"],
                process: "കിസാൻ ഇ-മിത്ര പോർട്ടൽ ഉപയോഗിക്കുക.",
                application_steps: [
                    "1. കിസാൻ ഇ-മിത്ര വെബ്സൈറ്റിലേക്ക് പോകുക.",
                    "2. നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക (ഉദാ. മലയാളം).",
                    "3. ചോദ്യം ടൈപ്പ് ചെയ്യുകയോ വോയ്സ് മെസേജ് അയക്കുകയോ ചെയ്യുക.",
                    "4. ഉടനടി പരിഹാരം നേടുക."
                ],
                nagrik_support: "ഇതൊരു ഓട്ടോമേറ്റഡ് സേവനമാണ്.",
                eligibility: ["എല്ലാ കർഷകർക്കും", "വിദ്യാർത്ഥികൾക്കും"],
                eligibility_detailed: [
                    "ഇന്ത്യയിലെ ഏത് കർഷകനും.",
                    "കൃഷിയിൽ താല്പര്യമുള്ള ആർക്കും."
                ],
                important_note: "ഈ സേവനം പൂർണ്ണമായും സൗജന്യമാണ്."
            }
        },
    },

    // Punjabi
    pa: {
        "atal-pension-yojana": {
            title: "ਅਟਲ ਪੈਨਸ਼ਨ ਯੋਜਨਾ",
            highlight: "ਪੈਨਸ਼ਨ ₹1,000 - ₹5,000/ਮਹੀਨਾ",
            desc: "ਅਸੰਗਠਿਤ ਖੇਤਰ ਦੇ ਕਾਮਿਆਂ ਲਈ ਗਰੰਟੀਸ਼ੁਦਾ ਪੈਨਸ਼ਨ (ਉਮਰ 18-40).",
            long_description: "ਅਟਲ ਪੈਨਸ਼ਨ ਯੋਜਨਾ (APY) ਭਾਰਤ ਸਰਕਾਰ ਦੀ ਇੱਕ ਸਮਾਜਿਕ ਸੁਰੱਖਿਆ ਸਕੀਮ ਹੈ। ਇਹ ਮੁੱਖ ਤੌਰ 'ਤੇ ਅਸੰਗਠਿਤ ਖੇਤਰ ਦੇ ਕਾਮਿਆਂ ਨੂੰ ਬੁਢਾਪੇ ਵਿੱਚ ਆਮਦਨ ਸੁਰੱਖਿਆ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਹੈ। ਗਾਹਕ 60 ਸਾਲ ਦੀ ਉਮਰ ਤੋਂ ਬਾਅਦ ₹1,000 ਤੋਂ ₹5,000 ਤੱਕ ਦੀ ਮਾਸਿਕ ਪੈਨਸ਼ਨ ਪ੍ਰਾਪਤ ਕਰਨਗੇ।",
            modal_content: {
                summary: "ਅਸੰਗਠਿਤ ਖੇਤਰ ਨੂੰ ਨਿਸ਼ਾਨਾ ਬਣਾਉਣ ਵਾਲੀ ਸਰਕਾਰ ਦੁਆਰਾ ਸਮਰਥਿਤ ਪੈਨਸ਼ਨ ਸਕੀਮ.",
                highlights: ["ਗਰੰਟੀਸ਼ੁਦਾ ਪੈਨਸ਼ਨ", "ਟੈਕਸ ਲਾਭ", "ਸਰਕਾਰੀ ਯੋਗਦਾਨ"]
            },
            full_page_content: {
                documents: ["ਆਧਾਰ ਕਾਰਡ", "ਬੈਂਕ ਖਾਤਾ", "ਮੋਬਾਈਲ ਨੰਬਰ"],
                process: "ਆਪਣੀ ਬੈਂਕ ਸ਼ਾਖਾ 'ਤੇ ਜਾਓ ਅਤੇ APY ਫਾਰਮ ਭਰੋ।",
                application_steps: [
                    "1. ਉਸ ਬੈਂਕ ਜਾਂ ਡਾਕਘਰ 'ਤੇ ਜਾਓ ਜਿੱਥੇ ਤੁਹਾਡਾ ਬੱਚਤ ਖਾਤਾ ਹੈ।",
                    "2. 'ਅਟਲ ਪੈਨਸ਼ਨ ਯੋਜਨਾ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਫਾਰਮ' ਮੰਗੋ।",
                    "3. ਆਪਣਾ ਆਧਾਰ ਅਤੇ ਬੈਂਕ ਵੇਰਵੇ ਭਰੋ।",
                    "4. ਆਟੋ-ਡੈਬਿਟ ਸਹੂਲਤ ਲਈ ਸਹਿਮਤੀ ਦਿਓ।",
                    "5. ਫਾਰਮ ਜਮ੍ਹਾਂ ਕਰੋ ਅਤੇ ਰਸੀਦ ਪ੍ਰਾਪਤ ਕਰੋ।"
                ],
                nagrik_support: "ਨਾਗਰਿਕ AI ਤੁਹਾਨੂੰ ਫਾਰਮ ਭਰਨ ਵਿੱਚ ਮਦਦ ਕਰੇਗਾ।",
                eligibility: ["ਭਾਰਤੀ ਨਾਗਰਿਕ", "ਉਮਰ 18-40", "ਬੱਚਤ ਖਾਤਾ"],
                eligibility_detailed: [
                    "ਬਿਨੈਕਾਰ ਭਾਰਤੀ ਨਾਗਰਿਕ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।",
                    "ਉਮਰ 18 ਤੋਂ 40 ਸਾਲ ਦੇ ਵਿਚਕਾਰ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।",
                    "ਇੱਕ ਵੈਧ ਬੱਚਤ ਬੈਂਕ ਖਾਤਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।",
                    "ਇਨਕਮ ਟੈਕਸ ਦਾ ਭੁਗਤਾਨ ਕਰਨ ਵਾਲੇ ਯੋਗ ਨਹੀਂ ਹਨ।"
                ],
                important_note: "ਪੈਨਸ਼ਨ ਦੀ ਰਕਮ ਤੁਹਾਡੇ ਯੋਗਦਾਨ 'ਤੇ ਨਿਰਭਰ ਕਰਦੀ ਹੈ।"
            }
        },
        "pm-suraksha-bima-yojana": {
            title: "ਪਰਧਾਨ ਮੰਤਰੀ ਸੁਰੱਖਿਆ ਬੀਮਾ ਯੋਜਨਾ",
            highlight: "₹2 ਲੱਖ ਦੁਰਘਟਨਾ ਬੀਮਾ",
            desc: "ਸਿਰਫ ₹20/ਸਾਲ ਵਿੱਚ ਦੁਰਘਟਨਾ ਮੌਤ ਅਤੇ ਅਪੰਗਤਾ ਬੀਮਾ. (ਉਮਰ 18-70).",
            long_description: "ਪਰਧਾਨ ਮੰਤਰੀ ਸੁਰੱਖਿਆ ਬੀਮਾ ਯੋਜਨਾ (PMSBY) ਇੱਕ ਦੁਰਘਟਨਾ ਬੀਮਾ ਸਕੀਮ ਹੈ। ਇਹ ਦੁਰਘਟਨਾ ਕਾਰਨ ਮੌਤ ਜਾਂ ਅਪੰਗਤਾ ਦੇ ਮਾਮਲੇ ਵਿੱਚ ਵਿੱਤੀ ਸੁਰੱਖਿਆ ਪ੍ਰਦਾਨ ਕਰਦੀ ਹੈ। ਕਵਰੇਜ ਦੀ ਮਿਆਦ ਇੱਕ ਸਾਲ ਹੈ ਅਤੇ ਇਸਨੂੰ ਹਰ ਸਾਲ ਨਵਿਆਉਣਾ ਪੈਂਦਾ ਹੈ।",
            modal_content: {
                summary: "ਇੱਕ ਦੁਰਘਟਨਾ ਬੀਮਾ ਸਕੀਮ ਜੋ ਦੁਰਘਟਨਾ ਕਾਰਨ ਮੌਤ ਜਾਂ ਅਪੰਗਤਾ ਲਈ ਕਵਰ ਪ੍ਰਦਾਨ ਕਰਦੀ ਹੈ.",
                highlights: ["₹2 ਲੱਖ ਕਵਰ", "ਪ੍ਰੀਮੀਅਮ ₹20/ਸਾਲ", "ਆਟੋ-ਡੈਬਿਟ ਸਹੂਲਤ"]
            },
            full_page_content: {
                documents: ["ਆਧਾਰ ਕਾਰਡ", "ਬੈਂਕ ਵੇਰਵੇ"],
                process: "ਆਪਣੇ ਬੈਂਕ ਰਾਹੀਂ PMSBY ਫਾਰਮ ਭਰੋ।",
                application_steps: [
                    "1. ਆਪਣੀ ਬੈਂਕ ਸ਼ਾਖਾ 'ਤੇ ਜਾਓ।",
                    "2. PMSBY ਸਹਿਮਤੀ ਫਾਰਮ ਭਰੋ।",
                    "3. ਆਧਾਰ ਕਾਰਡ ਲਿੰਕ ਕਰੋ।",
                    "4. ਆਟੋ-ਡੈਬਿਟ ਲਈ ਇਜਾਜ਼ਤ ਦਿਓ।",
                    "5. ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਦੀ ਪੁਸ਼ਟੀ ਪ੍ਰਾਪਤ ਕਰੋ।"
                ],
                nagrik_support: "ਦਾਅਵੇ ਦੀ ਪ੍ਰਕਿਰਿਆ ਬਾਰੇ ਅਸੀਂ ਤੁਹਾਨੂੰ ਸਮਝਾਵਾਂਗੇ।",
                eligibility: ["ਉਮਰ 18-70", "ਬੈਂਕ ਖਾਤਾ"],
                eligibility_detailed: [
                    "18 ਤੋਂ 70 ਸਾਲ ਦੀ ਉਮਰ ਦੇ ਭਾਰਤੀ ਨਾਗਰਿਕ।",
                    "ਬੱਚਤ ਬੈਂਕ ਖਾਤਾ ਲਾਜ਼ਮੀ ਹੈ।",
                    "ਆਟੋ-ਡੈਬਿਟ ਸਹਿਮਤੀ ਦੇਣੀ ਪਵੇਗੀ।"
                ],
                important_note: "ਕਵਰੇਜ ਦੀ ਮਿਆਦ 1 ਜੂਨ ਤੋਂ 31 ਮਈ ਤੱਕ ਹੈ।"
            }
        },
        "pm-jeevan-jyoti-bima-yojana": {
            title: "ਪਰਧਾਨ ਮੰਤਰੀ ਜੀਵਨ ਜਯੋਤੀ ਬੀਮਾ ਯੋਜਨਾ",
            highlight: "₹2 ਲੱਖ ਜੀਵਨ ਬੀਮਾ",
            desc: "ਕਿਸੇ ਵੀ ਕਾਰਨ ਕਰਕੇ ਮੌਤ ਲਈ ਜੀਵਨ ਬੀਮਾ. ਪ੍ਰੀਮੀਅਮ ₹436/ਸਾਲ.",
            long_description: "ਪਰਧਾਨ ਮੰਤਰੀ ਜੀਵਨ ਜਯੋਤੀ ਬੀਮਾ ਯੋਜਨਾ (PMJJBY) ਇੱਕ ਸਾਲ ਦੀ ਜੀਵਨ ਬੀਮਾ ਪਾਲਿਸੀ ਹੈ। ਇਹ ਕਿਸੇ ਵੀ ਕਾਰਨ ਕਰਕੇ ਬੀਮਾਯੁਕਤ ਵਿਅਕਤੀ ਦੀ ਮੌਤ ਹੋਣ 'ਤੇ ਨਾਮਜ਼ਦ ਵਿਅਕਤੀ ਨੂੰ ₹2 ਲੱਖ ਪ੍ਰਦਾਨ ਕਰਦੀ ਹੈ।",
            modal_content: {
                summary: "ਹਰ ਸਾਲ ਨਵਿਆਉਣਯੋਗ ਇੱਕ ਸਾਲ ਦੀ ਮਿਆਦ ਵਾਲੀ ਜੀਵਨ ਬੀਮਾ ਸਕੀਮ.",
                highlights: ["₹2 ਲੱਖ ਦਾ ਕਵਰ", "ਪ੍ਰੀਮੀਅਮ ₹436/ਸਾਲ", "ਕੋਈ ਮੈਡੀਕਲ ਜਾਂਚ ਨਹੀਂ"]
            },
            full_page_content: {
                documents: ["ਆਧਾਰ ਕਾਰਡ", "ਬੈਂਕ ਪਾਸਬੁੱਕ"],
                process: "ਬੈਂਕ 'ਤੇ ਜਾਓ ਅਤੇ PMJJBY ਲਈ ਰਜਿਸਟਰ ਕਰੋ।",
                application_steps: [
                    "1. ਆਪਣੀ ਨਜ਼ਦੀਕੀ ਬੈਂਕ ਸ਼ਾਖਾ 'ਤੇ ਜਾਓ।",
                    "2. PMJJBY ਬਿਨੈ-ਪੱਤਰ ਭਰੋ।",
                    "3. ਪ੍ਰੀਮੀਅਮ ਭੁਗਤਾਨ ਲਈ ਆਪਣਾ ਖਾਤਾ ਲਿੰਕ ਕਰੋ।",
                    "4. ਆਧਾਰ ਵੇਰਵੇ ਪ੍ਰਦਾਨ ਕਰੋ।",
                    "5. ਬੀਮਾ ਸਰਟੀਫਿਕੇਟ ਪ੍ਰਾਪਤ ਕਰੋ।"
                ],
                nagrik_support: "ਨਾਗਰਿਕ ਵੌਇਸ ਅਸਿਸਟੈਂਟ ਰਾਹੀਂ ਮਦਦ ਲਓ।",
                eligibility: ["ਉਮਰ 18-50", "ਬੈਂਕ ਖਾਤਾ"],
                eligibility_detailed: [
                    "18 ਤੋਂ 50 ਸਾਲ ਦੀ ਉਮਰ ਦੇ ਵਿਅਕਤੀ।",
                    "ਬੱਚਤ ਬੈਂਕ ਖਾਤਾ ਲਾਜ਼ਮੀ ਹੈ।",
                    "ਸਾਲਾਨਾ ਪ੍ਰੀਮੀਅਮ ਕਟੌਤੀ ਲਈ ਸਹਿਮਤੀ।"
                ],
                important_note: "ਸ਼ਾਮਲ ਹੋਣ ਦੇ 45 ਦਿਨਾਂ ਬਾਅਦ ਜੋਖਮ ਕਵਰ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ।"
            }
        },
        "pm-kisan-samman-nidhi": {
            title: "ਪਰਧਾਨ ਮੰਤਰੀ ਕਿਸਾਨ ਸਨਮਾਨ ਨਿਧੀ",
            highlight: "₹6,000/ਸਾਲ ਸਹਾਇਤਾ",
            desc: "ਕਿਸਾਨਾਂ ਲਈ 100% ਸਰਕਾਰੀ ਫੰਡ ਪ੍ਰਾਪਤ ਵਿੱਤੀ ਸਹਾਇਤਾ, ਸਿੱਧੇ ਬੈਂਕ ਖਾਤਿਆਂ ਵਿੱਚ.",
            long_description: "ਪਰਧਾਨ ਮੰਤਰੀ ਕਿਸਾਨ ਸਨਮਾਨ ਨਿਧੀ (PM-KISAN) ਕਿਸਾਨਾਂ ਨੂੰ ਆਮਦਨ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਨ ਵਾਲੀ ਇੱਕ ਕੇਂਦਰੀ ਸਕੀਮ ਹੈ। ਯੋਗ ਕਿਸਾਨ ਪਰਿਵਾਰਾਂ ਨੂੰ ਹਰ ਸਾਲ ₹6,000 ਤਿੰਨ ਬਰਾਬਰ ਕਿਸ਼ਤਾਂ ਵਿੱਚ ਸਿੱਧੇ ਬੈਂਕ ਖਾਤੇ ਵਿੱਚ ਟ੍ਰਾਂਸਫਰ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।",
            modal_content: {
                summary: "ਕਿਸਾਨਾਂ ਨੂੰ ਘੱਟੋ-ਘੱਟ ਆਮਦਨ ਸਹਾਇਤਾ ਵਜੋਂ ਸਾਲਾਨਾ ₹6,000 ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਸਰਕਾਰੀ ਪਹਿਲ.",
                highlights: ["₹6,000 ਪ੍ਰਤੀ ਸਾਲ", "ਸਿੱਧਾ ਲਾਭ ਟ੍ਰਾਂਸਫਰ (DBT)", "3 ਕਿਸ਼ਤਾਂ"]
            },
            full_page_content: {
                documents: ["ਆਧਾਰ ਕਾਰਡ", "ਜ਼ਮੀਨੀ ਰਿਕਾਰਡ", "ਬੈਂਕ ਖਾਤਾ"],
                process: "PM-Kisan ਪੋਰਟਲ 'ਤੇ ਰਜਿਸਟਰ ਕਰੋ।",
                application_steps: [
                    "1. pmkisan.gov.in ਵੈੱਬਸਾਈਟ 'ਤੇ ਜਾਓ।",
                    "2. 'New Farmer Registration' ਚੁਣੋ।",
                    "3. ਆਧਾਰ ਨੰਬਰ ਅਤੇ ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ।",
                    "4. ਜ਼ਮੀਨੀ ਵੇਰਵੇ ਭਰੋ ਅਤੇ ਜਮ੍ਹਾਂ ਕਰੋ।"
                ],
                nagrik_support: "ਤੁਹਾਡੀ ਐਪਲੀਕੇਸ਼ਨ ਸਥਿਤੀ ਦੀ ਜਾਂਚ ਕਰਨ ਵਿੱਚ ਅਸੀਂ ਮਦਦ ਕਰਾਂਗੇ।",
                eligibility: ["ਛੋਟੇ ਅਤੇ ਸੀਮਾਂਤ ਕਿਸਾਨ", "ਭਾਰਤੀ ਨਾਗਰਿਕ"],
                eligibility_detailed: [
                    "ਕਾਸ਼ਤਯੋਗ ਜ਼ਮੀਨ ਵਾਲੇ ਕਿਸਾਨ ਪਰਿਵਾਰ।",
                    "ਸੰਸਥਾਗਤ ਜ਼ਮੀਨ ਮਾਲਕ ਅਤੇ ਇਨਕਮ ਟੈਕਸਦਾਤਾ ਯੋਗ ਨਹੀਂ ਹਨ।"
                ],
                important_note: "PMKISAN ਲਾਭਾਂ ਲਈ eKYC ਲਾਜ਼ਮੀ ਹੈ।"
            }
        },
        "ayushman-bharat": {
            title: "ਆਯੁਸ਼ਮਾਨ ਭਾਰਤ (PM-JAY)",
            highlight: "₹5 ਲੱਖ ਸਿਹਤ ਕਵਰ",
            desc: "ਪ੍ਰਤੀ ਪਰਿਵਾਰ ਪ੍ਰਤੀ ਸਾਲ ₹5 ਲੱਖ ਮੁਫਤ ਸਿਹਤ ਬੀਮਾ.",
            long_description: "ਆਯੁਸ਼ਮਾਨ ਭਾਰਤ - ਪਰਧਾਨ ਮੰਤਰੀ ਜਨ ਆਰੋਗਯ ਯੋਜਨਾ (AB-PMJAY) ਦੁਨੀਆ ਦੀ ਸਭ ਤੋਂ ਵੱਡੀ ਸਰਕਾਰੀ ਸਿਹਤ ਬੀਮਾ ਸਕੀਮ ਹੈ। ਇਹ ਹਸਪਤਾਲ ਦੇ ਖਰਚਿਆਂ ਲਈ ਪ੍ਰਤੀ ਪਰਿਵਾਰ ਸਾਲਾਨਾ ₹5 ਲੱਖ ਤੱਕ ਦਾ ਕਵਰ ਪ੍ਰਦਾਨ ਕਰਦੀ ਹੈ।",
            modal_content: {
                summary: "ਦੁਨੀਆ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਸਰਕਾਰੀ ਫੰਡ ਪ੍ਰਾਪਤ ਸਿਹਤ ਸੰਭਾਲ ਪ੍ਰੋਗਰਾਮ.",
                highlights: ["₹5 ਲੱਖ ਕਵਰ", "ਨਕਦ ਰਹਿਤ ਇਲਾਜ", "ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ ਯੋਗ"]
            },
            full_page_content: {
                documents: ["ਆਧਾਰ ਕਾਰਡ", "ਰਾਸ਼ਨ ਕਾਰਡ"],
                process: "ਯੋਗਤਾ ਦੀ ਜਾਂਚ ਕਰੋ ਅਤੇ ਹਸਪਤਾਲ ਜਾਓ।",
                application_steps: [
                    "1. pmjay.gov.in 'ਤੇ 'Am I Eligible' ਦੀ ਜਾਂਚ ਕਰੋ।",
                    "2. ਆਪਣੇ ਮੋਬਾਈਲ ਨੰਬਰ ਨਾਲ ਲੌਗਇਨ ਕਰੋ।",
                    "3. ਸੂਚੀ ਵਿੱਚ ਆਪਣਾ ਨਾਮ ਚੈੱਕ ਕਰੋ।",
                    "4. ਗੋਲਡਨ ਕਾਰਡ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਹਸਪਤਾਲ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।"
                ],
                nagrik_support: "ਨੇੜੇ ਦੇ ਹਸਪਤਾਲ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
                eligibility: ["SECC ਡੇਟਾਬੇਸ", "SC/ST ਪਰਿਵਾਰ"],
                eligibility_detailed: [
                    "SECC 2011 ਡੇਟਾਬੇਸ ਵਿੱਚ ਸ਼ਾਮਲ ਪਰਿਵਾਰ।",
                    "SC/ST ਵਰਗ ਅਤੇ ਭੂਮੀਹੀਣ ਮਜ਼ਦੂਰ ਪਰਿਵਾਰ।"
                ],
                important_note: "ਪਰਿਵਾਰਕ ਮੈਂਬਰਾਂ ਦੀ ਗਿਣਤੀ 'ਤੇ ਕੋਈ ਸੀਮਾ ਨਹੀਂ ਹੈ।"
            }
        },
        "pm-mitra-scheme": {
            title: "ਪੀਐਮ ਮਿੱਤਰ ਸਕੀਮ",
            highlight: "ਟੈਕਸਟਾਈਲ ਉਦਯੋਗ ਵਿਕਾਸ",
            desc: "ਟੈਕਸਟਾਈਲ ਉਦਯੋਗ ਨੂੰ ਹੁਲਾਰਾ ਦੇਣ ਲਈ ਏਕੀਕ੍ਰਿਤ ਟੈਕਸਟਾਈਲ ਪਾਰਕ.",
            long_description: "ਪੀਐਮ ਮਿੱਤਰ (PM MITRA) ਸਕੀਮ ਟੈਕਸਟਾਈਲ ਖੇਤਰ ਨੂੰ ਮਜ਼ਬੂਤ ​​ਕਰਨ ਅਤੇ ਵਿਸ਼ਵ ਪੱਧਰੀ ਬੁਨਿਆਦੀ ਢਾਂਚਾ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਤਿਆਰ ਕੀਤੀ ਗਈ ਹੈ। ਇਹ 5F ਵਿਜ਼ਨ (Farm to Foreign) 'ਤੇ ਅਧਾਰਤ ਹੈ।",
            modal_content: {
                summary: "ਵਿਸ਼ਵ ਪੱਧਰੀ ਉਦਯੋਗਿਕ ਬੁਨਿਆਦੀ ਢਾਂਚਾ ਬਣਾਉਣ ਲਈ ਸੱਤ ਪੀਐਮ ਮਿੱਤਰ ਪਾਰਕ ਸਥਾਪਤ ਕੀਤੇ ਜਾਣਗੇ.",
                highlights: ["ਵਿਸ਼ਵ ਪੱਧਰੀ ਬੁਨਿਆਦੀ ਢਾਂਚਾ", "ਰੁਜ਼ਗਾਰ ਸਿਰਜਣ", "ਨਿਵੇਸ਼ ਪ੍ਰੋਤਸਾਹਨ"]
            },
            full_page_content: {
                documents: ["ਵਪਾਰ ਰਜਿਸਟ੍ਰੇਸ਼ਨ", "ਪ੍ਰੋਜੈਕਟ ਰਿਪੋਰਟ"],
                process: "ਰਾਜ ਸਰਕਾਰਾਂ ਅਤੇ ਨਿੱਜੀ ਭਾਈਵਾਲੀ ਦੁਆਰਾ ਲਾਗੂ।",
                application_steps: [
                    "1. ਰਾਜ ਸਰਕਾਰਾਂ ਪ੍ਰਸਤਾਵ ਭੇਜਦੀਆਂ ਹਨ।",
                    "2. SPV (ਸਪੈਸ਼ਲ ਪਰਪਜ਼ ਵਹੀਕਲ) ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ।",
                    "3. ਮਾਸਟਰ ਡਿਵੈਲਪਰ ਦੀ ਚੋਣ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।",
                    "4. ਇਕਾਈਆਂ ਸਥਾਪਤ ਕਰਨ ਲਈ ਅਰਜ਼ੀ ਦੇਣੀ ਪੈਂਦੀ ਹੈ।"
                ],
                nagrik_support: "ਉੱਦਮੀਆਂ ਨੂੰ ਜਾਣਕਾਰੀ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।",
                eligibility: ["ਰਾਜ ਸਰਕਾਰਾਂ", "ਪ੍ਰਾਈਵੇਟ ਕੰਪਨੀਆਂ"],
                eligibility_detailed: [
                    "1000+ ਏਕੜ ਜ਼ਮੀਨ ਦੀ ਉਪਲਬਧਤਾ ਵਾਲੇ ਰਾਜ।",
                    "ਟੈਕਸਟਾਈਲ ਖੇਤਰ ਵਿੱਚ ਨਿਵੇਸ਼ ਕਰਨ ਵਾਲੀਆਂ ਕੰਪਨੀਆਂ।"
                ],
                important_note: "ਇਹ ਇੱਕ ਬੁਨਿਆਦੀ ਢਾਂਚਾ ਵਿਕਾਸ ਪ੍ਰੋਜੈਕਟ ਹੈ।"
            }
        },
        "kisan-e-mitra": {
            title: "ਕਿਸਾਨ ਈ-ਮਿੱਤਰ",
            highlight: "AI ਖੇਤੀਬਾੜੀ ਸਹਾਇਕ",
            desc: "ਖੇਤੀਬਾੜੀ ਸਵਾਲਾਂ ਲਈ ਤੁਹਾਡਾ ਵਰਚੁਅਲ ਸਹਾਇਕ. 24/7 ਉਪਲਬਧ.",
            long_description: "ਕਿਸਾਨ ਈ-ਮਿੱਤਰ ਖੇਤੀਬਾੜੀ ਮੰਤਰਾਲੇ ਦੁਆਰਾ ਸ਼ੁਰੂ ਕੀਤਾ ਗਿਆ ਇੱਕ AI ਚੈਟਬੋਟ ਹੈ। ਇਹ ਕਿਸਾਨਾਂ ਨੂੰ ਉਨ੍ਹਾਂ ਦੀ ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਖੇਤੀਬਾੜੀ ਅਤੇ ਸਰਕਾਰੀ ਸਕੀਮਾਂ ਬਾਰੇ ਜਾਣਕਾਰੀ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।",
            modal_content: {
                summary: "ਕਿਸਾਨਾਂ ਦੇ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦੇਣ ਲਈ ਤਿਆਰ ਕੀਤਾ ਗਿਆ AI ਚੈਟਬੋਟ.",
                highlights: ["24/7 ਉਪਲਬਧਤਾ", "ਬਹੁਭਾਸ਼ਾਈ ਸਹਾਇਤਾ", "ਤੁਰੰਤ ਜਵਾਬ"]
            },
            full_page_content: {
                documents: ["ਮੋਬਾਈਲ ਨੰਬਰ"],
                process: "ਕਿਸਾਨ ਈ-ਮਿੱਤਰ ਪੋਰਟਲ ਦੀ ਵਰਤੋਂ ਕਰੋ।",
                application_steps: [
                    "1. ਕਿਸਾਨ ਈ-ਮਿੱਤਰ ਦੀ ਵੈੱਬਸਾਈਟ 'ਤੇ ਜਾਓ।",
                    "2. ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ (ਉਦਾਹਰਨ ਲਈ, ਪੰਜਾਬੀ)।",
                    "3. ਆਪਣਾ ਸਵਾਲ ਟਾਈਪ ਕਰੋ ਜਾਂ ਬੋਲ ਕੇ ਪੁੱਛੋ।",
                    "4. ਤੁਰੰਤ ਜਵਾਬ ਪ੍ਰਾਪਤ ਕਰੋ।"
                ],
                nagrik_support: "ਇਹ ਪੂਰੀ ਤਰ੍ਹਾਂ ਆਟੋਮੇਟਿਡ ਸੇਵਾ ਹੈ।",
                eligibility: ["ਸਾਰੇ ਕਿਸਾਨ", "ਵਿਦਿਆਰਥੀ"],
                eligibility_detailed: [
                    "ਭਾਰਤ ਦਾ ਕੋਈ ਵੀ ਕਿਸਾਨ।",
                    "ਖੇਤੀਬਾੜੀ ਵਿੱਚ ਦਿਲਚਸਪੀ ਰੱਖਣ ਵਾਲਾ ਕੋਈ ਵੀ ਵਿਅਕਤੀ।"
                ],
                important_note: "ਇਹ ਸੇਵਾ ਪੂਰੀ ਤਰ੍ਹਾਂ ਮੁਫਤ ਹੈ।"
            }
        },
    },

    or: {}, as: {}, ur: {}, mai: {}, bho: {}
}

const supportedLanguages = ['gu', 'mr', 'bn', 'ta', 'te', 'kn', 'ml', 'pa', 'or', 'as', 'ur', 'mai', 'bho'];

export const schemesData: Scheme[] = Object.keys(schemesEn).map(id => {
    const scheme: Scheme = {
        id,
        en: schemesEn[id],
        hi: schemesHi[id] // Will be Hindi after I replace it
    };

    supportedLanguages.forEach(lang => {
        // Fallback to English but allow overrides
        scheme[lang] = merge(schemesEn[id], translations[lang]?.[id] || {});
    });

    return scheme;
});

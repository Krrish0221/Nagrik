export interface Scheme {
    id: string
    title: string
    highlight: string
    desc: string
    modal_content: {
        summary: string
        highlights: string[]
    }
    full_page_content: {
        documents: string[]
        process: string
        nagrik_support: string
        eligibility: string[]
    }
}

export const schemesData: Scheme[] = [
    {
        id: "atal-pension-yojana",
        title: "Atal Pension Yojana (APY)",
        highlight: "Pension ₹1,000 - ₹5,000/mo",
        desc: "Guaranteed pension for unorganized sector workers (Age 18-40). Spouse receives same pension on death.",
        modal_content: {
            summary: "A government-backed pension scheme targeted at the unorganized sector. Subscribers receive a guaranteed minimum pension ranging from ₹1,000 to ₹5,000 per month at the age of 60 years.",
            highlights: ["Guaranteed Pension", "Tax Benefits", "Government Co-contribution"],
        },
        full_page_content: {
            documents: ["Aadhaar Card", "Active Savings Bank Account", "Mobile Number"],
            process:
                "Visit your bank branch or use net banking. Fill the APY registration form, authorize auto-debit for contributions, and you will receive a PRAN card.",
            nagrik_support:
                "Nagrik AI can guide you through the APY form filling process in your local language and help calculate your monthly contribution tailored to your age.",
            eligibility: ["Indian Citizen", "Age 18-40 years", "Have a savings bank account"]
        },
    },
    {
        id: "pm-suraksha-bima-yojana",
        title: "PM Suraksha Bima Yojana (PMSBY)",
        highlight: "₹2 Lakh Accident Cover",
        desc: "Affordable accidental death & disability insurance for just ₹20 per annum. (Age 18-70).",
        modal_content: {
            summary: "An accident insurance scheme offering accidental death and disability cover for death or disability on account of an accident.",
            highlights: ["₹2 Lakh Cover", "Premium ₹20/year", "Auto-debit facility"],
        },
        full_page_content: {
            documents: ["Aadhaar Card", "Bank Account Details (for auto-debit)"],
            process:
                "Contact your bank where you have a savings account. Submit the PMSBY consent form to enable auto-debit of the premium.",
            nagrik_support:
                "We help you understand the claim process and can instantly answer questions about coverage exceptions and renewal dates.",
            eligibility: ["Age 18-70 years", "Savings Bank Account", "Consent for auto-debit"]
        },
    },
    {
        id: "pm-jeevan-jyoti-bima-yojana",
        title: "PM Jeevan Jyoti Bima Yojana (PMJJBY)",
        highlight: "₹2 Lakh Life Cover",
        desc: "Pure term life insurance for death due to any reason. Premium ₹436/year. (Age 18-50).",
        modal_content: {
            summary: "A one-year cover term life insurance scheme, renewable from year to year, offering life insurance coverage for death due to any reason.",
            highlights: ["₹2 Lakh Life Cover", "Premium ₹436/year", "No medical check-up required"],
        },
        full_page_content: {
            documents: ["Aadhaar Card", "Bank Account"],
            process:
                "Approach your bank or post office. Fill the PMJJBY enrolment form and link it to your savings account for premium deduction.",
            nagrik_support:
                "Use Nagrik Voice Assistant to verify if your bank supports online enrollment for PMJJBY without visiting a branch.",
            eligibility: ["Age 18-50 years", "Savings Bank Account"]
        },
    },
    {
        id: "pm-kisan-samman-nidhi",
        title: "PM Kisan Samman Nidhi",
        highlight: "₹6,000/Year Support",
        desc: "100% Govt funded financial support for farmers, transferred directly to bank accounts.",
        modal_content: {
            summary: "An initiative by the government of India in which all farmers will get up to ₹6,000 per year as minimum income support.",
            highlights: ["₹6,000 per year", "Direct Benefit Transfer (DBT)", "3 Installments of ₹2,000"],
        },
        full_page_content: {
            documents: ["Aadhaar Card", "Land Ownership Papers (Khasra/Khatauni)", "Bank Passbook"],
            process:
                "Register online at the PM Kisan portal or visit your local CSC. Verify Aadhaar seeding with your bank account for DBT.",
            nagrik_support:
                "Our AI can check your application status deeply by simply asking for your mobile number or Aadhaar, explaining any rejection reasons clearly.",
            eligibility: ["Small and Marginal Farmers", "Indian Citizen", "Valid Landholding"]
        },
    },
    {
        id: "ayushman-bharat",
        title: "Ayushman Bharat (PM-JAY)",
        highlight: "₹5 Lakh Health Cover",
        desc: "Free health insurance coverage per family per year for secondary and tertiary care hospitalization.",
        modal_content: {
            summary: "The world's largest government-funded healthcare program, providing a cover of ₹5 lakhs per family per year for secondary and tertiary care hospitalization.",
            highlights: ["₹5 Lakh Cover", "Cashless Treatment", "Portable across India"],
        },
        full_page_content: {
            documents: ["Aadhaar Card", "Ration Card", "Income Certificate"],
            process:
                "Check eligibility on the PMJAY website. If eligible, visit an empaneled hospital or CSC to generate your Golden Card.",
            nagrik_support:
                "Not sure if you are eligible? Just tell Nagrik your details, and we'll cross-check the official database criteria for you.",
            eligibility: ["Families in SECC Database", "Occupational criteria in urban areas"]
        },
    },
    {
        id: "pm-mitra-scheme",
        title: "PM Mitra Scheme",
        highlight: "Textile Industry Growth",
        desc: 'Integrated large-scale textile regions to boost the "Farm to Fiber to Factory to Fashion" vision.',
        modal_content: {
            summary: "Seven Pradhan Mantri Mega Integrated Textile Region and Apparel (PM MITRA) Parks will be set up to create world-class industrial infrastructure.",
            highlights: ["World-class infrastructure", "FDI promotion", "Employment generation"],
        },
        full_page_content: {
            documents: ["Business Registration", "Project Report", "Land Details"],
            process:
                "State governments and private players submit proposals. Special Purpose Vehicles (SPVs) are formed to implement the parks.",
            nagrik_support:
                "For entrepreneurs, Nagrik provides summaries of the latest tender documents and policy updates related to PM Mitra Parks.",
            eligibility: ["State Governments", "Private Players (PPP mode)"]
        },
    },
    {
        id: "kisan-e-mitra",
        title: "Kisan e-Mitra",
        highlight: "AI Agriculture Assistant",
        desc: "Your virtual assistant for agriculture queries. Available 24/7 with multilingual support.",
        modal_content: {
            summary: "An AI-powered chatbot designed to answer farmers' queries regarding government schemes, farming techniques, and market prices.",
            highlights: ["24/7 Availability", "Multilingual Support", "Instant Queries"],
        },
        full_page_content: {
            documents: ["Mobile Number"],
            process:
                "Access the Kisan e-Mitra portal or app. Select your language and start asking questions about agriculture or schemes.",
            nagrik_support:
                "Kisan e-Mitra is the official government tool. Nagrik acts as a bridge, helping you navigate to the right official resource if our database deems it best.",
            eligibility: ["All Farmers", "Agriculture Researchers"]
        },
    },
]

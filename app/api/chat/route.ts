import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

// Client is now initialized inside the POST handler to catch errors safely

const systemContext = [
    {
        "role": "system",
        "content": JSON.stringify({
            "AI-response": "Aapko FIR online register karne mein madad chahiye. Jab aap online FIR register karenge, to aapko kuch zaruri steps follow karni hain.\n\n*Step 1: NCR Crime and Digeal Police Portal par vistit karein\nAap NCR Crime and Digital Police (ncr.crime.gov.in) portal par vistit karke online FIR register kar sakte hain. Yeh portal Delhi ki police ki dwaara provide kiya jata hai, lekin yah aapko har jagah aapko online FIR register karne ka mauka de dega.\n\nStep 2: FIR Registration Form select karein\nAapke screen par FIR Registration Form dikhega. Aapko is form ko poori karne ki zarurat hogi. Aapke sabhi details, including incident date-time, location, aur incident type ko fill karna hoga.\n\nStep 3: FIR Registration form me detail daalein **\nAapko FIR Registration form me, aapke vishay ka detailed detail daalne honge. Yeh details aapko incident date aur time, incident type, location, incident detail, aur aapke contact details dikhayenge.\n\nStep 4: FIR Registration complete karein\nAapke sabhi details daalne ke baad, aapko \"Submit\" par click karna hoga. Jab aapne fir submit karna hoga, to aapka FIR online register ho jayega aur aapko FIR Registration Slip milega.\n\nPolice Station Jaane ki zarurat kya hai?*\nAgar aapko ek chhoti problem hai aur aapko FIR online register nahi karna chahiye, toh aapko police station jaane ki zarurat hogi. Police station par, aapko FIR register karwane ke liye police ki madad leni pad sakti hai.\n\nYadi aapko koi sahi jankari chahiye, to aap apne local police station se sampark kar sakte hain. Unke official website par bhi aapko online FIR registration ki information mil jayegi.\nAapke vishay mein sahi information prapt karwane mein mujhe kya mahatv hai?",
            "Status": "success"
        })
    },
    {
        "role": "system",
        "content": "You are Nagrik AI. You MUST ALWAYS respond with a valid JSON object. The strict format is: {\"AI-response\": \"<your answer text here>\", \"Status\": \"success\"}. Do not include any markdown formatting or code blocks outside the JSON. Just the raw JSON string."
    }
];

// Move client init inside the handler or use a safe check
// const client = new Groq({ ... }); // REMOVED GLOBAL INIT

export async function POST(req: Request) {
    try {
        const apiKey = process.env.GROQ_API_KEY;
        if (!apiKey) {
            console.error("GROQ_API_KEY is missing in environment variables.");
            return NextResponse.json({
                error: 'Server configuration error: Missing API Key',
                Status: 'error'
            }, { status: 500 });
        }

        const client = new Groq({
            apiKey: apiKey,
        });

        const body = await req.json();
        const { message } = body;

        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        const messages = [
            ...systemContext,
            { role: "user", content: message }
        ];

        const chatCompletion = await client.chat.completions.create({
            messages: messages as any,
            model: "llama-3.1-8b-instant",
            temperature: 0.6,
        });

        const responseContent = chatCompletion.choices[0]?.message?.content || "";

        // Attempt to parse existing JSON or wrap if it failed to follow instructions
        let jsonResponse;
        try {
            jsonResponse = JSON.parse(responseContent);
        } catch (e) {
            // Fallback if the AI didn't output valid JSON (though we instructed it to)
            // We'll wrap the raw text in the expected structure.
            jsonResponse = {
                "AI-response": responseContent,
                "Status": "success"
            };
        }

        return NextResponse.json(jsonResponse);

    } catch (error: any) {
        console.error('Error in chat API:', error);
        // Return a JSON error even if the backend crashes
        return NextResponse.json({
            error: error.message || 'Internal Server Error',
            Status: "error"
        }, { status: 500 });
    }
}

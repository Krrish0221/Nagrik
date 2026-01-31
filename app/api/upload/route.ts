import { NextResponse } from 'next/server';
// @ts-ignore
// import pdf from 'pdf-parse/lib/pdf-parse.js';


export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        let extractedText = "";

        if (file.type === "application/pdf") {
            try {
                // const data = await pdf(buffer);
                // extractedText = data.text;
                extractedText = "[System Note: PDF parsing is temporarily disabled for debugging deployment size.]";
            } catch (pdfError: any) {
                console.error("PDF Parse Error:", pdfError);
                // Graceful degradation: If PDF parsing fails (e.g., encryption, images), 
                // don't fail the upload. Just warn the AI/User.
                extractedText = `[System Note: Unable to extract text content from this PDF automatically. Error: ${pdfError.message || 'Unknown parsing error'}. The user has uploaded this file, but you cannot read it directly.]`;
            }
        } else if (file.type.startsWith("image/")) {
            // Tesseract removed to fix Vercel build (Buffer overflow).
            // TODO: integrated lighter OCR solution if needed.
            extractedText = "[System Note: Image OCR is currently disabled for performance reasons.]";
        } else {
            return NextResponse.json({ error: "Unsupported file type. Please upload PDF or Image." }, { status: 400 });
        }

        return NextResponse.json({
            text: extractedText,
            filename: file.name
        });

    } catch (error: any) {
        console.error("Upload API Error:", error);
        return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
    }
}

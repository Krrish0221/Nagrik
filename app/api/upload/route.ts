import { NextResponse } from 'next/server';
import * as pdfLib from 'pdf-parse';
// @ts-ignore
const pdf = pdfLib.default || pdfLib;
import Tesseract from 'tesseract.js';

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
                const data = await pdf(buffer);
                extractedText = data.text;
            } catch (pdfError) {
                console.error("PDF Parse Error:", pdfError);
                return NextResponse.json({ error: "Failed to parse PDF" }, { status: 500 });
            }
        } else if (file.type.startsWith("image/")) {
            try {
                const result = await Tesseract.recognize(
                    buffer,
                    'eng+hin', // English + Hindi support
                    { logger: m => console.log(m) }
                );
                extractedText = result.data.text;
            } catch (tesseractError) {
                console.error("Tesseract Error:", tesseractError);
                return NextResponse.json({ error: "Failed to process image" }, { status: 500 });
            }
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

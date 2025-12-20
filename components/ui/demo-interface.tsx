"use client"

import { motion } from "framer-motion"
import { Send, Mic } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { useState, useEffect, useRef } from "react"

interface DemoInterfaceProps {
    voiceTrigger?: string | null
    onVoiceTriggerClear?: () => void
}

export function DemoInterface({ voiceTrigger, onVoiceTriggerClear }: DemoInterfaceProps) {
    const { t, language } = useLanguage()
    const [inputValue, setInputValue] = useState("")
    const [isListening, setIsListening] = useState(false)
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [fileProcessing, setFileProcessing] = useState(false) // New state for file upload
    const chatContainerRef = useRef<HTMLDivElement>(null)
    const lastMessageRef = useRef<HTMLDivElement>(null)

    // Auto-scroll effect
    // Auto-scroll effect: Frame the Conversation
    useEffect(() => {
        if (chatContainerRef.current) {
            // WAIT 300ms (crucial for animations to finish expanding)
            setTimeout(() => {
                const chatBox = chatContainerRef.current;

                // 3. Find the User's last message (The Question)
                const lastUserMsg = chatBox?.querySelectorAll('.user-message');
                const targetMsg = lastUserMsg && lastUserMsg.length > 0 ? lastUserMsg[lastUserMsg.length - 1] : lastMessageRef.current;

                if (chatBox && targetMsg) {
                    // 4. Get the absolute position relative to the container
                    const targetTop = (targetMsg as HTMLElement).offsetTop;

                    // 5. Scroll to the Question MINUS 120px (for the Header)
                    // This forces the Question to be at the top, followed immediately by the answer.
                    chatBox.scrollTo({
                        top: targetTop - 120,
                        behavior: 'smooth'
                    });

                    console.log("Scrolled to frame User Question at:", targetTop - 120);
                }
            }, 300);
        }
    }, [messages]);

    // Handle voice trigger handover (unchanged)
    useEffect(() => {
        if (voiceTrigger && voiceTrigger.trim() !== "") {
            console.log("Voice received:", voiceTrigger);
            setInputValue(voiceTrigger)
            setIsListening(false)
            const timer = setTimeout(() => {
                handleSend(voiceTrigger)
                if (onVoiceTriggerClear) onVoiceTriggerClear()
            }, 1000)
            return () => clearTimeout(timer)
        }
    }, [voiceTrigger, onVoiceTriggerClear])

    // File Upload Handler
    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileProcessing(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            // Send to upload API
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.text) {
                // Add extracted text to context silently? Or just send it as a message?
                // For this hackathon, let's auto-send it as a user message so the AI knows about it.
                // Or better, set it as input value or just inject it.
                // Let's inject it into the message history visibly.
                const fileContextMsg = `[Analyzed File: ${file.name}]\n${data.text.substring(0, 1000)}...`; // Truncate for display, but could be full in backend context

                // Better approach: Send it as a special system/context message or just a user message
                // "I am uploading this file: [content]"
                const hiddenContent = `I have uploaded a file named ${file.name}. Here is its content:\n\n${data.text}\n\nAnalyze this document.`;
                handleSend(hiddenContent); // Send automatically

            } else {
                console.error("File processing failed:", data.error);
                alert("Failed to process file. Please try again.");
            }
        } catch (error) {
            console.error("Upload error:", error);
            alert("Error uploading file.");
        } finally {
            setFileProcessing(false);
            // Reset input
            e.target.value = "";
        }
    };

    const handleSend = async (manualText: string | null = null) => {
        const messageContent = (typeof manualText === 'string' && manualText.length > 0)
            ? manualText
            : inputValue

        if (!messageContent || !messageContent.trim()) return

        setInputValue("")

        // Don't show the huge full text in the UI if it's a file upload (detected by length/prefix)
        const displayContent = messageContent.startsWith("I have uploaded a file named")
            ? `📂 Uploaded Document`
            : messageContent;

        setMessages(prev => [...prev, { role: 'user', content: displayContent }])
        // 4. Add User Message to Chat History (Simulated for demo)
        console.log("Sending message:", messageContent)

        try {
            // Changed to Python Backend URL
            // Changed to relative URL for Vercel/Local support via proxy/rewrites
            const response = await fetch('/api/py', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    topic: messageContent, // Changed 'message' to 'topic' for Python API
                    language: language // Pass selected language
                }),
            });

            // FIX: Read text first to debug HTML errors
            const rawText = await response.text();
            // console.log("Raw API Response:", rawText);

            let data;
            try {
                data = JSON.parse(rawText);
            } catch (jsonError) {
                console.error("Failed to parse JSON:", jsonError);
                console.error("Received Content:", rawText);
                data = { error: "Invalid server response. Check console." };
            }

            if (data && data["AI-response"]) {
                setMessages(prev => [...prev, { role: 'assistant', content: data["AI-response"] }])
            } else if (data && data.error) {
                console.error("API Error:", data.error)
            } else if (data && data.Status === "error") {
                console.error("API Returned Error Status:", data)
            }

        } catch (error) {
            console.error("Failed to send message:", error)
            setMessages(prev => [...prev, { role: 'assistant', content: "⚠️ Connection Error: Unable to reach the server. Please ensure the backend is running on port 5000." }])
        } finally {
            setIsLoading(false)
        }
    }

    // Map internal language codes to BCP 47 tags
    const languageMap: Record<string, string> = {
        en: 'en-US',
        hi: 'hi-IN',
        gu: 'gu-IN',
        bho: 'hi-IN', // Fallback to Hindi
        ta: 'ta-IN',
        bn: 'bn-IN',
        mr: 'mr-IN',
        te: 'te-IN',
        ur: 'ur-IN',
        kn: 'kn-IN',
        or: 'or-IN',
        ml: 'ml-IN',
        pa: 'pa-IN',
        as: 'as-IN',
        mai: 'hi-IN', // Fallback to Hindi
        sa: 'sa-IN'
    }

    const startListening = () => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
            const recognition = new SpeechRecognition()

            recognition.lang = languageMap[language] || 'en-US'
            recognition.continuous = false
            recognition.interimResults = false

            recognition.onstart = () => {
                setIsListening(true)
            }

            recognition.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript
                setInputValue(transcript)
                setIsListening(false)
            }

            recognition.onerror = (event: any) => {
                if (event.error === 'aborted' || event.error === 'no-speech') {
                    return
                }
                console.error("Speech recognition error", event.error)
                setIsListening(false)
            }

            recognition.onend = () => {
                setIsListening(false)
            }

            recognition.start()
        } else {
            alert("Speech recognition is not supported in this browser.")
        }
    }

    return (
        <section className="bg-slate-50 py-20" id="nagrik-chat-widget">
            <div className="container px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {t("demo.heading")}
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        {t("demo.subheading")}
                    </p>
                </div>

                <div className="mx-auto max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
                    {/* Header */}
                    <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-slate-100 bg-slate-50 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                            <span className="font-bold">N</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900">{t("demo.assistantName")}</h3>
                            <p className="text-xs text-green-600">{t("demo.status")}</p>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div
                        ref={chatContainerRef}
                        className="flex h-[400px] flex-col gap-4 bg-stone-50/50 p-4 overflow-y-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="self-start rounded-2xl rounded-tl-none bg-white px-4 py-3 text-slate-800 shadow-sm"
                        >
                            <p>{t("demo.chat1")}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="self-end rounded-2xl rounded-tr-none bg-amber-500 px-4 py-3 text-white shadow-sm"
                        >
                            <p>{t("demo.chat2")}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.0 }}
                            className="self-start rounded-2xl rounded-tl-none bg-white px-4 py-3 text-slate-800 shadow-sm"
                        >
                            <p>{t("demo.chat3")}</p>
                        </motion.div>

                        {/* Dynamic Messages */}
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                ref={idx === messages.length - 1 ? lastMessageRef : null}
                                className={`message-bubble self-${msg.role === 'user' ? 'end' : 'start'} rounded-2xl ${msg.role === 'user' ? 'user-message rounded-tr-none bg-amber-500 text-white' : 'ai-message rounded-tl-none bg-white text-slate-800'} px-4 py-3 shadow-sm ${language === 'ur' ? 'text-right' : ''}`}
                                dir={language === 'ur' ? 'rtl' : 'ltr'}
                            >
                                <p className="whitespace-pre-wrap">{msg.content}</p>
                            </div>
                        ))}

                        {(isLoading || fileProcessing) && (
                            <div className="typing-indicator" id="ai-loader">
                                <span></span><span></span><span></span>
                                {fileProcessing && <div className="text-xs text-slate-400 mt-1">Processing File...</div>}
                            </div>
                        )}


                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.4 }}
                            className="self-center mt-auto mb-2"
                        >
                            <div className="flex items-center gap-2 px-3 py-1 bg-slate-200 rounded-full text-xs text-slate-600">
                                <Mic className="w-3 h-3 animate-pulse" /> {t("hero.listening")}
                            </div>
                        </motion.div>
                    </div>

                    {/* Input Area */}
                    <div className="border-t border-slate-100 bg-white p-4" dir={language === 'ur' ? 'rtl' : 'ltr'}>
                        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
                            {/* File Upload Button */}
                            <label className="cursor-pointer p-2 rounded-full hover:bg-slate-200 text-slate-400 transition-colors">
                                <input
                                    type="file"
                                    className="hidden"
                                    accept=".pdf,image/png,image/jpeg,image/jpg"
                                    onChange={handleFileUpload}
                                    disabled={fileProcessing || isLoading}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-45">
                                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                                </svg>
                            </label>

                            <button
                                onClick={startListening}
                                className={`rounded-full p-2 transition-colors ${isListening ? 'bg-red-100 text-red-600' : 'hover:bg-slate-200 text-slate-400'}`}
                                title="Tap to speak"
                            >
                                <Mic className={`h-5 w-5 ${isListening ? 'animate-pulse' : ''}`} />
                            </button>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleSend()
                                }}
                                placeholder={t("demo.placeholder")}
                                className={`flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400 ${language === 'ur' ? 'text-right' : ''}`}
                                suppressHydrationWarning={true}
                                disabled={fileProcessing}
                            />
                            <button
                                onClick={() => handleSend()}
                                className={`rounded-full bg-amber-500 p-2 text-white transition-colors hover:bg-amber-600 disabled:bg-amber-300 ${language === 'ur' ? 'rotate-180' : ''}`}
                                disabled={fileProcessing}
                            >
                                <Send className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

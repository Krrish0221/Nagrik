"use client"

import { motion } from "framer-motion"
import { Send, Mic } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { useState, useEffect } from "react"

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

    // Handle voice trigger handover
    useEffect(() => {
        // Only run if there is actual text
        if (voiceTrigger && voiceTrigger.trim() !== "") {
            console.log("Voice received:", voiceTrigger); // Debugging check

            // 1. VISUAL UPDATE: Put text in the box immediately
            setInputValue(voiceTrigger)
            setIsListening(false) // Stop local listening if active

            // 2. ACTION: Wait 1s, then send
            const timer = setTimeout(() => {
                // Call handleSend with the specific text to ensure it works
                handleSend(voiceTrigger)
                // Reset the trigger so it doesn't loop
                if (onVoiceTriggerClear) onVoiceTriggerClear()
            }, 1000)

            return () => clearTimeout(timer)
        }
    }, [voiceTrigger, onVoiceTriggerClear])

    // Modify the function to accept an optional 'manualText' argument
    const handleSend = async (manualText: string | null = null) => {
        // 1. Determine the actual message to send
        // If manualText is a string, use it. Otherwise, use the 'input' state.
        const messageContent = (typeof manualText === 'string' && manualText.length > 0)
            ? manualText
            : inputValue

        // 2. Validation: If both are empty, stop here.
        if (!messageContent || !messageContent.trim()) return

        // 3. Clear UI immediately 
        setInputValue("")

        // Add user message to state
        setMessages(prev => [...prev, { role: 'user', content: messageContent }])
        setIsLoading(true)

        // 4. Add User Message to Chat History (Simulated for demo)
        console.log("Sending message:", messageContent)

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: messageContent }),
            });

            // FIX: Read text first to debug HTML errors
            const rawText = await response.text();
            console.log("Raw API Response:", rawText);

            let data;
            try {
                data = JSON.parse(rawText);
            } catch (jsonError) {
                console.error("Failed to parse JSON:", jsonError);
                console.error("Received Content:", rawText);
                // Create a fake error object to show in UI or just return
                data = { error: "Invalid server response. Check console." };
            }

            if (data && data["AI-response"]) {
                setMessages(prev => [...prev, { role: 'assistant', content: data["AI-response"] }])
            } else if (data && data.error) {
                console.error("API Error:", data.error)
                // Optionally show error in UI
            } else if (data && data.Status === "error") {
                console.error("API Returned Error Status:", data)
            }

        } catch (error) {
            console.error("Failed to send message:", error)
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
                    // Ignore aborted and no-speech errors
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
                    <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                            <span className="font-bold">N</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900">{t("demo.assistantName")}</h3>
                            <p className="text-xs text-green-600">{t("demo.status")}</p>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex h-[400px] flex-col gap-4 bg-stone-50/50 p-4 overflow-y-auto">
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
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`self-${msg.role === 'user' ? 'end' : 'start'} rounded-2xl ${msg.role === 'user' ? 'rounded-tr-none bg-amber-500 text-white' : 'rounded-tl-none bg-white text-slate-800'} px-4 py-3 shadow-sm`}
                            >
                                <p className="whitespace-pre-wrap">{msg.content}</p>
                            </motion.div>
                        ))}

                        {isLoading && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="self-start rounded-2xl rounded-tl-none bg-white px-4 py-3 text-slate-800 shadow-sm"
                            >
                                <div className="flex gap-1">
                                    <span className="animate-bounce">.</span>
                                    <span className="animate-bounce delay-100">.</span>
                                    <span className="animate-bounce delay-200">.</span>
                                </div>
                            </motion.div>
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
                    <div className="border-t border-slate-100 bg-white p-4">
                        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
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
                                className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
                                suppressHydrationWarning={true}
                            />
                            <button
                                onClick={() => handleSend()}
                                className="rounded-full bg-amber-500 p-2 text-white transition-colors hover:bg-amber-600"
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

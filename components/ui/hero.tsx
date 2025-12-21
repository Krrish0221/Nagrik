"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Microphone, MicrophoneMute } from "iconoir-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/context/LanguageContext"

interface HeroProps {
    onVoiceTrigger?: (text: string) => void
}

export function Hero({ onVoiceTrigger }: HeroProps) {
    const [isListening, setIsListening] = useState(false)
    const [transcript, setTranscript] = useState("")
    const recognitionRef = useRef<any>(null)
    const { t } = useLanguage()

    useEffect(() => {
        if (typeof window !== "undefined") {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
            if (SpeechRecognition) {
                recognitionRef.current = new SpeechRecognition()
                recognitionRef.current.continuous = true
                recognitionRef.current.interimResults = true
                recognitionRef.current.lang = "en-US"

                recognitionRef.current.onresult = (event: any) => {
                    let currentTranscript = ""
                    for (let i = event.resultIndex; i < event.results.length; i++) {
                        currentTranscript += event.results[i][0].transcript
                    }
                    setTranscript(currentTranscript)
                }

                recognitionRef.current.onend = () => {
                    setIsListening(false)
                }
            }
        }
    }, [])

    const toggleListening = () => {
        if (isListening) {
            recognitionRef.current?.stop()
            setIsListening(false)
            if (transcript && onVoiceTrigger) {
                onVoiceTrigger(transcript)
                // Smooth scroll to chat widget
                const chatWidget = document.getElementById('nagrik-chat-widget')
                if (chatWidget) {
                    chatWidget.scrollIntoView({ behavior: 'smooth' })
                }
            }
        } else {
            setTranscript("")
            try {
                recognitionRef.current?.start()
                setIsListening(true)
            } catch (error) {
                console.error("Speech recognition error:", error)
                setIsListening(true)
            }
        }
    }

    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden pt-20 text-center">
            {/* Aurora Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-200/20 blur-[120px] rounded-full pointer-events-none" />

            {/* Trust Badge */}
            {/* Trust Badge Removed */}

            {/* Content */}
            <div className="container relative z-10 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl"
                >
                    {t("hero.title")} <br />
                    <span className="text-amber-600">{t("hero.subtitle")}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl"
                >
                    {t("hero.description")}
                </motion.p>

                {/* Microphone Interaction */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 flex flex-col items-center justify-center"
                >
                    <div className="relative">
                        <AnimatePresence>
                            {isListening && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-8 w-64 p-4 bg-white/90 text-slate-900 rounded-2xl backdrop-blur-sm shadow-xl z-20 text-center"
                                >
                                    <p className="text-sm font-medium">{transcript || "Listening..."}</p>
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/90 rotate-45" />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Pulse Rings */}
                        <AnimatePresence>
                            {isListening && (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0.5, scale: 1 }}
                                        animate={{ opacity: 0, scale: 2 }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="absolute inset-0 rounded-full bg-amber-500/30"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0.5, scale: 1 }}
                                        animate={{ opacity: 0, scale: 1.5 }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                                        className="absolute inset-0 rounded-full bg-amber-500/20"
                                    />
                                </>
                            )}
                        </AnimatePresence>

                        {/* Main Button */}
                        <button
                            onClick={toggleListening}
                            className={cn(
                                "relative flex h-24 w-24 items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-200",
                                isListening
                                    ? "bg-amber-500 text-white"
                                    : "bg-white text-amber-600 hover:bg-amber-50"
                            )}
                        >
                            {isListening ? (
                                <div className="flex items-center justify-center gap-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: [10, 24, 10] }}
                                            transition={{
                                                duration: 0.5,
                                                repeat: Infinity,
                                                delay: i * 0.1,
                                            }}
                                            className="w-1 rounded-full bg-white"
                                        />
                                    ))}
                                </div>
                            ) : (
                                <Microphone className="h-10 w-10" />
                            )}
                        </button>
                    </div>
                    <p className="mt-4 text-sm font-medium text-slate-500">
                        {isListening ? t("hero.listening") : t("hero.tapToSpeak")}
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

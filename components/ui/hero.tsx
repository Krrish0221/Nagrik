"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Microphone as MicrophoneSolid, MicrophoneMute as MicrophoneMuteSolid } from "iconoir-react/solid"
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
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-8 w-64 p-4 bg-white/90 text-slate-900 rounded-2xl backdrop-blur-xl border border-white/50 shadow-2xl z-20 text-center"
                                >
                                    <p className="text-sm font-medium">{transcript || "Listening..."}</p>
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/90 rotate-45" />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Enhanced Pulse Rings */}
                        <AnimatePresence>
                            {isListening && (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 1 }}
                                        animate={{ opacity: [0.2, 0.5, 0], scale: 2.5 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                        className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/40 to-orange-500/40 blur-md"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, scale: 1 }}
                                        animate={{ opacity: [0.2, 0.5, 0], scale: 2 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                                        className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/30 to-orange-500/30 blur-sm"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, scale: 1 }}
                                        animate={{ opacity: [0.2, 0.5, 0], scale: 1.5 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
                                        className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20"
                                    />
                                </>
                            )}
                        </AnimatePresence>

                        {/* Main Button with Premium Look */}
                        <button
                            onClick={toggleListening}
                            className={cn(
                                "relative flex h-24 w-24 items-center justify-center rounded-full transition-all duration-500 focus:outline-none z-10",
                                isListening
                                    ? "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-[0_0_40px_-10px_rgba(245,158,11,0.6)] scale-110"
                                    : "bg-white/80 backdrop-blur-xl border border-white/60 text-amber-600 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:scale-105 hover:bg-white hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.2)]"
                            )}
                        >
                            {isListening ? (
                                <div className="flex items-center justify-center gap-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: [8, 32, 8] }}
                                            transition={{
                                                duration: 0.5,
                                                repeat: Infinity,
                                                delay: i * 0.1,
                                                ease: "easeInOut"
                                            }}
                                            className="w-1.5 rounded-full bg-white shadow-sm"
                                        />
                                    ))}
                                </div>
                            ) : (
                                <MicrophoneSolid className="h-10 w-10 drop-shadow-sm" />
                            )}
                        </button>
                    </div>
                    <p className="mt-6 text-sm font-semibold tracking-wide text-slate-500 uppercase">
                        {isListening ? (
                            <span className="text-amber-600 animate-pulse">{t("hero.listening")}</span>
                        ) : (
                            t("hero.tapToSpeak")
                        )}
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

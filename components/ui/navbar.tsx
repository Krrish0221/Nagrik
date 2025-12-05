"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, ChevronDown, Menu, X, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/context/LanguageContext"
import { Language } from "@/lib/translations"

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { language, setLanguage, t } = useLanguage()

    const languages: { code: Language; label: string }[] = [
        { code: "en", label: "English" },
        { code: "hi", label: "Hindi" },
        { code: "gu", label: "Gujarati" },
        { code: "bho", label: "Bhojpuri" },
        { code: "ta", label: "Tamil" },
        { code: "bn", label: "Bengali" },
        { code: "mr", label: "Marathi" },
        { code: "te", label: "Telugu" },
        { code: "ur", label: "Urdu" },
        { code: "kn", label: "Kannada" },
        { code: "or", label: "Odia" },
        { code: "ml", label: "Malayalam" },
        { code: "pa", label: "Punjabi" },
        { code: "as", label: "Assamese" },
        { code: "mai", label: "Maithili" },
    ]

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/60 backdrop-blur-xl transition-all"
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold tracking-tight text-slate-900">
                        {t("navbar.logo")}
                    </span>
                </div>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-4 md:flex">
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 py-2">
                            {t("navbar.language")}
                            <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                        </button>
                        {/* Dropdown */}
                        <div className="absolute right-0 top-full hidden w-40 pt-2 group-hover:block">
                            <div className="rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl ring-1 ring-slate-900/5 max-h-[300px] overflow-y-auto">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => setLanguage(lang.code)}
                                        className={cn(
                                            "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-slate-50",
                                            language === lang.code ? "bg-slate-50 font-medium text-amber-600" : "text-slate-600"
                                        )}
                                    >
                                        {lang.label}
                                        {language === lang.code && <Check className="h-3.5 w-3.5" />}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:scale-105 hover:shadow-slate-900/30 active:scale-95">
                        <Shield className="h-4 w-4" />
                        {t("navbar.login")}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full border-b border-slate-200 bg-white p-4 shadow-lg md:hidden">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium text-slate-600">Select Language:</p>
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setLanguage(lang.code)
                                        setIsMenuOpen(false)
                                    }}
                                    className={cn(
                                        "text-left text-sm p-2 rounded-md hover:bg-slate-50",
                                        language === lang.code && "bg-slate-100 font-medium"
                                    )}
                                >
                                    {lang.label}
                                </button>
                            ))}
                        </div>
                        <button className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white">
                            <Shield className="h-4 w-4" />
                            {t("navbar.login")}
                        </button>
                    </div>
                </div>
            )}
        </motion.nav>
    )
}

"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Xmark, ArrowRight, CheckCircle } from "iconoir-react"
import Link from "next/link"
import type { Scheme, SchemeContent } from "@/lib/schemesData"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/lib/translations"

interface SchemeModalProps {
    isOpen: boolean
    onClose: () => void
    scheme: Scheme | null
}

export function SchemeModal({ isOpen, onClose, scheme }: SchemeModalProps) {
    const { language } = useLanguage()
    const t = translations[language].schemes

    if (!scheme) return null

    const content = (scheme[language] as SchemeContent) || scheme["en"]

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 p-4"
                    >
                        <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-2xl">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                            >
                                <Xmark className="h-5 w-5" />
                            </button>

                            <div className="mt-2">
                                <div className="mb-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                                    {content.highlight}
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-2">{content.title}</h2>
                                <p className="text-slate-600 mb-6">{content.modal_content.summary}</p>

                                {/* Highlights */}
                                <div className="space-y-3 mb-8">
                                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">{t.key_benefits}</h3>
                                    <ul className="space-y-2">
                                        {content.modal_content.highlights.map((highlight, index) => (
                                            <li key={index} className="flex items-start gap-2 text-slate-700">
                                                <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                                                <span className="text-sm">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Button */}
                                <Link
                                    href={`/schemes/${scheme.id}`}
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                                >
                                    {t.read_full_guide}
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

"use client"

import { useParams } from "next/navigation"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { schemesData, type SchemeContent } from "@/lib/schemesData"
import Link from "next/link"
import { ArrowLeft, Page, Brain } from "iconoir-react/regular"
import { CheckCircle as CheckCircleSolid, HelpCircle as HelpCircleSolid } from "iconoir-react/solid"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/lib/translations"

export default function SchemeDetailsPage() {
    const params = useParams()
    const { language } = useLanguage()
    const t = translations[language].schemes

    const scheme = schemesData.find((s) => s.id === params.id)

    if (!scheme) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center p-4">
                    <h1 className="text-2xl font-bold text-slate-800">Scheme not found</h1>
                    <Link href="/" className="mt-4 text-amber-600 hover:underline">
                        Go back home
                    </Link>
                </div>
                <Footer />
            </div>
        )
    }

    const content = (scheme[language] as SchemeContent) || scheme["en"]

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-slate-900 pt-32 pb-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 blur-[100px] rounded-full pointer-events-none" />

                <div className="container px-4 relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" strokeWidth={2.5} />
                        {t.back_to_home}
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-block rounded-full bg-amber-500/20 px-3 py-1 text-sm font-semibold text-amber-300 border border-amber-500/30 mb-4">
                            {content.highlight}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{content.title}</h1>
                        <p className="text-xl text-slate-300 max-w-2xl">{content.modal_content.summary}</p>
                    </motion.div>
                </div>
            </section>

            <div className="container px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Detailed Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                                <Page className="h-6 w-6 text-amber-600 mr-3" strokeWidth={2.5} />
                                {t.overview}
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg">{content.long_description}</p>

                            <div className="mt-8">
                                <h3 className="font-semibold text-slate-900 mb-4">{t.key_highlights}</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {content.modal_content.highlights.map((item, i) => (
                                        <div key={i} className="flex items-center text-slate-600 bg-slate-50 p-3 rounded-lg">
                                            <CheckCircleSolid className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Application Process */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                                <HelpCircleSolid className="h-6 w-6 text-amber-600 mr-3" />
                                {t.application_process}
                            </h2>
                            <div className="space-y-4">
                                {content.full_page_content.application_steps.map((step, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-sm">
                                            {index + 1}
                                        </div>
                                        <p className="text-slate-600 text-lg flex-1 pt-0.5">{step.replace(/^\d+\.\s*/, '')}</p>
                                    </div>
                                ))}
                            </div>

                            {content.full_page_content.important_note && (
                                <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl flex gap-3 text-amber-800">
                                    <div className="shrink-0 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                    </div>
                                    <div>
                                        <span className="font-bold block mb-1">{t.important}:</span>
                                        <p className="font-medium text-sm">{content.full_page_content.important_note}</p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Documents Required */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                        >
                            <h3 className="text-lg font-bold text-slate-900 mb-4">{t.documents_required}</h3>
                            <ul className="space-y-3">
                                {content.full_page_content.documents.map((doc, i) => (
                                    <li key={i} className="flex items-start">
                                        <div className="h-2 w-2 rounded-full bg-amber-500 mt-2 mr-3 shrink-0" />
                                        <span className="text-slate-600">{doc}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Eligibility */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                        >
                            <h3 className="text-lg font-bold text-slate-900 mb-4">{t.eligibility_criteria}</h3>
                            <ul className="space-y-3">
                                {content.full_page_content.eligibility_detailed.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircleSolid className="h-5 w-5 text-slate-400 mr-3 shrink-0" />
                                        <span className="text-slate-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* How Nagrik Helps - Special AI Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <Brain className="h-24 w-24" strokeWidth={2.5} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 flex items-center relative z-10">
                                <Brain className="h-6 w-6 mr-2" strokeWidth={2.5} />
                                {t.how_nagrik_helps}
                            </h3>
                            <p className="text-amber-50 relative z-10 text-lg leading-relaxed mb-6">
                                {content.full_page_content.nagrik_support}
                            </p>
                            <button className="w-full bg-white text-amber-600 font-bold py-3 px-4 rounded-xl shadow-lg hover:bg-amber-50 transition-colors relative z-10">
                                {t.ask_nagrik_now}
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}

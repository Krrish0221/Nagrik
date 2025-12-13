"use client"

import { useParams } from "next/navigation"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { schemesData } from "@/lib/schemesData"
import Link from "next/link"
import { ArrowLeft, FileText, CheckCircle2, HelpCircle, Bot } from "lucide-react"
import { motion } from "framer-motion"

export default function SchemeDetailsPage() {
    const params = useParams()
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
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-block rounded-full bg-amber-500/20 px-3 py-1 text-sm font-semibold text-amber-300 border border-amber-500/30 mb-4">
                            {scheme.highlight}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{scheme.title}</h1>
                        <p className="text-xl text-slate-300 max-w-2xl">{scheme.modal_content.summary}</p>
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
                                <FileText className="h-6 w-6 text-amber-600 mr-3" />
                                Overview
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg">{scheme.desc}</p>

                            <div className="mt-8">
                                <h3 className="font-semibold text-slate-900 mb-4">Key Highlights</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {scheme.modal_content.highlights.map((item, i) => (
                                        <div key={i} className="flex items-center text-slate-600 bg-slate-50 p-3 rounded-lg">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 shrink-0" />
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
                                <HelpCircle className="h-6 w-6 text-amber-600 mr-3" />
                                Application Process
                            </h2>
                            <div className="prose prose-slate max-w-none">
                                <p className="text-slate-600 text-lg">{scheme.full_page_content.process}</p>
                            </div>
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
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Documents Required</h3>
                            <ul className="space-y-3">
                                {scheme.full_page_content.documents.map((doc, i) => (
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
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Eligibility Criteria</h3>
                            <ul className="space-y-3">
                                {scheme.full_page_content.eligibility.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-slate-400 mr-3 shrink-0" />
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
                                <Bot className="h-24 w-24" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 flex items-center relative z-10">
                                <Bot className="h-6 w-6 mr-2" />
                                How Nagrik Helps
                            </h3>
                            <p className="text-amber-50 relative z-10 text-lg leading-relaxed mb-6">
                                {scheme.full_page_content.nagrik_support}
                            </p>
                            <button className="w-full bg-white text-amber-600 font-bold py-3 px-4 rounded-xl shadow-lg hover:bg-amber-50 transition-colors relative z-10">
                                Ask Nagrik Now
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShieldCheck, Calendar, User, Phone, Page, Send, WarningTriangle } from "iconoir-react"
import { useLanguage } from "@/context/LanguageContext"
import { Navbar } from "@/components/ui/navbar"

export default function CybercrimeComplaintPage() {
    const { t, language } = useLanguage()
    
    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        category: "",
        incidentDate: "",
        description: "",
        suspectDetails: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setIsSuccess(true)
    }

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    const categories = [
        "financial",
        "social",
        "identity",
        "hacking",
        "other"
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />
            
            <main className="container mx-auto px-4 pt-24 pb-12">
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl mx-auto"
                >
                    {/* Header */}
                    <motion.div variants={fadeInUp} className="mb-8 text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                            <ShieldCheck className="h-8 w-8" />
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">
                            {t("cybercrime.title")}
                        </h1>
                        <p className="text-slate-600">
                            {t("cybercrime.header_desc")}
                        </p>
                    </motion.div>

                    {/* Additional Alert */}
                    <motion.div variants={fadeInUp} className="mb-8 rounded-xl bg-orange-50 border border-orange-100 p-4 flex items-start gap-3">
                         <WarningTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                         <p className="text-sm text-orange-800">
                            {t("cybercrime.alert")}
                         </p>
                    </motion.div>

                    {/* Active Form */}
                    <AnimatePresence mode="wait">
                        {!isSuccess ? (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                onSubmit={handleSubmit}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 md:p-8"
                            >
                                <div className="grid gap-6 md:grid-cols-2">
                                    {/* Full Name */}
                                    <div className="col-span-2 md:col-span-1">
                                        <label className="mb-2 block text-sm font-medium text-slate-700">
                                            {t("cybercrime.full_name")}
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                required
                                                value={formData.fullName}
                                                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                                                className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                            />
                                            <User className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                                        </div>
                                    </div>

                                    {/* Mobile Number */}
                                    <div className="col-span-2 md:col-span-1">
                                        <label className="mb-2 block text-sm font-medium text-slate-700">
                                            {t("cybercrime.mobile")}
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                required
                                                value={formData.mobile}
                                                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                                                className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                            />
                                            <Phone className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                                        </div>
                                    </div>

                                    {/* Complaint Category */}
                                    <div className="col-span-2">
                                        <label className="mb-2 block text-sm font-medium text-slate-700">
                                            {t("cybercrime.category")}
                                        </label>
                                        <div className="relative">
                                            <select
                                                required
                                                value={formData.category}
                                                onChange={(e) => setFormData({...formData, category: e.target.value})}
                                                className="w-full appearance-none rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                            >
                                                <option value="">{t("cybercrime.select_category")}</option>
                                                {categories.map(cat => (
                                                    <option key={cat} value={cat}>
                                                        {t(`cybercrime.categories.${cat}`)}
                                                    </option>
                                                ))}
                                            </select>
                                            <Page className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                                        </div>
                                    </div>

                                    {/* Incident Date & Time */}
                                    <div className="col-span-2 md:col-span-1">
                                        <label className="mb-2 block text-sm font-medium text-slate-700">
                                            {t("cybercrime.incident_date")}
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="datetime-local"
                                                required
                                                value={formData.incidentDate}
                                                onChange={(e) => setFormData({...formData, incidentDate: e.target.value})}
                                                className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                            />
                                            <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                                        </div>
                                    </div>

                                    {/* Incident Description */}
                                    <div className="col-span-2">
                                        <label className="mb-2 block text-sm font-medium text-slate-700">
                                            {t("cybercrime.description")}
                                        </label>
                                        <textarea
                                            required
                                            rows={4}
                                            value={formData.description}
                                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                                            className="w-full rounded-lg border border-slate-200 p-3 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                        />
                                    </div>

                                    {/* Suspect Details (Optional) */}
                                    <div className="col-span-2">
                                        <label className="mb-2 block text-sm font-medium text-slate-700">
                                            {t("cybercrime.suspect_details")}
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.suspectDetails}
                                            onChange={(e) => setFormData({...formData, suspectDetails: e.target.value})}
                                            placeholder={t("cybercrime.suspect_placeholder")}
                                            className="w-full rounded-lg border border-slate-200 py-2.5 px-3 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                        />
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                        ) : (
                                            <>
                                                <Send className="h-5 w-5" />
                                                {t("cybercrime.submit")}
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="rounded-2xl border border-green-100 bg-green-50/50 p-8 text-center"
                            >
                                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                                    <ShieldCheck className="h-10 w-10" />
                                </div>
                                <h2 className="mb-2 text-2xl font-bold text-slate-900">{t("cybercrime.success_title")}</h2>
                                <p className="mb-6 text-slate-600">
                                    {t("cybercrime.success_msg_1")} <span className="font-mono font-medium text-slate-900">CYB-{Math.floor(Math.random() * 100000)}</span>. 
                                    {t("cybercrime.success_msg_2")}
                                </p>
                                <button
                                    onClick={() => {
                                        setIsSuccess(false)
                                        setFormData({
                                            fullName: "",
                                            mobile: "",
                                            category: "",
                                            incidentDate: "",
                                            description: "",
                                            suspectDetails: ""
                                        })
                                    }}
                                    className="rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                                >
                                    {t("cybercrime.file_again")}
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </main>
        </div>
    )
}

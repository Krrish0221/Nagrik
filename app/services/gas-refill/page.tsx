"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { useLanguage } from "@/context/LanguageContext";
import { FireFlame, Check } from "iconoir-react";
import { cn } from "@/lib/utils";

export default function GasRefillPage() {
    const { t } = useLanguage();
    const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        registrationNo: "",
        orderDate: "",
        name: "",
        contactNo: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const providers = [
        {
            id: "indane",
            name: "Indane Gas",
            color: "from-orange-500 to-red-600",
            bg: "bg-orange-50",
            border: "border-orange-200",
            text: "text-orange-700",
            iconColor: "text-orange-500"
        },
        {
            id: "bharat",
            name: "Bharat Gas",
            color: "from-blue-500 to-yellow-500",
            bg: "bg-blue-50",
            border: "border-blue-200",
            text: "text-blue-700",
            iconColor: "text-blue-500"
        },
        {
            id: "hp",
            name: "HP Gas",
            color: "from-blue-600 to-red-600",
            bg: "bg-indigo-50",
            border: "border-indigo-200",
            text: "text-indigo-700",
            iconColor: "text-indigo-600"
        }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Simulate API call
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-amber-100 selection:text-amber-900">
            <Navbar />
            
            <main className="container mx-auto px-4 py-24 md:py-32 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center p-3 mb-4 rounded-2xl bg-orange-100 text-orange-600 ring-1 ring-orange-200">
                        <FireFlame className="h-8 w-8" strokeWidth={2} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                        {t("gas.provider_title")}
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Choose your trusted LPG provider and book a refill in seconds. 
                        Simple, fast, and secure.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {providers.map((provider, index) => (
                        <motion.button
                            key={provider.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedProvider(provider.id)}
                            className={cn(
                                "relative group flex flex-col items-center p-8 rounded-3xl border-2 transition-all duration-300",
                                selectedProvider === provider.id
                                    ? `bg-white border-transparent ring-4 ring-offset-2 ring-${provider.text.split('-')[1]}-200 shadow-xl scale-105 z-10`
                                    : "bg-white border-slate-100 hover:border-slate-200 hover:shadow-lg hover:scale-[1.02]"
                            )}
                        >
                            {selectedProvider === provider.id && (
                                <div className="absolute top-4 right-4 h-6 w-6 bg-green-500 rounded-full flex items-center justify-center text-white shadow-md">
                                    <Check className="h-4 w-4" strokeWidth={3} />
                                </div>
                            )}
                            <div className={cn(
                                "h-20 w-20 rounded-2xl flex items-center justify-center mb-6 transition-colors",
                                provider.bg
                            )}>
                                {/* Placeholder for Logo (using Icon + Text for now) */}
                                <FireFlame className={cn("h-10 w-10", provider.iconColor)} strokeWidth={2} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                {t(`gas.${provider.id}`)}
                            </h3>
                            <div className={cn(
                                "h-1 w-12 rounded-full bg-gradient-to-r",
                                provider.color
                            )} />
                        </motion.button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {selectedProvider && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden"
                        >
                            <div className="bg-slate-50/50 p-8 border-b border-slate-100">
                                <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                                    <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-slate-900 text-white text-sm font-bold">2</span>
                                    {t("gas.submit")}
                                </h3>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="p-8 grid md:grid-cols-2 gap-x-8 gap-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">
                                        {t("gas.registration_no")}
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none placeholder:text-slate-400"
                                        placeholder={t("gas.placeholder_reg")}
                                        value={formData.registrationNo}
                                        onChange={(e) => setFormData({ ...formData, registrationNo: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">
                                        {t("gas.order_date")}
                                    </label>
                                    <input
                                        type="date"
                                        required
                                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none"
                                        value={formData.orderDate}
                                        onChange={(e) => setFormData({ ...formData, orderDate: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">
                                        {t("gas.name")}
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none placeholder:text-slate-400"
                                        placeholder={t("gas.placeholder_name")}
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">
                                        {t("gas.contact_no")}
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        pattern="[0-9]{10}"
                                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none placeholder:text-slate-400"
                                        placeholder={t("gas.placeholder_mobile")}
                                        value={formData.contactNo}
                                        onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })}
                                    />
                                </div>

                                <div className="md:col-span-2 pt-4">
                                    <button
                                        type="submit"
                                        className="w-full md:w-auto h-12 px-8 rounded-xl bg-slate-900 text-white font-semibold shadow-lg shadow-slate-900/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                                    >
                                        {isSubmitted ? (
                                            <>
                                                <Check className="h-5 w-5 text-green-400" />
                                                {t("gas.success")}
                                            </>
                                        ) : (
                                            <>
                                                <FireFlame className="h-5 w-5 text-orange-400" />
                                                {t("gas.submit")}
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}

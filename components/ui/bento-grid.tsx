"use client"

import { motion } from "framer-motion"
import { Microphone as MicrophoneSolid, Sparks as SparksSolid } from "iconoir-react/solid"
import { ShieldCheck, Translate } from "iconoir-react/regular"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/context/LanguageContext"

export function BentoGrid() {
    const { t } = useLanguage()

    const features = [
        {
            title: t("bento.voiceNav.title"),
            description: t("bento.voiceNav.desc"),
            icon: MicrophoneSolid,
            className: "md:col-span-2 md:row-span-2",
            color: "bg-white/20 dark:bg-slate-900/40 backdrop-blur-md border-white/30 dark:border-white/10 shadow-lg",
            iconColor: "text-amber-600 dark:text-amber-500",
        },
        {
            title: t("bento.digilocker.title"),
            description: t("bento.digilocker.desc"),
            icon: ShieldCheck,
            className: "md:col-span-1 md:row-span-1",
            color: "bg-white/20 dark:bg-slate-900/40 backdrop-blur-md border-white/30 dark:border-white/10 shadow-lg",
            iconColor: "text-slate-700 dark:text-emerald-400",
        },
        {
            title: t("bento.autoFill.title"),
            description: t("bento.autoFill.desc"),
            icon: SparksSolid,
            className: "md:col-span-1 md:row-span-1",
            color: "bg-white/20 dark:bg-slate-900/40 backdrop-blur-md border-white/30 dark:border-white/10 shadow-lg",
            iconColor: "text-slate-700 dark:text-indigo-400",
        },
        {
            title: t("bento.vernacular.title"),
            description: t("bento.vernacular.desc"),
            icon: Translate,
            className: "md:col-span-2 md:row-span-1",
            color: "bg-white/20 dark:bg-slate-900/40 backdrop-blur-md border-white/30 dark:border-white/10 shadow-lg",
            iconColor: "text-amber-600 dark:text-amber-500",
        },
    ]

    return (
        <section className="container py-20">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                    {t("bento.heading")}
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                    {t("bento.subheading")}
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={cn(
                            "group relative overflow-hidden rounded-3xl border border-white/40 dark:border-white/10 p-8 transition-all hover:shadow-xl hover:border-amber-200/50 dark:hover:border-amber-500/30",
                            feature.className,
                            feature.color
                        )}
                    >
                        <div className="relative z-10 flex h-full flex-col justify-between">
                            <div
                                className={cn(
                                    "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 dark:bg-slate-800/80 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
                                    feature.iconColor
                                )}
                            >
                                <feature.icon className="h-6 w-6" strokeWidth={2.5} />
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100 transition-colors duration-300 group-hover:text-amber-700 dark:group-hover:text-amber-400">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-700 dark:text-slate-400 font-medium transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-slate-200">
                                    {feature.description}
                                </p>
                            </div>
                        </div>

                        {/* Decorative gradient blob */}
                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/30 blur-xl transition-all duration-500 group-hover:scale-150 group-hover:bg-amber-200/30" />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

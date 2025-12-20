"use client"

import { useLanguage } from "@/context/LanguageContext"

export function Footer() {
    const { t } = useLanguage()

    return (
        <footer className="border-t border-slate-200 bg-white py-12">
            <div className="container flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
                <div className="flex flex-col items-center gap-2 md:items-start">
                    <span className="text-xl font-bold text-slate-900">{t("navbar.logo")}</span>
                    <p className="text-sm text-slate-500">
                        {t("footer.tagline")}
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4 text-center md:items-end md:text-right">
                    <p className="text-sm font-medium text-slate-900">
                        {t("footer.madeWith")}
                        <span className="block text-xs font-normal text-slate-500">
                            (Krish, Avinash, Akshar)
                        </span>
                    </p>
                    <div className="flex items-center gap-2 justify-center md:justify-end">
                        <p className="text-xs text-slate-400">
                            {t("footer.poweredBy")}
                        </p>
                        <img
                            src="https://www.digilocker.gov.in/assets/img/digilocker_logo.png"
                            alt="DigiLocker"
                            className="h-6 w-auto"
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}

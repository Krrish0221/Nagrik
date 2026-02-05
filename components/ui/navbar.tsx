"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { NavArrowDown as NavArrowDownSolid, Heart as HeartSolid } from "iconoir-react/solid"
import Link from "next/link"
import { Menu, Xmark, Check, User, LogOut, Settings, Suitcase, BookStack, ShieldCheck } from "iconoir-react/regular"
import { FireFlame } from "iconoir-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/context/LanguageContext"
import { Language } from "@/lib/translations"
import { ProfileDialog, UserProfile } from "./profile-dialog"
import { SkillsHubModal, HelpingHandModal, SchemesListModal } from "./nav-dialogs"

// Mock Data for Nagrik Profile
const MOCK_USER: UserProfile = {
    name: "Krish P",
    email: "krish02@gmail.com",
    photo: "/profile_avatar.png",
    dob: "14 Feb 1995",
    age: 30,
    profession: "Agri-Entrepreneur & Farmer",
    skills: ["Organic Farming", "Crop Management", "Market Analysis", "Supply Chain"],
    // Nagrik Fields
    incomeRange: "₹4L - ₹6L per annum",
    category: "OBC",
    state: "Satara, Maharashtra (Rural)",
    employmentType: "Self-Employed",
    disabilityStatus: "None"
}

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [activeModal, setActiveModal] = useState<'skills' | 'helping' | 'schemes' | null>(null)
    const [isEssentialOpen, setIsEssentialOpen] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const { language, setLanguage, t } = useLanguage()

    const languages: { code: Language; label: string }[] = [
        { code: "en", label: "English" },
        { code: "hi", label: "हिन्दी" },
        { code: "gu", label: "ગુજરાતી" },
        { code: "sa", label: "संस्कृत" },
        { code: "bho", label: "भोजपुरी" },
        { code: "ta", label: "தமிழ்" },
        { code: "bn", label: "বাংলা" },
        { code: "mr", label: "मराठी" },
        { code: "te", label: "తెలుగు" },
        { code: "ur", label: "اردو" },
        { code: "kn", label: "ಕನ್ನಡ" },
        { code: "or", label: "ଓଡ଼ିଆ" },
        { code: "ml", label: "മലയാളം" },
        { code: "pa", label: "ਪੰਜਾਬੀ" },
        { code: "as", label: "অসমীয়া" },
        { code: "mai", label: "मैथिली" },
    ]

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/60 backdrop-blur-xl transition-all"
            >
                <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900 transition-opacity hover:opacity-80">
                            {t("navbar.logo")}
                        </Link>
                    </div>

                    {/* Middle Navigation (Desktop) */}
                    <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
                        <button
                            onClick={() => setActiveModal('skills')}
                            className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all"
                        >
                            <Suitcase className="h-4 w-4 text-blue-600" />
                            {t("navbar.skills_hub")}
                        </button>
                        <button
                            onClick={() => setActiveModal('helping')}
                            className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all"
                        >
                            <HeartSolid className="h-4 w-4 text-rose-500" />
                            {t("navbar.helping_hand")}
                        </button>
                        
                        {/* Essential Services Dropdown */}
                        <div 
                            className="relative"
                            onMouseEnter={() => {
                                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                                setIsEssentialOpen(true);
                            }}
                            onMouseLeave={() => {
                                timeoutRef.current = setTimeout(() => {
                                    setIsEssentialOpen(false);
                                }, 300);
                            }}
                        >
                            <button
                                onClick={() => setIsEssentialOpen(!isEssentialOpen)}
                                className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all"
                            >
                                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                                {t("navbar.essential_services")}
                                <NavArrowDownSolid className={cn("h-3 w-3 transition-transform", isEssentialOpen ? "rotate-180" : "")} />
                            </button>
                            
                            {isEssentialOpen && (
                                <div className="absolute top-full left-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl ring-1 ring-slate-900/5 overflow-hidden">
                                    <Link 
                                        href="/services/cybercrime"
                                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors text-left"
                                        onClick={() => setIsEssentialOpen(false)}
                                    >
                                        <ShieldCheck className="h-4 w-4 text-indigo-600" />
                                        {t("navbar.cybercrime")}
                                    </Link>
                                    <Link 
                                        href="/services/gas-refill" 
                                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors text-left"
                                        onClick={() => setIsEssentialOpen(false)}
                                    >
                                        <FireFlame className="h-4 w-4 text-orange-500" />
                                        {t("navbar.gas_refill")}
                                    </Link>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => setActiveModal('schemes')}
                            className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all"
                        >
                            <BookStack className="h-4 w-4 text-amber-600" />
                            {t("navbar.schemes")}
                        </button>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden items-center gap-4 md:flex">
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 py-2">
                                {t("navbar.language")}
                                <NavArrowDownSolid className="h-4 w-4 transition-transform group-hover:rotate-180" />
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

                        <button
                            onClick={handleLogin}
                            className={cn(
                                "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:scale-105 active:scale-95",
                                isLoggedIn
                                    ? "bg-green-100 text-green-700 shadow-sm cursor-default hover:scale-100" // Verified State
                                    : "bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30"
                            )}
                        >
                            <img
                                src="/digilocker_new.png"
                                alt="DigiLocker"
                                className="h-7 w-auto object-contain rounded-sm"
                            />
                            {isLoggedIn ? "Verified User" : t("navbar.login")}
                            {isLoggedIn && <Check className="h-4 w-4" strokeWidth={3} />}
                        </button>

                        {/* Profile Section */}
                        <AnimatePresence>
                            {isLoggedIn && (
                                <div className="relative group">
                                    <motion.button
                                        initial={{ opacity: 0, scale: 0.8, x: -10 }}
                                        animate={{ opacity: 1, scale: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors border border-amber-200 overflow-hidden"
                                    >
                                        <img src={MOCK_USER.photo} alt="Profile" className="h-full w-full object-cover" />
                                    </motion.button>

                                    {/* Profile Dropdown */}
                                    <div className="absolute right-0 top-full hidden pt-2 group-hover:block w-64">
                                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl ring-1 ring-slate-900/5">
                                            <div className="bg-slate-50 p-4 border-b border-slate-100">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-10 w-10 rounded-full bg-amber-500 overflow-hidden border-2 border-white shadow-sm">
                                                        <img src={MOCK_USER.photo} alt="Profile" className="h-full w-full object-cover" />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-slate-900">{MOCK_USER.name}</p>
                                                        <p className="text-xs text-slate-500">{MOCK_USER.email}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-1.5">
                                                <button
                                                    onClick={() => setIsProfileOpen(true)}
                                                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                                                >
                                                    <User className="h-4 w-4" />
                                                    My Profile
                                                </button>
                                                <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                                    <Settings className="h-4 w-4" />
                                                    Settings
                                                </button>
                                                <div className="my-1 border-t border-slate-100" />
                                                <button
                                                    onClick={handleLogout}
                                                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                                                >
                                                    <LogOut className="h-4 w-4" />
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <Xmark strokeWidth={2.5} /> : <Menu strokeWidth={2.5} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 w-full border-b border-slate-200 bg-white p-4 shadow-lg md:hidden">
                        <div className="flex flex-col gap-4">
                            {isLoggedIn && (
                                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 mb-2">
                                    <div className="h-10 w-10 rounded-full bg-amber-500 overflow-hidden border-2 border-white shadow-sm">
                                        <img src={MOCK_USER.photo} alt="Profile" className="h-full w-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">{MOCK_USER.name}</p>
                                        <p className="text-xs text-slate-500">{MOCK_USER.email}</p>
                                    </div>
                                </div>
                            )}

                            {/* Mobile Navigation Links */}
                            <div className="grid grid-cols-1 gap-2">
                                <button
                                    onClick={() => { setActiveModal('skills'); setIsMenuOpen(false); }}
                                    className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
                                >
                                    <Suitcase className="h-5 w-5 text-blue-600" />
                                    {t("navbar.skills_hub")}
                                </button>
                                <button
                                    onClick={() => { setActiveModal('helping'); setIsMenuOpen(false); }}
                                    className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
                                >
                                    <HeartSolid className="h-5 w-5 text-rose-500" />
                                    {t("navbar.helping_hand")}
                                </button>

                                {/* Essential Services Mobile */}
                                <div className="flex flex-col gap-1">
                                    <button
                                        onClick={() => setIsEssentialOpen(!isEssentialOpen)}
                                        className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
                                    >
                                        <div className="flex items-center gap-3">
                                            <ShieldCheck className="h-5 w-5 text-emerald-600" />
                                            {t("navbar.essential_services")}
                                        </div>
                                        <NavArrowDownSolid className={cn("h-4 w-4 transition-transform", isEssentialOpen ? "rotate-180" : "")} />
                                    </button>
                                    
                                    {isEssentialOpen && (
                                        <div className="ml-4 flex flex-col gap-2 border-l-2 border-slate-100 pl-4 mt-1">
                                            <Link 
                                                href="/services/cybercrime"
                                                className="flex items-center gap-3 rounded-lg py-2 text-sm font-medium text-slate-600 hover:text-slate-900"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <ShieldCheck className="h-4 w-4 text-indigo-600" />
                                                {t("navbar.cybercrime")}
                                            </Link>
                                            <Link href="/services/gas-refill" className="flex items-center gap-3 rounded-lg py-2 text-sm font-medium text-slate-600 hover:text-slate-900">
                                                <FireFlame className="h-4 w-4 text-orange-500" />
                                                <FireFlame className="h-4 w-4 text-orange-500" />
                                                {t("navbar.gas_refill")}
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <button
                                    onClick={() => { setActiveModal('schemes'); setIsMenuOpen(false); }}
                                    className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
                                >
                                    <BookStack className="h-5 w-5 text-amber-600" />
                                    {t("navbar.schemes")}
                                </button>
                            </div>

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

                            {isLoggedIn ? (
                                <>
                                    <button
                                        onClick={() => {
                                            setIsProfileOpen(true);
                                            setIsMenuOpen(false);
                                        }}
                                        className="flex w-full items-center justify-center gap-2 rounded-full bg-amber-100 px-5 py-2.5 text-sm font-semibold text-amber-700"
                                    >
                                        <User className="h-4 w-4" />
                                        My Profile
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            setIsMenuOpen(false);
                                        }}
                                        className="flex w-full items-center justify-center gap-2 rounded-full bg-red-100 px-5 py-2.5 text-sm font-semibold text-red-600"
                                    >
                                        <LogOut className="h-4 w-4" />
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => {
                                        handleLogin();
                                        setIsMenuOpen(false);
                                    }}
                                    className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white"
                                >
                                    <img
                                        src="/digilocker_new.png"
                                        alt="DigiLocker"
                                        className="h-7 w-auto object-contain rounded-sm"
                                    />
                                    {t("navbar.login")}
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </motion.nav>

            {/* Modals */}
            <ProfileDialog
                isOpen={isProfileOpen}
                onClose={() => setIsProfileOpen(false)}
                user={MOCK_USER}
            />
            <SkillsHubModal isOpen={activeModal === 'skills'} onClose={() => setActiveModal(null)} />
            <HelpingHandModal isOpen={activeModal === 'helping'} onClose={() => setActiveModal(null)} />
            <SchemesListModal isOpen={activeModal === 'schemes'} onClose={() => setActiveModal(null)} />
        </>
    )
}

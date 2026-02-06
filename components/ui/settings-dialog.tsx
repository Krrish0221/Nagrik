"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Xmark, User, SunLight, HalfMoon, TextSize, Eye, Microphone, Globe, Bell, MapPin, Wifi, Database } from "iconoir-react/regular"
import { Check, NavArrowDown } from "iconoir-react"
import { cn } from "@/lib/utils"

interface SettingsDialogProps {
    isOpen: boolean
    onClose: () => void
}

type TabId = 'voice' | 'interface' | 'privacy' | 'notifications' | 'location' | 'offline' | 'account'

import { useTheme } from "next-themes"


import { useFontSize } from "@/context/FontSizeContext"
import { useHighContrast } from "@/context/HighContrastContext"
import { useSimplifiedMode } from "@/context/SimplifiedModeContext"

// ... imports ...

export function SettingsDialog({ isOpen, onClose }: SettingsDialogProps) {
    const [activeTab, setActiveTab] = useState<TabId>('voice')
    const { theme, setTheme } = useTheme()

    // --- Mock State for Settings (In a real app, this would be global state/context) ---
    // Voice
    const [voiceLang, setVoiceLang] = useState("Hindi")
    const [speechSpeed, setSpeechSpeed] = useState(1) // 0: Slow, 1: Normal, 2: Fast
    const [autoRead, setAutoRead] = useState(true)
    const [wakeWord, setWakeWord] = useState(false)
    const [voiceOutput, setVoiceOutput] = useState(true)

    // Interface
    const [appLang, setAppLang] = useState("English")
    const { fontSize, setFontSize } = useFontSize()
    const { isHighContrast, setIsHighContrast } = useHighContrast()
    const { isSimplified, setIsSimplified } = useSimplifiedMode()

    // Privacy
    const [dataVisibility, setDataVisibility] = useState(true)
    const [incognito, setIncognito] = useState(false)

    // Notifs
    const [schemeAlerts, setSchemeAlerts] = useState(true)
    const [channel, setChannel] = useState("WhatsApp")

    // Account Navigation
    const [accountView, setAccountView] = useState<'main' | 'help' | 'feedback' | 'legal'>('main')
    const [feedbackText, setFeedbackText] = useState("")
    const [feedbackSent, setFeedbackSent] = useState(false)

    if (!isOpen) return null

    const tabs = [
        { id: 'voice', label: 'Voice Assistant', icon: Microphone, color: 'text-amber-600', bg: 'bg-amber-100' },
        { id: 'interface', label: 'App Interface', icon: SunLight, color: 'text-blue-600', bg: 'bg-blue-100' },
        { id: 'privacy', label: 'Privacy & Data', icon: Database, color: 'text-slate-600', bg: 'bg-slate-100' },
        { id: 'notifications', label: 'Notifications', icon: Bell, color: 'text-rose-600', bg: 'bg-rose-100' },
        { id: 'location', label: 'Location', icon: MapPin, color: 'text-emerald-600', bg: 'bg-emerald-100' },
        { id: 'offline', label: 'Offline & Storage', icon: Wifi, color: 'text-indigo-600', bg: 'bg-indigo-100' },
        { id: 'account', label: 'Account & Support', icon: User, color: 'text-violet-600', bg: 'bg-violet-100' },
    ]

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
                        className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm dark:bg-black/60"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 z-[70] h-[90vh] w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 p-4 md:h-[85vh]"
                    >
                        <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-2xl ring-1 ring-slate-900/5 md:flex-row">

                            {/* Sidebar */}
                            <div className="w-full border-b border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/30 p-4 md:w-64 md:border-b-0 md:border-r md:p-6 overflow-x-auto md:overflow-y-auto flex md:block gap-2">
                                <div className="mb-6 hidden md:block">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Settings</h2>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Customize your Nagrik experience</p>
                                </div>
                                {tabs.map((tab) => {
                                    const Icon = tab.icon
                                    const isActive = activeTab === tab.id
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id as TabId)}
                                            className={cn(
                                                "flex flex-shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all md:w-full",
                                                isActive
                                                    ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700"
                                                    : "text-slate-500 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-800/50 hover:text-slate-700 dark:hover:text-slate-200"
                                            )}
                                        >
                                            <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg", isActive ? tab.bg : "bg-slate-100 dark:bg-slate-800", isActive ? tab.color : "text-slate-400 dark:text-slate-500")}>
                                                <Icon className="h-5 w-5" strokeWidth={isActive ? 2.5 : 2} />
                                            </div>
                                            <span className="whitespace-nowrap">{tab.label}</span>
                                        </button>
                                    )
                                })}
                            </div>

                            {/* Content Area */}
                            <div className="flex-1 overflow-y-auto bg-white dark:bg-slate-900">
                                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-4 backdrop-blur-md md:hidden">
                                    <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">{tabs.find(t => t.id === activeTab)?.label}</h2>
                                    <button onClick={onClose} className="rounded-full bg-slate-100 dark:bg-slate-800 p-2 text-slate-500 dark:text-slate-400">
                                        <Xmark className="h-5 w-5" />
                                    </button>
                                </div>
                                <div className="hidden md:flex justify-end p-6 pb-0">
                                    <button onClick={onClose} className="rounded-full bg-slate-100 dark:bg-slate-800 p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                        <Xmark className="h-5 w-5" />
                                    </button>
                                </div>

                                <div className="p-4 md:p-10 space-y-8 max-w-3xl mx-auto">

                                    {/* --- VOICE SETTINGS --- */}
                                    {activeTab === 'voice' && (
                                        <div className="space-y-8">
                                            <SectionHeader title="Voice Assistant & Awaaz" desc="Configure how Nagrik speaks and listens to you." />

                                            <SettingsGroup title="Language & Speech">
                                                <SettingRow label="Voice Language" desc="Language used by Awaaz AI independently of app language." icon={Globe}>
                                                    <Select
                                                        value={voiceLang}
                                                        onChange={setVoiceLang}
                                                        options={["Hindi", "English", "Marathi", "Gujarati", "Bhojpuri"]}
                                                    />
                                                </SettingRow>
                                                <SettingRow label="Speech Speed" desc="Adjust how fast the AI speaks to you." icon={User}>
                                                    <div className="flex items-center gap-4 w-full max-w-xs">
                                                        <span className="text-xs font-medium text-slate-400">Slow</span>
                                                        <input
                                                            type="range" min="0" max="2" step="1"
                                                            value={speechSpeed}
                                                            onChange={(e) => setSpeechSpeed(parseInt(e.target.value))}
                                                            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-amber-500"
                                                        />
                                                        <span className="text-xs font-medium text-slate-400">Fast</span>
                                                    </div>
                                                </SettingRow>
                                            </SettingsGroup>

                                            <SettingsGroup title="Behavior">
                                                <SettingRow label="Auto-Read Schemes" desc="Automatically read out details when a scheme page opens." icon={Microphone}>
                                                    <Switch checked={autoRead} onCheckedChange={setAutoRead} />
                                                </SettingRow>
                                                <SettingRow label="Wake Word Detection" desc="Listen for 'Hey Nagrik' or 'Awaaz' to start speaking." icon={Wifi}>
                                                    <Switch checked={wakeWord} onCheckedChange={setWakeWord} />
                                                </SettingRow>
                                            </SettingsGroup>
                                        </div>
                                    )}

                                    {/* --- INTERFACE SETTINGS --- */}
                                    {activeTab === 'interface' && (
                                        <div className="space-y-8">
                                            <SectionHeader title="App Interface & Accessibility" desc="Make Nagrik easier for you to see and use." />

                                            <SettingsGroup title="Display">
                                                <SettingRow label="App Language" desc="Change the written language of the interface." icon={Globe}>
                                                    <Select
                                                        value={appLang}
                                                        onChange={setAppLang}
                                                        options={["English", "Hindi", "Marathi", "Gujarati"]}
                                                    />
                                                </SettingRow>
                                                <SettingRow label="Font Size" desc="Increase text size for better readability." icon={TextSize}>
                                                    <div className="flex items-center gap-2 rounded-lg bg-slate-100 p-1">
                                                        <button
                                                            onClick={() => setFontSize("Small")}
                                                            className={cn("px-3 py-1.5 text-xs font-bold rounded-md transition-all", fontSize === "Small" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500")}
                                                        >A-</button>
                                                        <button
                                                            onClick={() => setFontSize("Medium")}
                                                            className={cn("px-3 py-1.5 text-sm font-bold rounded-md transition-all", fontSize === "Medium" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500")}
                                                        >A</button>
                                                        <button
                                                            onClick={() => setFontSize("Large")}
                                                            className={cn("px-3 py-1.5 text-base font-bold rounded-md transition-all", fontSize === "Large" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500")}
                                                        >A+</button>
                                                    </div>
                                                </SettingRow>
                                                <SettingRow label="High Contrast Mode" desc="Increase contrast for visually impaired users." icon={Eye}>
                                                    <Switch checked={isHighContrast} onCheckedChange={setIsHighContrast} />
                                                </SettingRow>
                                            </SettingsGroup>

                                            <SettingsGroup title="Theme">
                                                <div className="grid grid-cols-3 gap-4">
                                                    <ThemeCard label="Light" active={theme === "light"} onClick={() => setTheme("light")} icon={SunLight} />
                                                    <ThemeCard label="Dark" active={theme === "dark"} onClick={() => setTheme("dark")} icon={HalfMoon} />
                                                    <ThemeCard label="Auto" active={theme === "system"} onClick={() => setTheme("system")} icon={Check} />
                                                </div>
                                            </SettingsGroup>

                                            <SettingsGroup title="Performance">
                                                <SettingRow label="Simplified Mode (Lite)" desc="Remove animations for slower phones or networks." icon={Wifi}>
                                                    <Switch checked={isSimplified} onCheckedChange={setIsSimplified} />
                                                </SettingRow>
                                            </SettingsGroup>
                                        </div>
                                    )}

                                    {/* --- PRIVACY SETTINGS --- */}
                                    {activeTab === 'privacy' && (
                                        <div className="space-y-8">
                                            <SectionHeader title="Privacy & DigiLocker" desc="Manage your verified data and permissions." topAction={
                                                <button className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-xs font-bold text-green-700 hover:bg-green-100 border border-green-200">
                                                    <Check className="h-4 w-4" /> DigiLocker Synced
                                                </button>
                                            } />

                                            <SettingsGroup title="Data Management">
                                                <SettingRow label="Re-sync Documents" desc="Fetch latest Aadhaar/Pan updates from DigiLocker." icon={Database}>
                                                    <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Sync Now</button>
                                                </SettingRow>
                                                <SettingRow label="Dashboard Visibility" desc="Show sensitive data like income on home screen." icon={Eye}>
                                                    <Switch checked={dataVisibility} onCheckedChange={setDataVisibility} />
                                                </SettingRow>
                                                <SettingRow label="Incognito Mode" desc="Browse schemes without saving history." icon={User}>
                                                    <Switch checked={incognito} onCheckedChange={setIncognito} />
                                                </SettingRow>
                                            </SettingsGroup>

                                            <div className="rounded-xl border border-red-100 bg-red-50 p-4">
                                                <h4 className="font-bold text-red-800 mb-1">Danger Zone</h4>
                                                <div className="flex items-center justify-between">
                                                    <p className="text-sm text-red-600">Clear all local caches and search history.</p>
                                                    <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-red-600 border border-red-200 hover:bg-red-50">Clear Data</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* --- NOT ALERTS SETTINGS --- */}
                                    {activeTab === 'notifications' && (
                                        <div className="space-y-8">
                                            <SectionHeader title="Notifications & Alerts" desc="Stay informed about new benefits." />

                                            <SettingsGroup title="Preferences">
                                                <SettingRow label="Scheme Alerts" desc="Notify when a new scheme matches my profile." icon={Bell}>
                                                    <Switch checked={schemeAlerts} onCheckedChange={setSchemeAlerts} />
                                                </SettingRow>
                                                <SettingRow label="Preferred Channel" desc="Where should we send you updates?" icon={Globe}>
                                                    <div className="flex gap-2">
                                                        {['WhatsApp', 'SMS', 'In-App'].map(c => (
                                                            <button
                                                                key={c}
                                                                onClick={() => setChannel(c)}
                                                                className={cn("px-3 py-1.5 text-xs font-medium rounded-lg border", channel === c ? "bg-amber-50 border-amber-200 text-amber-700" : "bg-white border-slate-200 text-slate-600")}
                                                            >
                                                                {c}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </SettingRow>
                                            </SettingsGroup>
                                        </div>
                                    )}

                                    {/* --- LOCATION SETTINGS --- */}
                                    {activeTab === 'location' && (
                                        <div className="space-y-8">
                                            <SectionHeader title="Location & Regional" desc="Set your location for accurate scheme filtering." />

                                            <SettingsGroup title="Manual Override">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium text-slate-700">State</label>
                                                        <Select value="Gujarat" onChange={() => { }} options={["Maharashtra", "Gujarat", "Bihar", "Uttar Pradesh"]} />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium text-slate-700">District</label>
                                                        <Select value="Ahmedabad" onChange={() => { }} options={["Ahmedabad", "Surat", "Vadodara", "Rajkot"]} />
                                                    </div>
                                                </div>
                                            </SettingsGroup>

                                            <SettingsGroup title="Context">
                                                <SettingRow label="Region Type" desc="Schemes often differ for Rural vs Urban areas." icon={MapPin}>
                                                    <div className="flex rounded-lg bg-slate-100 p-1">
                                                        <button className="flex-1 rounded-md bg-white px-4 py-1.5 text-sm font-medium text-slate-900 shadow-sm">Rural</button>
                                                        <button className="flex-1 rounded-md px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-900">Urban</button>
                                                    </div>
                                                </SettingRow>
                                            </SettingsGroup>
                                        </div>
                                    )}

                                    {/* --- OFFLINE --- */}
                                    {activeTab === 'offline' && (
                                        <div className="space-y-8">
                                            <SectionHeader title="Offline & Storage" desc="Manage downloads for low connectivity areas." />
                                            <SettingsGroup title="Downloads">
                                                <SettingRow label="Download only on Wi-Fi" desc="Save mobile data." icon={Wifi}>
                                                    <Switch checked={true} onCheckedChange={() => { }} />
                                                </SettingRow>
                                            </SettingsGroup>

                                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h4 className="font-semibold text-slate-900">Storage Usage</h4>
                                                    <span className="text-sm font-medium text-slate-500">5.2 GB used/25 GB</span>
                                                </div>
                                                <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                                                    <div className="h-full w-[15%] bg-indigo-500 rounded-full" />
                                                </div>
                                                <div className="mt-4 flex justify-end">
                                                    <button className="text-sm font-medium text-red-600 hover:underline">Clear Downloads</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* --- ACCOUNT --- */}
                                    {activeTab === 'account' && (
                                        <div className="space-y-8">
                                            {accountView === 'main' && (
                                                <>
                                                    <SectionHeader title="Account & Support" desc="Help, feedback, and legal info." />
                                                    <div className="grid gap-3">
                                                        <button
                                                            onClick={() => setAccountView('help')}
                                                            className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white p-4 text-left transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
                                                        >
                                                            <span className="font-medium text-slate-700 dark:text-slate-200">Help & Tutorials</span>
                                                            <NavArrowDown className="h-5 w-5 -rotate-90 text-slate-400" />
                                                        </button>
                                                        <button
                                                            onClick={() => setAccountView('feedback')}
                                                            className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white p-4 text-left transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
                                                        >
                                                            <span className="font-medium text-slate-700 dark:text-slate-200">Send Feedback</span>
                                                            <NavArrowDown className="h-5 w-5 -rotate-90 text-slate-400" />
                                                        </button>
                                                        <button
                                                            onClick={() => setAccountView('legal')}
                                                            className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white p-4 text-left transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
                                                        >
                                                            <span className="font-medium text-slate-700 dark:text-slate-200">Terms & Privacy Policy</span>
                                                            <NavArrowDown className="h-5 w-5 -rotate-90 text-slate-400" />
                                                        </button>
                                                    </div>
                                                    <div className="pt-8 text-center">
                                                        <p className="text-xs text-slate-400">Nagrik App v2.0.1 (Stable)</p>
                                                        <p className="text-[10px] text-slate-300 mt-1">Made with ❤️ for India</p>
                                                    </div>
                                                </>
                                            )}

                                            {accountView === 'help' && (
                                                <div className="space-y-6">
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <button
                                                            onClick={() => setAccountView('main')}
                                                            className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
                                                        >
                                                            <NavArrowDown className="h-6 w-6 rotate-90" />
                                                        </button>
                                                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Help & Tutorials</h3>
                                                    </div>
                                                    <div className="space-y-4">
                                                        <FAQItem question="How do I apply for a scheme?" answer="Go to any scheme card, click 'View Details', and look for the 'Apply Now' button at the bottom of the page." />
                                                        <FAQItem question="Is my data safe?" answer="Yes, Nagrik uses DigiLocker for secure, government-verified document access. We do not store your private documents." />
                                                        <FAQItem question="Can I use the app offline?" answer="Yes! Enable 'Offline Mode' in Settings to save schemes for later viewing without internet." />
                                                        <FAQItem question="How do I change the language?" answer="Go to Settings > App Interface > App Language to switch between English, Hindi, and regional languages." />
                                                    </div>
                                                </div>
                                            )}

                                            {accountView === 'feedback' && (
                                                <div className="space-y-6">
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <button
                                                            onClick={() => { setAccountView('main'); setFeedbackSent(false); setFeedbackText(""); }}
                                                            className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
                                                        >
                                                            <NavArrowDown className="h-6 w-6 rotate-90" />
                                                        </button>
                                                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Send Feedback</h3>
                                                    </div>

                                                    {!feedbackSent ? (
                                                        <div className="space-y-4">
                                                            <p className="text-sm text-slate-500 dark:text-slate-400">Tell us what you like or how we can improve. Your feedback helps us serve India better.</p>
                                                            <textarea
                                                                value={feedbackText}
                                                                onChange={(e) => setFeedbackText(e.target.value)}
                                                                className="w-full h-32 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4 text-sm focus:border-amber-500 focus:outline-none dark:text-slate-200"
                                                                placeholder="Type your feedback here..."
                                                            />
                                                            <button
                                                                onClick={() => { if (feedbackText) setFeedbackSent(true) }}
                                                                disabled={!feedbackText}
                                                                className="w-full rounded-xl bg-amber-500 py-3 text-sm font-bold text-white shadow-lg shadow-amber-500/20 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                                            >
                                                                Submit Feedback
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <div className="flex flex-col items-center justify-center py-10 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                                                            <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-500 flex items-center justify-center">
                                                                <Check className="h-8 w-8" strokeWidth={3} />
                                                            </div>
                                                            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">Feedback Sent!</h4>
                                                            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">Thank you for helping us improve Nagrik.</p>
                                                            <button
                                                                onClick={() => setAccountView('main')}
                                                                className="mt-4 text-sm font-medium text-amber-600 hover:text-amber-700"
                                                            >
                                                                Back to Settings
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {accountView === 'legal' && (
                                                <div className="space-y-6 h-full flex flex-col">
                                                    <div className="flex items-center gap-2 mb-2 flex-shrink-0">
                                                        <button
                                                            onClick={() => setAccountView('main')}
                                                            className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
                                                        >
                                                            <NavArrowDown className="h-6 w-6 rotate-90" />
                                                        </button>
                                                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Terms & Privacy</h3>
                                                    </div>
                                                    <div className="overflow-y-auto pr-2 text-sm text-slate-600 dark:text-slate-400 space-y-6 pb-20">
                                                        <p><strong>Last Updated: Feb 2026</strong></p>
                                                        <p>Welcome to Nagrik. By using our app, you agree to these legal terms.</p>

                                                        {/* 1. Data Privacy (Original) */}
                                                        <div>
                                                            <h4 className="font-bold text-slate-900 dark:text-slate-200 mb-2">1. Data Privacy</h4>
                                                            <p>Your privacy is paramount. We do not sell your personal data. All document access via DigiLocker is performed locally on your device or via secure, encrypted channels directly with government servers.</p>
                                                        </div>

                                                        {/* 2. DigiLocker (New) */}
                                                        <div>
                                                            <h4 className="font-bold text-slate-900 dark:text-slate-200 mb-2">2. DigiLocker & Data Retention</h4>
                                                            <p className="mb-2"><strong>DigiLocker Integration:</strong> Nagrik connects with DigiLocker solely to verify your eligibility for schemes (e.g., verifying caste or income certificates).</p>
                                                            <p className="mb-2"><strong>No Storage of Credentials:</strong> We do not store your DigiLocker username or PIN.</p>
                                                            <p><strong>Transient Data:</strong> Your document details are fetched in real-time and are stored locally on your device to speed up your experience. They are not sold to third parties.</p>
                                                        </div>

                                                        {/* 3. Scheme Information (Original) */}
                                                        <div>
                                                            <h4 className="font-bold text-slate-900 dark:text-slate-200 mb-2">3. Scheme Information</h4>
                                                            <p>While we strive for accuracy, scheme details are sourced from public government data and may change. Always verify with official authorities.</p>
                                                        </div>

                                                        {/* 4. AI Disclaimer (New) */}
                                                        <div>
                                                            <h4 className="font-bold text-slate-900 dark:text-slate-200 mb-2">4. AI & Accuracy Disclaimer</h4>
                                                            <div className="rounded-lg bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 p-3 text-xs">
                                                                <p className="font-semibold text-amber-800 dark:text-amber-500 mb-1">Use as a guide only</p>
                                                                <p>The 'Awaaz' voice assistant uses Artificial Intelligence to simplify complex government information. While we strive for accuracy, AI responses may occasionally be incomplete or incorrect. Please verify all scheme details with the official government notification or department before applying.</p>
                                                            </div>
                                                        </div>

                                                        {/* 5. User Conduct (Original) */}
                                                        <div>
                                                            <h4 className="font-bold text-slate-900 dark:text-slate-200 mb-2">5. User Conduct</h4>
                                                            <p>You agree to use Nagrik only for lawful purposes and not to misuse the platform to spread misinformation.</p>
                                                        </div>

                                                        {/* 6. Liability (New) */}
                                                        <div>
                                                            <h4 className="font-bold text-slate-900 dark:text-slate-200 mb-2">6. Limitation of Liability</h4>
                                                            <p>Nagrik is an information facilitator, not a government entity. We are not liable for any financial loss, rejected applications, or missed deadlines resulting from reliance on the app. The final decision for any scheme lies with the respective Government Department.</p>
                                                        </div>

                                                        {/* 7. Grievance Redressal (New) */}
                                                        <div>
                                                            <h4 className="font-bold text-slate-900 dark:text-slate-200 mb-2">7. Grievance Redressal</h4>
                                                            <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-3 text-xs">
                                                                <p className="mb-2">In accordance with the Information Technology Act, 2000 and Rules made thereunder, if you have any complaints regarding your data or content, please contact our Grievance Officer:</p>
                                                                <p><strong>Name:</strong> Krish Prajapati</p>
                                                                <p><strong>Email:</strong> grievance@nagrik.app</p>
                                                                <p><strong>Response Time:</strong> Within 24 hours.</p>
                                                            </div>
                                                        </div>

                                                        <div className="pt-6 text-center opacity-50">
                                                            <p className="text-xs">Nagrik App v2.0.1 (Stable)</p>
                                                            <p className="italic text-[10px] mt-1">Made with ❤️ for India</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

// --- Reusable UI Components ---

function SectionHeader({ title, desc, topAction }: { title: string, desc: string, topAction?: React.ReactNode }) {
    return (
        <div className="flex items-start justify-between">
            <div className="space-y-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{title}</h3>
                <p className="text-slate-500 dark:text-slate-400">{desc}</p>
            </div>
            {topAction}
        </div>
    )
}

function SettingsGroup({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{title}</h4>
            <div className="space-y-1 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
                {children}
            </div>
        </div>
    )
}

function SettingRow({ label, desc, icon: Icon, children }: { label: string, desc: string, icon: any, children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 p-4 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
            <div className="flex items-start gap-4">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-200">{label}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 max-w-[200px] sm:max-w-xs">{desc}</p>
                </div>
            </div>
            <div className="pl-4">
                {children}
            </div>
        </div>
    )
}

// Custom Switch
function Switch({ checked, onCheckedChange }: { checked: boolean, onCheckedChange: (c: boolean) => void }) {
    return (
        <button
            onClick={() => onCheckedChange(!checked)}
            className={cn(
                "relative h-7 w-12 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2",
                checked ? "bg-amber-500" : "bg-slate-200 dark:bg-slate-700"
            )}
        >
            <motion.span
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                className={cn(
                    "block h-6 w-6 rounded-full bg-white shadow-sm",
                    checked ? "translate-x-5.5" : "translate-x-0.5"
                )}
            />
        </button>
    )
}

// Custom Select
function Select({ value, onChange, options }: { value: string, onChange: (v: string) => void, options: string[] }) {
    return (
        <div className="relative">
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="appearance-none rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 py-2 pl-3 pr-8 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            >
                {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <NavArrowDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
    )
}

// Theme Card
function ThemeCard({ label, active, onClick, icon: Icon }: { label: string, active: boolean, onClick: () => void, icon: any }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex flex-col items-center gap-2 rounded-xl border p-4 transition-all hover:bg-slate-50 dark:hover:bg-slate-800",
                active ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-500" : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
            )}
        >
            <Icon className="h-6 w-6" strokeWidth={active ? 2.5 : 2} />
            <span className="text-xs font-medium">{label}</span>
        </button>
    )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition-all">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between p-4 text-left"
            >
                <span className="font-medium text-slate-900 dark:text-slate-200">{question}</span>
                <NavArrowDown className={cn("h-5 w-5 text-slate-400 transition-transform", isOpen ? "rotate-180" : "rotate-0")} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-4 pt-0 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

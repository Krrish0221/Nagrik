"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Xmark, User, Calendar, Suitcase, Mail, Phone, MapPin, Coins, Community, Building } from "iconoir-react/regular"
import { cn } from "@/lib/utils"

export interface UserProfile {
    name: string
    email: string
    photo?: string
    dob: string
    age: number
    profession: string
    skills: string[]
    // Nagrik Logic / Scheme Eligibility Fields
    incomeRange: string
    category: string // e.g., General, OBC, SC, ST
    state: string
    employmentType: string // e.g., Salaried, Self-employed, Student
    disabilityStatus: string // e.g., None, Yes
}

interface ProfileDialogProps {
    isOpen: boolean
    onClose: () => void
    user: UserProfile
}

export function ProfileDialog({ isOpen, onClose, user }: ProfileDialogProps) {
    if (!isOpen) return null

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
                        className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 z-[70] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 p-4"
                    >
                        <div className="overflow-hidden rounded-3xl bg-white dark:bg-slate-950 shadow-2xl ring-1 ring-slate-900/5 dark:ring-white/10">
                            {/* Header / Banner */}
                            <div className="relative h-32 bg-gradient-to-r from-amber-400 to-orange-500">
                                <button
                                    onClick={onClose}
                                    className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors backdrop-blur-md"
                                >
                                    <Xmark className="h-5 w-5" strokeWidth={2.5} />
                                </button>
                            </div>

                            <div className="px-8 pb-8">
                                {/* Profile Photo & Name */}
                                <div className="relative -mt-16 mb-6 flex items-end justify-between">
                                    <div className="flex items-end gap-6">
                                        <div className="relative h-32 w-32 rounded-full border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-800 shadow-md overflow-hidden">
                                            {user.photo ? (
                                                <img src={user.photo} alt={user.name} className="h-full w-full object-cover" />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500">
                                                    <User className="h-12 w-12" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{user.name}</h2>
                                            <p className="text-slate-500 dark:text-slate-400 font-medium">{user.profession}</p>
                                        </div>
                                    </div>

                                    <div className="mb-2 hidden sm:block">
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                                            Nagrik Verified
                                        </span>
                                    </div>
                                </div>

                                {/* Content Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Personal Details */}
                                    <div className="space-y-6">
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Personal Details</h3>

                                        <div className="space-y-4">
                                            <InfoItem icon={Mail} label="Email" value={user.email} />
                                            <InfoItem icon={Calendar} label="Date of Birth" value={`${user.dob} (${user.age} yrs)`} />
                                            <InfoItem icon={Suitcase} label="Profession" value={user.profession} />
                                        </div>

                                        <div className="pt-4">
                                            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-400">Skills</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {user.skills.map((skill) => (
                                                    <span key={skill} className="rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Nagrik Logic / Scheme Eligibility */}
                                    <div className="space-y-6 rounded-2xl bg-amber-50/50 dark:bg-amber-900/10 p-6 border border-amber-100 dark:border-amber-900/20">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-600">Nagrik Profile</h3>
                                            <span className="text-[10px] bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full font-bold shadow-sm border border-amber-300">ELIGIBILITY DATA</span>
                                        </div>
                                        <p className="text-xs text-slate-500 -mt-4 mb-4">
                                            This data is used to automatically find government schemes you are eligible for.
                                        </p>

                                        <div className="space-y-4">
                                            <InfoItem icon={Coins} label="Annual Income" value={user.incomeRange} highlight />
                                            <InfoItem icon={Community} label="Social Category" value={user.category} highlight />
                                            <InfoItem icon={MapPin} label="State / Region" value={user.state} highlight />
                                            <InfoItem icon={Building} label="Employment Type" value={user.employmentType} highlight />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

function InfoItem({ icon: Icon, label, value, highlight = false }: { icon: any, label: string, value: string, highlight?: boolean }) {
    return (
        <div className="flex items-center gap-3">
            <div className={cn("flex h-9 w-9 items-center justify-center rounded-lg", highlight ? "bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-500" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400")}>
                <Icon className="h-5 w-5" strokeWidth={2} />
            </div>
            <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{label}</p>
                <p className={cn("text-sm font-semibold", highlight ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-300")}>{value}</p>
            </div>
        </div>
    )
}

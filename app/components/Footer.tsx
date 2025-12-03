export default function Footer() {
    return (
        <footer className="text-center py-12 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Let&apos;s Connect</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Interested in working together? Feel free to reach out!</p>
            <div className="flex flex-wrap justify-center gap-4">
                <a
                    href="mailto:banhahuy.official@gmail.com"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M3 7.5v9A2.5 2.5 0 0 0 5.5 19h13a2.5 2.5 0 0 0 2.5-2.5v-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 7.5 12 13 3 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Email</span>
                </a>

                <a
                    href="tel:+85585299292"
                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full font-medium hover:shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12.9.38 1.77.78 2.57a2 2 0 0 1-.45 2.11L9.91 9.91a14.05 14.05 0 0 0 6 6l1.5-1.5a2 2 0 0 1 2.11-.45c.8.4 1.67.66 2.57.78A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Phone</span>
                </a>

                <a
                    href="https://t.me/banhahuy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M21 3 3 10.5l4.5 1.5L10 21l3.5-4 4.5 3L21 3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Telegram</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/banha-huy-7a598b1a7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-full font-medium hover:shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                        <path d="M7 10v7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                        <circle cx="7" cy="7" r="1" fill="currentColor"/>
                        <path d="M17 10v1.5c0 2-2 2.5-2 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>LinkedIn</span>
                </a>

                <a
                    href="/assets/Banha_Huy_Mobile_Applicaiton_with_Project_CV_Update_Dec_2025_20251203.pdf"
                    download="Banha_Huy_CV.pdf"
                    className="px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all inline-flex items-center gap-2"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M12 3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 21H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Download Resume</span>
                </a>
            </div>
        </footer>
    );
}

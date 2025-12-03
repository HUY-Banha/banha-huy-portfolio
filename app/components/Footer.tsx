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
                    <span className="text-xl">✉️</span>
                    <span>Email</span>
                </a>

                <a
                    href="tel:+85585299292"
                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full font-medium hover:shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                    <span className="text-xl">📞</span>
                    <span>Phone</span>
                </a>

                <a
                    href="https://t.me/banhahuy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                    <span className="text-xl">✈️</span>
                    <span>Telegram</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/banha-huy-7a598b1a7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-full font-medium hover:shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                    <span className="text-xl">💼</span>
                    <span>LinkedIn</span>
                </a>

                <a
                    href="/assets/Banha_Huy_Mobile_Applicaiton_with_Project_CV_Update_Dec_2025_20251203.pdf"
                    download="Banha_Huy_CV.pdf"
                    className="px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all inline-flex items-center gap-2"
                >
                    <span className="text-xl">📄</span>
                    <span>Download Resume</span>
                </a>
            </div>
        </footer>
    );
}

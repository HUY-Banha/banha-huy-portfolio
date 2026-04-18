import { contacts } from "../../data/contacts";

export default function Footer() {
    return (
        <footer className="text-center py-12 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Let&apos;s Connect</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Interested in working together? Feel free to reach out!</p>
            <div className="flex flex-wrap justify-center gap-4">
                {contacts.map((contact, index) => (
                    <a
                        key={index}
                        href={contact.href}
                        target={contact.external ? "_blank" : undefined}
                        rel={contact.external ? "noopener noreferrer" : undefined}
                        download={contact.download}
                        className={`px-6 py-3 ${contact.isDownload ? 'border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400' : `bg-gradient-to-r ${contact.gradient} text-white`} rounded-full font-medium hover:shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2`}
                    >
                        <span className="text-xl">{contact.icon}</span>
                        <span>{contact.label}</span>
                    </a>
                ))}
            </div>
        </footer>
    );
}

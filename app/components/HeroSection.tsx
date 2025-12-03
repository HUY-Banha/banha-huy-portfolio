import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="about" className="mb-32">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="w-32 h-32 rounded-full mb-6 shadow-2xl overflow-hidden border-4 border-white dark:border-slate-800">
          <Image
            src="/assets/profile.jpg"
            alt="Banha Huy"
            width={128}
            height={128}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Senior Mobile Developer & Project Coordinator
        </h1>
        <p className="text-xl text-slate-700 dark:text-slate-300 max-w-4xl leading-relaxed mb-6">
          Mobile Developer with <span className="font-semibold">4 years of experience</span> delivering high-quality, cross-platform applications using <span className="font-semibold text-blue-600 dark:text-blue-400">Flutter and React Native</span>. I specialize in full-cycle development—from feature planning and responsive UI implementation to <span className="font-semibold">Firebase integration, app store deployment, and ongoing maintenance</span>. Successfully deployed <span className="font-semibold">10+ cross-platform applications</span> to the App Store and Google Play.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed mb-4">
          My strengths include building <span className="font-semibold">custom UI designs with smooth animations</span>, integrating payment gateways and third-party services, and optimizing performance for a seamless user experience. I also contribute to <span className="font-semibold">backend development using Laravel (PHP)</span> and apply my JavaScript proficiency for dynamic front-end logic.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Passionate about intuitive, scalable mobile solutions, I thrive in <span className="font-semibold">agile teams, mentoring peers</span> and driving innovative product development with strong <span className="font-semibold">project coordination</span> capabilities.
        </p>
      </div>
    </section>
  );
}

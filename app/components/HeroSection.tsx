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
          Mobile Front End Developer
        </h1>
        <p className="text-xl text-slate-700 dark:text-slate-300 max-w-4xl leading-relaxed mb-6">
          As a Mobile Developer with extensive experience architecting production-grade native and cross-platform applications in fintech, public health, and enterprise sectors. Currently at Wing Bank, I specialize in developing high-performance Flutter applications with secure authentication and real-time banking integrations. With a proven track record of publishing many apps, I combine technical expertise in state management and API integration with strategic skills in project coordination and BRD documentation. I am currently advancing my leadership capabilities by pursuing a Master of Information Technology Engineering.
        </p>
      </div>
    </section>
  );
}

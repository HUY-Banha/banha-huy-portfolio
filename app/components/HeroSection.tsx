import Image from "next/image";
import { personalInfo } from "../../data/personal";

export default function HeroSection() {
  return (
    <section id="about" className="mb-32">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="w-32 h-32 rounded-full mb-6 shadow-2xl overflow-hidden border-4 border-white dark:border-slate-800">
          <Image
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            width={128}
            height={128}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {personalInfo.title}
        </h1>
        <p className="text-xl text-slate-700 dark:text-slate-300 max-w-4xl leading-relaxed mb-6">
          {personalInfo.description}
        </p>
      </div>
    </section>
  );
}

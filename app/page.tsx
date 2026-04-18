import Image from "next/image";
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import TechStackIcons from './components/TechStackIcons';
import SkillCard from './components/SkillCard';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import { techStack } from '../data/techStack';
import { skills, pmSkills, additionalSkills } from '../data/skills';
import { experiences } from '../data/experiences';
import { projects } from '../data/projects';

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900">
      <Navigation />

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <HeroSection />

        {/* Technical Expertise Section */}
        <section id="skills" className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technical Expertise</span>
          </h2>

          <TechStackIcons icons={techStack} />

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: "Mobile Frameworks", skills: skills.mobile, color: "blue" as const },
              { title: "Backend & API", skills: skills.backend, color: "purple" as const },
              { title: "Database & Services", skills: skills.database, color: "pink" as const },
              { title: "DevOps & Tools", skills: skills.devops, color: "indigo" as const }
            ].map((card, idx) => (
              <div key={idx} className="group">
                <SkillCard title={card.title} skills={card.skills} color={card.color} />
              </div>
            ))}
          </div>

          <SkillCard title="Architecture & Best Practices" skills={skills.architecture} color="teal" />

          {/* Project Management Skills */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Project Management Skills</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
                <h4 className="text-lg font-semibold mb-4 text-orange-600 dark:text-orange-400">Methodology</h4>
                <ul className="space-y-2">
                  {pmSkills.methodology.map((skill, idx) => (
                    <li key={idx} className="text-slate-700 dark:text-slate-300 flex items-start">
                      <span className="text-orange-500 mr-2">▸</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
                <h4 className="text-lg font-semibold mb-4 text-red-600 dark:text-red-400">Documentation</h4>
                <ul className="space-y-2">
                  {pmSkills.documentation.map((skill, idx) => (
                    <li key={idx} className="text-slate-700 dark:text-slate-300 flex items-start">
                      <span className="text-red-500 mr-2">▸</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
                <h4 className="text-lg font-semibold mb-4 text-rose-600 dark:text-rose-400">Communication</h4>
                <ul className="space-y-2">
                  {pmSkills.communication.map((skill, idx) => (
                    <li key={idx} className="text-slate-700 dark:text-slate-300 flex items-start">
                      <span className="text-rose-500 mr-2">▸</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="mt-8">
            <div className="bg-gradient-to-r from-slate-100 to-blue-100 dark:from-slate-800 dark:to-blue-900/30 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Additional Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {additionalSkills.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Professional Experience</span>
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={idx} {...exp} />
            ))}
          </div>
        </section>

        {/* Portfolio Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Featured Achievement</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

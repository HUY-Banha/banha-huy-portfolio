import Image from "next/image";
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import TechStackIcons from './components/TechStackIcons';
import SkillCard from './components/SkillCard';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';

export default function Home() {
  const techIcons = [
    { src: "/assets/flutter-svgrepo-com.svg", alt: "Flutter", label: "Flutter" },
    { src: "/assets/react-svgrepo-com.svg", alt: "React Native", label: "React Native" },
    { src: "/assets/dart-svgrepo-com.svg", alt: "Dart", label: "Dart" },
    { src: "/assets/laravel-svgrepo-com.svg", alt: "Laravel", label: "Laravel" },
    { src: "/assets/node-js-svgrepo-com.svg", alt: "Node.js", label: "Node.js" },
    { src: "/assets/firebase-svgrepo-com.svg", alt: "Firebase", label: "Firebase" },
    { src: "/assets/sql-file-format-svgrepo-com.svg", alt: "SQL", label: "MySQL" },
    { src: "/assets/figma-svgrepo-com.svg", alt: "Figma", label: "Figma" },
    { src: "/assets/git-svgrepo-com.svg", alt: "GitHub", label: "GitHub" }
  ];

  const skills = {
    mobile: ["Flutter (Dart)", "React Native", "Cross-platform Development"],
    backend: ["PHP (Laravel)", "Node.js", "RESTful API Design", "API Integration"],
    database: ["MySQL", "PostgreSQL", "SQLite", "Firebase (Auth, Firestore, FCM)"],
    devops: ["Git", "GitHub", "Figma", "App Store/Google Play Deployment", "Deep Linking"],
    architecture: ["Custom Widgets", "State Management (GetX, Provider)", "Responsive UI/UX", "Payment Gateways", "Real-time Features (WebSocket)", "Local Database Implementation"]
  };

  const pmSkills = {
    methodology: ["Agile/Scrum", "Project Coordination", "Team Mentorship", "Code Reviews"],
    documentation: ["Comprehensive Documentation", "Technical Report Generation", "Client Training"],
    communication: ["Stakeholder Communication", "Client Liaison", "Cross-Functional Team Facilitation", "Requirement Gathering"]
  };

  const additionalSkills = [
    "Testing & Debugging",
    "Code Quality Assurance",
    "Third-party Services Integration",
    "Push Notifications (OneSignal, Firebase)",
    "Chat Modules",
    "QA Testing & Performance Optimization",
    "User Training & Support",
    "Root Cause Analysis",
    "Vendor Coordination",
    "SLA Compliance"
  ];

  const experiences = [
    {
      title: "Application Support Officer",
      company: "Wing Bank",
      period: "August 2025 - Present",
      achievements: [
        "Oversee user-reported technical issues, providing front-line support and ensuring timely, effective resolution, including escalation management for critical cases",
        "Perform root cause analysis on recurring issues and implement long-term corrective actions to prevent future incidents",
        "Maintain clear communication with users, stakeholders, and IT teams regarding system changes, ongoing issues, and resolution progress",
        "Collaborate closely with development, QA, network, and infrastructure teams to ensure smooth application support and system stability",
        "Coordinate with third-party vendors to manage external application support and ensure compliance with service level agreements (SLAs)"
      ]
    },
    {
      title: "Software Developer",
      company: "National Institute of Public Health (NIPH)",
      period: "November 2024 - August 2025",
      achievements: [
        "Designed and developed cross-platform mobile applications using Flutter and React Native to support public health operations and HRMS workflows",
        "Built advanced system features and integrated secure Laravel-based APIs to enable reliable health data exchange across departments",
        "Oversaw the full application lifecycle—from requirement analysis and UI/UX design to development, testing, deployment, and ongoing support",
        "Published applications on both iOS and Android platforms, ensuring compliance with store policies and public health standards",
        "Performed thorough QA testing, optimized performance for high-reliability environments, and delivered demo training to multiple NIPH departments for effective system adoption"
      ]
    },
    {
      title: "Project Coordinator",
      company: "Codingate Technology",
      period: "March 2024 - November 2024",
      achievements: [
        "Coordinated project schedules, meetings, and documentation, including reports, contracts, and progress records",
        "Served as a communication bridge between team members, stakeholders, clients, and external advisors, ensuring clear alignment on goals and timelines",
        "Tracked project progress, provided status updates, and proposed adjustments to keep initiatives on target",
        "Supported resource allocation, procurement activities, and requirement gathering through direct client engagement",
        "Collaborated with on-site and field teams to ensure smooth project execution and timely delivery"
      ]
    },
    {
      title: "Flutter Developer",
      company: "Codingate Technology",
      period: "October 2023 - February 2024",
      achievements: [
        "Developed high-performance, secure mobile applications with robust state management implementations",
        "Integrated payment gateways (ABA, COD) and other key features to enhance application functionality",
        "Created and maintained comprehensive technical documentation to support development and onboarding",
        "Managed app updates, deployments to both release stores, and provided support for project management activities",
        "Mentored interns and new team members, ensuring adherence to best coding practices through guidance and code reviews",
        "Implemented real-time features including WebSocket, push notifications, and chat modules"
      ]
    },
    {
      title: "Flutter Mobile App Developer",
      company: "Camemis Solution",
      period: "December 2021 - September 2023",
      achievements: [
        "Developed and maintained custom mobile applications, delivering new features and ensuring reliability across platforms",
        "Collaborated closely with API teams and designers throughout the development lifecycle to ensure seamless integration and user-focused experiences",
        "Built Flutter solutions, including custom widgets, animations, Firebase integrations, and deep link configurations",
        "Managed end-to-end app release processes, including updates, deployments, and publishing to the App Store and Google Play Store",
        "Conducted client training, stayed up-to-date with mobile development trends, and performed thorough testing across devices and operating systems"
      ]
    }
  ];

  const projects = [
    {
      name: "HongKong Shop",
      tech: "Flutter, GetX, RESTful API, Firebase, ABA/COD Payment Gateway",
      role: "Mobile Developer",
      description: "Delivered a high-performance e-commerce app with modular architecture, responsible for state management, UI/UX implementation, and secure payment integration.",
      image: "/assets/work-hongkongapp.png"
    },
    {
      name: "HRMS NIPH",
      tech: "Flutter/React Native",
      role: "Mobile Developer",
      description: "Developed a secure HR management system for NIPH staff, focusing on attendance, leave requests, and document access with a user-friendly mobile interface.",
      image: "/assets/work-niph-hrms.png"
    },
    {
      name: "RCI Mobile App (V2)",
      tech: "React Native, Local-First Sync, Notifications",
      role: "Mobile Developer",
      description: "Built a high-performance loan management app for creators/reviewers, emphasizing offline capability (local-first) and data sync performance.",
      image: "/assets/work-fintrussh-rcimobile.png"
    },
    {
      name: "Camemis Guardian",
      tech: "Flutter, Firebase, Push Notifications",
      role: "Mobile Developer",
      description: "Educational app for parents to monitor student attendance, grades, and school communications in real-time.",
      image: "/assets/work-camemiss-guidan.png"
    },
    {
      name: "Camemis Teacher",
      tech: "Flutter, REST API, Cloud Services",
      role: "Mobile Developer",
      description: "Teacher management platform for marking attendance, grading, and classroom communication.",
      image: "/assets/work-camemiss-teacher.png"
    },
    {
      name: "KMK Driver App",
      tech: "Flutter, GPS Integration, Real-time Tracking",
      role: "Mobile Developer",
      description: "Delivery driver application with route optimization, order management, and real-time location tracking.",
      image: "/assets/work-kmk-driver.png"
    },
    {
      name: "KMK Vendor App",
      tech: "Flutter, Firebase, Payment Integration",
      role: "Mobile Developer",
      description: "Vendor management system for order processing, inventory tracking, and sales analytics.",
      image: "/assets/work-kmk-vendor.png"
    },
    {
      name: "Document Management",
      tech: "Software Development, Project Coordination,Agile Methodologies, Stakeholder Communication, Scrum ,Resource Allocation",
      role: "Project Coordinator",
      description: "Coordinated the development of a document management system, overseeing project timelines, stakeholder communication, and resource allocation.",
      image: "/assets/work-document.png"
    },
    {
      name: "NCA VHSG",
      tech: "Flutter, Healthcare Standards, Data Sync",
      role: "Mobile Developer",
      description: "Healthcare data management system for village health support groups with offline-first architecture.",
      image: "/assets/work-nca-vhsg.png"
    },
    {
      name: "Social Accountability",
      tech: "React Native, Survey Tools, Analytics",
      role: "Mobile Developer",
      description: "Community engagement platform for social accountability initiatives with survey and reporting features.",
      image: "/assets/work-social-accountbility.png"
    }
  ];

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

          <TechStackIcons icons={techIcons} />

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

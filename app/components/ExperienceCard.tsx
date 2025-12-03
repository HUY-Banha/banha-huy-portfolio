interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

export default function ExperienceCard({ title, company, period, achievements }: ExperienceCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700 hover:scale-[1.02]">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{title}</h3>
          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{company}</p>
        </div>
        <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
          {period}
        </span>
      </div>
      <ul className="space-y-3">
        {achievements.map((achievement, idx) => (
          <li key={idx} className="text-slate-700 dark:text-slate-300 flex items-start">
            <span className="text-green-500 mr-3 mt-1 text-xl">✓</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

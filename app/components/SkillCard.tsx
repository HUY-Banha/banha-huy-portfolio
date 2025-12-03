interface SkillCardProps {
  title: string;
  skills: string[];
  color: 'blue' | 'purple' | 'pink' | 'indigo' | 'teal';
}

const colorClasses = {
  blue: {
    title: 'text-blue-600 dark:text-blue-400',
    badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
  },
  purple: {
    title: 'text-purple-600 dark:text-purple-400',
    badge: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
  },
  pink: {
    title: 'text-pink-600 dark:text-pink-400',
    badge: 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300'
  },
  indigo: {
    title: 'text-indigo-600 dark:text-indigo-400',
    badge: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
  },
  teal: {
    title: 'text-teal-600 dark:text-teal-400',
    badge: 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300'
  }
};

export default function SkillCard({ title, skills, color }: SkillCardProps) {
  const colors = colorClasses[color];
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
      <h3 className={`text-xl font-semibold mb-4 ${colors.title}`}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span key={idx} className={`px-4 py-2 ${colors.badge} rounded-full text-sm font-medium`}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

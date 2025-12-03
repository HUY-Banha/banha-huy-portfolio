interface SkillCardProps {
  title: string;
  skills: string[];
  color: 'blue' | 'purple' | 'pink' | 'indigo' | 'teal';
}

const colorClasses = {
  blue: {
    title: 'text-blue-600 dark:text-blue-400',
    badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    border: 'border-blue-200 dark:border-blue-800',
    gradient: 'from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20',
    icon: '📱'
  },
  purple: {
    title: 'text-purple-600 dark:text-purple-400',
    badge: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    border: 'border-purple-200 dark:border-purple-800',
    gradient: 'from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20',
    icon: '⚙️'
  },
  pink: {
    title: 'text-pink-600 dark:text-pink-400',
    badge: 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300',
    border: 'border-pink-200 dark:border-pink-800',
    gradient: 'from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/20',
    icon: '🗄️'
  },
  indigo: {
    title: 'text-indigo-600 dark:text-indigo-400',
    badge: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300',
    border: 'border-indigo-200 dark:border-indigo-800',
    gradient: 'from-indigo-50 to-indigo-100 dark:from-indigo-950/30 dark:to-indigo-900/20',
    icon: '🚀'
  },
  teal: {
    title: 'text-teal-600 dark:text-teal-400',
    badge: 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300',
    border: 'border-teal-200 dark:border-teal-800',
    gradient: 'from-teal-50 to-teal-100 dark:from-teal-950/30 dark:to-teal-900/20',
    icon: '🏗️'
  }
};

export default function SkillCard({ title, skills, color }: SkillCardProps) {
  const colors = colorClasses[color];
  
  return (
    <div className={`relative bg-gradient-to-br ${colors.gradient} rounded-2xl p-[2px] group hover:scale-[1.02] transition-all duration-300`}>
      <div className={`bg-white dark:bg-slate-800 rounded-2xl p-8 h-full border ${colors.border} shadow-lg hover:shadow-2xl transition-all`}>
        <div className="flex items-center gap-3 mb-5">
          <span className="text-3xl group-hover:scale-110 transition-transform">{colors.icon}</span>
          <h3 className={`text-xl font-bold ${colors.title}`}>{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span 
              key={idx} 
              className={`px-4 py-2 ${colors.badge} rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

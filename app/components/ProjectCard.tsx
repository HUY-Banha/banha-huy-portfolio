import Image from "next/image";

interface ProjectCardProps {
  name: string;
  tech: string;
  role: string;
  description: string;
  image: string;
}

export default function ProjectCard({ name, tech, role, description, image }: ProjectCardProps) {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-200 dark:border-slate-700 hover:scale-105">
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-900/20 dark:to-fuchsia-900/20 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
            {name.substring(0, 2)}
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 line-clamp-1">{name}</h3>
        </div>
        
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-xs font-medium mb-2">
            {role}
          </span>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-mono line-clamp-2">
            <span className="font-semibold">Stack:</span> {tech}
          </p>
        </div>
        
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}

import Image from "next/image";

interface TechStackIconsProps {
  icons: Array<{
    src: string;
    alt: string;
    label: string;
  }>;
}

export default function TechStackIcons({ icons }: TechStackIconsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-8 mb-12">
      {icons.map((icon, idx) => (
        <div key={idx} className="group flex flex-col items-center">
          <div className="w-16 h-16 p-3 bg-white dark:bg-slate-800 rounded-xl shadow-md group-hover:shadow-xl transition-all group-hover:scale-110 border border-slate-200 dark:border-slate-700">
            <Image src={icon.src} alt={icon.alt} width={64} height={64} className="w-full h-full" />
          </div>
          <span className="text-xs mt-2 text-slate-600 dark:text-slate-400 font-medium">{icon.label}</span>
        </div>
      ))}
    </div>
  );
}

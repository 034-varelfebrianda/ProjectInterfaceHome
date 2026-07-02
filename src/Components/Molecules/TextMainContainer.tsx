import { Sparkles } from "lucide-react";

interface TextMainContainerProps {
  badgeText?: string;
  title?: string;
  description?: string;
  stats?: Array<{ value: string; label: string }>;
}

export default function TextMainContainer({
  badgeText = "shadcn x DevExpress Component Library",
  title = "Build enterprise interfaces faster.",
  description = "A complete design system with 27 production-ready components. From DataGrid to Charts — all built on shadcn/ui foundations with dark mode support.",
  stats = [
    { value: "27", label: "Components" },
    { value: "2", label: "Themes" },
    { value: "4", label: "Phases" },
  ],
}: TextMainContainerProps) {
  return (
    <div className="w-full max-w-3xl px-8 py-8 space-y-6">
      
      <div className="flex items-center p-1 px-3 rounded-3xl w-fit gap-2 bg-[#27272A]">
        <Sparkles size={18} className="text-[#0EA5E9]" />
        <p className="text-[#A1A1AA] text-[13px]">
          {badgeText}
        </p>
      </div>

      <div>
        <h1 className="font-extrabold text-[#FAFAFA] text-5xl leading-tight">
          {title}
        </h1>
      </div>

      <div>
        <p className="text-[#A1A1AA] text-[15px] leading-7">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-8 pt-2">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-8">
            {i > 0 && <div className="h-6 w-px bg-zinc-700" />}
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold text-[#FAFAFA]">{stat.value}</p>
              <p className="text-[13px] text-[#71717A]">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
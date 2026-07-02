import { MoveRight } from "lucide-react";

interface ButtonMainContainerProps {
  primaryText?: string;
  secondaryText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function ButtonMainContainer({
  primaryText = "Browse Components",
  secondaryText = "View Documentation",
  onPrimaryClick,
  onSecondaryClick,
}: ButtonMainContainerProps) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onPrimaryClick}
        className="flex items-center gap-2 rounded-lg border border-[#0EA5E9] bg-[#0EA5E9] px-5 py-3 text-[14px] font-medium text-white hover:bg-sky-500 hover:cursor-pointer transition"
      >
        {primaryText}
        <MoveRight size={16} />
      </button>

      <button
        onClick={onSecondaryClick}
        className="rounded-lg border border-[#3F3F46] px-5 py-3 text-[14px] font-medium text-white hover:bg-zinc-800 hover:cursor-pointer transition"
      >
        {secondaryText}
      </button>
    </div>
  );
}
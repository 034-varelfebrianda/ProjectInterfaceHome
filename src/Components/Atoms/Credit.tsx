interface CreditProps {
  version?: string;
  copyright?: string;
}

export default function Credit({
  version = "1.0.0",
  copyright = "devsinar12",
}: CreditProps) {
  return (
    <div className="text-[#A1A1AA] text-[10px]">
      <p>Version: {version}</p>
      <p>Copyright © {copyright}</p>
    </div>
  );
}
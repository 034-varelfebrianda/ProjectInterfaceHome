import SearchIcon from "../Atoms/SearchIcon";

interface SidebarSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  placeholder?: string;
}

export default function SidebarSearch({
  searchQuery,
  onSearchChange,
  placeholder = "Search...",
}: SidebarSearchProps) {
  return (
    <div className="border w-65 border-[#E4E4E7] bg-[#FFFFFF] p-3">
      <div className="flex h-10 w-56 items-center gap-2 rounded-md border border-[#E4E4E7] bg-[#FFFFFF] px-3 transition focus-within:ring-1 focus-within:ring-sky-500">
        <SearchIcon />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder}
          className="w-full text-sm bg-transparent outline-none text-zinc-700 placeholder-zinc-400"
        />
      </div>
    </div>
  );
}
import ListSidebar from "../Atoms/ListSidebar";

interface SidebarMenuProps {
  categories: string[];
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export default function SidebarMenu({
  categories,
  selectedCategory,
  onSelectCategory,
}: SidebarMenuProps) {
  return (
    <div>
      <div className="border w-65 border-r border-[#E4E4E7] bg-[#FFFFFF] p-4">
        <p className="font-bold mb-2 text-sm text-zinc-800">All Demos</p>
        <ListSidebar
          items={categories}
          activeItem={selectedCategory}
          onSelectItem={onSelectCategory}
        />
      </div>
    </div>
  );
}
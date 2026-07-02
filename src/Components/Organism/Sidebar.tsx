import SidebarMenu from "../Molecules/SidebarMenu";
import SidebarSearch from "../Molecules/SidebarSearch";
import FooterMenu from "../Molecules/FooterMenu";

interface SidebarProps {
  categories: string[];
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Sidebar({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: SidebarProps) {
  return (
    <aside>
      <SidebarSearch searchQuery={searchQuery} onSearchChange={onSearchChange} />
      <SidebarMenu
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      <FooterMenu />
    </aside>
  );
}


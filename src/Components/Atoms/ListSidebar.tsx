interface ListSidebarProps {
  items: string[];
  activeItem?: string;
  onSelectItem?: (item: string) => void;
}

export default function ListSidebar({
  items,
  activeItem,
  onSelectItem,
}: ListSidebarProps) {
  return (
    <div>
      <ul>
        <div className="space-y-3 py-2">
          {items.map((item) => (
            <li
              key={item}
              onClick={() => onSelectItem?.(item)}
              className={`cursor-pointer transition-colors text-sm ${
                activeItem === item
                  ? "text-sky-500 font-semibold"
                  : "text-[#71717A] hover:text-sky-500"
              }`}
            >
              {item}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}


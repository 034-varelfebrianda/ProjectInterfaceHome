import type { ComponentItem } from "../Atoms/componentsData";
import ExploreCard from "./ExploreCard";
import { componentsData } from "../Atoms/componentsData";

interface ExploreComponentsSectionProps {
  items?: ComponentItem[];
}

export default function ExploreComponentsSection({
  items = componentsData,
}: ExploreComponentsSectionProps) {
  return (
    <section className="w-full">
      <h2 className="mb-5 text-2xl font-bold text-zinc-800 pt-4">
        Explore Components
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <ExploreCard key={item.title} item={item} />
        ))}
      </div>
      {items.length === 0 && (
        <p className="text-zinc-500 py-8 text-center text-sm">
          No components found matching your criteria.
        </p>
      )}
    </section>
  );
}
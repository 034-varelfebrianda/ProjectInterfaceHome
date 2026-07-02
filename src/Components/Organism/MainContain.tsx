import type { ComponentItem } from "../Atoms/componentsData";
import ExploreComponentsSection from "../Molecules/ExploreComponents";
import MainContainer from "../Molecules/MainContainer";

interface MainContainProps {
  items: ComponentItem[];
  badgeText?: string;
  title?: string;
  description?: string;
  stats?: Array<{ value: string; label: string }>;
  primaryText?: string;
  secondaryText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function MainContain({
  items,
  badgeText,
  title,
  description,
  stats,
  primaryText,
  secondaryText,
  onPrimaryClick,
  onSecondaryClick,
}: MainContainProps) {
  return (
    <div className="flex-1 p-8 w-full">
      <MainContainer
        badgeText={badgeText}
        title={title}
        description={description}
        stats={stats}
        primaryText={primaryText}
        secondaryText={secondaryText}
        onPrimaryClick={onPrimaryClick}
        onSecondaryClick={onSecondaryClick}
      />
      <ExploreComponentsSection items={items} />
    </div>
  );
}


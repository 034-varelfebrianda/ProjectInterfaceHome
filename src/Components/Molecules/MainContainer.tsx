import TextMainContainer from "./TextMainContainer";
import ButtonMainContainer from "../Atoms/ButtonMainContainer";

interface MainContainerProps {
  badgeText?: string;
  title?: string;
  description?: string;
  stats?: Array<{ value: string; label: string }>;
  primaryText?: string;
  secondaryText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function MainContainer({
  badgeText,
  title,
  description,
  stats,
  primaryText,
  secondaryText,
  onPrimaryClick,
  onSecondaryClick,
}: MainContainerProps) {
  return (
    <div className="bg-[#09090B] rounded-2xl px-5 pt-5 pb-5">
      <TextMainContainer
        badgeText={badgeText}
        title={title}
        description={description}
        stats={stats}
      />
      <div className="px-8 pb-4">
        <ButtonMainContainer
          primaryText={primaryText}
          secondaryText={secondaryText}
          onPrimaryClick={onPrimaryClick}
          onSecondaryClick={onSecondaryClick}
        />
      </div>
    </div>
  );
}
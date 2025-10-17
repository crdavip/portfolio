import { useTranslations } from "next-intl";

interface Props {
  tags: string[];
  category?: string;
  className?: string;
}

export const Tags = ({ tags, category, className }: Props) => {
  const t = useTranslations("Portfolio");
  return (
    <div className={`flex gap-2 sm:gap-4 ${className}`}>
      {category && <div className="tag-box capitalize">{t(category)}</div>}
      {tags.map((tag) => (
        <div key={tag} className="tag-box">
          {tag}
        </div>
      ))}
    </div>
  );
};

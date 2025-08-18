interface Props {
  tags: string[];
  category?: string;
  className?: string;
}

export const Tags = ({ tags, category, className }: Props) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      {category && <div className="tag-box">{category}</div>}
      {tags.map((tag) => (
        <div key={tag} className="tag-box">
          {tag}
        </div>
      ))}
    </div>
  );
};

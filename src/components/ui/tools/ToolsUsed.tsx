import Image from "next/image";

interface Props {
  tool: string[];
}

export const ToolsUsed = ({ tool }: Props) => {
  return (
    <div className="flex gap-3">
      {tool.map((item) => (
        <div key={item} className="flex justify-items-center w-[24px] h-[24px]">
          <Image
            src={`/img/tools/${item.toLowerCase()}.svg`}
            alt={item}
            className="w-[auto] h-[24px] object-contain"
            width={24}
            height={24}
            priority
          />
        </div>
      ))}
    </div>
  );
};

import { getSVGComponent } from "@/helpers";

interface Props {
  tool: string[];
}

export const ToolsUsed = ({ tool }: Props) => {
  return (
    <div className="flex gap-3">
      {tool.map((item) => (
        <div key={item} className="flex justify-items-center w-[24px] h-[24px]">
          {getSVGComponent(item)}
        </div>
      ))}
    </div>
  );
};

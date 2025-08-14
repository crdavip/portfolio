import Image from "next/image";
import { toolItems } from "@/data";
import { ToolItem } from "@/interfaces";

export const Tools = () => {
  const tools: ToolItem[] = toolItems;
  return (
    <section className="max-w-6xl mx-auto h-fit flex flex-col justify-center items-center mt-25 sm:mt-50 px-12 sm:px-7">
      <h3 className="text-center">Tecnologías, habilidades y herramientas que uso</h3>
      <div className="mt-15 grid grid-cols-4 sm:grid-cols-8 gap-x-20 gap-y-10 justify-items-center">
        {tools.map((tool) => (
          <div key={tool.name} className="tool-item">
            <Image src={tool.src} alt={tool.name} width={77} height={77} priority/>
          </div>
        ))}
      </div>
    </section>
  );
};

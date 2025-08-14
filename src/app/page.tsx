import Image from "next/image";
import { Slider } from "@/components";
import { toolItems } from "@/data";
import { ToolItem } from "@/interfaces";

export default function Home() {
  const tools: ToolItem[] = toolItems;

  return (
    <main>
      <Slider />
      <div className="max-w-6xl mx-auto h-fit flex flex-col justify-center items-center mt-25 sm:mt-50 px-7">
        <h3 className="text-center">Tecnologías, habilidades y herramientas que uso</h3>
        <div className="mt-15 grid grid-cols-3 sm:grid-cols-8 gap-x-20 gap-y-10 px-7 justify-items-center">
          {tools.map((tool) => (
            <div key={tool.name} className="w-[77px] h-[77px] flex justify-self-center">
              <Image src={tool.src} alt={tool.name} width={77} height={77} priority />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

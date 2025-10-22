import { useTranslations } from "next-intl";
import { toolItems } from "@/data";
import { ToolItem } from "@/interfaces";
import { getSVGComponent } from "@/helpers";

export const Tools = () => {
  const tools: ToolItem[] = toolItems;
  const t = useTranslations("Tools");
  return (
    <section
      className="max-w-6xl mx-auto h-fit flex flex-col justify-center items-center mt-25 sm:mt-50 px-8 sm:px-16 lg:px-12 xl:px-0 scroll-mt-50"
      id="about-section"
    >
      <h3 className="text-center">{t("h3")}</h3>
      <div className="mt-15 grid grid-cols-4 sm:grid-cols-8 gap-x-20 gap-y-10 justify-items-center">
        {tools.map((tool) => (
          <div key={tool.name} tabIndex={0} className="tool-item group relative focus:outline-none">
            <div className="tool-tip-container">
              <div className="tool-tip">
                {tool.name}
                <svg className="tool-tip-arrow" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve">
                  <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
                </svg>
              </div>
            </div>
            {getSVGComponent(tool.name)}
          </div>
        ))}
      </div>
    </section>
  );
};

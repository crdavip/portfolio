import * as SVGComponents from "../components/ui/tools/svg";

export const getSVGComponent = (name: string) => {
  const Component = SVGComponents[name as keyof typeof SVGComponents];
  return Component ? <Component /> : null;
};

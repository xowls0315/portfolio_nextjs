import type { ContainerProps } from "@/types";

const Container = ({ children, className = "" }: ContainerProps) => {
  return <section className={`w-full h-full max-w-[1200px] mx-auto xs:px-5 md2:px-8 ${className}`}>{children}</section>;
};

export default Container;

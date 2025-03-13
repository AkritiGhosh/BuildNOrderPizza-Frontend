import { ReactNode } from "react";
import Header from "./header/Header";

type LayoutProps = {
  children: ReactNode;
  withHeader?: boolean;
  withBackground?: boolean;
  className?: string;
  style?: object;
};

const PageLayout = ({
  children,
  withHeader = true,
  withBackground = true,
  className = "",
  ...props
}: LayoutProps) => {
  return (
    <div
      style={{ ...props.style, backgroundSize: "20%" }}
      className={`relative w-screen h-screen overflow-y-auto overflow-x-hidden scroll-thin flex flex-col ${className} ${
        withBackground
          ? "bg-[url('bg/light.jpg')] dark:bg-[url('bg/dark.jpg')] bg-blend-lighten dark:bg-blend-normal"
          : "bg-white dark:bg-slate-900"
      }`}
      {...props}
    >
      {withHeader && <Header />}
      {children}
    </div>
  );
};

export default PageLayout;

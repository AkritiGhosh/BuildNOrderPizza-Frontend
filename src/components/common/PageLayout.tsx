import { ReactNode } from "react";
import Header from "./header/Header";

type LayoutProps = {
  children: ReactNode;
  withHeader?: boolean;
  className?: string;
  style?: object;
};

const PageLayout = ({
  children,
  withHeader = true,
  className = "",
  ...props
}: LayoutProps) => {
  return (
    <div
      className={`relative w-screen h-screen overflow-y-auto overflow-x-hidden scroll-thin flex flex-col ${className} bg-white dark:bg-slate-900 text-black dark:text-slate-100 `}
      {...props}
    >
      {withHeader && <Header />}
      {children}
    </div>
  );
};

export default PageLayout;

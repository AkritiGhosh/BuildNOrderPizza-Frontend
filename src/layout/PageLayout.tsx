import { ReactNode } from "react";
import Header from "../components/consumer/header/Header";

type LayoutProps = {
  children: ReactNode;
  withHeader?: boolean;
  className?: string;
};

const PageLayout = ({
  children,
  withHeader = true,
  className = "",
}: LayoutProps) => {
  return (
    <div
      className={
        "w-screen h-screen overflow-y-auto scroll-thin flex items-center justify-center p-4 bg-white dark:bg-slate-900 " +
        className
      }
    >
      {withHeader && <Header />}
      {children}
    </div>
  );
};

export default PageLayout;

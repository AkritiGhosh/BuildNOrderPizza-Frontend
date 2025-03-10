import { ReactNode } from "react";
import Header from "../consumer/header/Header";

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
      className={
        "relative w-screen h-screen overflow-y-auto scroll-thin flex items-center justify-center bg-white dark:bg-slate-900 " +
        className
      }
      {...props}
    >
      {withHeader && <Header />}
      {children}
    </div>
  );
};

export default PageLayout;

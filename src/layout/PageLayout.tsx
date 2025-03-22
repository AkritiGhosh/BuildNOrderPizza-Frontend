import { ReactNode } from "react";
import Header from "../components/common/header/Header";

type LayoutProps = {
  children: ReactNode;
  withHeader?: boolean;
  className?: string;
  style?: object;
  childrenClassName?: string;
};

const PageLayout = ({
  children,
  withHeader = true,
  className = "",
  childrenClassName = "",
  ...props
}: LayoutProps) => {
  return (
    <div
      className={`relative w-screen h-screen overflow-y-auto overflow-x-hidden scroll-thin flex flex-col ${className} bg-white dark:bg-slate-900 text-black dark:text-slate-100 `}
      {...props}
    >
      {withHeader && <Header />}
      <main
        className={`container h-auto lg:h-full grow mx-auto px-4 md:px-[2.5%] lg:px-[5%] pt-6 pb-4 ${childrenClassName}`}
      >
        {children}
      </main>
    </div>
  );
};

export default PageLayout;

import { ReactNode, useEffect, useRef, useState } from "react";

type DropdownPropTypes = {
  children: string | ReactNode;
  btnChild: string | ReactNode;
  btnClass?: string;
  lstClass?: string;
  alignment?: string;
};

const Dropdown = ({
  children,
  btnChild,
  btnClass = "",
  lstClass = "",
  alignment = "right",
}: DropdownPropTypes) => {
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const alignClass =
    alignment == "right" ? "right-0 md:-right-2" : "left-0 md:-left-2";
  const handleClick = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      // Clicked outside of the menu, close the menu
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    // Cleanup the event listener when the component unmounts
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowMenu((prev) => !prev)}
        className={"relative " + btnClass}
      >
        {btnChild}
      </button>
      {showMenu && (
        <ul
          className={`fixed md:absolute top-20 md:top-12  ${alignClass} min-h-10 list-none w-screen md:w-72 max-h-[280px] overflow-y-auto rounded-b-md bg-white dark:bg-slate-900 scroll-hide z-[999] border-t border-amber-700 dark:border-slate-500 ${lstClass}`}
        >
          {children}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

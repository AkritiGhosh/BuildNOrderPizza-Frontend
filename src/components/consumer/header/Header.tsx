import { Link, useLocation } from "react-router-dom";
import Dropdown from "../../common/Dropdown";

type NavLinksTypes = {
  path: string;
  name: string;
  id: string;
};
const Header = () => {
  const loc = useLocation();
  const path: String = "/" + loc.pathname?.split("/")[1];

  const navLinks: NavLinksTypes[] = [
    {
      path: "/",
      name: "Home",
      id: "home",
    },

    {
      path: "/build-your-pizza",
      name: "Build your pizza",
      id: "build",
    },
  ];

  const menuLinks: NavLinksTypes[] = [
    {
      name: "Settings",
      path: "/settings",
      id: "settings",
    },
    {
      name: "Order history",
      path: "/profile/orders",
      id: "orders",
    },
    {
      name: "Rewards and claims",
      path: "/profile/rewards",
      id: "rewards",
    },
  ];

  return (
    <header className="w-full fixed top-0 h-20 lg:px-[5%] px-4 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 text-black dark:text-white flex items-center justify-between gap-5 z-50">
      <div className="h-20 w-full">
        <h1 className="!leading-[80px] text-xl md:text-2xl drop-shadow-[0_0_8px_#fcd34d]">Build N Order Pizza</h1>
      </div>
      <div className="w-auto md:w-full h-20 flex items-center justify-end gap-5 z-50">
        {navLinks?.map((link) => (
          <Link
            className={`hidden lg:block h-full w-auto px-2 text-lg font-medium leading-[5rem] hover:drop-shadow-[0_0_#fffbeb] 
         hover:border-black border-b-2 dark:hover:border-amber-100 ${
           path == link?.path ? "border-amber-300" : "border-transparent"
         }`}
            to={link?.path}
            key={link?.id}
          >
            {link?.name}
          </Link>
        ))}
        <Dropdown
          btnChild={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 hover:stroke-2 hover:stroke-amber-50 mt-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          }
        >
          {true ? (
            <li className="w-full py-2 px-4  text-sm text-amber-500 hover:bg-red-200/20 hover:font-bold cursor-pointer">
              Login
            </li>
          ) : (
            <>
              <li className="relative w-full flex flex-row items-center h-16  py-2 px-4 gap-4">
                <span className="w-10 h-10 rounded-full bg-purple-600 text-white text-xl font-bold flex items-center justify-center">
                  U
                </span>
                <span className="text-xl font-medium">User name</span>
              </li>
              {menuLinks?.map((menuItem) => (
                <Link to={menuItem?.path}>
                  <li
                    id={menuItem?.id}
                    className="w-full py-2 px-4 text-sm hover:bg-amber-200/30 hover:font-semibold"
                  >
                    {menuItem?.name}
                  </li>
                </Link>
              ))}
              <li className="w-full py-2 px-4  text-sm text-red-500 hover:bg-red-200/20 hover:font-bold cursor-pointer">
                Log out
              </li>
            </>
          )}
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;

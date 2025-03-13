import { Link, useLocation } from "react-router-dom";
import Dropdown from "../Dropdown";
import ThemeButton from "../ToggleThemeButton";
import useTheme from "../../../hooks/useTheme";
import useCartDialog from "../../../hooks/useCartDialog";

type NavLinksTypes = {
  path: string;
  name: string;
  id: string;
};
const Header = () => {
  const loc = useLocation();
  const { openDrawer } = useCartDialog();
  const { darkTheme } = useTheme();
  const path: string = "/" + loc.pathname?.split("/")[1];
  const isLoggedIn: boolean = true;

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
    <header className="w-full fixed top-0 h-14 lg:h-20 lg:px-[5%] px-4 bg-white/85 dark:bg-black/85 text-amber-950 dark:text-white flex items-center justify-between gap-5 z-50 border-b border-amber-700">
      <div className="h-14 lg:h-20 w-full">
        <h1 className="!leading-[56px] lg:!leading-[80px] md:text-4xl text-2xl drop-shadow-[0_0_8px_#fcd34d] font-cursive">
          Build N Order Pizza
        </h1>
      </div>
      <div className="w-auto md:w-full h-14 lg:h-20 flex items-center justify-end gap-5 z-50">
        {navLinks?.map((link) => (
          <Link
            className={`hidden lg:block h-full w-auto px-3 text-lg font-medium leading-[5rem] dark:hover:drop-shadow-[0_0_#fcd34d] hover:drop-shadow-[0_0_#451a03] hover:bg-amber-300/20
         hover:border-black border-b-2 dark:hover:border-amber-100 ${
           path == link?.path
             ? "border-amber-700 dark:border-amber-300 dark:bg-amber-100/10"
             : "border-transparent"
         }`}
            to={link?.path}
            key={link?.id}
          >
            {link?.name}
          </Link>
        ))}
        <button
          onClick={openDrawer}
          className="size-10 text-amber-950 dark:text-white rounded-full p-2 group hover:bg-amber-300/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 group-hover:stroke-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
        <Dropdown
          btnClass="hover:bg-amber-300/20 rounded-full size-10 flex items-center justify-center group"
          lstClass="bg-white dark:bg-black text-black dark:text-white !top-14 md:!top-12 lg:!top-[60px] border-y md:border md:border-t-0 rounded-b-none md:rounded-b-md"
          btnChild={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 group-hover:stroke-2 dark:group-hover:stroke-amber-50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          }
        >
          {isLoggedIn ? (
            <Link to="/auth">
              <li className="w-full py-2.5 px-4 text-sm text-amber-500 hover:bg-amber-200/20 hover:font-semibold hover:tracking-wide cursor-pointer">
                Login
              </li>
            </Link>
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
                    className="w-full py-2.5 px-4 text-sm hover:bg-amber-200/30 hover:font-semibold"
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
          <li className="w-full py-2.5 px-4 text-sm text-amber-500 cursor-pointer flex gap-4 items-center">
            <ThemeButton />
            <span className="text-black dark:text-white">
              {" "}
              Switch to {darkTheme ? " Light " : " Dark "} mode
            </span>
          </li>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;

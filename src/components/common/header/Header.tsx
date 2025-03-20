import { Link, useLocation } from "react-router-dom";
import Dropdown from "../Dropdown";
import ThemeButton from "../ToggleThemeButton";

type NavLinksTypes = {
  path: string;
  name: string;
  id: string ;
  icon: JSX.Element;
};

const navLinks: NavLinksTypes[] = [
  {
    path: "/",
    name: "Home",
    id: "home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 group-hover:stroke-2"
      >
        <path
          strokeLinecap="square"
          strokeLinejoin="miter"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },

  {
    path: "/build-your-pizza",
    name: "Build your pizza",
    id: "build",
    icon: (
      <svg
        version="1.1"
        width="24px"
        height="24px"
        viewBox="0 0 32 32"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.45"
        className="size-6 group-hover:stroke-1"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            className="feather_een"
            d="M26.638,4.067C23.557,2.125,19.911,1,16,1S8.443,2.125,5.362,4.067 c-1.287,0.811-1.775,2.451-1.13,3.828l9.957,21.241c0.36,0.767,1.085,1.151,1.811,1.151s1.451-0.384,1.811-1.151l9.957-21.241 C28.413,6.518,27.925,4.878,26.638,4.067z M10.753,19.451C11.095,19.173,11.526,19,12,19c1.103,0,2,0.897,2,2 c0,0.966-0.689,1.775-1.602,1.96L10.753,19.451z M21.93,17.993C20.86,17.955,20,17.079,20,16c0-1.103,0.897-2,2-2 c0.592,0,1.121,0.263,1.486,0.674L21.93,17.993z M23.928,13.731C23.407,13.282,22.742,13,22,13c-1.657,0-3,1.343-3,3 c0,1.48,1.073,2.702,2.483,2.948l-4.577,9.764c-0.25,0.534-0.756,0.576-0.905,0.576s-0.655-0.042-0.905-0.576l-2.272-4.846 C14.078,23.509,15,22.369,15,21c0-1.657-1.343-3-3-3c-0.625,0-1.201,0.197-1.681,0.525L5.79,8.862C8.556,6.53,12.107,5.1,16,5.1 s7.444,1.43,10.21,3.762L23.928,13.731z M26.862,7.471l-0.209,0.445C23.745,5.543,20.047,4.1,16,4.1S8.255,5.543,5.346,7.916 L5.138,7.471C4.708,6.555,5.034,5.455,5.895,4.913C8.919,3.007,12.413,2,16,2s7.081,1.007,10.105,2.913 C26.966,5.455,27.292,6.555,26.862,7.471z M12,11c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3S12,9.343,12,11z M17,11 c0,1.103-0.897,2-2,2s-2-0.897-2-2s0.897-2,2-2S17,9.897,17,11z"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    path: "/cart",
    name: "Cart",
    id: "cart",
    icon: (
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
    ),
  },
];
const menuLinks: NavLinksTypes[] = [
  {
    name: "Settings",
    path: "/settings",
    id: "settings",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5 group-hover:stroke-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },
  {
    name: "Order history",
    path: "/profile/orders",
    id: "orders",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5 group-hover:stroke-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
        />
      </svg>
    ),
  },
];

const Header = () => {
  const loc = useLocation();
  const path: string = "/" + loc.pathname?.split("/")[1];
  const isLoggedIn: boolean = true;

  return (
    <header className="w-full relative top-0 h-auto md:h-14 lg:h-20 bg-amber-50/80 dark:bg-slate-950/80 text-black dark:text-white z-50 shadow shadow-amber-500 dark:shadow-slate-200">
      <div className="container relative h-auto md:h-full mx-auto px-4 md:px-[2.5%] lg:px-[5%] flex flex-col md:flex-row items-end justify-between gap-x-5">
        <h1 className="h-auto lg:h-20 w-full md:w-auto min-w-max text-center md:text-left md:text-4xl text-3xl drop-shadow-[0_0_20px_#fcd34d] dark:drop-shadow-[0_0_30px_#cbd5e1] font-cursive !leading-[40px] lg:!leading-[80px] py-2 md:py-0">
          Build N Order Pizza
        </h1>
        <div className="grow w-full h-10 lg:h-20 flex items-center justify-evenly md:justify-end gap-5 z-50">
          {navLinks?.map((link) => (
            <Link
              className={`flex items-center justify-center gap-2.5 h-full w-auto px-3 text-lg font-medium leading-[5rem] ${
                path == link?.path
                  ? "border-amber-700 dark:border-slate-300 bg-amber-200/40 dark:bg-slate-700/80 text-amber-700 dark:text-slate-100"
                  : "border-transparent bg-transparent dark:text-slate-400 text-amber-950"
              } hover:bg-amber-300/20 dark:hover:bg-slate-500/30
           hover:border-amber-300 border-b-2 dark:hover:border-slate-100 `}
              to={link?.path}
              key={link?.id}
            >
              {link.icon}
              <span className="hidden lg:block">{link?.name}</span>
            </Link>
          ))}
          <Dropdown
            btnClass="hover:bg-amber-300/20 dark:hover:bg-slate-300/30 rounded-full size-10 flex items-center justify-center group"
            lstClass="bg-white dark:bg-black text-black dark:text-white !top-14 md:!top-12 lg:!top-[60px] border-y md:border md:border-t-0 rounded-b-none md:rounded-b-md"
            btnChild={
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            }
          >
            <li className="w-full py-2.5 px-4 text-sm text-amber-500 cursor-pointer hover:bg-amber-200/30 dark:hover:bg-slate-400/30 group">
              <ThemeButton />
            </li>
            {!isLoggedIn ? (
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
                  <Link key={menuItem?.id} to={menuItem?.path}>
                    <li
                      id={menuItem?.id}
                      className="w-full py-2.5 px-4 text-sm hover:bg-amber-200/30 dark:hover:bg-slate-400/30 hover:font-semibold flex items-center justify-start gap-2.5 group"
                    >
                      {menuItem?.icon}
                      {menuItem?.name}
                    </li>
                  </Link>
                ))}
                <li className="w-full py-2 px-4  text-sm text-red-500 hover:bg-red-200/20 hover:font-bold cursor-pointer  flex items-center justify-start gap-2.5 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 group-hover:stroke-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                    />
                  </svg>
                  Log out
                </li>
              </>
            )}
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;

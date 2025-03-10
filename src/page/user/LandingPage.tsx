import { Link } from "react-router-dom";
import PageLayout from "../../components/common/PageLayout";

const LandingPage = () => {
  return (
    <PageLayout withBackground={false}>
      <main
        className={`w-screen h-screen inset-0 bg-cover bg-right bg-fixed overflow-auto bg-[url("src/assets/light_bg.jpg")] dark:bg-[url("src/assets/dark_bg.jpg")]`}
      >
        <div className="w-full h-full flex items-center">
          <div className="md:w-3/5 lg:w-2/5  h-auto pl-4 md:pl-[5%] px-4 text-right text-black dark:text-white">
            <h1 className="md:text-7xl text-5xl font-serif font-semibold dark:drop-shadow-light drop-shadow-dark">
              Fall in love with <br /> Delicious Pizza
            </h1>
            <button className="w-auto h-12 mt-10 px-2 py-1 pr-3 rounded hover:bg-amber-400/20 group">
              <Link
                className="text-xl font-medium font-serif px-2 py-1 rounded flex gap-4 items-center"
                to={"/build-your-pizza"}
              >
                <span>Place your order </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 group-hover:scale-125 transition-all duration-200 origin-left"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </Link>
            </button>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default LandingPage;

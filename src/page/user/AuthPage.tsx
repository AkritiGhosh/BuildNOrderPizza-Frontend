import { useMemo, useState } from "react";
import Login from "../../components/user/authPage/Login";
import Register from "../../components/user/authPage/Register";
import PageLayout from "../../components/common/PageLayout";
import Header from "../../components/consumer/header/Header";

type authAction = "login" | "register";
const AuthPage = () => {
  const [action, setAction] = useState<authAction>("login");

  const form = useMemo(() => {
    switch (action) {
      case "register": {
        return <Register />;
      }
      default: {
        return <Login />;
      }
    }
  }, [action]);

  return (
    <PageLayout
      style={{ backgroundSize: "20%" }}
      className="flex items-center justify-center p-4 bg-[url('bg/light.jpg')] dark:bg-[url('bg/dark.jpg')] bg-opacity-50 bg-blend-lighten dark:bg-blend-normal"
      withHeader={false}
    >
      <Header />
      <div className="relative flex flex-col gap-6 w-full md:w-1/2 lg:w-3/5 xl:w-1/2 pt-4 px-6 pb-6 border border-gray-400 rounded-md bg-white dark:bg-black">
        <div className="w-full h-12 top-0 flex flex-row">
          <button
            onClick={() => setAction("login")}
            className={
              action == "login"
                ? "w-full border-b-2 border-amber-400 hover:border-amber-200  text-black dark:text-white"
                : "w-full border-b-2 border-transparent hover:border-gray-200/50  text-black dark:text-white"
            }
          >
            Login
          </button>
          <button
            onClick={() => setAction("register")}
            className={
              action == "register"
                ? "w-full border-b-2 border-amber-400 hover:border-amber-200  text-black dark:text-white"
                : "w-full border-b-2 border-transparent hover:border-gray-200/50  text-black dark:text-white"
            }
          >
            Sign up
          </button>
        </div>
        {form}
      </div>
    </PageLayout>
  );
};

export default AuthPage;

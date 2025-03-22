import { ReactElement, useMemo, useState } from "react";
import Login from "../../components/user/authPage/Login";
import Register from "../../components/user/authPage/Register";
import PageLayout from "../../layout/PageLayout";
import FormLayout from "../../layout/FormLayout";

type TabProps = {
  active: boolean;
  children: ReactElement | string;
  onClick: () => void;
};

const TabButton = ({ active, children, ...props }: TabProps) => {
  return (
    <button
      {...props}
      className={
        active
          ? "w-full border-b-2 border-amber-400 hover:border-amber-200 dark:border-slate-600 dark:hover:border-slate-400 text-black dark:text-white"
          : "w-full border-b-2 border-transparent hover:border-gray-200/50  text-black dark:text-white"
      }
    >
      {children}
    </button>
  );
};

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
    <PageLayout>
      <FormLayout>
        <>
          <div className="w-full h-12 top-0 flex flex-row">
            <TabButton
              active={action == "login"}
              onClick={() => setAction("login")}
            >
              Login
            </TabButton>
            <TabButton
              active={action == "register"}
              onClick={() => setAction("register")}
            >
              Sign up
            </TabButton>
          </div>
          {form}
        </>
      </FormLayout>
    </PageLayout>
  );
};

export default AuthPage;

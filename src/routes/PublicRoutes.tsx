import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import BuildPizza from "../page/user/BuildPizza";
const PageNotFound = lazy(() => import("../page/user/404"));
const AuthPage = lazy(() => import("../page/user/AuthPage"));
const LandingPage = lazy(() => import("../page/user/LandingPage"));

const PublicRoutes = (): RouteObject[] => {
  return [
    { path: "/", Component: LandingPage },
    { path: "/auth", Component: AuthPage },
    {
      path: "/build-your-pizza",
      Component: BuildPizza,
    },
    { path: "*", Component: PageNotFound },
  ];
};

export default PublicRoutes;

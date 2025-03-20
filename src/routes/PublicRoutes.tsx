import { lazy } from "react";
import { RouteObject } from "react-router-dom";
const BuildPizza = lazy(() => import("../page/user/BuildPizza"));
const CartPage = lazy(() => import("../page/user/CartPage"));
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
    {
      path: "/cart",
      Component: CartPage,
    },
    { path: "*", Component: PageNotFound },
  ];
};

export default PublicRoutes;

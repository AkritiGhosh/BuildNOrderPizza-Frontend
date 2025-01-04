import { lazy } from "react";
import { RouteObject } from "react-router-dom";
const Offer = lazy(() => import("../consumer/menu/Offer"));
const VegMenu = lazy(() => import("../consumer/menu/VegMenu"));
const NonVegMenu = lazy(() => import("../consumer/menu/NonVegMenu"));
const Sides = lazy(() => import("../consumer/menu/Sides"));
const Combo = lazy(() => import("../consumer/menu/Combo"));
const Menu = lazy(() => import("../consumer/menu/Menu"));
const Cart = lazy(() => import("../../components/consumer/Cart"));
const BuildCustom = lazy(() => import("../consumer/BuildCustom"));
const PageNotFound = lazy(() => import("./404"));
const AuthPage = lazy(() => import("./AuthPage"));
const LandingPage = lazy(() => import("./LandingPage"));

const PublicRoutes = (): RouteObject[] => {
  return [
    { path: "/", Component: LandingPage },
    { path: "/auth", Component: AuthPage },
    {
      path: "/build-your-pizza",
      Component: Menu,
      children: [
        { path: "base", Component: Offer },
        { path: "sauce", Component: VegMenu },
        { path: "toppings", Component: NonVegMenu },
        { path: "cheese", Component: Sides },
      ],
    },
    { path: "*", Component: PageNotFound },
  ];
};

export default PublicRoutes;

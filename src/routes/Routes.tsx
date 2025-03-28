import { lazy } from "react";
import { Outlet, RouteObject, useNavigate } from "react-router-dom";
const BuildPizza = lazy(() => import("../page/user/BuildPizza"));
const CartPage = lazy(() => import("../page/user/CartPage"));
const PageNotFound = lazy(() => import("../page/user/404"));
const AuthPage = lazy(() => import("../page/user/AuthPage"));
const LandingPage = lazy(() => import("../page/user/LandingPage"));

const ProfileForm = lazy(() => import("../page/consumer/ProfileForm"));
const Profile = lazy(() => import("../page/consumer/Profile"));
const Orders = lazy(() => import("../page/consumer/Orders"));
const Settings = lazy(() => import("../page/consumer/Settings"));
const OrderPage = lazy(() => import("../page/consumer/placeOrder/OrderPage"));

const AuthenticatedRoutes = () => {
  const nav = useNavigate();
  const token: string | null = sessionStorage.getItem("token");
  const uid: string | null = sessionStorage.getItem("_id");
  if (!(token && uid)) {
    nav("/auth");
    return;
  }
  return <Outlet />;
};
const Routes: RouteObject[] = [
  { path: "/", element: <LandingPage /> },
  { path: "/auth", element: <AuthPage /> },
  { path: "/build-your-pizza", element: <BuildPizza /> },
  { path: "/cart", element: <CartPage /> },

  {
    element: <AuthenticatedRoutes />,
    children: [
      { path: "/create-profile", element: <ProfileForm /> },
      {
        path: "profile/:profileId",
        children: [
          { path: "edit-profile", element: <ProfileForm /> },
          { path: "profile", element: <Profile /> },
          { path: "orders", element: <Orders /> },
          { path: "orders/:orderId", element: <Orders /> },
        ],
      },
      { path: "/settings", element: <Settings /> },
      { path: "/checkout", element: <OrderPage /> },
    ],
  },

  // ✅ Ensure a catch-all wildcard at the very bottom
  { path: "*", element: <PageNotFound /> },
];

export default Routes;

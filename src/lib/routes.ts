import { lazy } from "react";
import { RouteObject } from "react-router-dom";
const ProfileForm = lazy(() => import("../page/consumer/ProfileForm"));
const Profile = lazy(() => import("../page/consumer/Profile"));
const Orders = lazy(() => import("../page/consumer/Orders"));
const Settings = lazy(() => import("../page/consumer/Settings"));
const OrderPage = lazy(() => import("../page/consumer/placeOrder/OrderPage"));
const PageNotFound = lazy(() => import("../page/user/404"));
const LandingPage = lazy(() => import("../page/user/LandingPage"));

export const customerRoutes: RouteObject[] = [
  { path: "/", Component: LandingPage },
  { path: "/create-profile", Component: ProfileForm },
  {
    path: "/:profileId",
    children: [
      { path: "edit-profile", Component: ProfileForm },
      { path: "profile/", Component: Profile },
      { path: "orders", Component: Orders },
      { path: "orders/:orderId", Component: Orders },
    ],
  },
  { path: "/settings", Component: Settings },
  { path: "/checkout", Component: OrderPage },
  { path: "*", Component: PageNotFound },
];

// export const companyRoutes: RouteObject[] = [
//   { path: "/", Component: Dashboard },
//   {
//     path: "/menu",
//     Component: Dashboard,
//     children: [
//       { path: "add", Component: Dashboard },
//       { path: "edit", Component: Dashboard },
//       { path: "delete", Component: Dashboard },
//     ],
//   },
//   { path: "/orders", Component: Dashboard },
//   {
//     path: "/employee-list",
//     Component: Dashboard,
//     children: [
//       // Admin accessible pages
//       { path: "add", Component: Dashboard },
//       { path: "edit", Component: Dashboard },
//       { path: "delete", Component: Dashboard },
//     ],
//   },
//   { path: "/profile/:id", Component: LandingPage },
//   { path: "*", Component: PageNotFound },
// ];

// import { companyRoutes, customerRoutes } from "../../lib/routes";
import { RouteObject } from "react-router-dom";
import { customerRoutes } from "../../lib/routes";
// import { getUser } from "../../lib/core";
// import { UserProfiles } from "../../lib/constants";

const PrivateRoutes = (): RouteObject[] => {
  return customerRoutes;
  // const user = getUser();
  // return user?.profile == UserProfiles?.CUSTOMER ? customerRoutes : companyRoutes;
};

export default PrivateRoutes;

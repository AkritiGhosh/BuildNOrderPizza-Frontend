import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { checkAuth } from "./lib/core";
// import { UserContext } from "./lib/context";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import Loader from "./components/user/Loader";

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    document.getElementById("body")?.toggleAttribute("dark", darkTheme);
  }, [darkTheme]);

  const privateRouter = createBrowserRouter([
    ...PrivateRoutes(),
    ...PublicRoutes(),
  ]);
  const publicRouter = createBrowserRouter(PublicRoutes());

  return (
   
      <Suspense fallback={<Loader/>}>
        <RouterProvider router={checkAuth() ? privateRouter : publicRouter} />
      </Suspense>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { checkAuth, getUser } from "./lib/core";
// import { UserContext } from "./lib/context";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import LoaderGif from "./components/user/LoaderGif";

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
   
      <Suspense fallback={<LoaderGif />}>
        <RouterProvider router={checkAuth() ? privateRouter : publicRouter} />
      </Suspense>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { checkAuth } from "./lib/core";
// import { UserContext } from "./lib/context";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

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
   
      <Suspense fallback={<div className="w-screen h-screen fixed bg-black/40 z-[100] inset-0"></div>}>
        <RouterProvider router={checkAuth() ? privateRouter : publicRouter} />
      </Suspense>
  );
}

export default App;

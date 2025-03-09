import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { checkAuth } from "./lib/core";
// import { UserContext } from "./lib/context";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import Loader from "./components/user/Loader";
import { ThemeProvider } from "./hooks/useTheme";

function App() {
  const privateRouter = createBrowserRouter([
    ...PrivateRoutes(),
    ...PublicRoutes(),
  ]);
  const publicRouter = createBrowserRouter(PublicRoutes());

  return (
    <ThemeProvider>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={checkAuth() ? privateRouter : publicRouter} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

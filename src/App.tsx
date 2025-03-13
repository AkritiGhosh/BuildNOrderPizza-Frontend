import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { checkAuth } from "./lib/core";
// import { UserContext } from "./lib/context";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import Loader from "./components/user/Loader";
import { ThemeProvider } from "./hooks/useTheme";
import { DialogProvider } from "./hooks/useDialog";

function App() {
  const privateRouter = createBrowserRouter([
    ...PrivateRoutes(),
    ...PublicRoutes(),
  ]);
  const publicRouter = createBrowserRouter(PublicRoutes());

  return (
    <Suspense fallback={<Loader />}>
      <DialogProvider>
        <ThemeProvider>
          <RouterProvider router={checkAuth() ? privateRouter : publicRouter} />
        </ThemeProvider>
      </DialogProvider>
    </Suspense>
  );
}

export default App;

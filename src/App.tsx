import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { checkAuth } from "./lib/core";
// import { UserContext } from "./lib/context";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import Loader from "./components/user/Loader";
import { ThemeProvider } from "./hooks/useTheme";
import { CartProvider } from "./hooks/useCartDialog";

function App() {
  const privateRouter = createBrowserRouter([
    ...PrivateRoutes(),
    ...PublicRoutes(),
  ]);
  const publicRouter = createBrowserRouter(PublicRoutes());

  return (
    <Suspense fallback={<Loader />}>
      <CartProvider>
        <ThemeProvider>
          <RouterProvider router={checkAuth() ? privateRouter : publicRouter} />
        </ThemeProvider>
      </CartProvider>
    </Suspense>
  );
}

export default App;

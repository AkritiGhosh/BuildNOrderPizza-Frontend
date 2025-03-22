import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./components/user/Loader";
import { ThemeProvider } from "./hooks/useTheme";
import { DialogProvider } from "./hooks/useDialog";
import Routes from "./routes/Routes";

function App() {
 
  const router = createBrowserRouter(Routes)

  return (
    <Suspense fallback={<Loader />}>
      <DialogProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </DialogProvider>
    </Suspense>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, useEffect } from "react";
import Loader from "./components/user/Loader";
import { ThemeProvider } from "./hooks/useTheme";
import { DialogProvider } from "./hooks/useDialog";
import Routes from "./routes/Routes";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { logout } from "./redux/slice/authSlice";

function App() {
  const { loggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (loggedIn && !token) dispatch(logout());
  }, [loggedIn, dispatch]);

  const router = createBrowserRouter(Routes);

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

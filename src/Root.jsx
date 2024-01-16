import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RequireAuth from "./pages/Auth/RequireAuth";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./pages/home/Home";
import Completed from "./pages/Completed/Completed";
import Remaining from "./pages/Remaining/Remaining";
import All from "./pages/All/All";
import LoginForm from "./components/LoginForm/LoginForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "dashboard",
    element: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
    children: [
      { path: "", element: <Home /> },
      {
        path: "completed",
        element: <Completed />,
      },
      {
        path: "remaining",
        element: <Remaining />,
      },
      {
        path: "all",
        element: <All />,
      },
    ],
  },
]);

const Root = () => {
  return <RouterProvider router={router} />;
};

export default Root;

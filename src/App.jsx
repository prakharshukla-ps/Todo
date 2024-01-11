import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { TodoProvider } from "./Context/TodoContext";
import Home from "./pages/home/Home";
import Completed from "./pages/Completed/Completed";
import Remaining from "./pages/Remaining/Remaining";
import All from "./pages/All/All";
import Dashboard from "./components/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,

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

function App() {
  return (
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  );
}

export default App;

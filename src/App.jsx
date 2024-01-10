import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { TodoProvider } from "./Context/TodoContext";
import Home from "./pages/home/Home";
import Completed from "./components/Completed/Completed";
import Remaining from "./components/Remaining/Remaining";
import Dashboard from "./components/Dashboard/Dashboard";
import All from "./components/All/All";

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

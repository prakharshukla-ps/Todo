import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodoProvider } from "./Context/TodoContext";
import Home from "./pages/home/Home";
import Completed from "./components/Completed/Completed";
import Remaining from "./components/Remaining/Remaining";

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="remaining" element={<Remaining />}></Route>
          <Route path="completed" element={<Completed />}></Route>
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;

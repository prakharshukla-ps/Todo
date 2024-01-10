import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [items, setItems] = useState([]);
  const [sideItems, setSideItems] = useState([]);

  function notify(item) {
    toast.error(`${item} already added`);
  }

  return (
    <TodoContext.Provider
      value={{ items, setItems, sideItems, setSideItems, notify }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

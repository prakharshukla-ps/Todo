import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [items, setItems] = useState([]);

  function notify(item) {
    toast.error(`${item} already added`);
  }

  return (
    <TodoContext.Provider
      value={{
        notify,
        items,
        setItems,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

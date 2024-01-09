import { createContext, useState } from "react";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [items, setItems] = useState([]);
  const [sideItems, setSideItems] = useState([]);

  return (
    <TodoContext.Provider value={{ items, setItems, sideItems, setSideItems }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

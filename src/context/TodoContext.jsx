import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [items, setItems] = useState([]);
  // const [sideItems, setSideItems] = useState([]);

  function notify(item) {
    toast.error(`${item} already added`);
  }

  // function handleDeleteItem(id) {
  //   setItems((items) => items.filter((item) => item.id !== id));

  //   items.forEach((item) =>
  //     setSideItems((sideItems) =>
  //       sideItems.filter((sideItem) => item.input === sideItem)
  //     )
  //   );
  // }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));

    // items.forEach((item) =>
    //   setSideItems((sideItems) =>
    //     sideItems.filter((sideItem) => item.input === sideItem)
    //   )
    // );
  }

  function handleCheckBox(id) {
    setItems((items) =>
      items.map((it) =>
        it.id === id
          ? { ...it, check: !it.check, update: false, active: false }
          : it
      )
    );
  }

  return (
    <TodoContext.Provider
      value={{
        notify,
        items,
        setItems,
        // sideItems,
        // setSideItems,
        handleCheckBox,
        handleDeleteItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

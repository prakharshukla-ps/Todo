import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoContext = createContext();

export default function TodoProvider({ children }) {
  const [isChecked, setIsChecked] = useState(false);
  const [date, setDate] = useState("");
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");

  const [items, setItems] = useState([]);
  const [sideItems, setSideItems] = useState([]);

  const [updateDate, setUpdateDate] = useState("");
  const [updateItem, setUpdateItem] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");

  function notify(item) {
    toast.error(`${item} already added`);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!input || !description || !date)
      return alert("Missing date, title or description");
    const newItem = {
      input,
      date,
      description,
      id: Date.now(),
      check: isChecked,
      update: false,
      clicked: false,
      active: false,
    };

    handleAddItems(newItem);

    setInput("");
    setDescription("");
    setDate("");
    setIsChecked(false);
  }

  function handleAddItems(item) {
    setItems((items) => {
      if (items.findIndex((el) => el.input === item.input) === -1) {
        items = [item, ...items];
      } else {
        notify(item.input);
        // console.log(34);
      }

      return items;
    });
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));

    items.forEach((item) =>
      setSideItems((sideItems) =>
        sideItems.filter((siitem) => item.input === siitem)
      )
    );
  }

  function handleUpdate(item, click) {
    setUpdateItem(item.input);
    setUpdateDate(item.date);
    setUpdateDescription(item.description);

    setItems((items) =>
      items.map((it) =>
        it.id === item.id
          ? { ...it, update: !it.update, active: !it.active }
          : { ...it, update: false, active: false }
      )
    );

    if (click && updateItem.length) {
      setItems((items) =>
        items.map((it) =>
          it.id === item.id
            ? {
                ...it,
                input: updateItem,
                date: updateDate,
                description: updateDescription,
              }
            : it
        )
      );
    }
  }

  function handleCheckBox(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, check: !item.check, update: false, active: false }
          : item
      )
    );
  }

  function handleCheckDelete(sidearr) {
    setItems((items) => items.filter((item) => !sidearr.includes(item.input)));
    setSideItems([]);
  }

  return (
    <TodoContext.Provider
      value={{
        handleSubmit,
        isChecked,
        handleIsChecked: setIsChecked,
        date,
        handleDate: setDate,
        input,
        handleInput: setInput,
        description,
        handleDescription: setDescription,
        items,
        updateDate,
        setUpdateDate,
        updateDescription,
        setUpdateDescription,
        updateItem,
        setUpdateItem,
        onCheckBox: handleCheckBox,
        onDeleteItem: handleDeleteItem,
        onUpdate: handleUpdate,
        side: sideItems,
        setSideItems,
        handleCheckDelete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

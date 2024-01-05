import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "../components/Input/input";
import List from "../components/List/List";
import Item from "../components/Item/Item";
import Button from "../components/Button/Button";
import Text from "./../components/Text/Text";

import DeleteSelected from "../components/DeleteSelected/DeleteSelected";

export default function Home() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [sideItems, setSideItems] = useState([]);
  const [updateItem, setUpdateItem] = useState("");

  function notify(item) {
    toast.error(`${item} already added`);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!input) return alert("Enter task");
    const newItem = {
      input,
      id: Date.now(),
      check: false,
      update: false,
      clicked: false,
    };

    handleAddItems(newItem);

    setInput("");
  }

  function handleAddItems(item) {
    setItems((items) => {
      if (items.findIndex((el) => el.input === item.input) === -1) {
        items = [item, ...items];
      } else {
        notify(item.input);
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

    setItems((items) =>
      items.map((it) =>
        it.id === item.id ? { ...it, update: !it.update } : it
      )
    );

    if (click && updateItem.length) {
      setItems((items) =>
        items.map((it) =>
          it.id === item.id ? { ...it, input: updateItem } : it
        )
      );
      setUpdateItem("");
    }
  }

  function handleCheckBox(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, check: !item.check, update: false } : item
      )
    );
  }

  function handleCheckDelete(sidearr) {
    setItems((items) => items.filter((item) => !sidearr.includes(item.input)));
    setSideItems([]);
  }

  useEffect(() => {
    if (items.length) {
      items.forEach((item) =>
        item.check === true
          ? setSideItems((sideItems) =>
              !sideItems.includes(item.input)
                ? [...sideItems, item.input]
                : sideItems
            )
          : setSideItems((sideItems) =>
              sideItems.length
                ? sideItems.filter((siitem) => !siitem.includes(item.input))
                : sideItems
            )
      );
    } else {
      setSideItems([]);
    }
  }, [items]);

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <div className="container">
        <div>
          <Text
            fontColor={"#665743"}
            weight={"bolder"}
            size={"2rem"}
            font={"Merriweather"}
          >
            TODO App
          </Text>
          <form className="form" onSubmit={handleSubmit}>
            <Input input={input} handleInput={setInput} />
            <Button btn={"ADD"} styleClass="itemBtn" />
          </form>
          <List
            items={items}
            renderItem={(item) => (
              <Item
                item={item}
                key={item.id}
                update={item.update}
                updateItem={updateItem}
                setUpdateItem={setUpdateItem}
                onCheckBox={handleCheckBox}
                onDeleteItem={handleDeleteItem}
                onUpdate={handleUpdate}
              />
            )}
          />
        </div>
        <div>
          {sideItems.length ? (
            <DeleteSelected
              side={sideItems}
              items={items}
              handlecheckdelete={handleCheckDelete}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

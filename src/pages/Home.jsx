import { useState } from "react";
import Input from "../components/Input/input";
import List from "../components/List/List";
import Item from "../components/Item/Item";
import Button from "../components/Button/Button";
import Text from "./../components/Text/Text";
import DeleteSelected from "../components/DeleteSelected/DeleteSelected";
import { useEffect } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [sideItems, setSideItems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!input) return alert("Enter task");
    const newItem = { input, id: Date.now(), check: false };

    handleAddItems(newItem);

    setInput("");
  }

  function handleAddItems(item) {
    setItems((items) => [item, ...items]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCheckBox(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, check: !item.check } : item
      )
    );
  }

  // function handleDeleteItem(id) {
  //   setItems((items) => items.filter((item) => item.id !== id));
  // }
  // function handleDeleteSelected() {
  //   setItems((items) => items.filter((item) => sideItems.includes(item.input)));
  //   console.log(items);
  // }

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
    }
  }, [items]);

  return (
    <div className="container">
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
        <Button btn={"ADD"} />
      </form>
      <List
        items={items}
        renderItem={(item) => (
          <Item
            item={item}
            key={item.id}
            onCheckBox={handleCheckBox}
            onDeleteItem={handleDeleteItem}
          />
        )}
      />
      {sideItems.length ? (
        <DeleteSelected
          side={sideItems}
          items={items}
          // onDeleteSelected={handleDeleteSelected}
        />
      ) : null}
    </div>
  );
}

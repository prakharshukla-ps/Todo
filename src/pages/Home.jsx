import { useContext, useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "../components/Input/Input";
import List from "../components/List/List";
import Item from "../components/Item/Item";
import Button from "../components/Button/Button";
import Text from "../components/Text/Text";

import DeleteSelected from "../components/DeleteSelected/DeleteSelected";
import { TodoContext } from "../Context/TodoContext";
import Tab from "../components/Tab/Tab";

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const [date, setDate] = useState("");
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");

  const { items, setItems, sideItems, setSideItems } = useContext(TodoContext);
  // const [items, setItems] = useState([]);
  // const [sideItems, setSideItems] = useState([]);

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
      <Text
        fontColor={"#665743"}
        weight={"bolder"}
        size={"2rem"}
        font={"Merriweather"}
      >
        TODO App
      </Text>
      <div className="container">
        <Tab />
        <div className="display1">
          <form className="form" onSubmit={handleSubmit}>
            <Input
              isChecked={isChecked}
              handleIsChecked={setIsChecked}
              date={date}
              handleDate={setDate}
              input={input}
              handleInput={setInput}
              description={description}
              handleDescription={setDescription}
            />
            <Button btn={"ADD"} styleClass="formBtn" varColor="add" />
          </form>
          <List
            items={items}
            renderItem={(item) => (
              <Item
                item={item}
                key={item.id}
                updateDate={updateDate}
                setUpdateDate={setUpdateDate}
                updateDescription={updateDescription}
                setUpdateDescription={setUpdateDescription}
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
        <div className="display2">
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

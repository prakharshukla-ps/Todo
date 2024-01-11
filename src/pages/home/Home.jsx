import { useContext } from "react";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TodoContext } from "../../Context/TodoContext";

import List from "../../components/List/List";
import Item from "../../components/Item/Item";
import Text from "../../components/Text/Text";
import DeleteSelected from "../../components/DeleteSelected/DeleteSelected";

import HomeForm from "./HomeForm";

export default function Home() {
  const { items, sideItems, setSideItems } = useContext(TodoContext);

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
    <div className="box">
      <ToastContainer />
      <Text
        fontColor={"#665743"}
        weight={"bolder"}
        size={"2rem"}
        font={"Merriweather"}
      >
        TODO APP
      </Text>
      <HomeForm />

      <div className="container">
        <div className="display1">
          <List renderItem={(item) => <Item item={item} key={item.id} />} />
        </div>
        <div className="display2">
          {sideItems.length ? <DeleteSelected /> : null}
        </div>
      </div>
    </div>
  );
}

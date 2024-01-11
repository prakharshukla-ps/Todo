import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DeleteSelected from "../../components/DeleteSelected/DeleteSelected";
import Item from "../../components/Item/Item";
import List from "../../components/List/List";
import Text from "../../components/Text/Text";

import HomeForm from "./HomeForm";

export default function Home() {
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
          <List
            renderItem={(item, index) => (
              <Item index={index} item={item} key={item.id} />
            )}
          />
        </div>
        <div className="display2">
          <DeleteSelected />
        </div>
      </div>
    </div>
  );
}

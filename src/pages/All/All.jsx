// import { useContext } from "react";
import Item from "../../components/Item/Item";
import styles from "./All.module.css";
// import { TodoContext } from "../../Context/TodoContext";
import { useSelector } from "react-redux";

export default function All() {
  // const { items } = useContext(TodoContext);
  const { items } = useSelector((state) => state.appReducer);

  return (
    <div>
      <div className={styles.boxHeading}>All Task :</div>
      <ul className={styles.boxList}>
        {items.length
          ? items.map((item) => <Item item={item} key={item.input} />)
          : "No data available..."}
      </ul>
    </div>
  );
}

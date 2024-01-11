import { useContext } from "react";
import Item from "../../components/Item/Item";
import styles from "../All/All.module.css";
import { TodoContext } from "../../Context/TodoContext";

export default function Remaining() {
  const { items } = useContext(TodoContext);

  return (
    <div>
      <div className={styles.boxHeading}>Remaining Task :</div>
      <ul className={styles.boxList}>
        {items.map((item) =>
          item.check === false ? <Item item={item} key={item.input} /> : null
        )}
      </ul>
    </div>
  );
}

import { useContext } from "react";
import Item from "../../components/Item/Item";
import styles from "./All.module.css";
import { TodoContext } from "../../Context/TodoContext";

export default function All() {
  const { items } = useContext(TodoContext);

  return (
    <div>
      <div className={styles.boxHeading}>All Task :</div>
      <ul className={styles.boxList}>
        {items.map((item) => {
          return <Item item={item} key={item.input} />;
        })}
      </ul>
    </div>
  );
}

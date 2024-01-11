import { useContext } from "react";
import styles from "./List.module.css";
import { TodoContext } from "../../Context/TodoContext";
import { Link } from "react-router-dom";

export default function List({ renderItem }) {
  const { items } = useContext(TodoContext);

  return (
    <div className={styles.lists}>
      <ul>{items.map((item, index) => renderItem(item, index))}</ul>
      <Link className={styles.showAllBtn} to={`all`}>
        Show All
      </Link>
    </div>
  );
}

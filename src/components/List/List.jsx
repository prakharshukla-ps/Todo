import styles from "./List.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function List({ renderItem, index }) {
  const { items } = useSelector((state) => state.appReducer);

  return (
    <div className={styles.lists}>
      <ul>
        {items.map((item, index) => {
          return renderItem(item, index);
        })}
      </ul>
      <Link className={styles.showAllBtn} to={`all`}>
        Show All
      </Link>
    </div>
  );
}

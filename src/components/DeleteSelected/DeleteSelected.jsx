import { useContext } from "react";
import Button from "../Button/Button";
import styles from "./DeleteSelected.module.css";
import { TodoContext } from "../../Context/TodoContext";

export default function DeleteSelected() {
  const { items, setItems, sideItems, setSideItems } = useContext(TodoContext);

  function handleCheckDelete(side) {
    setItems((items) => items.filter((item) => !side.includes(item.input)));
    setSideItems([]);
  }

  return (
    <>
      <div className={styles.side}>
        {items.map((item, i) =>
          item?.check ? <li key={i}>{item?.input} </li> : <div key={i} />
        )}
        <Button
          styleClass="deleteSelectedBtn"
          varColor="delete"
          btn="DELETE ALL"
          btnfunction={() => handleCheckDelete(sideItems)}
        />
      </div>
    </>
  );
}

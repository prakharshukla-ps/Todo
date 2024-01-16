// import { useContext } from "react";
import { useState } from "react";
import Item from "../../components/Item/Item";
import styles from "../All/All.module.css";
// import { TodoContext } from "../../Context/TodoContext";
import { useSelector } from "react-redux";

export default function Completed() {
  // const { items } = useContext(TodoContext);
  const { items } = useSelector((state) => state.appReducer);
  const [editableIndex, setEditableIndex] = useState(null);

  const onUpdateClick = (index) => {
    setEditableIndex(index);
  };

  return (
    <div>
      <div className={styles.boxHeading}>Completed Task :</div>
      <ul className={styles.boxList}>
        {items.map((item, index) =>
          item.isChecked === true ? (
            <Item
              item={item}
              key={item.input}
              index={index}
              isEditable={index === editableIndex}
              onUpdateClick={onUpdateClick}
            />
          ) : null
        )}
      </ul>
    </div>
  );
}

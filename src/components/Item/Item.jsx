import Button from "../Button/Button";
import DisplayItem from "../DisplayItem/DisplayItem";
import Edit from "../Edit/Edit";

import styles from "./Item.module.css";

import { FcEditImage } from "react-icons/fc";
import { FcFullTrash } from "react-icons/fc";

export default function Item({
  item,
  onDeleteItem,
  onCheckBox,
  onUpdate,
  update,
  updateItem,
  setUpdateItem,
}) {
  return (
    <li className={styles.item}>
      {update && !item.check ? (
        <Edit>
          <input
            type="text"
            className={styles.editInput}
            value={updateItem}
            autoFocus={true}
            onChange={(e) => setUpdateItem(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter"
                ? onUpdate(item, true)
                : e.key === "Escape"
                ? onUpdate(item)
                : null
            }
            placeholder="Enter here..."
          />
          <Button
            styleClass="editButton"
            btn="✅"
            btnfunction={() => onUpdate(item, true)}
          />
          <Button
            styleClass="editButton"
            btn="❌"
            btnfunction={() => onUpdate(item)}
          />
        </Edit>
      ) : (
        <DisplayItem>
          <input
            className="input"
            type="checkbox"
            value={item.check}
            onChange={() => {
              onCheckBox(item.id);
            }}
          />
          <span>{item.input}</span>
          <Button
            btn={<FcEditImage size={30} />}
            btnfunction={() => onUpdate(item)}
          />
          <Button
            btn={<FcFullTrash size={30} />}
            btnfunction={() => onDeleteItem(item.id)}
          />
        </DisplayItem>
      )}
    </li>
  );
}

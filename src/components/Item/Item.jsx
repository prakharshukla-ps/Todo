import Button from "../Button/Button";
import DisplayItem from "../DisplayItem/DisplayItem";
import Edit from "../Edit/Edit";

import styles from "./Item.module.css";

import { FcEditImage } from "react-icons/fc";
import { FcFullTrash } from "react-icons/fc";
import InputDate from "../InputDate/InputDate";

export default function Item({
  item,
  onDeleteItem,
  onCheckBox,
  onUpdate,
  updateDate,
  setUpdateDate,
  updateDescription,
  setUpdateDescription,
  update,
  updateItem,
  setUpdateItem,
}) {
  return (
    <li className={styles.item}>
      {update && !item.check && item.active ? (
        <Edit>
          <InputDate date={updateDate} handleDate={setUpdateDate} />
          {/* <input
            type="date"
            value={updateDate}
            onChange={(e) => setUpdateDate(e.target.value)}
          /> */}
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
          <textarea
            className={styles.editDescription}
            value={updateDescription}
            onChange={(e) => setUpdateDescription(e.target.value)}
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
            checked={item.check}
            onChange={() => {
              onCheckBox(item.id);
            }}
          />

          <span className={styles.itemDate}>{item.date}</span>

          <span className={styles.itemTitle}>{item.input}</span>

          <span className={styles.itemDescription}>{item.description}</span>

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

import Button from "../Button/Button";
import styles from "./Item.module.css";
import { FcEditImage } from "react-icons/fc";
import { FcFullTrash } from "react-icons/fc";

export default function Item({ item, onDeleteItem, onCheckBox, onUpdate }) {
  return (
    <li className={styles.item}>
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
        btnfunction={(e) => onUpdate(e)}
      />
      <Button
        btn={<FcFullTrash size={30} />}
        btnfunction={() => onDeleteItem(item.id)}
      />
    </li>
  );
}

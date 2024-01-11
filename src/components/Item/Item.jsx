import Button from "../Button/Button";
import DisplayItem from "../DisplayItem/DisplayItem";
import Edit from "../Edit/Edit";

import InputTextarea from "../InputTextarea/InputTextarea";

import styles from "./Item.module.css";

import { FcEditImage } from "react-icons/fc";
import { FcFullTrash } from "react-icons/fc";
import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import Input from "../Input/Input";

export default function Item({ item }) {
  const { setItems, handleDeleteItem, handleCheckBox } =
    useContext(TodoContext);

  function handleUpdateForm(e, click) {
    e.preventDefault();

    const updateFormData = new FormData(e.target);
    const { updateDate, updateItem, updateDescription } =
      Object.fromEntries(updateFormData);

    setItems((items) =>
      items.map((it) =>
        it.id === item.id
          ? { ...it, update: !it.update, active: !it.active }
          : { ...it, update: false, active: false }
      )
    );

    if (click) {
      setItems((items) =>
        items.map((it) =>
          it.id === item.id
            ? {
                ...it,
                input: updateItem.length ? updateItem : it.input,
                date: updateDate.length ? updateDate : it.date,
                description: updateDescription.length
                  ? updateDescription
                  : it.description,
              }
            : it
        )
      );
    }
  }

  function handleUpdate() {
    setItems((items) =>
      items.map((it) =>
        it.id === item.id
          ? { ...it, update: !it.update, active: !it.active }
          : { ...it, update: false, active: false }
      )
    );
  }

  return (
    <li className={styles.item}>
      {item.update && !item.check && item.active ? (
        <Edit>
          <form onSubmit={(e) => handleUpdateForm(e, true)}>
            <Input name="updateDate" type="date" defaultValue={item.date} />
            <Input
              place="Enter here..."
              name="updateItem"
              autoFocus={true}
              type="text"
              defaultValue={item.input}
            />
            <InputTextarea
              columns={20}
              rows={1}
              name="updateDescription"
              defaultValue={item.description}
            />
            <Button styleClass="editButton" btn="✅" type="submit" />
            <Button styleClass="editButton" btn="❌" type="submit" />
          </form>
        </Edit>
      ) : (
        <DisplayItem>
          <input
            className="input"
            type="checkbox"
            value={item.check}
            checked={item.check}
            onChange={() => {
              handleCheckBox(item.id);
            }}
          />
          <span className={styles.itemDate}>{item.date}</span>
          <span className={styles.itemTitle}>{item.input}</span>
          <span className={styles.itemDescription}>{item.description}</span>

          <Button
            btn={<FcEditImage size={30} />}
            btnfunction={() => handleUpdate()}
          />
          <Button
            btn={<FcFullTrash size={30} />}
            btnfunction={() => handleDeleteItem(item.id)}
          />
        </DisplayItem>
      )}
    </li>
  );
}

import Button from "../Button/Button";

import InputTextarea from "../InputTextarea/InputTextarea";

import styles from "./Item.module.css";

import { FcEditImage } from "react-icons/fc";
import { FcFullTrash } from "react-icons/fc";
import Input from "../Input/Input";

import { useDispatch, useSelector } from "react-redux";
import { setItems, updateItem } from "../../store/reducer/appReducer";

export default function Item({ item, index, isEditable, onUpdateClick }) {
  const { items } = useSelector((state) => state.appReducer);

  const dispatch = useDispatch();

  function handleUpdateForm(e) {
    e.preventDefault();
    const newValues = Object.fromEntries(new FormData(e.target));
    dispatch(updateItem({ index, item: newValues }));
    handleEdit();
  }

  function handleEdit() {
    onUpdateClick(null);
  }

  function handleDeleteItem(id) {
    const afterDelete = items.filter((item) => item.id !== id);
    dispatch(setItems(afterDelete));
  }

  function handleCheckBox() {
    const checkVal = {
      ...items[index],
      isChecked: !items[index].isChecked,
    };
    handleEdit();
    dispatch(updateItem({ index, item: checkVal }));
  }

  return (
    <li className={styles.item}>
      {isEditable && !items[index].isChecked ? (
        <>
          <form onSubmit={(e) => handleUpdateForm(e)}>
            <Input name="date" type="date" defaultValue={item.date} />
            <Input
              place="Enter here..."
              name="input"
              autoFocus={true}
              type="text"
              defaultValue={item.input}
            />
            <InputTextarea
              columns={20}
              rows={1}
              name="description"
              defaultValue={item.description}
            />
            <Button styleClass="editButton" btn="✅" type="submit" />
            <Button styleClass="editButton" btn="❌" btnfunction={handleEdit} />
          </form>
        </>
      ) : (
        <>
          <input
            className="input"
            type="checkbox"
            value={item.isChecked}
            checked={item.isChecked}
            onChange={() => {
              handleCheckBox();
            }}
          />
          <span className={styles.itemDate}>{item.date}</span>
          <span className={styles.itemTitle}>{item.input}</span>
          <span className={styles.itemDescription}>{item.description}</span>

          <Button
            btn={<FcEditImage size={30} />}
            btnfunction={() => onUpdateClick(index)}
          />
          <Button
            btn={<FcFullTrash size={30} />}
            btnfunction={() => handleDeleteItem(item.id)}
          />
        </>
      )}
    </li>
  );
}

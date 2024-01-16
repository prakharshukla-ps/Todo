import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../store/reducer/appReducer";
import Button from "../Button/Button";
import styles from "./DeleteSelected.module.css";

export default function DeleteSelected() {
  const { items } = useSelector((state) => state.appReducer);

  const dispatch = useDispatch();

  // function handleCheckDelete() {
  //   dispatch(setItems((items) => items.filter((item) => !item.check)));
  // }

  function handleCheckDelete() {
    const afterDeletion = items.filter((item) => !item.isChecked);
    dispatch(setItems(afterDeletion));
  }

  return (
    <>
      <div className={styles.side}>
        {items.map((item, i) =>
          item.isChecked ? <li key={i}>{item.input} </li> : null
        )}

        <Button
          styleClass="deleteSelectedBtn"
          varColor="delete"
          btn="DELETE ALL"
          btnfunction={() => handleCheckDelete()}
        />
      </div>
    </>
  );
}

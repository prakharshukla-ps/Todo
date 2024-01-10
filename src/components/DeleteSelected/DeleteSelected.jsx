import Button from "../Button/Button";
import styles from "./DeleteSelected.module.css";

export default function DeleteSelected({ side, handlecheckdelete, items }) {
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
          btnfunction={() => handlecheckdelete(side)}
        />
      </div>
    </>
  );
}

import Button from "../Button/Button";
import styles from "./DeleteSelected.module.css";

export default function DeleteSelected({ side, handlecheckdelete }) {
  return (
    <>
      <div className={styles.side}>
        {side.map((item) => (
          <p key={item}>{item} </p>
        ))}
        <Button btn="DELETE ALL" btnfunction={() => handlecheckdelete(side)} />
      </div>
    </>
  );
}

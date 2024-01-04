import Button from "../Button/Button";
import styles from "./DeleteSelected.module.css";

import { FcFullTrash } from "react-icons/fc";

export default function DeleteSelected({ side, handlecheckdelete }) {
  return (
    <>
      <div className={styles.side}>
        {side.map((item) => (
          <p key={item}>{item} </p>
        ))}
        <Button
          btn={
            <FcFullTrash size={25} onClick={() => handlecheckdelete(side)} />
          }
        />
      </div>
    </>
  );
}

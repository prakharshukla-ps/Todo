import styles from "./Tab.module.css";

export default function Tab({ items }) {
  return (
    <>
      <div>
        <span>All Task:</span>
        <ul className={styles.list}>
          {items.map((it) => (
            <li key={it.id}>{it.input}</li>
          ))}
        </ul>
      </div>
      <div>
        <span>Completed Task:</span>
        <ul className={styles.list}>
          {items.map((it) => (
            <li key={it.id}>{it.check === true ? it.input : ""}</li>
          ))}
        </ul>
      </div>
      <div>
        <span>Remaining Task:</span>
        <ul className={styles.list}>
          {items.map((it) => (
            <li key={it.id}>{it.check === false ? it.input : ""}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

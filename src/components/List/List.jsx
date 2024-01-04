import styles from "./List.module.css";

export default function List({ items, renderItem }) {
  return (
    <div className={styles.lists}>
      <ul>{items.map((item) => renderItem(item))}</ul>
    </div>
  );
}

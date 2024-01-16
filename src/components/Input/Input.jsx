export default function Input({ styles, place, isChecked, ...rest }) {
  return (
    <input
      className={styles}
      checked={isChecked}
      placeholder={place}
      {...rest}
    />
  );
}

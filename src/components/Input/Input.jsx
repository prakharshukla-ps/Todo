export default function Input({ styles, place, isChecked = null, ...rest }) {
  return (
    <input
      className={styles}
      checked={isChecked}
      placeholder={place}
      {...rest}
    />
  );
}

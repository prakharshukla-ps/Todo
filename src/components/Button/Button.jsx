export default function Button({ btn, btnFunction }) {
  return <button onClick={btnFunction}>{btn}</button>;
}

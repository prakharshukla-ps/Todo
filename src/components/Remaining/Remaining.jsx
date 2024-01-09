import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import Tab from "../Tab/Tab";

export default function Remaining() {
  const { items } = useContext(TodoContext);
  return (
    <div>
      <Tab />
      <span>Remaining Task :</span>
      <ul style={{ listStyle: "none" }}>
        {items.map((it) => (
          <li key={it.id}>{it.check === false ? it.input : null}</li>
        ))}
      </ul>
    </div>
  );
}

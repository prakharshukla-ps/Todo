import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import Tab from "../Tab/Tab";

export default function Completed() {
  const { items } = useContext(TodoContext);
  return (
    <div>
      <Tab />
      <span>Completed Task :</span>
      <ul style={{ listStyle: "none" }}>
        {items.map((it) => (
          <li key={it.id}>{it.check === true ? it.input : null}</li>
        ))}
      </ul>
    </div>
  );
}

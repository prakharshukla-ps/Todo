import { useContext, useState } from "react";

import InputCheckbox from "../../components/InputCheckbox/InputCheckbox";
import InputDate from "../../components/InputDate/InputDate";
import InputText from "../../components/InputText/InputText";
import InputTextarea from "../../components/InputTextarea/InputTextarea";
import Button from "../../components/Button/Button";
import { TodoContext } from "../../Context/TodoContext";

export default function HomeForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [date, setDate] = useState("");
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");

  const { setItems, notify } = useContext(TodoContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (!input || !description || !date)
      return alert("Missing date, title or description");

    const newItem = {
      id: input,
      input,
      date,
      description,
      check: isChecked,
      update: false,
      clicked: false,
      active: false,
    };

    handleAddItems(newItem);

    setInput("");
    setDescription("");
    setDate("");
    setIsChecked(false);
  }

  function handleAddItems(item) {
    setItems((items) => {
      if (items.findIndex((el) => el.input === item.input) === -1) {
        items = [item, ...items];
      } else {
        notify(item.input);
      }

      return items;
    });
  }

  return (
    <form className="homeForm" onSubmit={handleSubmit}>
      <InputCheckbox isChecked={isChecked} handleIsChecked={setIsChecked} />
      <InputDate date={date} handleDate={setDate} />
      <InputText input={input} handleInput={setInput} />
      <InputTextarea
        description={description}
        handleDescription={setDescription}
      />
      <Button btn={"ADD"} styleClass="formBtn" varColor="add" />
    </form>
  );
}

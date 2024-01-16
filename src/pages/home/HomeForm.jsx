// import { useContext, useRef } from "react";
import { useRef } from "react";

import Input from "../../components/Input/Input";
import InputTextarea from "../../components/InputTextarea/InputTextarea";
import Button from "../../components/Button/Button";
// import { TodoContext } from "../../Context/TodoContext";

import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../store/reducer/appReducer";

export default function HomeForm() {
  const formRef = useRef(null);

  const { items } = useSelector((state) => state.appReducer);

  const dispatch = useDispatch();

  // const { setItems, notify } = useContext(TodoContext);

  function handleSubmit(e) {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.target));

    const { input, description, date, isChecked } = values;

    if (!input || !description || !date)
      return alert("Missing date, title or description");

    const newItem = {
      id: input,
      input,
      date,
      description,
      isChecked: isChecked === "on" ? true : false,
    };
    // handleAddItems(newItem);
    dispatch(setItems([newItem, ...items]));

    formRef.current.reset();
  }

  // function handleAddItems(item) {
  //   dispatch(setItems(item));
  // }

  const script = () => {
    const itemsToAdd = Array(100)
      .fill("")
      .map((el, i) => ({
        isChecked: false,
        date: "2024-01-11",
        input: `Test title ${i + 1}`,
        description: `Test Description ${i + 1}`,
        id: `Test title ${i + 1}`,
      }));
    dispatch(setItems(itemsToAdd));
  };

  return (
    <>
      <Button btn="aa" btnfunction={script} />
      <form className="homeForm" ref={formRef} onSubmit={handleSubmit}>
        <Input styles="homeFormCheck" type="checkbox" name="isChecked" />
        <Input styles="homeFormDate" type="date" name="date" />
        <Input
          styles="homeFormInput"
          place="Enter here..."
          type="text"
          name="input"
        />
        <InputTextarea styles="homeFormTextarea" name="description" />
        <Button btn={"ADD"} styleClass="formBtn" varColor="add" type="submit" />
      </form>
    </>
  );
}

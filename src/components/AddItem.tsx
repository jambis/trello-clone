import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../store/ItemsData/actions";

interface IProps {
  column: number;
}

const AddItem = ({ column }: IProps) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem({ text: title, column }));
    setTitle("");
    setEditing(false);
  };

  const renderButton = () => {
    return <div onClick={() => setEditing(true)}>Add a Card</div>;
  };

  const renderInput = () => {
    return (
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          placeholder="Enter a title for the card"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add card</button>
        <button type="button" onClick={() => setEditing(false)}>
          Cancel
        </button>
      </form>
    );
  };

  return editing ? renderInput() : renderButton();
};

export default AddItem;

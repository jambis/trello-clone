import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addColumn } from "../store/ColumnsData/actions";

interface Props {}

const AddColumn = (props: Props) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddColumn = () => {
    dispatch(addColumn(title));
    setEditing(false);
    setTitle("");
  };

  const renderButton = () => {
    return <div onClick={() => setEditing(true)}>Add Column</div>;
  };

  const renderInput = () => {
    return (
      <form onSubmit={handleAddColumn}>
        <input
          type="text"
          placeholder="Enter a title for the column"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Column</button>
        <button type="button" onClick={() => setEditing(false)}>
          Cancel
        </button>
      </form>
    );
  };

  return editing ? renderInput() : renderButton();
};

export default AddColumn;

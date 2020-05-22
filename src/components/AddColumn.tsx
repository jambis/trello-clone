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
      <div>
        <input
          type="text"
          placeholder="Enter a title for the column"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAddColumn}>Add Column</button>
        <button onClick={() => setEditing(false)}>Cancel</button>
      </div>
    );
  };
  return editing ? renderInput() : renderButton();
};

export default AddColumn;

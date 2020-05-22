import React, { useState } from "react";

interface Props {}

const AddItem = (props: Props) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");

  const renderButton = () => {
    return <div onClick={() => setEditing(true)}>Add a Card</div>;
  };

  const renderInput = () => {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter a title for the card"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Add card</button>
        <button onClick={() => setEditing(false)}>Cancel</button>
      </div>
    );
  };

  return editing ? renderInput() : renderButton();
};

export default AddItem;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { addColumn } from "../store/ColumnsData/actions";

const ContainerDiv = styled.div`
  height: 100%;
  margin: 0 2%;
  width: 14em;
`;

const DivButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5em 0;
  border-radius: 0.2em;
  background: rgba(150, 150, 150, 0.4);

  &:hover {
    cursor: pointer;
    background: rgba(150, 150, 150, 0.3);
  }
`;

const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5em 0;
  border-radius: 0.2em;
  background: rgba(150, 150, 150, 0.5);
`;

const TitleInput = styled.input`
  width: 12em;
`;

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
    return <DivButton onClick={() => setEditing(true)}>+ Add Column</DivButton>;
  };

  const renderInput = () => {
    return (
      <FormDiv>
        <form onSubmit={handleAddColumn}>
          <TitleInput
            type="text"
            required
            autoFocus
            placeholder="Enter a title for the column"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <button type="submit">Add Column</button>
            <button type="button" onClick={() => setEditing(false)}>
              Cancel
            </button>
          </div>
        </form>
      </FormDiv>
    );
  };

  return (
    <ContainerDiv>{editing ? renderInput() : renderButton()}</ContainerDiv>
  );
};

export default AddColumn;

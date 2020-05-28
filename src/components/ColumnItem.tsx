import React from "react";
import styled from "styled-components";

import { ItemsState } from "../store/ItemsData/types";

const CardDiv = styled.div`
  margin: 0.5em 1em;
  background: rgba(255, 255, 255, 1);
  padding: 0.5em 0;
  border: 0.02em solid white;
  box-shadow: 0em 0.05em gray;
  border-radius: 0.25em;
`;

interface IProps {
  data: ItemsState;
  column: number;
}

const ColumnItem = ({ data, column }: IProps) => {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    // Figure out what data I need to set
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    // Figure out what card I'm dropping on and push that card and all other cards down
    // Handle if column is empty with no cards
  };

  return (
    <CardDiv
      draggable
      onDragOver={(e) => handleDragOver(e)}
      onDragStart={(e) => handleDragStart(e)}
      onDrop={(e) => handleDrop(e)}
    >
      {data.text}
    </CardDiv>
  );
};

export default ColumnItem;

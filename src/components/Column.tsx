import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import ColumnItem from "./ColumnItem";
import AddItem from "./AddItem";

import { switchColumns } from "../store/ColumnsData/actions";
import { ColumnsState } from "../store/ColumnsData/types";
import { ItemsState } from "../store/ItemsData/types";

const ColumnDiv = styled.div`
  margin: 0 2%;
  width: 14em;
  background: rgba(200, 200, 200, 0.5);
  padding: 0.5em 0;
  border-radius: 0.3em;
`;

interface IProps {
  data: ColumnsState;
}

interface RootState {
  columns: ColumnsState[];
  items: ItemsState[];
}

const Column = ({ data }: IProps) => {
  const dispatch = useDispatch();
  const selectItems = (state: RootState) => state.items;
  const items = useSelector(selectItems);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const id = +e.dataTransfer.getData("id");
    const order = +e.dataTransfer.getData("order");

    dispatch(switchColumns(id, data.id, order, data.order));
  };

  const handleOnDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("id", `${data.id}`);
    e.dataTransfer.setData("order", `${data.order}`);
  };

  return (
    <ColumnDiv
      draggable
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleOnDrop(e)}
      onDragStart={(e) => handleOnDragStart(e)}
    >
      <h2>{data.title}</h2>
      {items
        .sort((a, b) => a.order - b.order)
        .map((item) => {
          if (item.column === data.id) {
            return <ColumnItem data={item} column={data.id} key={item.id} />;
          } else {
            return null;
          }
        })}
      <AddItem column={data.id} />
    </ColumnDiv>
  );
};

export default Column;

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ColumnItem from "./ColumnItem";
import AddItem from "./AddItem";

import { switchColumns } from "../store/ColumnsData/actions";
import { ColumnsState } from "../store/ColumnsData/types";
import { ItemsState } from "../store/ItemsData/types";

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

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleOnDrop = (e: React.DragEvent) => {
    const id = +e.dataTransfer.getData("id");
    const order = +e.dataTransfer.getData("order");

    dispatch(switchColumns(id, data.id, order, data.order));
  };

  const handleOnDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("id", `${data.id}`);
    e.dataTransfer.setData("order", `${data.order}`);
    console.log("Drag start", data);
  };

  return (
    <div
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
    </div>
  );
};

export default Column;

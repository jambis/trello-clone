import React from "react";
import { useSelector } from "react-redux";

import ColumnItem from "./ColumnItem";
import AddItem from "./AddItem";

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
  const selectItems = (state: RootState) => state.items;
  const items = useSelector(selectItems);

  return (
    <div>
      <h2>{data.title}</h2>
      {items.map((item) => {
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

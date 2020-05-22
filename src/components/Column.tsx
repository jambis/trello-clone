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
        return <ColumnItem data={item} key={item.id} />;
      })}
      <AddItem />
    </div>
  );
};

export default Column;

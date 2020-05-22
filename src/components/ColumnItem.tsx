import React from "react";
import { ItemsState } from "../store/ItemsData/types";

interface IProps {
  data: ItemsState;
  column: number;
}

const ColumnItem = ({ data, column }: IProps) => {
  return <div>{data.text}</div>;
};

export default ColumnItem;

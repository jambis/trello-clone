import React from "react";
import { ItemsState } from "../store/ItemsData/types";
interface IProps {
  data: ItemsState;
}

const ColumnItem = ({ data }: IProps) => {
  return <div>{data.text}</div>;
};

export default ColumnItem;

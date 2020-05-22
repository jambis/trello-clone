import { ADD_ITEM, IAddItem } from "./types";

export function addItem(itemData: IAddItem) {
  return {
    type: ADD_ITEM,
    payload: itemData,
  };
}

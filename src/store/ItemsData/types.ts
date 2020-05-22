// Describing the shape of the items inside the column
export interface ItemsState {
  id: number;
  order: number;
  column: number;
  text: string;
}

export interface IAddItem {
  text: string;
  column: number;
}
// Describing the different ACTION NAMES available
export const ADD_ITEM = "ADD_ITEM";

interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: IAddItem;
}

export type ItemsActionTypes = AddItemAction;

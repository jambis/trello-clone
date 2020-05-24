import { ADD_COLUMN, SWITCH_COLUMNS } from "./types";

export function addColumn(title: string) {
  return {
    type: ADD_COLUMN,
    payload: title,
  };
}

export function switchColumns(
  dragId: number,
  dropId: number,
  dragOrder: number,
  dropOrder: number
) {
  return {
    type: SWITCH_COLUMNS,
    payload: { dragId, dropId, dragOrder, dropOrder },
  };
}

import { ADD_COLUMN } from "./types";

export function addColumn(title: string) {
  return {
    type: ADD_COLUMN,
    payload: title,
  };
}

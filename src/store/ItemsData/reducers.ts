import { ItemsState } from "./types";

const initialState: ItemsState[] = [
  {
    id: 0,
    order: 0,
    column: 0,
    text: "Place Holder Text",
  },
];

export function itemsReducer(state = initialState, action: any): ItemsState[] {
  switch (action.type) {
    default:
      return state;
  }
}

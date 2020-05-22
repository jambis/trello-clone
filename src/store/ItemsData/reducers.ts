import { ItemsState, ADD_ITEM, ItemsActionTypes } from "./types";

const initialState: ItemsState[] = [
  {
    id: 0,
    order: 0,
    column: 0,
    text: "Place Holder Text",
  },
];

let nextId = 1;

export function itemsReducer(
  state = initialState,
  action: ItemsActionTypes
): ItemsState[] {
  switch (action.type) {
    case ADD_ITEM:
      const maxOrder = state.reduce((acc, item) => {
        if (action.payload.column === item.column) {
          if (item.order > acc) {
            acc = item.order;
            return acc;
          } else {
            return acc;
          }
        } else {
          return acc;
        }
      }, -1);
      return [
        ...state,
        { ...action.payload, id: nextId++, order: maxOrder + 1 },
      ];
    default:
      return state;
  }
}

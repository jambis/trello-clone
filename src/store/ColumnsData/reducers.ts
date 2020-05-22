import { ColumnsState, ADD_COLUMN, ColumnActionTypes } from "./types";

const initialState: ColumnsState[] = [
  {
    id: 0,
    order: 0,
    title: "Place Holder Title",
  },
];

let nextId = 1;

export function columnsReducer(
  state = initialState,
  action: ColumnActionTypes
): ColumnsState[] {
  switch (action.type) {
    case ADD_COLUMN:
      let maxOrder = state.reduce((acc, state) => {
        if (state.order > acc) {
          acc = state.order;
          return acc;
        } else {
          return acc;
        }
      }, 0);

      return [
        ...state,
        { id: nextId++, order: maxOrder + 1, title: action.payload },
      ];
    default:
      return state;
  }
}

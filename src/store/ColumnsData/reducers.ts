import {
  ColumnsState,
  ColumnActionTypes,
  ADD_COLUMN,
  SWITCH_COLUMNS,
} from "./types";

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
      const maxOrder = state.reduce((acc, state) => {
        if (state.order > acc) {
          acc = state.order;
          return acc;
        } else {
          return acc;
        }
      }, -1);

      return [
        ...state,
        { id: nextId++, order: maxOrder + 1, title: action.payload },
      ];

    case SWITCH_COLUMNS:
      return state.map((column) => {
        if (column.id === action.payload.dragId) {
          return { ...column, order: action.payload.dropOrder };
        } else if (column.id === action.payload.dropId) {
          return { ...column, order: action.payload.dragOrder };
        } else {
          return column;
        }
      });

    default:
      return state;
  }
}

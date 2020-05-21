import { ColumnsState } from "./types";

const initialState: ColumnsState[] = [
  {
    id: 0,
    order: 0,
    title: "Place Holder Title",
  },
];

export function columnsReducer(
  state = initialState,
  action: any
): ColumnsState[] {
  switch (action.type) {
    default:
      return state;
  }
}

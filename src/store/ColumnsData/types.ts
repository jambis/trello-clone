// Describing the shape of the columns
export interface ColumnsState {
  id: number;
  order: number;
  title: string;
}

// Describing the different ACTION NAMES available
export const ADD_COLUMN = "ADD_COLUMN";

interface AddColumnAction {
  type: typeof ADD_COLUMN;
  payload: string;
}

export type ColumnActionTypes = AddColumnAction;

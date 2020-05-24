// Describing the shape of the columns
export interface ColumnsState {
  id: number;
  order: number;
  title: string;
}

// Describing the different ACTION NAMES available
export const ADD_COLUMN = "ADD_COLUMN";
export const SWITCH_COLUMNS = "SWITCH_COLUMNS";

interface AddColumnAction {
  type: typeof ADD_COLUMN;
  payload: string;
}

interface SwitchColumnsAction {
  type: typeof SWITCH_COLUMNS;
  payload: {
    dragId: number;
    dropId: number;
    dragOrder: number;
    dropOrder: number;
  };
}

export type ColumnActionTypes = AddColumnAction | SwitchColumnsAction;

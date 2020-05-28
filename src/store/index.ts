import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { columnsReducer } from "./ColumnsData/reducers";
import { itemsReducer } from "./ItemsData/reducers";

const rootReducer = combineReducers({
  columns: columnsReducer,
  items: itemsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer, composeWithDevTools());

  return store;
}

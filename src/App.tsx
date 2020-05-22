import React from "react";
import { useSelector } from "react-redux";

import Column from "./components/Column";

import { ColumnsState } from "./store/ColumnsData/types";
import { ItemsState } from "./store/ItemsData/types";

import "./App.css";

interface RootState {
  columns: ColumnsState[];
  items: ItemsState[];
}

function App() {
  const selectColumns = (state: RootState) => state.columns;
  const columns = useSelector(selectColumns);

  console.log(columns);
  return (
    <div className="App">
      Trello Clone
      {columns.map((column) => {
        return <Column data={column} key={column.id} />;
      })}
      <button>Add New Column</button>
    </div>
  );
}

export default App;

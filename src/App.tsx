import React from "react";
import { useSelector } from "react-redux";

import Column from "./components/Column";
import AddColumn from "./components/AddColumn";

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
      <h1>Trello Clone</h1>
      <div className="Columns">
        {columns
          .sort((a, b) => a.order - b.order)
          .map((column) => {
            return <Column data={column} key={column.id} />;
          })}
        <AddColumn />
      </div>
    </div>
  );
}

export default App;

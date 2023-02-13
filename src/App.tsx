import "./App.css";
import { NavigationBar } from "./components/common/navigation/NavigationBar";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TodoTagEditor from "./components/common/navigation/todo-tag/TodoTagEditor";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <NavigationBar />
        <TodoTagEditor />
      </React.Fragment>
    </div>
  );
}

export default App;

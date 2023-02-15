import "./App.css";
import { NavigationBar } from "./components/common/navigation/NavigationBar";
import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TodoTagEditor from "./components/common/todo-tag/TodoTagEditor";
import { TodoTagView } from "./components/common/todo-tag/TodoTagView";

function App() {
  const [tags, setTags] = useState<string[]>([]);
  const addTag = (tag: string) => {
    setTags([tag, ...tags]);
  }

  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <NavigationBar />
        <TodoTagEditor addTag={addTag} />
        <TodoTagView tags={tags}/>
      </React.Fragment>
    </div>
  );
}

export default App;

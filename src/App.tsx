import "./App.css";
import { NavigationBar } from "./components/common/navigation/NavigationBar";
import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TodoTagEditor from "./components/todo-tag/TodoTagEditor";
import { TodoTagView } from "./components/todo-tag/TodoTagView";
import { TodoItemEditor } from "./components/todo-item/TodoItemEditor";
import { TodoItemView } from "./components/todo-item/TodoItemView";
import { ITodoItemResponse, ITodoTagResponse } from "./api/api-client";

function App() {
  const [tags, setTags] = useState<ITodoTagResponse[]>([]);
  const [todoItems, setTodoItems] = useState<ITodoItemResponse[]>([]);
  
  const addTag = (tag: ITodoTagResponse) => {
    setTags([tag, ...tags]);
  }

  const addTodoItem = (item: ITodoItemResponse) => {
    setTodoItems([...todoItems, item]);
  }

  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <NavigationBar />
        <TodoTagEditor addTag={addTag} />
        <TodoTagView tags={tags}/>
        <TodoItemEditor tags={tags} addTodoItem={addTodoItem} />
        <TodoItemView todoItems={todoItems} />
      </React.Fragment>
    </div>
  );
}

export default App;

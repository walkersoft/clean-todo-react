import "./App.css";
import { NavigationBar } from "./components/common/navigation/NavigationBar";
import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TodoTagEditor from "./components/todo-tag/TodoTagEditor";
import { TodoTag, TodoTagView } from "./components/todo-tag/TodoTagView";
import { TodoItemEditor } from "./components/todo-item/TodoItemEditor";
import { TodoItem, TodoItemView } from "./components/todo-item/TodoItemView";

function App() {
  const [tags, setTags] = useState<TodoTag[]>([]);
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  
  const addTag = (tag: TodoTag) => {
    setTags([tag, ...tags]);
  }

  const addTodoItem = (item: TodoItem) => {
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

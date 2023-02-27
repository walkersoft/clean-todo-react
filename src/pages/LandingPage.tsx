import { useEffect, useState } from "react";
import { ITodoItemResponse } from "../api/api-client";
import {
  useTodoItemsAllQuery,
  useTodoTagsAllQuery,
} from "../api/api-client/Query";
import { TodoItemEditor } from "../components/todo-item/TodoItemEditor";
import { TodoItemListView } from "../components/todo-item/TodoItemListView";
import TodoTagEditor from "../components/todo-tag/TodoTagEditor";
import { TodoTagListView } from "../components/todo-tag/TodoTagListView";

export function LandingPage() {
  const tagsQuery = useTodoTagsAllQuery();
  const itemsQuery = useTodoItemsAllQuery();

  const [todoItems, setTodoItems] = useState<ITodoItemResponse[]>([]);

  useEffect(() => {
    setTodoItems(!!itemsQuery.data ? itemsQuery.data : []);
  }, [tagsQuery, tagsQuery.data, itemsQuery.data]);

  return (
    <>
      <TodoTagEditor />
      <TodoTagListView />
      <TodoItemEditor />
      <TodoItemListView todoItems={todoItems} />
    </>
  );
}

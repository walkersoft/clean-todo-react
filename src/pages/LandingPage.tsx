import { TodoItemEditor } from "../components/todo-item/TodoItemEditor";
import { TodoItemListView } from "../components/todo-item/TodoItemListView";
import TodoTagEditor from "../components/todo-tag/TodoTagEditor";
import { TodoTagListView } from "../components/todo-tag/TodoTagListView";

export function LandingPage() {

  return (
    <>
      <TodoTagEditor />
      <TodoTagListView />
      <TodoItemEditor />
      <TodoItemListView />
    </>
  );
}

import { Outlet } from "react-router-dom";
import { TodoItemEditor } from "../components/todo-item/TodoItemEditor";
import { TodoItemTableView } from "../components/todo-item/TodoItemTableView";
import TodoTagEditor from "../components/todo-tag/TodoTagEditor";
import { TodoTagListView } from "../components/todo-tag/TodoTagListView";

export function LandingPage() {
  return (
    <>
      <Outlet />
    </>
  );
}

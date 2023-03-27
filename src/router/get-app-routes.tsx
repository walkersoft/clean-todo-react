import App from "../App";
import { TodoTagListView } from "../components/todo-tag/TodoTagListView";

export default function getAppRoutes() {
  return [{
    path: "/",
    element: <App />,
    children: [
      {
        path: "Tags",
        element: <TodoTagListView />
      }
    ]
  }];
}
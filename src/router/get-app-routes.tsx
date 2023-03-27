import App from "../App";
import { TodoTagListView } from "../components/todo-tag/TodoTagListView";
import { LandingPage } from "../pages/LandingPage";

export default function getAppRoutes() {
  return [{
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: "Tags",
        element: <TodoTagListView />
      }
    ]
  }];
}
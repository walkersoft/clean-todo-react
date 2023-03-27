import App from "../App";
import { LandingPage } from "../pages/LandingPage";
import { TagManagement } from "../pages/TagManagement";

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
        element: <TagManagement />
      }
    ]
  }];
}
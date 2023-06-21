import App from "../App";
import { LandingPage } from "../pages/LandingPage";
import { ListManagement } from "../pages/ListManagement";
import { TagManagement } from "../pages/TagManagement";

export default function getAppRoutes() {
  return [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "Tags",
          element: <TagManagement />,
        },
        {
          path: "Lists",
          element: <ListManagement />,
        }
      ],
    },
  ];
}

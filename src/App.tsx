import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { setBaseUrl } from "./api/api-client";
import "./App.css";
import { NavigationBar } from "./components/common/navigation/NavigationBar";
import { ListsStateProvider } from "./contexts/ListsContext";
import { TagsStateProvider } from "./contexts/TagsContext";
import { TodoItemsStateProvider } from "./contexts/TodoItemsContext";

const queryClient = new QueryClient();
setBaseUrl("https://localhost:7144");

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavigationBar />
      <QueryClientProvider client={queryClient}>
        <TodoItemsStateProvider>
          <TagsStateProvider>
            <ListsStateProvider>
              <Outlet />
            </ListsStateProvider>
          </TagsStateProvider>
        </TodoItemsStateProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

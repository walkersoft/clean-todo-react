import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setBaseUrl } from "./api/api-client";
import "./App.css";
import { NavigationBar } from "./components/common/navigation/NavigationBar";
import { LandingPage } from "./pages/LandingPage";

const queryClient = new QueryClient();
setBaseUrl("https://localhost:7144");

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavigationBar />
      <QueryClientProvider client={queryClient}>
        <LandingPage />
      </QueryClientProvider>
    </div>
  );
}

export default App;

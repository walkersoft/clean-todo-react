import "./App.css";
import { NavigationBar } from "./components/common/navigation/NavigationBar";
import CssBaseline from "@mui/material/CssBaseline";
import { setBaseUrl } from "./api/api-client";
import { LandingPage } from "./pages/LandingPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
setBaseUrl("https://localhost:7144");

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavigationBar />
      <QueryClientProvider client={queryClient}>
        <LandingPage apiClient={queryClient} />
      </QueryClientProvider>
    </div>
  );
}

export default App;

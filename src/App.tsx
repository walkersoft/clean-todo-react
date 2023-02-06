import "./App.css";
import { NavigationBar } from "./components/common/navigation/NavigationBar";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <NavigationBar />
      </React.Fragment>
    </div>
  );
}

export default App;

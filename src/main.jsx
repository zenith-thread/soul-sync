import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// ===================================================
//                       Chakra UI
// ===================================================
import { ChakraProvider } from "@chakra-ui/react";

// custom theme
import { theme } from "./chakra_config.js";

// Browser Router
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

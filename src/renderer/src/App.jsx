import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { GlobalContextProvider } from "./Context/GlobalContext";
import { HomePage } from "./Pages/Home";
import { MessagingContextProvider } from "./Context/MessagingContext";
import { ColorContextProvider } from "./Context/ColorContext";

function App() {
  return (
    <GlobalContextProvider>
      <MessagingContextProvider>
          <ColorContextProvider>
            <HomePage />
          </ColorContextProvider>
      </MessagingContextProvider>
    </GlobalContextProvider>
  );
}

export default App;

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { GlobalContextProvider } from "./Context/GlobalContext";
import { HomePage } from "./Pages/Home";
import { MessagingContextProvider } from "./Context/MessagingContext";
import { TestingContextProvider } from "./Context/TestingContext";

function App() {
  return (
    <GlobalContextProvider>
      <MessagingContextProvider>
        <TestingContextProvider>
          <HomePage />
        </TestingContextProvider>
      </MessagingContextProvider>
    </GlobalContextProvider>
  );
}

export default App;

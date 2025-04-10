import { createContext, useMemo, useContext } from "react";
import { useTesting } from "../Hooks/useTesting";
import { GlobalContext } from "./GlobalContext";
import React from "react";

export const TestingContext = createContext({});

export const TestingContextProvider = ({ children }) => {
  const { vm } = useContext(GlobalContext);
  const { runTests } = useTesting();
  const value = useMemo(
    () => ({
      runTests,
    }),
    [runTests]
  );

  return (
    <TestingContext.Provider value={value}>{children}</TestingContext.Provider>
  );
};

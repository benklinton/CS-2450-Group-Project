import { createContext } from "react";
import React from "react";
// Create the context
export const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {
  // Handle primary color change
  const handlePrimaryColorChange = (e) => {
    document.documentElement.style.setProperty(
      "--primary-color",
      e.target.value
    );
  };

  // Handle secondary color change
  const handleSecondaryColorChange = (e) => {
    document.documentElement.style.setProperty(
      "--secondary-color",
      e.target.value
    );
  };

  return (
    <ColorContext.Provider
      value={{
        handlePrimaryColorChange,
        handleSecondaryColorChange,
      }}
    >
      <style>{`
        :root {
          --primary-color: #4C721D;
          --secondary-color: #d2e1b6;
        }
        .pback {
          background-color: var(--primary-color) !important;
        }
        .sback {
          background-color: var(--secondary-color) !important;
        }
      `}</style>
      {children}
    </ColorContext.Provider>
  );
};

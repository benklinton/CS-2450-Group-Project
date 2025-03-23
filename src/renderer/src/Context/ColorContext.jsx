import { createContext, useEffect } from "react";

// Create the context
export const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {
  // Only run on component mount to set initial values
  useEffect(() => {
    // Initial background color setup
    Array.from(document.getElementsByClassName('pback')).forEach((elem) => {
      elem.style.backgroundColor = "#191c1f"; // Primary color
    });
    document.getElementById("pcolor").value = "#191c1f"; // Set color input

    Array.from(document.getElementsByClassName('sback')).forEach((elem) => {
      elem.style.backgroundColor = "#5a6269"; // Secondary color
    });
    document.getElementById("scolor").value = "#5a6269"; // Set color input
  }, []); // Only run once when the component is mounted

  // Handle primary color change
  const handlePrimaryColorChange = (e) => {
    Array.from(document.getElementsByClassName('pback')).forEach((elem) => {
      elem.style.backgroundColor = e.target.value;
    });
  };

  // Handle secondary color change
  const handleSecondaryColorChange = (e) => {
    Array.from(document.getElementsByClassName('sback')).forEach((elem) => {
      elem.style.backgroundColor = e.target.value;
    });
  };

  return (
    <ColorContext.Provider
      value={{
        handlePrimaryColorChange,
        handleSecondaryColorChange,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

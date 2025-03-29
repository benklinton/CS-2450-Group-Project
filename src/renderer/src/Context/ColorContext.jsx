import { createContext} from "react";

// Create the context
export const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {
  // Handle primary color change
  const handlePrimaryColorChange = (e) => {
    document.documentElement.style.setProperty("--primary-color",e.target.value);
  };

  // Handle secondary color change
  const handleSecondaryColorChange = (e) => {
    document.documentElement.style.setProperty("--secondary-color",e.target.value);
  };

  return (
    <ColorContext.Provider
      value={{
        handlePrimaryColorChange,
        handleSecondaryColorChange
      }}
    >
      <style>{`
        :root {
          --primary-color: #191c1f;
          --secondary-color: #5a6269;
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

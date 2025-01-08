import React, { createContext, useState } from "react";

// Create the Context
export const ResponseContext = createContext();

// Create the Provider component
export const ResponseProvider = ({ children }) => {
  const [queryResponse, setQueryResponse] = useState(null);

  // Context value
  const contextValue = {
    queryResponse,
    setQueryResponse,
  };

  return (
    <ResponseContext.Provider value={contextValue}>
      {children}
    </ResponseContext.Provider>
  );
};

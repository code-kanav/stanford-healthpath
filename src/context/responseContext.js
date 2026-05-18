import React, { createContext, useState } from "react";

// Create the Context
export const ResponseContext = createContext();

// Create the Provider component
export const ResponseProvider = ({ children }) => {
  const [queryResponse, setQueryResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Context value
  const contextValue = {
    queryResponse,
    setQueryResponse,
    isLoading,
    setIsLoading,
  };

  return (
    <ResponseContext.Provider value={contextValue}>
      {children}
    </ResponseContext.Provider>
  );
};

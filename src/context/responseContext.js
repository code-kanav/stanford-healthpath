import React, { createContext, useState } from "react";

// Create the Context
export const ResponseContext = createContext();

// Create the Provider component
export const ResponseProvider = ({ children }) => {
  const [queryResponse, setQueryResponse] = useState(null);
  const [nextQueryResponse, setNextQueryResponse] = useState(null);
  const [imageResponse, setImageResponse] = useState(null);
  const [nextImageResponse, setNextImageResponse] = useState(null);

  // Context value
  const contextValue = {
    queryResponse,
    setQueryResponse,
    nextQueryResponse,
    setNextQueryResponse,
    imageResponse,
    setImageResponse,
    nextImageResponse,
    setNextImageResponse
  };

  return (
    <ResponseContext.Provider value={contextValue}>
      {children}
    </ResponseContext.Provider>
  );
};

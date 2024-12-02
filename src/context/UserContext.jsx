import React, { createContext, useState } from "react";

// Create the context
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // A simple state for theme
 

  // Toggle function to switch between 'light' and 'dark'
 const user = "hello"

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

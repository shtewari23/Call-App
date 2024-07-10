import React, { createContext, useState } from "react";

export const CallContext = createContext();

export const CallProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numbers, setNumbers] = useState([]);

  const addNumber = (number) => {
    setNumbers((prevNumbers) => [...prevNumbers, number]);
  };

  const setDefaultNumber = (number) => {
    // Implement set default number functionality
  };

  return (
    <CallContext.Provider
      value={{
        phoneNumber,
        setPhoneNumber,
        numbers,
        addNumber,
        setDefaultNumber,
      }}
    >
      {children}
    </CallContext.Provider>
  );
};

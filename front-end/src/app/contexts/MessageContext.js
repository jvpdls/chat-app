import { createContext } from "react";

export const MessageContext = createContext();

export const MessageProvider = ({ states, setStates, children }) => {
  return (
    <MessageContext.Provider value={{ states, setStates }}>
      {children}
    </MessageContext.Provider>
  );
};

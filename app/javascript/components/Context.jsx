import React, { useState } from "react";
import { createContext, useContext } from "react";

const GlobalContext = createContext();

// create custom hook
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = (props) => {
  const [name, setName] = useState("dayo");

  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default AppContext;

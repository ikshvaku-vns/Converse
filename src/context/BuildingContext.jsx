import { createContext } from "react";
import { useState } from "react";

export const BuildingContext = createContext();

const BuildingContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [clusterCount, setClusterCount] = useState(0);

  return (
    <BuildingContext.Provider
      value={{ count, setCount, clusterCount, setClusterCount }}
    >
      {children}
    </BuildingContext.Provider>
  );
};

export default BuildingContextProvider;

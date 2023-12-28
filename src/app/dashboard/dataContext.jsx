import React, { createContext, useContext, useState } from "react";
import { MyContext } from "./myContext";
import { ViewGridList } from "./viewGridList";

// export const DataContext = createContext(false);

function DataContextProvider() {
  const [text, setText] = useState("");

  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>
        <ViewGridList />
      </MyContext.Provider>
    </div>
  );
}

export default DataContextProvider;

// const useDataContext = () => {
//   return useContext(DataContext);
// };

// export default { DataContextProvider, useDataContext };

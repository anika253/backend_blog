import React, { createContext, useState } from "react";
import hello2 from "./hello2";
 export const loginContext = createContext();

const hello1 = () => {
  return (
    <loginContext.Provider value={anika}>
      <div>
        <hello2 />
      </div>
    </loginContext.Provider>
  );
};
export default hello1;

import React, { useContext } from "react";
import { loginContext } from "./hello1";
function hello3() {
  return <div>const login = useContext(loginContext); console.log(login);</div>;
}

export default hello3;

/*
 * @Author: Aiden
 * @Date: 2020-09-25 11:10:56
 * @LastEditTime: 2020-09-25 16:05:02
 * @LastEditors: Please set LastEditors
 * @Description: Main page
 * @FilePath: /shopping-cart-app/src/App.js
 */

import React from "react";
import Header from "./header";
import Signin from "./signin";

function App() {
  return (
    <div className="App">
      <Header />
      <Signin />
    </div>
  );
}

export default App;

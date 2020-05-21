import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";

import { App } from "./App";

ReactDOM.render(
  <HashRouter>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HashRouter>,
  document.getElementById("app")
);

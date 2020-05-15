import React from "react";
import { Home } from "containers";

import s from "./style.scss";

export const App = () => {
  return (
    <div className={s.main}>
      <Home />
    </div>
  );
};

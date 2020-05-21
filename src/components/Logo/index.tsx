import React from "react";
import { NavLink } from "react-router-dom";
import { useStyle } from "./style";

export function Logo() {
  const s = useStyle();

  return (
    <NavLink to="/" className={s.link}>
      <h1 className={s.logo}>Molie</h1>
    </NavLink>
  );
}

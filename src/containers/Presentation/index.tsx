import React from "react";
import { useLocation } from "react-router-dom";
import bannerInitial from "assets/images/banner-initial.png";
import { Logo } from "components/Logo";
import { Star } from "assets/svgs";
import { Login } from "./Login";
import { Welcome } from "./Welcome";

import { useStyles } from "./style";

export function Presentation() {
  const s = useStyles();
  const location = useLocation();

  return (
    <>
      <div className={s.containerImage}>
        <div className={s.containerLogo}>
          <Logo />
          <Star />
        </div>
        <img src={bannerInitial} className={s.banner} />
      </div>
      {location.pathname === "/login" ? <Login /> : <Welcome />}
    </>
  );
}

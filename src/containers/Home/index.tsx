import React from "react";
import { Button } from "@material-ui/core";
import bannerInitial from "assets/images/banner-initial.png";
import { Logo, Star } from "assets/svgs";

import s from "./style.scss";

export function Home() {
  return (
    <div className={s.home}>
      <div className={s.containerImage}>
        <div className={s.containerLogo}>
          <Logo />
          <Star />
        </div>
        <img src={bannerInitial} />
      </div>
      <div>
        <h1 className={s.title}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <h3 className={s.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
        <div className={s.footerContainer}>
          <Button variant="contained" color="primary">
            Fazer login
          </Button>
          <span>
            Não tem uma conta?{" "}
            <span className={s.createAccountBtn}>Criar conta</span>
          </span>
        </div>
      </div>
    </div>
  );
}

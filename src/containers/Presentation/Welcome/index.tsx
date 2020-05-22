import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import s from "./style.scss";

export function Welcome() {
  return (
    <div className={s.welcome}>
      <h1 className={s.title}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>
      <p className={s.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className={s.footerContainer}>
        <Link to="/apresentacao/entrar">
          <Button variant="contained" color="primary" className={s.btn}>
            Fazer login
          </Button>
        </Link>
        <span className={s.createAccountMessage}>
          Não tem uma conta?{" "}
          <Button className={s.createAccountBtn} variant="text">
            Criar conta
          </Button>
        </span>
      </div>
    </div>
  );
}

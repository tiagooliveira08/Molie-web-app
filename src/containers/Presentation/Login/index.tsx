import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { useStyles } from "./style";

export const Login = () => {
  const s = useStyles();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => console.log(values),
  });

  return (
    <div className={s.fieldContainer}>
      <TextField
        label="Usuário"
        value={formik.values.username}
        onChange={(e) => formik.setFieldValue("username", e.target.value)}
        className={s.input}
      />
      <TextField
        label="Senha"
        type="password"
        value={formik.values.password}
        onChange={(e) => formik.setFieldValue("password", e.target.value)}
        className={s.input}
      />
      <div className={s.btnContainer}>
        <span>
          Não tem uma conta?{" "}
          <Button
            variant="text"
            color="secondary"
            className={s.createAccountBtn}
          >
            Criar conta
          </Button>
        </span>
        <Button className={s.btnLogin}>Entrar</Button>
      </div>
    </div>
  );
};

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
    <div>
      <TextField
        value={formik.values.username}
        onChange={(e) => formik.setFieldValue("username", e.target.value)}
      ></TextField>
      <Button>Entrar</Button>
    </div>
  );
};

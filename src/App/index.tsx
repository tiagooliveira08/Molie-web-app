import React, { Suspense } from "react";
import { Routes } from "containers";
import { MuiThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "theme";

import { useStyles } from "./style";

export function App() {
  const s = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Suspense fallback={null}>
        <CssBaseline />
        <div className={s.main}>
          <Routes />
        </div>
      </Suspense>
    </MuiThemeProvider>
  );
}

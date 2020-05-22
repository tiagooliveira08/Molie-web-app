import { createMuiTheme } from "@material-ui/core";

const colors = { primaryColor: "#6277D7", secondary: "#FE9ECC" };

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primaryColor,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Nunito",
    },
  },
  overrides: {
    MuiFilledInput: {
      root: {},
    },
  },
  props: {
    MuiTextField: {
      variant: "outlined",
    },
    MuiButton: {
      variant: "contained",
      color: "primary",
    },
  },
});

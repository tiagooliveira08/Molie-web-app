import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  fieldContainer: {
    marginTop: theme.spacing(5),
  },
  input: {
    marginTop: theme.spacing(2),
    width: "100%",
  },
  createAccountBtn: {
    display: "block",
    padding: "0",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
  },
  btnLogin: {
    width: "143px",
  },
}));

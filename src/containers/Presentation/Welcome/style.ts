import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  title: {
    marginTop: "30px",
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "38px",
  },
  subTitle: {
    marginTop: "21px",
  },
  footerContainer: {
    marginTop: "58px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  createAccountMessage: {
    marginTop: "15px",
  },
  createAccountBtn: {
    color: "#fe9ecc",
  },
  btn: {
    width: "176px",
    height: "46px",
  },
}));

import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  link: {
    textDecoration: "unset",
  },
  logo: {
    fontSize: "38px",
    lineHeight: "52px",
    color: theme.palette.primary.main,
    textShadow: "0px 1px 3px rgba(0, 0, 0, 0.25)",
  },
}));

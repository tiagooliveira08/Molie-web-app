import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  containerImage: {
    margin: theme.spacing(0, -1),
  },
  containerLogo: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    marginTop: "50px",
    "& svg": {
      position: "relative",
      top: "-26px",
    },
  },

  banner: {
    width: "100%",
  },
}));

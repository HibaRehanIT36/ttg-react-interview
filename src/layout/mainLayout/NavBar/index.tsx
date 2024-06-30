import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { layoutsConfog } from "../../../config/settings";
import { useResponsive } from "../../../hooks/useResponsive";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 0,
    position: "fixed",
    bottom: "auto",
    right: 0,
    left: "auto",
    boxShadow: "none",
  },
  toolbar: {
    minHeight: `${layoutsConfog.HEADER.H_DESKTOP}px !important`,
    paddingLeft: "15px !important",
    paddingRight: "15px !important",
    backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const NavBar = ({ isClosed }: { isClosed: boolean }) => {
  const classes = useStyles();
  const lgUp = useResponsive("up", "lg");

  const width = lgUp && !isClosed
    ? `calc(100% - ${layoutsConfog.W_NaV_VERTICAL}px)`
    : "100%";

  return (
    <AppBar component="div" className={classes.appBar} style={{ width }}>
      <Toolbar className={classes.toolbar}></Toolbar>
    </AppBar>
  );
};

export default NavBar;

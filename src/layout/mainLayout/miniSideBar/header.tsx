import React from "react";
import logo from '../../../assets/img/logo.png';
import { makeStyles } from "@material-ui/core/styles";
import { Box, CardMedia, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  headerBox: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(7),
    marginLeft: theme.spacing(2),
  },
  cardMedia: {
    "&.MuiCardMedia-root": {
      width: "25px",
      zIndex: 10000,
    },
  },
  divider: {
    backgroundColor: theme.palette.secondary.light,
    margin: `${theme.spacing(2)}px auto`,
    width: "80%",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.headerBox}>
        <CardMedia
          component="img"
          src={logo}
          className={classes.cardMedia}
        />
      </Box>
      <Divider className={classes.divider} />
    </>
  );
};

export default Header;

import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink as RouterLink } from "react-router-dom";
import { Button, ListItem, ListItemIcon, Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingLeft: theme.spacing(2),
    height: 45,
    position: "relative",
    "& .side-icon": {
      color: theme.palette.primary.main,
    },
    "&.active": {
      backgroundColor: theme.palette.primary.main,
      "& .triangle": {
        display: "block",
      },
      "& .side-icon": {
        color: theme.palette.background.paper,
      },
    },
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

type propsType = {
  title: string;
  path: string;
  icon: ReactElement;
};

const SideBarItem = ({ title, path, icon }: propsType) => {
  const classes = useStyles();

  return (
    <ListItem
      component={RouterLink}
      to={path}
      exact
      activeClassName="active"
      className={classes.listItem}
    >
      <Tooltip title={title}>
        <Button className={classes.button}>
          <ListItemIcon className="side-icon">{icon}</ListItemIcon>
        </Button>
      </Tooltip>
    </ListItem>
  );
};

export default SideBarItem;

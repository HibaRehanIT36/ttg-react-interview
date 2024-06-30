import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink as RouterLink } from 'react-router-dom';
import { Box, Button, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  listItemText: {
    marginLeft: theme.spacing(-3),
    textTransform: 'capitalize',
    letterSpacing: 0.1,
    color: theme.palette.primary.main,
  },
  listItem: {
    paddingLeft: '19.4px',
    height: 45,
    position: 'relative',
    '& .side-icon': {
      color: `${theme.palette.primary.main}`,
    },
    '&.active': {
      backgroundColor: theme.palette.primary.main,
      '& .triangle': {
        display: 'block',
      },
      '& .side-icon': {
        color: theme.palette.background.paper,
      },
      '& .listItemText': {
        color: `${theme.palette.background.paper} !important`,
      },
    },
  },
  triangle: {
    width: 0,
    height: 0,
    borderTop: '25px solid transparent',
    borderRight: `15px solid ${theme.palette.background.default}`,
    borderTopRightRadius: '4px',
    borderBottom: '25px solid transparent',
    display: 'none',
    position: 'absolute',
    right: '-2px',
  },
  button: {
    '&:hover': {
      backgroundColor: 'transparent',
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
      <>
        <Box className={`triangle ${classes.triangle}`} />
        <Button className={classes.button}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="caption" className={`${classes.listItemText} listItemText`}>
                {title}
              </Typography>
            }
          />
        </Button>
      </>
    </ListItem>
  );
};

export default SideBarItem;

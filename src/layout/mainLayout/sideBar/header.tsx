import React from 'react';
import logo from '../../../assets/img/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CardMedia, Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  headerBox: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(7),
    marginLeft: theme.spacing(2.5),
  },
  cardMedia: {
    '&.MuiCardMedia-root': {
      width: '27px',
      zIndex: 10000,
    },
  },
  headerText: {
    textTransform: 'capitalize',
    textAlign: 'center',
    letterSpacing: 0.5,
    marginLeft: theme.spacing(1.3),
    color: theme.palette.secondary.light,
  },
  subHeaderBox: {
    flexDirection: 'row',
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(5.3),
  },
  subHeaderText: {
    textTransform: 'capitalize',
    color: theme.palette.secondary.light,
    marginLeft:'17px'
  },
  divider: {
    backgroundColor: theme.palette.secondary.light,
    margin: `${theme.spacing(2)}px auto`,
    width: '80%',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.headerBox}>
        <CardMedia component="img" src={logo} className={classes.cardMedia} />
        <Typography variant="body1" className={classes.headerText}>
          TabTabGo
        </Typography>
      </Box>
      <Box className={classes.subHeaderBox}>
        <Typography variant="caption" className={classes.subHeaderText}>
          admin dashboard
        </Typography>
      </Box>
      <Divider className={classes.divider} />
    </>
  );
};

export default Header;

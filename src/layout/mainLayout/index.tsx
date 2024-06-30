import React, { ReactElement } from 'react';
import Main from './main';
import NavBar from './NavBar';
import SideBar from './sideBar';
import MiniSideBar from './miniSideBar';
import { Box } from '@material-ui/core';
import { useBoolean } from '../../hooks/useBoolean';
import { makeStyles } from '@material-ui/core/styles';
import { useResponsive } from '../../hooks/useResponsive';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 1,
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
    },
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
}));

const MainLayout = ({ children }: { children: ReactElement }) => {
  const classes = useStyles();
  const lgUp = useResponsive('up', 'lg');
  const isClosed = useBoolean();

  return (

      <>
        <NavBar isClosed={isClosed.value} />

        <Box className={classes.root}>
          {lgUp && !isClosed.value ? (
            <SideBar handleToggle={isClosed.onTrue} />
          ) : (
            <MiniSideBar handleToggle={isClosed.onFalse} />
          )}
          <Main isClosed={isClosed.value}>{children}</Main>
        </Box>
      </>
  );
};

export default MainLayout;

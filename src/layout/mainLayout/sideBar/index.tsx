import React, { ReactElement } from 'react';
import Header from './header';
import SideBarItem from './sideBarItem';
import { useSideBarData } from './sideBarData';
import { Box, List } from '@material-ui/core';
import SidebarAccordion from './sidebarAccordion';
import { makeStyles } from '@material-ui/core/styles';
import Iconify from '../../../views/components/iconify';
import { layoutsConfog } from '../../../config/settings';
import { useResponsive } from '../../../hooks/useResponsive';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.dark,
    position: 'fixed',
    height: '100%',
    width: layoutsConfog.W_NaV_VERTICAL,
  },
  circleBackground: {
    content: `''`,
    position: 'absolute',
    width: '45px',
    height: '44px',
    borderRadius: '50%',
    boxShadow: '-20px -20px 0 #292733',
    top: layoutsConfog.HEADER.H_DESKTOP,
    left: layoutsConfog.W_NaV_VERTICAL,
  },
  iconify: {
    cursor: 'pointer',
    position: 'absolute',
    height: "24px",
    width: "24px",
    color: theme.palette.primary.main,
    bottom: layoutsConfog.HEADER.H_DESKTOP,
    left: `calc(${layoutsConfog.W_NaV_VERTICAL}px - 14px)`,
  },
  navBox: {
    marginTop: theme.spacing(3),
  },
  list :{
    width: '100%'
  }
}));

type itemType = {
  title: string;
  path: string;
  icon: ReactElement;
  id: number;
};

function SideBar({ handleToggle }: { handleToggle: () => void }) {
  const classes = useStyles();
  const data = useSideBarData();
  const lgUp = useResponsive('up', 'lg');

  return (
    <Box className={classes.root}>
      <Box className={classes.circleBackground} />
      {lgUp && (
        <Iconify
          icon={'iconamoon:arrow-left-6-circle-fill'}
          color="secondary.main"
          className={classes.iconify}
          onClick={handleToggle}
        />
      )}
      <Header />
      <Box mt={3} className={classes.navBox} component="nav">
        <SidebarAccordion>
          <List className={classes.list} >
            {data.map((item: itemType) => (
              <SideBarItem title={item.title} icon={item.icon} path={item.path} key={item.id} />
            ))}
          </List>
        </SidebarAccordion>
      </Box>
    </Box>
  );
}

export default SideBar;

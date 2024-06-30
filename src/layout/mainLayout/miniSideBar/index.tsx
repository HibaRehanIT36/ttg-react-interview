import { ReactElement } from 'react';
import Header from './header';
import SideBarItem from './sideBarItem';
import { Box, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSideBarData } from '../sideBar/sideBarData';
import Iconify from '../../../views/components/iconify';
import { layoutsConfog } from '../../../config/settings';
import { useResponsive } from '../../../hooks/useResponsive';


const useStyles = makeStyles((theme) => ({
  miniSideBar: {
    backgroundColor: theme.palette.secondary.dark,
    height: '100%',
    flexGrow: 1,
    minHeight: '100%',
    position: 'fixed',
    width: layoutsConfog.W_NaV_Mini,
  },
  boxDecoration: {
    content: `''`,
    position: 'absolute',
    width: '45px',
    height: '44px',
    borderRadius: '50%',
    boxShadow: '-20px -20px 0 #292733',
    top: layoutsConfog.HEADER.H_DESKTOP,
    left: layoutsConfog.W_NaV_Mini,
  },
  iconify: {
    cursor: 'pointer',
    position: 'absolute',
    height: "24px",
    width: "24px",
    color : theme.palette.primary.main,
    bottom: layoutsConfog.HEADER.H_DESKTOP,
    left: `calc(${layoutsConfog.W_NaV_Mini}px - 14px)`,
  },
  navList: {
    marginTop: theme.spacing(3),
    '& .MuiList-root': {
      marginTop: theme.spacing(-1),
    },
  },
}));

type itemType = {
  title: string;
  path: string;
  icon: ReactElement;
  id: number;
};

function MiniSideBar({ handleToggle }: { handleToggle: () => void }) {
  const classes = useStyles();
  const data = useSideBarData();
  const lgUp = useResponsive('up', 'lg');
  
  return (
    <Box className={classes.miniSideBar}>
      <Box className={classes.boxDecoration} />
      {lgUp && (
        <Iconify
          icon={'iconamoon:arrow-right-6-circle-fill'}
          color="secondary.main"
          width={22}
          className={classes.iconify}
          onClick={handleToggle}
        />
      )}
      <Header />
      <Box component="nav" className={classes.navList}>
        <List>
          {data.map((item: itemType) => (
            <SideBarItem title={item.title} icon={item.icon} path={item.path} key={item.id} />
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default MiniSideBar;

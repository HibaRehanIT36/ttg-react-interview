import { Box, BoxProps } from '@material-ui/core';
import { layoutsConfog } from '../../../config/settings';
import { useResponsive } from '../../../hooks/useResponsive';

function Main({
  isClosed,
  children,
  sx,
  ...other
}: BoxProps & { isClosed: boolean }) {

  const lgUp = useResponsive('up', 'lg');

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        flexDirection: 'column',
        pr: 3,
        pl: lgUp && !isClosed ? '280px' : 10.5,
        py: 2,
        mt: `${layoutsConfog.HEADER.H_DESKTOP_OFFSET}px`,
        width: lgUp && !isClosed ? `calc(100% - ${layoutsConfog.W_NaV_VERTICAL}px)` : ``,
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

export default Main; 
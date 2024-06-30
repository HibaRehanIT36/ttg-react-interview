import { forwardRef } from 'react';
import { Icon } from '@iconify/react';
import { Box } from '@material-ui/core';
import { genericIconifyProps } from '../../../types/iconify';



const Iconify = forwardRef<SVGElement, genericIconifyProps>(({ icon, width = 20, sx, ...other }, ref) => (
  <Box component={iconProps => <Icon icon={icon} ref={ref} {...iconProps} />} {...other} />
));

export default Iconify;

import React, { ReactElement } from 'react';
import theme from '../../../assets/jss/theme';
import { makeStyles } from '@material-ui/core/styles';
import Iconify from '../../../views/components/iconify';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  accordion: {
    '& .MuiAccordionDetails-root': {
      padding: 0,
    },
    '&.MuiAccordion-root': {
      boxShadow: 'none',
      backgroundColor: 'transparent',
    },
  },
  accordionSummary: {
    paddingRight: theme.spacing(1),
  },
  Box: {
    marginLeft: theme.spacing(1),
  },
  typography: {
    textTransform: 'capitalize',
    color: theme.palette.background.paper,
    marginLeft: theme.spacing(2),
  },
}));

type SidebarAccordionProps = {
  children: ReactElement;
};

const SidebarAccordion = ({ children }: SidebarAccordionProps) => {
  const classes = useStyles();

  return (
    <Accordion defaultExpanded className={classes.accordion}>
      <AccordionSummary
        expandIcon={
          <Iconify
            icon="ic:baseline-keyboard-arrow-down"
            color={theme.palette.background.paper}
            width={16}
          />
        }
        className={classes.accordionSummary}
      >
        <Box alignItems="center" className={classes.Box}>
          <Iconify icon="icon-park-solid:more-app" color="secondary.200" width={16} />
          <Typography variant="caption" className={classes.typography}>
            management
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default SidebarAccordion;

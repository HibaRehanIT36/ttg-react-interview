import { responsiveFontSizes } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles'

import { grey } from '@material-ui/core/colors';

const primary = '#09a2c5';
const secondary = '#f59230';

const theme = createTheme({
  typography: {
    fontFamily: 'Lato',
  },
  palette: {
    type: 'light',
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
      light :'#a7a6af',
      dark:'#292733'
    },
    error: {
      light: '#ef5350',
      main: '#f44336',
      dark: '#e53935',
    },
    warning: {
      light: '#ffa726',
      main: '#ff9800',
      dark: '#fb8c00',
    },
    success: {
      light: '#66bb6a',
      main: '#4caf50',
      dark: '#43a047',
    },
    info: {
      light: '#26c6da',
      main: '#00acc1',
      dark: '#00acc1',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.10)',
      hover: '#f6f0ff',
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.14)',
      disabled: 'rgba(0, 0, 0, 0.20)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
    background: {
      default : '#f2f3f9',
      paper:'#fff',
    },
    text: {
      primary: grey[50],
      secondary: '#111',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        '& button': {
          color: 'white',
        },
      },
    },
    MuiButton: {
      textPrimary: {
        color: primary,
      },
      outlinedPrimary: {
        color: primary,
      },
      contained: {
        '&.Mui-disabled': {
          opacity: 0.5,
        },
      },
    },
    MuiInputLabel: {
      shrink: {
        color: grey[400],
      },
    },
    MuiFormLabel: {
      root: {
        color: grey[400],
      },
    },
    MuiFormControl: {
      marginDense: {
        marginTop: 4,
        marginBottom: 4,
      },
    },
    MuiInput: {
      root: {
        color: 'black'
      },
      underline: {
        '&:after': {
          borderBottom: `2px solid ${primary}`,
        },
        // '&$focused:after': {
        //   borderBottomColor: `#10678c`,
        // },
        // '&:hover:not($disabled):not($focused):not($error):after': {
        //   borderBottom: `2px solid #eee`,
        // },
        // '&$disabled:before': {
        //   borderBottom: `1px dotted #aaa`,
        // },
      },
    },
    MuiFilledInput: {
      root: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        backgroundColor: grey[50],
        color: '#333333',
        '&:hover': {
          backgroundColor: `white !important`,
        },
        '&.Mui-focused': {
          backgroundColor: 'white',
          color: '#333333',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        color: 'black'
      },
      adornedEnd: {
        paddingRight: 4,
      },
    },
    MuiFormControlLabel: {
      label: {
        fontSize: 17,
        color: '#868686',
      },
    },
  },
});

theme.typography.caption = {
  fontSize: '0.8rem',
};

export default responsiveFontSizes(theme);

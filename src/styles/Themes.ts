import { createTheme } from '@mui/material/styles';

import { borderInput, borderRadius } from './themes/border';
import customColors from './themes/custom-colors'; //NOTE: This is colors of our project
import elevations from './themes/elevations';
import { fontFamily, fontSize, fontSizeIcon, fontWeight } from './themes/font';
import typography from './themes/typography';
import mainColors from './themes/v1/mainColors'; //NOTE: This is colors of our project
import openColors from './themes/v1/open-color.json'; //NOTE: Use open color at https://yeun.github.io/open-color/
import newColors from './themes/v2/colors.json';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Record<string, unknown>;
  }
  interface PaletteOptions {
    tertiary?: Record<string, unknown>;
  }
  interface TypeBackground {
    main: string;
  }
  interface Components {
    MuiClockPicker: Record<string, unknown>;
  }
  interface ThemeOptions {
    sideBar: Record<string, unknown>;
    drawer: Record<string, unknown>;
    navbar: Record<string, unknown>;
    openColors: Record<string, unknown>;
    newColors: Record<string, unknown>;
    mainColors: Record<string, unknown>;
    customColors: Record<string, unknown>;
    globalColors: Record<string, unknown>;
    fontSize: Record<string, unknown>;
    fontSizeIcon: Record<string, unknown>;
    fontWeight: Record<string, unknown>;
    borderInput: Record<string, unknown>;
    borderRadius: Record<string, unknown>;
    transitionDefault: string;
    boxShadowDefault: string;
    elevations: Record<string, unknown>;
  }
}

// A custom theme for this app
export const themes = {
  palette: {
    primary: {
      main: newColors.gray[800],
      light: newColors.gray[500],
      dark: newColors.gray[900],
      contrastText: openColors.white,
    },
    secondary: {
      main: newColors.primary[500],
      light: newColors.primary[50],
      dark: newColors.primary[800],
      contrastText: openColors.white,
    },
    tertiary: {
      main: mainColors.primary3[0],
      light: mainColors.primary3[1],
      dark: mainColors.primary3[2],
      contrastText: openColors.white,
    },
    error: {
      main: mainColors.red[0],
      light: mainColors.red[1],
      dark: mainColors.red[2],
      contrastText: openColors.white,
    },
    background: {
      default: openColors.white,
      main: mainColors.primary1[0],
    },
  },
  typography: {
    fontFamily,
    fontSize: 15,
    // new system
    ...typography,
    // old system
    h1: {
      fontSize: fontSize.xxLarge,
      fontWeight: fontWeight.bold,
    },
    h2: {
      fontSize: fontSize.xLarge,
      fontWeight: fontWeight.normal,
    },
    h3: {
      fontSize: fontSize.large,
      fontWeight: fontWeight.semi,
    },
    h4: {
      fontSize: fontSize.xMedium,
      fontWeight: fontWeight.normal,
    },
    h5: {
      fontSize: fontSize.medium,
      fontWeight: fontWeight.semi,
    },
    h6: {
      fontSize: fontSize.medium,
      fontWeight: fontWeight.normal,
    },
    subtitle1: {
      fontSize: fontSize.normal,
      color: newColors.gray[800],
    },
    subtitle2: {
      fontSize: fontSize.small,
      color: newColors.gray[800],
    },
    body1: {
      fontSize: fontSize.normal,
      fontWeight: fontWeight.normal,
      lineHeight: '24px',
    },
    body2: {
      color: newColors.gray[900],
      fontSize: fontSize.normal,
      fontWeight: fontWeight.normal,
      lineHeight: '20px',
    },
  },
  spacing: 8,
  sideBar: {
    openWidth: 300,
    width: 72,
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            webkitBoxShadow: '0 0 0 1000px white inset',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiClockPicker: {
      styleOverrides: {
        root: {
          '& .MuiButtonBase-root': {
            fontSize: 'inherit',
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  drawer: {
    width: 1200,
  },
  navbar: {
    gradebook: 120,
    default: 126,
  },
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    values: {
      xs: 480,
      sm: 600,
      md: 960,
      lg: 1366,
      xl: 1920,
    },
  },
  // Default z-index scale in Material-UI that has been designed to properly layer drawers, modals, snackbars, tooltips, and more.
  zIndex: {},
  // ===COLORS===
  openColors,
  newColors, /// New color System
  mainColors,
  customColors,
  globalColors: {
    placeholderColor: newColors.gray[500],
  },
  // ===FONT SIZE===
  fontSize,
  // ===FONT SIZE ICON===
  fontSizeIcon,
  // ===FONT WEIGHT===
  fontWeight,
  // ===FONT WEIGHT===
  borderInput,
  borderRadius,
  // ===TRANSITION DEFAULT===
  transitionDefault: 'all 200ms ease-in-out',
  // ===BOX SHADOW DEFAULT===
  boxShadowDefault: 'rgba(235,241,249,1) 0 0 0 3px',
  elevations,
};

export default createTheme(themes);

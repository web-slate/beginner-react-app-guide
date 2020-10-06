# Material - UI Framework

#### Install Material UI Libraries.
Below modules are separated in to scoped modules.  
What is Scope modules - A scope allows you to create a package with the same name as a package created by another user or Org without conflict, Refer - https://docs.npmjs.com/about-scopes / https://docs.npmjs.com/using-npm/scope.html   

```
npm i -S @material-ui/core @material-ui/icons @material-ui/lab @material-ui/styles
```

#### Theme Settings.
This is mainly to customize the color, spacing, fonts etc.

##### Breakpoints.
Create Breakpoints File in `src/theme/palette.js`.  
What is Breakpoints - These are various device width to detect whether its Tablet, Mobile or Desktop.  
Refer - https://material-ui.com/customization/breakpoints/  

```
export default {
  values: {
    xs: 0,
    sm: 360,
    md: 600,
    lg: 1024,
    xl: 1280,
  }
};
```

##### Palette
Create Pallette File in `src/theme/palette.js`.

```
import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';
const baseColor = '#DE632C';

export default {
  black,
  white,
  baseColor,
  blockBorder: '#E7E9EB',
  primary: {
    contrastText: white,
    dark: colors.indigo[900],
    main: colors.indigo[500],
    light: colors.indigo[100]
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue['A400'],
    light: colors.blue['A400']
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: '#385167',
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  background: {
    default: '#F4F6F8',
    paper: 'white'
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
};
```
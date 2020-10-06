# Material - UI Framework

## Install Material UI Libraries.
Below `material-ui` modules are separated in to scoped modules.  
What is Scope modules - A scope allows you to create a package with the same name as a package created by another user or Org without conflict, Refer - https://docs.npmjs.com/about-scopes / https://docs.npmjs.com/using-npm/scope.html   

```
npm i -S @material-ui/core @material-ui/icons @material-ui/lab @material-ui/styles
```

## Theme Settings.
Now we installed `material-ui` module which will give predefined styles, colors etc.  
So, we have to customize as per our App design and colors.  
These files is mainly to customize the color, spacing, fonts etc.

### Breakpoints.
Create Breakpoints File in `src/theme/breakpoints.js`.  
This is mainly to detect device by their width. This is also called RWD (Responsive Web Design).  
What is Breakpoints - These are various device width to detect whether its Tablet, Mobile or Desktop.  
Refer - https://material-ui.com/customization/breakpoints/  

```
export default {
  values: {
    xs: 0, // Extra Small.
    sm: 360, // Small - Mobiles
    md: 600, // Medium - Tablet Potrait
    lg: 1024, // Large - Tablet Landscape
    xl: 1280, // Extra Large Desktop
  }
};
```

### Palette
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

### Typography
Create Typography File in `src/theme/typography.js`.  
Typography is for various Text in App similar h1-h6, span etc. 

```
import palette from './palette';

export default {
  h1: {
    color: palette.text.primary,
  },
  h2: {
    color: palette.text.primary,
  },
  h3: {
    color: palette.text.primary,
  },
  h4: {
    color: palette.text.primary,
  },
  h5: {
    color: palette.text.primary,
    lineHeight: 2
  },
  h6: {
    color: palette.text.primary,
    lineHeight: 2
  },
  subtitle1: {
    color: palette.text.primary,
  },
  subtitle2: {
    color: palette.text.secondary,
  },
  body1: {
    color: palette.text.primary,
  },
  body2: {
    color: palette.text.secondary,
  },
  button: {
    color: palette.text.primary,
  },
  caption: {
    color: palette.text.secondary,
  },
  overline: {
    color: palette.text.secondary,
  }
};
```

### Create Your Theme extended from `material-ui`.
Create Theme File / Main index in `src/theme/index.js`.  
This file will include pallete, breakpoints, typography file. 
```
import { createMuiTheme } from '@material-ui/core';

import palette from './palette';
import breakpoints from './breakPoints';
import typography from './typography';

const theme = createMuiTheme({
  breakpoints,
  palette,
  typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});

export default theme;
```

## Lets add our First `material-ui` Component. for example `Header` app header.
Create common component in `src/components/Header.js`  
App Bar - https://material-ui.com/components/app-bar/#simple-app-bar  

```
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.white
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Simple Banking App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
```

## Add Theme Provider in `App,js`.
Now time to import the theme and our first styled material component in our App.  

```
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

// Component.
import Header from './components/Header';
```

## Add `ThemeProvider` below `Fragment` in `App,js`.  

```
export default function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        <Router history={browserHistory}>
          <Switch>
            <Route exact path="/">
              <SignIn />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Fragment>
  );
};
```
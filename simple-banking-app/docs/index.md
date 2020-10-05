# Simple Banking App

## Make sure you have above Node 12 and VSCode.

### Create directory `simple-banking-react-app`.
```
mkdir simple-banking-react-app
```

#### Set Up Base App and type details and type yes and hit enter.
```
npm init
```

#### Install React and React DOM.
These modules are installed as dependency module and update `package.json`.
What is depedency module which is shipped with web bundle which is used in website.
```
npm install -S react react-dom
```

#### Install Babel, Webpack and HTML Copier
These modules are installed as dev dependency module and update `package.json`.
What is dev depedency module which is help to generate web bundle but not shipped with bundle.
```
npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server
```

### Add `.gitignore` in the root.
This is important to skip `node_modules` out of code repo.
`public` is directory of our own name some places can be `build`, `dist`.
```
node_modules
public
```

### Add `.babelrc` in the root.
This file is RC file for babel Transpiler.
What is babel? Babel is transpile the latest JS Code in to browser compatible JS in order to support all browser.

```
{
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "node": "current"
          }
        }
      ],
      "@babel/preset-react"
    ]
}
```

### Create Webpack Configuration in root `webpack.config.js` to generate Web build.
First import neccassary libraries.
Note: Don't copy below code.
```
const webpack = require('webpack');
const path = require('path');

// WebPack Plugins.
const HtmlWebpackPlugin = require('html-webpack-plugin');
```

Add Basic export object.
Note: Don't copy below code.
```
module.exports = {

};
```

Add Entry File which will be called to start build the App.
`entry` - Below file has to be created later called Entry file.
Note: Don't copy below code.
```
module.exports = {
  entry: './src/index.js',
};
```

Add Babel loader to convert your JS file to browser supported and minify it.
`module` - This loader is already installed as dev dependency initially.
Note: Don't copy below code.
```
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: [/node_modules/],
        use: ['babel-loader']
      },
    ]
  },
};
```

`resolve` - Add Extension Support for JS and other files.
Note: Don't copy below code.
```
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: [/node_modules/],
        use: ['babel-loader']
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js'],
  },
};
```

`output` - Generate Build Directory to `public` this we had as gitignore path initially.
Generate file `simple-banking-app.js`.
Note: Don't copy below code.
```
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: [/node_modules/],
        use: ['babel-loader']
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'simple-banking-app.js',
    chunkFilename: '[name].js'
  },
};
```

`plugins` - Add Plugin to copy your HTML from `static/index.html` directory to build directory.
Note: Don't copy below code.
```
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: [/node_modules/],
        use: ['babel-loader']
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'simple-banking-app.js',
    chunkFilename: '[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    // Take Reference of HTML File.
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'static/index.html'),
    }),
  ],
};
```

`devServer` - Run the Local Server to serve from `static` directory.
Please copy this code.
```
const webpack = require('webpack');
const path = require('path');

// WebPack Plugins.
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: [/node_modules/],
        use: ['babel-loader']
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'simple-banking-app.js',
    chunkFilename: '[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    // Take Reference of HTML File.
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'static/index.html'),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './static',
    hot: true,
  }
};
```

### Basic `static/index.html` App HTML File which will be copied during Build Time.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <title>Simple Banking App</title>
</head>

<body>
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
    <div id="simple-banking-app"></div>
</body>

</html>
```

### Create your First React Component which is Functional Components.
`src/App.js`.
#### Simple Evaluation on React Components.  
1. Class Component with Life Cycle Method on every State Update.  
2. Functional Component which was stateless Component.  
3. Hooks Introduced to Support State in React Component.  
```
import React, { Fragment } from 'react';

export default function App() {
  return (
    <Fragment>
      Simple Banking App goes here
    </Fragment>
  );
};
```

### Create `src/index.js` will be read by Local Server and Webpack Build.
`src/index.js`.
```
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('simple-banking-app')
);
```

### Update Package.json in scripts section
```
"build": "webpack --mode production --progress",
```

### Run Build
Go to the root directory and run command and that will generate directory `public` and this has the web bundles which need to be hosted.
```
npm run build
```

### This below is only for Github.io Demo not for the Real Time Development use case.
Update `.gitignore` in the root.
This is important to skip `node_modules` out of code repo.
`public` line is removed now.
```
node_modules
```

### Publish in Github Pages.
1. Go to your Repo.  
2. Click on Settings.  
3. Scroll to GitHub Pages.  

![image](https://user-images.githubusercontent.com/1652629/95079465-3cdc2700-0749-11eb-8e62-a6b3e28029d3.png)

#### Update `webpack.config.js` to generate Web build directory as `docs` so that GitHub will understand automatically.
```
output: {
  path: path.resolve(__dirname, 'docs'),
  filename: 'simple-banking-app.js',
  chunkFilename: '[name].js'
},
```

# documentation

From: [get started](https://webpack.js.org/guides/getting-started/)

DevServer: [get started](https://webpack.js.org/configuration/dev-server/)

React From Scratch:
- [from medium](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)
- [youtube | Webpack 2 - How to install React and Babel](https://www.youtube.com/watch?v=zhA5LNA3MxE&feature=youtu.be)

## description

this repo generate a webpack able to:
- generate html with hash
- use sass as external file
- minify css file
- convert ES6 to ES5
- use DevServe to preview the page
- start use react

we install React From Scratch

## install

### with yarn
if you have `package.json`

run `yarn`

in case you need install yarn: `npm i yarn`

### step by step
otherwise run the follows commands

```
npm init -y
npm install webpack webpack-cli --save-dev
npm install lodash --save
npm install html-webpack-plugin  --save-dev
npm install css-loader --save-dev
npm install style-loader --save-dev
npm install sass-loader node-sass webpack --save-dev

# add as external file
npm install mini-css-extract-plugin --save-dev
npm install uglifyjs-webpack-plugin --save-dev
npm install optimize-css-assets-webpack-plugin --save-dev

# image file optimizer
npm install image-webpack-loader --save-dev

# to convert ES6 to ES5
npm install -D babel-loader @babel/core @babel/preset-env webpack

# DevServer
npm install webpack-dev-server --save-dev
```

React
```
npm install @babel/preset-react
npm install --save react react-dom
```

Bootstrap 4 [here](https://github.com/shakacode/bootstrap-loader)
```
npm install bootstrap-loader
npm install resolve-url-loader@*
npm install url-loader@*

# v4
npm install --save-dev bootstrap
npm install jquery@3.3.1
npm install popper.js@^1.14.7
npm install --save-dev imports-loader exports-loader
npm install --save-dev postcss-loader

# optimization
npm i -D purify-css
npm install -D purifycss-webpack
```

## command line

### build
`npm run build`

### production
`webpack-cli -p` or `npm run prod`

### develop
`webpack-cli -d`

### Dev Server
`npm run dev`

### develop + watch
`webpack-cli -d --watch`

# documentation

From: [get started](https://webpack.js.org/guides/getting-started/)

DevServer: [get started](https://webpack.js.org/configuration/dev-server/)

## description

this repo generate a webpack able to:
- generate html with hash
- use sass as external file
- minify css file
- convert ES6 to ES5
- use DevServe to preview the page

## install

run the follows commands

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
# to convert ES6 to ES5
npm install -D babel-loader @babel/core @babel/preset-env webpack
# DevServer
npm install webpack-dev-server --save-dev
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

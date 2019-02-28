#documentation#

From: [get started](https://webpack.js.org/guides/getting-started/)

##installa##

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
```

## command line

### build
`npm run build`

### production
`webpack-cli -p`

### develop
`webpack-cli -d`

### develop + watch
`webpack-cli -d --watch`

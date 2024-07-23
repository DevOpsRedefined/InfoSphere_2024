const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");

module.exports = {
  ...defaultConfig,

  entry: {
    /****
     *
     * it was for navigation - link block but save is not workiung
     * so we are dpoing stuff from core-navigation-link +  functions.php
    //  * "blockExp1/block-mynamespace-myblock": "./src/blocks-js/block-mynamespace-myblock/block-mynamespace-myblock.js",
     *
     * ****/
    "blockExp2/block-structure":
      "./src/blocks-js/block-structure/block-structure.js",

    "blocks-js/core-navigation-link/core-navigation-link":
      "./src/blocks-js/core-navigation-link/core-navigation-link.js",

    "blocks-js/custom-slider/custom-slider":
      "./src/blocks-js/custom-slider/custom-slider.js",
  },
  output: {
    path: path.join(__dirname, "./build-blocks"),
    filename: "[name].js",
  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx)$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: "babel-loader", // Optional: If you decide to add Babel later
  //         options: {
  //           presets: ["@babel/preset-env", "@babel/preset-react"],
  //         },
  //       },
  //     },
  //   ],

  // },
  // resolve: {
  //   extensions: [".js", ".jsx"],
  //   modules: [path.join(__dirname, "./build-blocks"), "node_modules"],
  // },
  // externals: {
  //   "@wordpress/blocks": ["wp", "blocks"],
  //   "@wordpress/i18n": ["wp", "i18n"],
  //   "@wordpress/components": ["wp", "components"],
  //   "@wordpress/blockEditor": ["wp", "blockEditor"],
  //   "@wordpress/props": ["wp", "props"],
  //   "@wordpress/element": ["wp", "element"],
  //   "@wordpress/data": ["wp", "data"],
  // },

  externals: {
    "@wordpress/blocks": "wp.blocks",
    "@wordpress/block-editor": "wp.blockEditor",

    "@wordpress/i18n": "wp.i18n",
    "@wordpress/components": "wp.components",
    "@wordpress/blockEditor": "wp.blockEditor",
    "@wordpress/element": "wp.element",
    "@wordpress/compose": "wp.compose",
    "@wordpress/hooks": "wp.hooks",
    "@wordpress/data": "wp.data",
  },
};

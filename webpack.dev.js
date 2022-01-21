const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  entry: "./example/app.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "demo"),
    clean: true,
  },
  devtool: "inline-source-map",
  plugins: [new HtmlWebpackPlugin({ template: "./example/index.html" })],
});

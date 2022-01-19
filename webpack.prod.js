const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  entry: "./src/components/PhotoGallery.tsx",
  output: {
    globalObject: "this",
    library: "PhotoGallery",
    libraryTarget: "umd",
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
});

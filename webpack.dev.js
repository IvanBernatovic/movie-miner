const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const path = require("path")

module.exports = merge(common, {
  mode: "development",
  devServer: {
    open: true,
    contentBase: path.join(__dirname, "dist"),
    stats: "minimal",
    hot: true,
    historyApiFallback: true
  },
  devtool: "inline-source-map",
})

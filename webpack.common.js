const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require("path")
const Dotenv = require("dotenv-webpack")
const webpack = require("webpack")
const WebpackCleanupPlugin = require("webpack-cleanup-plugin")

module.exports = {
  context: __dirname,
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "eslint-loader",
            options: {
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
      environment: process.env.NODE_ENV,
    }),
    new Dotenv(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    new WebpackCleanupPlugin({
      exclude: ["*.txt", "*.png", "*.ico", "*.txt", "site.webmanifest", ".gitignore"],
    }),
  ],
}

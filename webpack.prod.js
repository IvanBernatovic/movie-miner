const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const WorkboxPlugin = require("workbox-webpack-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = merge(common, {
  mode: "production",
  devtool: "hidden-source-map",
  optimization: {
    minimize: true,
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new WorkboxPlugin.GenerateSW({
      // Do not precache images
      exclude: [/\.(?:png|jpg|jpeg|svg)$/],

      // Define runtime caching rules.
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|manifest)$/,
          handler: "CacheFirst",
          options: {
            cacheName: "images",
            expiration: {
              maxEntries: 40,
            },
          },
        },
        {
          urlPattern: "https://api.themoviedb.org/3/.+",
          handler: "NetworkFirst",
          method: "GET",
          options: { cacheableResponse: { statuses: [0, 200] } },
        },
      ],
    }),
    new BundleAnalyzerPlugin(),
  ],
})

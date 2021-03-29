const { ESBuildPlugin, ESBuildMinifyPlugin } = require('esbuild-loader');
const path = require('path');

module.exports = {
  entry: {
    index: path.resolve(__dirname, `./src/index.js`),
  },
  output: {
    filename: "js/[name].js",
    chunkFilename: "js/[name].js"
  },
  externals: {
    $: '$',
    jquery : 'jQuery'
  },
  plugins: [
    new ESBuildPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015'
      }),
    ],
  },
}

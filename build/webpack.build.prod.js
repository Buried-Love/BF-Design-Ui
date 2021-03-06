const path = require('path')
// const webpack = require('webpack');
const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.build.base.js')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

process.env.NODE_ENV = 'production'

module.exports = merge(webpackBaseConfig, {
  mode: 'none',
  devtool: 'source-map',
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'bf-design-ui.min.js',
    library: 'BFDESIGN',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
  },
  plugins: [
    // // @todo
    // new webpack.DefinePlugin({
    //     'process.env.NODE_ENV': '"production"'
    // }),
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: true,
    }),
    new CompressionPlugin({
      filename: '[path][base].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
})

const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/bf-design-ui' : '/',
  runtimeCompiler: true,
  assetsDir: 'static',
  configureWebpack: {
    entry: path.resolve(__dirname, './docs/main.js'),
    resolve: {
      alias: {
        'bf-design-ui': path.resolve(__dirname, './'),
        packages: path.resolve(__dirname, './packages'),
        examples: path.resolve(__dirname, './docs'),
        main: path.resolve(__dirname, './src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                compilerOptions: {
                  preserveWhitespace: false,
                },
              },
            },
            // {
            //   loader:
            // },
          ],
        },
      ],
    },
    devServer: {
      host: 'localhost',
    },
  },
}

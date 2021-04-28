const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Keep for later...
// ^^^^^^^^^^^^^^^^^^^^^
// Component Data - TODO: make this dynamic via nodes filesystem
// const components = require('./src/data/components');

// const slicesArray = []
// const entryObject = {}

// Will just run the basic index.js/main webpack functionality if no custom components found
// if (!components.length > 0) return;

// components.forEach((component, index) => {
//   console.log('component: ', component)

//   slicesArray.push({
//     title: `${component.name} - ${index} - Web Components`,
//     filename: `components/${component.name}/${component.name}.html`,
//     name: component.name,
//   })
// })

// components.map(component => {
//   let name = component.name
//   console.log('name: ', component.src)
//   return entryObject[name] = component.src
// })

module.exports = {
  entry: {
    app: "./src/App.js",
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    // default output function for htmlWebpackPlugin
    new HtmlWebpackPlugin({
      template: "assets/client/index.html",
    }),
    // ...slicesArray.map((slice, i) => {
    //   return new HtmlWebpackPlugin({
    //     title: slice.title,
    //     filename: slice.filename,
    //     chunks: [slice.name],
    //   })
    // })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
}

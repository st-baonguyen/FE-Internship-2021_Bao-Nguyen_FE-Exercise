const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
  module: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname)
  },  
  module:{
    rules:[
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: ["babel-loader"] 
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin ({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 3001,
    hot: true,
    watchContentBase: true,
    historyApiFallback: true,
    open: true
  },
 }

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    home: './src/typescript/pages/addToCart.ts',
    cart: './src/typescript/pages/cart.ts',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['home'],
      template: 'src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'cart.html',
      chunks: ['cart'],
      template: 'src/cart.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    // publicPath: 'src',
    filename: '[name].js',
    path: path.resolve(__dirname),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],        
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],        
      },
      { 
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            'loader': 'url-loader',
          }
        ]   
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 3001,
    hot: true,
    watchContentBase: true,
    historyApiFallback: true,
    open: true
  },
};

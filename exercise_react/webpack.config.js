const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname)
  },  
  module:{
    rules:[
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
        test: /\.(ts|tsx)$/, 
        exclude: /node_modules/, 
        use: ['babel-loader', 'ts-loader'] 
      },
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
    new MiniCssExtractPlugin(),
  ],

  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
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
 }

module.exports = {
  entry: ['./client/index.js'],
  mode: 'development',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':src'],
          },
        },
      },
      { test: /\.(mov|mp4)$/, loader: 'url-loader' },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

const path = require('path');

module.exports = {
  entry: './src/index.jsx', // Entry point of your app
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply Babel to both .js and .jsx files
        exclude: /node_modules/, // Ignore node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel loader to transpile files
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Automatically resolve these extensions
  },
  devServer: {
    static: './dist', // Where the static files will be served from
  },
};

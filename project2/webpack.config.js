module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './index.js',
  },
  output: {
    path: __dirname + '/../build/www',
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // rule for .js files        
        exclude: /node_modules/,
        loader: "babel-loader" // name of the loader   
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', // order is important !
          'css-loader'] // this is loaded first
      }
    ]
  },
};
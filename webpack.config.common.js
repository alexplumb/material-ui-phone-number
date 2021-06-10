const path = require('path');

const ROOT_PATH = path.resolve(__dirname);

// Common configuration settings
module.exports = {
  entry: {
    'material-ui-phone-number': path.resolve(ROOT_PATH, 'src/index.js'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: 'index.js',
    library: 'MaterialUiPhoneNumber',
    umdNamedDefine: true,
    globalObject: `(typeof self !== 'undefined' ? self : this)`, // eslint-disable-line
    libraryTarget: 'umd',
    futureEmitAssets: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(ROOT_PATH, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: [
              ['@babel/plugin-proposal-class-properties', { loose: false }],
              '@babel/plugin-proposal-object-rest-spread',
              'lodash',
            ],
          },
        },
      },
      {
        test: /\.png.*$/,
        use: ['url-loader?limit=100000&mimetype=image/png'],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ],
      },
    ],
  },
};

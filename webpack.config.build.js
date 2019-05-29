const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

const ROOT_PATH = path.resolve(__dirname);

module.exports = merge(common, {
  mode: 'production',
  entry: {
    'material-ui-phone-number': path.resolve(ROOT_PATH, 'src/index.js'),
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: 'index.js',
    library: 'MaterialUiPhoneNumber',
    umdNamedDefine: true,
    globalObject: `(typeof self !== 'undefined' ? self : this)`, // eslint-disable-line
    libraryTarget: 'umd',
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_',
      },
    },
    '@material-ui/core',
    /@material-ui\/core\/*./,
    '@material-ui/styles',
    /@material-ui\/styles\/*./,
    'classnames',
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
      __DEV__: false,
    }),
  ],
});

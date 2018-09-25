const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const TARGET = process.env.TARGET;
const ROOT_PATH = path.resolve(__dirname);

//Common configuration settings
const common = {
  entry: path.resolve(ROOT_PATH, 'src/index.js'),
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: 'index.js'
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
              'react-hot-loader/babel',
            ],
          },
        },
      },
      {
        test: /\.png.*$/,
        use: 'url-loader?limit=100000&mimetype=image/png',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ],
      }
    ]
  }
};

//Development configuration settings
if (TARGET === 'dev') {
  module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': 'content-type,authorization,accept',
      },
      port: 8181,
      inline: true,
      historyApiFallback: true,
      clientLogLevel: 'none',
      open: true,
      contentBase: 'dist',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development')
        },
        '__DEV__': true
      })
    ]
  });
}

//Production configuration settings
if (TARGET === 'build') {
  module.exports = merge(common, {
    mode: 'production',
    entry: {
      'material-ui-phone-input': path.resolve(ROOT_PATH, 'src/index.js')
    },
    output: {
      path: path.resolve(ROOT_PATH, 'dist'),
      filename: 'index.js',
      library: 'MaterialUiPhoneInput',
      libraryTarget: 'umd'
    },
    externals: [{
      'lodash': 'lodash',
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              // Disabled because of an issue with Uglify breaking seemingly valid code:
              // https://github.com/facebook/create-react-app/issues/2376
              // Pending further investigation:
              // https://github.com/mishoo/UglifyJS2/issues/2011
              comparisons: false,
            },
            output: {
              comments: false,
              // Turned on because emoji and regex is not minified properly using default
              // https://github.com/facebook/create-react-app/issues/2488
              ascii_only: true,
            },
          },
          // Use multi-process parallel running to improve the build speed
          // Default number of concurrent runs: os.cpus().length - 1
          parallel: true,
          // Enable file caching
          cache: true,
          sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin(),
      ],
      // Automatically split vendor and commons
      // https://twitter.com/wSokra/status/969633336732905474
      // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
      splitChunks: {
        chunks: 'all',
        name: 'vendors',
      },
      // Keep the runtime chunk seperated to enable long term caching
      // https://twitter.com/wSokra/status/969679223278505985
      runtimeChunk: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        },
        '__DEV__': false
      }),
    ]
  });
}

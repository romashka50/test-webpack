const express = require('express');
const path = require('path');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  const webpackDevMiddleWare = require('webpack-dev-middleware');
  // eslint-disable-next-line
  const webpack = require('webpack');
  // eslint-disable-next-line
  const webpackConfig = require('./webpack.config');

  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleWare(compiler));
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(process.env.PORT || 3050, () => console.log('Leastning...'));

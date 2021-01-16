require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('regenerator-runtime/runtime.js');

require('./server');

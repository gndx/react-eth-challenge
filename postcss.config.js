const presets = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');

module.exports = {
  plugins: [presets, autoprefixer, nested],
};

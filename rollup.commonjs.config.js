import babel from 'rollup-plugin-babel';
const banner = `
/*!
 * Copyright 2016, nju33
 * Released under the MIT License
 * https://github.com/totora0155/scrollbaz.js
 */
`;

export default {
  banner: banner.trim(),
  entry: 'lib/scrollbaz.js',
  format: 'umd',
  dest: 'dist/scrollbaz.js',
  moduleName: 'selectorParse',
  plugins: [
    babel()
  ]
};

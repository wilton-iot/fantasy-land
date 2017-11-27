define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
'use strict';

const fl = require('fantasy-land/');
const equality = (x, y) => typeof x[fl.equals] === 'function' ? x[fl.equals](y) : x === y;
const lte = (x, y) => {
  if (typeof y[fl.lte] === 'function') return y[fl.lte](x);

  const typeX = typeof x;
  const typeY = typeof y;
  return typeX === typeY && (typeX === 'string' || typeX === 'number') && x <= y;
};

module.exports = {
  equality,
  lte,
};

return module.exports;});

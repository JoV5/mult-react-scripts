// @remove-file-on-eject
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';

const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [
    [
      "es2015",
      {
        modules: false
      }
    ],
    "stage-0",
    "react"
  ],
  plugins: [
    "transform-es2015-modules-commonjs"
  ],
  babelrc: false,
});

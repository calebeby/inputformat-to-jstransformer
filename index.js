'use strict';

var dictionary = require('./dictionary.json');
var requireOne = require('require-one');

/**
 * Load the first available JSTransformer from the given output format.
 *
 * @return The transformer; false otherwise.
 */
module.exports = function outputFormatToJsTransformer (outputFormat) {
  if (outputFormat in dictionary) {
    // Attempt to load one of the packages from the dictionary.
    try {
      return requireOne(dictionary[outputFormat]);
    } catch (e) {
      return false;
    }
  }
  return false;
};

module.exports.dictionary = dictionary;

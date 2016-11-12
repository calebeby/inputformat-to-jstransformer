'use strict';

var dictionary = require('./dictionary.json');

/**
 * Returns a list of JSTransformers from the given output format.
 *
 * @return an array of the names of applicable transformers; false otherwise.
 */
module.exports = function outputFormatToJsTransformer (outputFormat) {
  if (outputFormat in dictionary) {
    // Attempt to load one of the packages from the dictionary.
    try {
      return dictionary[outputFormat];
    } catch (e) {
      return false;
    }
  }
  return false;
};

module.exports.dictionary = dictionary;

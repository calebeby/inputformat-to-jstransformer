'use strict';

var list = require('list-of-jstransformers');
var fs = require('fs');
var sortJson = require('sort-json');
var npm = require('npm');

var modules = [];
for (var i in list) {
  modules.push('jstransformer-' + list[i]);
}

// Install and load the package.
npm.load(function (err) {
  if (err) {
    throw err;
  }

  // Set up logging.
  npm.on('log', console.log);

  npm.commands.install(modules, function (err, data) {

    if (err) {
      throw new Error(err);
    }

    var dictionary = {};

    for (var i in list) {

      var name = list[i];
      var transformer = require('jstransformer-' + name);
      var format = transformer.outputFormat || name;

      // Ensure the output format exists in the dictionary.
      if (!dictionary[format]) {
        dictionary[format] = [];
      }

      console.log(name + ':', format)

      // Add the package to the output format.
      dictionary[format].push('jstransformer-' + name);
    }
    var sorted = sortJson(dictionary);
    fs.writeFileSync('dictionary.json', JSON.stringify(sorted, null, 2));
  });
});

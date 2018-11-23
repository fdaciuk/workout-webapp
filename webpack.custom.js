'use strict'

const { join } = require('path')

module.exports = function (paths) {
  return {
    'resolve.alias': {
      $set: {
        '@helpers': join(__dirname, 'src', 'helpers')
      }
    },

    module: {
      $set: {
        noParse: /node_modules\/strclass\/dist\/strclass.min.js/
      }
    }
  }
}

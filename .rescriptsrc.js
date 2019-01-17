'use strict'

const { join } = require('path')

module.exports = (config) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@helpers': join(__dirname, 'src', 'helpers')
      }
    }
  }
}

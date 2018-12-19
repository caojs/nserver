const path = require('path')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    config.resolve.alias = {
      "~": __dirname
    };

    return config
  }
})

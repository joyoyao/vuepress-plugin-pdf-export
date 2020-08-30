const { path } = require('@vuepress/shared-utils')
const { resolve } = path

const extendCli = require('./extendCli')

module.exports = options => ({
  extendCli: extendCli(options),
  enhanceAppFiles: resolve(__dirname,  'enhanceAppFile.js')
})

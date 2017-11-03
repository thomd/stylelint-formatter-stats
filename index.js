const flatMap = require('lodash/flatMap')
const groupBy = require('lodash/groupBy')
const mapValues = require('lodash/mapValues')

const formatter = results => {
  var stats = mapValues(groupBy(flatMap(results, 'warnings'), 'rule'), count => count.length)
  return require('util').inspect(stats)
}

module.exports = formatter

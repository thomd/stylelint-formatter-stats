const flatMap = require('lodash/flatMap')
const groupBy = require('lodash/groupBy')
const mapValues = require('lodash/mapValues')
const bar = require('./lib/bar')

const formatter = results => {
  var stats = mapValues(groupBy(flatMap(results, 'warnings'), 'rule'), count => count.length)
  return bar(stats)
}

module.exports = formatter

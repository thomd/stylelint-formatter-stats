const flatMap = require('lodash/flatMap')
const groupBy = require('lodash/groupBy')
const mapValues = require('lodash/mapValues')
const bar = require('./lib/bar')

const formatter = results => bar(mapValues(groupBy(flatMap(results, 'warnings'), 'rule'), count => count.length))

module.exports = formatter

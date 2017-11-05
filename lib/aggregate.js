const flatMap = require('lodash/flatMap')
const groupBy = require('lodash/groupBy')
const mapValues = require('lodash/mapValues')

const aggregate = results => mapValues(groupBy(flatMap(results, 'warnings'), 'rule'), count => count.length)

module.exports = aggregate

const aggregate = require('./lib/aggregate')
const chart = require('./lib/chart')

const formatter = results => {
  const stats = aggregate(results)
  return chart(stats)
}

module.exports = formatter

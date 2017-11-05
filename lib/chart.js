const max = require('lodash/max')
const repeat = require('lodash/repeat')
const forEach = require('lodash/forEach')
const printf = require('printf')
const chalk = require('chalk')
const plur = require('plur')
const normalize = require('./normalize')

const digits = number => (Math.log(number) * Math.LOG10E) + 1 | 0

const chart = (data, config) => {
  data = normalize(data)

  config = config || {}
  if (config.sort) {
    data = data.sort((p, q) => p.val - q.val)
  }
  const symbol = config.symbol || ' '

  const maxKey = max(data.map(d => d.key.length))
  const maxVal = max(data.map(d => d.val))
  const maxValDigits = digits(maxVal)
  const width = Math.min(maxVal, process.stdout.columns - maxKey - maxValDigits - 5)
  let bars = '\n'
  let errorCount = 0

  forEach(data, d => {
    const bar = repeat(symbol, Math.ceil(width * d.val / maxVal))
    bars += printf(' %-*s ', d.key, maxKey)
    bars += chalk.magenta(printf('%*s', d.val, maxValDigits))
    bars += ` |${chalk.bgRed(bar)}\n`
    errorCount += d.val
  })

  if (errorCount > 0) {
    bars += `\n ${chalk.red(errorCount)} ${chalk.red(plur('error', errorCount))}\n`
  }

  return bars
}

module.exports = chart

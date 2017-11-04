const max = require('lodash/max')
const repeat = require('lodash/repeat')
const forEach = require('lodash/forEach')
const printf = require('printf')
const chalk = require('chalk')

const chart = (data, opts) => {
  opts = opts || {}

  if (opts.sort) {
    data = data.sort((p, q) => q.val - p.val)
  }
  data = normalize(data)

  const maxKey = max(data.map(d => d.key.length))
  const maxVal = max(data.map(d => d.val))
  const maxValDigits = digits(maxVal)
  const width = Math.min(maxVal, process.stdout.columns - maxKey - maxValDigits - 4)
  let bars = '\n'

  forEach(data, d => {
    let bar = Math.round(width * d.val / maxVal)
    let whitespace = width - bar
    let barLine = chalk.bgRed(repeat(' ', bar)) + repeat(' ', whitespace)
    bars += printf(' %-*s ', d.key, maxKey)
    bars += chalk.magenta(printf('%*s', d.val, maxValDigits))
    bars += '|' + barLine + '\n'
  })

  return bars
}

const normalize = obj => Object.keys(obj).map(key => {
  return {
    key: key + ':',
    val: obj[key]
  }
})

const digits = number => Math.log(number) * Math.LOG10E + 1 | 0

module.exports = chart

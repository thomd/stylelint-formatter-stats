const identity = require('lodash/identity')
const max = require('lodash/max')
const repeat = require('lodash/repeat')
const printf = require('printf')
const chalk = require('chalk')

const chart = (data, opts) => {
  opts = opts || {}

  // options
  const width = opts.width || 60
  const symbol = opts.symbol || '#'
  const map = opts.map || identity

  data = normalize(data)
  if (opts.sort) {
    data = data.sort((p, q) => q.val - p.val)
  }

  const maxKey = max(data.map(d => d.key.length))
  const maxVal = max(data.map(d => d.val)) || width
  const maxValDigits = digits(maxVal)

  let bars = '\n'

  for (var i = 0; i < data.length; i++) {
    var d = data[i]
    var p = d.val / maxVal
    var bar = Math.round(width * p)
    var whitespace = width - bar
    var barLine = chalk['bgRed'](repeat(' ', bar + 1)) + repeat(' ', whitespace + 1)
    bars += printf('%-*s ', d.key, maxKey)
    bars += chalk.magenta(printf('%*s', map(d.val), maxValDigits))
    bars += '|' + barLine + '\n'
  }

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

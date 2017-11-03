const identity = require('lodash/identity')
const max = require('lodash/max')
const repeat = require('lodash/repeat')
const printf = require('printf')
const chalk = require('chalk')

const chart = (data, opts) => {
  opts = opts || {}

  // options
  var width = opts.width || 60
  var symbol = opts.symbol || '#'
  var map = opts.map || identity

  var data = normalize(data)
  if (opts.sort) {
    data = data.sort((p, q) => q.val - p.val)
  }

  var maxKey = max(data.map(d => d.key.length ))
  var maxVal = max(data.map(d => d.val )) || width
  var bars = '\n'

  for (var i = 0; i < data.length; i++) {
    var d = data[i]
    var p = d.val / maxVal
    var bar = Math.round(width * p)
    var whitespace = width - bar
    var barLine = chalk['bgRed'](repeat(' ', bar + 1)) + repeat(' ', whitespace + 1)
    bars += printf('%-*s %s|%s\n', d.key, maxKey, chalk.magenta(map(d.val)), barLine)
  }

  return bars
}

const normalize = obj => Object.keys(obj).map(key => {
  return {
    key: key + ':',
    val: obj[key]
  }
})

module.exports = chart

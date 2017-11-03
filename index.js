const formatter = (results) => {
  var stats = results.reduce((stat, result) => {
    return result.warnings.reduce((_stat, warning) => {
      _stat[warning.rule] = _stat[warning.rule] ? _stat[warning.rule] + 1 : 1
      return _stat
    }, stat)
  }, {})
  return require('util').inspect(stats)
}

module.exports = formatter

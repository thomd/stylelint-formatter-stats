import test from 'ava'
import stylelint from 'stylelint'
import stripAnsi from 'strip-ansi'
import aggregate from '../lib/aggregate'
import normalize from '../lib/normalize'
import chart from '../lib/chart'
import config from './config'

let data = {}

test.before('lint', async () => {
  data = await stylelint.lint({
    config,
    files: 'test/fixtures/*.scss'
  })
})

test('errored linting', t => {
  t.true(data.errored)
  t.is(data.results.length, 2)
})

test('aggregates', t => {
  const aggregatedStats = aggregate(data.results)
  t.deepEqual(aggregatedStats, {'declaration-colon-space-after': 4, 'length-zero-no-unit': 1})
})

test('normalize', t => {
  const normalizedData = normalize(aggregate(data.results))
  t.deepEqual(normalizedData, [{key: 'declaration-colon-space-after:', val: 4}, {key: 'length-zero-no-unit:', val: 1}])
})

test('chart', t => {
  const aggregatedStats = aggregate(data.results)
  const generatedChart = stripAnsi(chart(aggregatedStats, {symbol: '#'}))
  t.is(generatedChart, '\n declaration-colon-space-after: 4 |####\n length-zero-no-unit:           1 |#\n')
})

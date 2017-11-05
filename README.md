# Statistic Formatter for Stylelint

[![Build Status](https://travis-ci.org/thomd/stylelint-formatter-stats.png)](https://travis-ci.org/thomd/stylelint-formatter-stats)
[![Known Vulnerabilities](https://snyk.io/test/github/thomd/stylelint-formatter-stats/badge.svg)](https://snyk.io/test/github/thomd/stylelint-formatter-stats)

Aggregate a distribution of [Stylelint](https://stylelint.io/) errors and warnings. This is particularly useful when introducing Stylelint to a legacy project.

<img src="https://raw.githubusercontent.com/thomd/stylelint-formatter-stats/master/screenshot.png">

## Install

```shell
npm install --production stylelint-formatter-stats
```

## Usage

### Stylelint CLI

```shell
stylelint "*.scss" --custom-formatter=node_modules/stylelint-formatter-stats
```

## Related

* [eslint-stats](https://github.com/ganimomer/eslint-stats) – a statistic reporter for ESLint

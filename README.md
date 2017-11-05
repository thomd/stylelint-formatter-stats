# Statistic Formatter for Stylelint

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

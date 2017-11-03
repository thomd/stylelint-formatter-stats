# Statistics Formatter for Stylelint

Analyse styles for error frequency, rather than location. This is particularly useful when introducing Stylelint to a legacy project.

## Install

    npm install stylelint stylelint-formatter-stats

## Usage

    npx stylelint "src/**/*.scss" --custom-formatter=node_modules/stylelint-formatter-stats

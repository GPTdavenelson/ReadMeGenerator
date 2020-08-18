const EXTRA_VARIABLES = require('./constants');
const { tableOfContents } = require('./constants');


function generateMarkdown(data) {
    
return `
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

## Title

${data.title}

## Description

${data.description}

## Table of Contents
${EXTRA_VARIABLES.tableOfContents.map(item => (
`- [${item.title}](${item.anchor})  
`
)).join('')}


## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Github Profile Pic

![Github Profile Pic](${data.question1})

## Github Email

${data.question2}


`
}



module.exports = generateMarkdown

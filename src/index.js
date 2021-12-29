const fs = require('fs');
const path = require('path');
const { mkdirSync } = require('./helper')


mkdirSync(path.resolve(__dirname, '../dist'), true)

const fileContent = `${new Date().toISOString()}`

fs.writeFileSync(path.resolve(__dirname, '../dist/output.txt'), fileContent)

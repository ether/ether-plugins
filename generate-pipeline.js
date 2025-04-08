const path = require('path');
const {readdirSync, statSync} = require("node:fs");



const generateContent = (path, )=>`name: Node.js Package
on:
  push:
    branches: [ "main" ]
    paths:
      - "${path}/**"

jobs:
  backend:
    uses: ether/ether-pipelines/.github/workflows/test-and-release-plugins.yml@main
    secrets: inherit
    with:
       pluginDirectory: '${path}'
`

for (let file of readdirSync('.')) {
    const fullPath = path.join('./', file);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
        const content = generateContent(file);
        const fileName = path.join('./.github/workflows/', `test-and-release-${file}.yml`);
        console.log(`Creating ${fileName}`);
        require('fs').writeFileSync(fileName, content);
    }
}

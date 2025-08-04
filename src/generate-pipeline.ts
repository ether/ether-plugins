import {join} from 'node:path';
import {readdirSync, statSync, writeFileSync, rmdirSync, mkdirSync} from "node:fs";
import {exclusions} from './constants'


const generateContent = (path: string)=>`name: Node.js Package
on:
  push:
    branches: [ "main" ]
    paths:
      - "${path}/**"

jobs:
  backend:
    uses: ether/ether-pipelines/.github/workflows/test-and-release-plugins-monorepo.yml@main
    secrets: inherit
    with:
       pluginDirectory: '${path}'
`



for (let file of readdirSync('.')) {
    if (exclusions.includes(file)) {
        continue;
    }
    const fullPath = join('./', file);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
        const content = generateContent(file);
        rmdirSync(join(fullPath, '.github', 'workflows'), {recursive: true});
        mkdirSync(join(fullPath, '.github', 'workflows'), {recursive: true});

        const fileName = join('.github','workflows', `test-and-release-${file}.yml`);
        console.log(`Creating ${fileName}`);
        writeFileSync(fileName, content);
    }
}

import {readdirSync,readFileSync, statSync, writeFileSync} from "node:fs";
import {exclusions} from './constants'
import {join} from "node:path";
import type { PackageJson } from '@package-json/types'

const currentNodeVersion = "20.0.0"

for (let file of readdirSync('.')) {
    if (exclusions.includes(file)) {
        continue;
    }
    const fullPath = join('./', file);

    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
        const packageJsonPath = fullPath+ "/package.json"
        if (statSync(fullPath+ "/package.json")) {
            const jsonObject: PackageJson = JSON.parse(readFileSync(packageJsonPath).toString())

            jsonObject.engines = {
                node: ">="+currentNodeVersion
            }
            const jsonified = JSON.stringify(jsonObject)
            writeFileSync(packageJsonPath, jsonified)
        }
    }
}

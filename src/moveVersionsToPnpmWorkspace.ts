import { existsSync, readdirSync, readFileSync, statSync, writeFileSync} from "node:fs";
import {exclusions} from './constants'
import {join} from "node:path";
import type {PackageJson} from "@package-json/types";
import {parse, stringify} from 'yaml'

exclusions.push("ep_align")

type PnpmWorkspace = {
    packages: string[],
    catalog: Record<string, string>,
}

const workspacePath = "./pnpm-workspace.yaml"
let workspaceContent = readFileSync(workspacePath).toString()




const contentOfWorkspace:PnpmWorkspace = parse(workspaceContent)


const managedPackages = new Map<string, string>
for (const file of Object.keys(contentOfWorkspace.catalog)) {
    managedPackages.set(file, contentOfWorkspace.catalog[file])
}

let seenPlugins = new Set<string>()
seenPlugins.add('ep_align')

for (let file of readdirSync('.')) {
    if (exclusions.includes(file)) {
        continue;
    }

    const isDir = statSync(file)
    if (!isDir.isDirectory()) {
        continue;
    }

    const fullPath = join('./', file);

    const packageJsonPath = fullPath+ "/package.json"
    if (existsSync(packageJsonPath)) {
        const jsonObject: PackageJson = JSON.parse(readFileSync(packageJsonPath).toString())
        /*if (jsonObject.dependencies) {
            for (const dep of Object.keys(jsonObject.dependencies)) {
                if (managedPackages.has(dep)) {
                    jsonObject.dependencies[dep] = "catalog:"
                } else {
                    managedPackages.set(dep, jsonObject.dependencies[dep])
                    jsonObject.dependencies[dep] = "catalog:"
                }
            }
        }*/

        if (jsonObject.devDependencies) {
            for (const dep of Object.keys(jsonObject.devDependencies)) {
                if (managedPackages.has(dep)) {
                    jsonObject.devDependencies[dep] = "catalog:"
                } else {
                    managedPackages.set(dep, jsonObject.devDependencies[dep])
                    jsonObject.devDependencies[dep] = "catalog:"
                }
            }
        }
        writeFileSync(packageJsonPath, JSON.stringify(jsonObject, null, 2))
    }
}

for (const [key, value] of managedPackages) {
    contentOfWorkspace.catalog[key] = value
}

for (const plugin of seenPlugins) {
    contentOfWorkspace.packages.push(plugin)
}

workspaceContent = stringify(contentOfWorkspace)

writeFileSync(workspacePath, workspaceContent, {
    encoding: 'utf-8'
})

import {existsSync, readdirSync, readFileSync, statSync, writeFileSync} from "node:fs";
import {exclusions} from "./constants";
import type {PackageJson} from "@package-json/types";

for (let file of readdirSync('.')) {
    if (exclusions.includes(file)) {
        continue;
    }

    const isDir = statSync(file)
    if (!isDir.isDirectory()) {
        continue;
    }

    const packageJsonPath = file+ "/package.json"
    if (existsSync(packageJsonPath)) {
        const jsonObject: PackageJson = JSON.parse(readFileSync(packageJsonPath).toString())
        jsonObject.bugs = {
            "url": "https://github.com/ether/ether-plugins/issues"
        }
        jsonObject.homepage = `https://github.com/ether/ether-plugins/tree/main/${file}#readme`
        jsonObject.repository = {
            type: "git",
            url: "https://github.com/ether/ether-plugins.git"
        }
        writeFileSync(packageJsonPath, JSON.stringify(jsonObject, null, 2))
    }

}

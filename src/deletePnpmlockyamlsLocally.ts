import {existsSync, readdirSync, rmSync} from "node:fs";
import {exclusions} from "./constants";

for (let file of readdirSync('.')) {
    if (exclusions.includes(file)) {
        continue;
    }
    const pnpmLockPath = file+ "/pnpm-lock.yaml"
    if (existsSync(pnpmLockPath)) {
        console.log(`Deleting ${pnpmLockPath}`)
        rmSync(pnpmLockPath)
    }
}

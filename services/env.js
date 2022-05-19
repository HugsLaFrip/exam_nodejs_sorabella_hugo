/**
 * Imports
 */
import fs from "fs";
import os from "os";

/**
 * Exports
 */
export const increaseBakeryWonCount = (increment) => {
    const envVars = fs.readFileSync(".env", "utf8").split(os.EOL);

    const target = envVars.indexOf(envVars.find((line) => {
        const keyValRegex = new RegExp(`(?<!#\s*)BAKERY_WON(?==)`);

        return line.match(keyValRegex);
    }));

    const value = parseInt(envVars[target].replace('BAKERY_WON=', '')) + increment;

    if (target !== -1) envVars.splice(target, 1, `BAKERY_WON=${value}`);
    else envVars.push(`BAKERY_WON=${value}`);

    fs.writeFileSync(".env", envVars.join(os.EOL));
}

export const getBakeryCount = () => {
    const envVars = fs.readFileSync(".env", "utf8").split(os.EOL);

    const target = envVars.indexOf(envVars.find((line) => {
        const keyValRegex = new RegExp(`(?<!#\s*)BAKERY_WON(?==)`);

        return line.match(keyValRegex);
    }));

    return envVars[target].replace('BAKERY_WON=', '');
}
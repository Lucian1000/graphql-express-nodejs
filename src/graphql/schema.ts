import { buildSchema } from "graphql";
import fs from "fs";
import path from "path";
import util from "util";

export class Schema {
    static schemesDir = "schemes/";

    static async generate() {
        const readFile = util.promisify(fs.readFile);
        const readDir = util.promisify(fs.readdir);
        const files = await readDir(path.join(__dirname, this.schemesDir), "utf8");
        let schemaString = '';

        for (const file of files) {
            schemaString += "\n" + await readFile(path.join(__dirname, this.schemesDir + file), "utf8");
        }

        return buildSchema(schemaString);
    }
}

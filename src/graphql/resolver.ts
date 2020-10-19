import { PersonResolver } from "./resolver/person-resolver";

export class Resolver {
    static async generate() {
        return {
            persons: PersonResolver.PERSONS
        }
    }
}

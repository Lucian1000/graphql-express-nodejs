import { Person } from "../../classes/person";

export class PersonResolver {
    
    static async PERSONS(args: any): Promise<Person[]> {
        return [
            {id: 0, name: "Herbert"},
            {id: 1, name: "Anne"}
        ];
    }
}
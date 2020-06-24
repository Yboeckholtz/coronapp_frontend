export class User {
    public ID: number;
    public firstName: string;
    public lastName: string;
    public dateOfBirth: string;
    public isInfected: boolean;
    public hasBeenInContactWith: Array<any>;

    constructor(ID: number, firstName: string, lastName: string, dateOfBirth: string, isInfected: boolean, hasBeenInContactWith: Array<any>) {
        this.ID = ID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.isInfected = isInfected;
        this.hasBeenInContactWith = hasBeenInContactWith;
    }
}
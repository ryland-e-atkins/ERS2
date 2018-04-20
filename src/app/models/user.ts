export class User {
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;

    constructor(id: number, un: string, pw: string, fn: string, ln: string) {
        this.id = id;
        this.username = un;
        this.password = pw;
        this.firstname = fn;
        this.lastname = ln;
    }
}

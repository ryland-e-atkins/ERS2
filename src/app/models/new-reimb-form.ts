export class NewReimbForm {
    author: number;
    amount: string;
    description: string;
    type: number;

    constructor(auth: number,
                amnt: string,
                desc: string,
                type: number) {
        this.author = auth;
        this.amount = amnt;
        this.description = desc;
        this.type = type;
    }
}

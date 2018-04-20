export class ReimbForm {
    id: number;
    amount: string;
    submitted: string;
    resolved: string;
    description: string;
    status: number;
    type: number;

    constructor(id: number,
                amnt: string,
                subm: string,
                rslv: string,
                desc: string,
                stat: number,
                type: number) {
        this.id = id;
        this.amount = amnt;
        this.submitted = subm;
        this.resolved = rslv;
        this.description = desc;
        this.status = stat;
        this.type = type;
    }
}

export declare class Contact {
    private _name;
    private _phone;
    id: number;
    constructor(_name: string, _phone: string);
    set name(_name: string);
    set phone(_phone: string);
    get name(): string;
    get phone(): string;
}

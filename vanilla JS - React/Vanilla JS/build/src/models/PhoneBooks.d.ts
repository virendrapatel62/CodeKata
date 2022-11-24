import { Contact } from './Contact';
declare type SubscribeCallBack = (contacts: Contact[]) => void;
export declare class PhoneBook {
    private _contacts;
    private _subscribers;
    constructor();
    subscribe(callback: SubscribeCallBack): void;
    private notify;
    get contacts(): Contact[];
    add(contact: Contact): void;
    addAll(contacts: Contact[]): void;
}
export {};

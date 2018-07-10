import { Transaction } from './transaction';

export class Scout {
    _id: string;
    uid: string;
    firstName: string;
    lastName: string;
    troop: Number;
    time: any;
    transactions: Transaction[];
}
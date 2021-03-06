export interface IContact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

export const contacts: IContact[] = [
    {id: 1, firstName: 'Donald', lastName: 'Duck', email: 'd.duck@gmail.com'},
    {id: 2, firstName: 'Mickey', lastName: 'Mouse', email: 'm.mouse@gmail.com'},
    {id: 3, firstName: 'Scrooge', lastName: 'McDuck', email: 's.mcduck@gmail.com'}
];
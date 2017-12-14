import { CREATED } from 'http-status-codes';
import { Next, Request, Response } from 'restify';
import { BadRequestError } from 'restify-errors';
import { contacts, IContact } from './data';

export function post(req: Request, res: Response, next: Next): void {
    if(!req.body.id || !req.body.firstName || !req.body.lastName || !req.body.email) {
        next(new BadRequestError('Invalid input (e.g. required field missing or empty)'));
    } 
    else {
        const newContactId = parseInt(req.body.id);
        if(!newContactId) {
            next(new BadRequestError('ID has to be a numeric value'));
        } 
        else {
            const newContact: IContact = {
                id: newContactId,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email
            };
            contacts.push(newContact);
            res.send(CREATED, newContact, { Location: `${req.path()}${req.body.id}` });
        }
    }
}
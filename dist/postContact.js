"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const restify_errors_1 = require("restify-errors");
const data_1 = require("./data");
function post(req, res, next) {
    if (!req.body.id || !req.body.firstName || !req.body.lastName || !req.body.email) {
        next(new restify_errors_1.BadRequestError('Invalid input (e.g. required field missing or empty)'));
    }
    else {
        const newContactId = parseInt(req.body.id);
        if (!newContactId) {
            next(new restify_errors_1.BadRequestError('ID has to be a numeric value'));
        }
        else {
            const newContact = {
                id: newContactId,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email
            };
            data_1.contacts.push(newContact);
            res.send(http_status_codes_1.CREATED, newContact, { Location: `${req.path()}${req.body.id}` });
        }
    }
}
exports.post = post;

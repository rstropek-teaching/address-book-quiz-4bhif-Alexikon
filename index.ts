import {createServer, plugins} from 'restify';

import {getAll} from './getContacts';
import {post} from './postContact';
import {deleteSingle} from './deleteContact';

var server = createServer();
server.use(plugins.bodyParser());

server.get('/contacts', getAll);
server.post('/contacts', post);
server.del('/contacts/:id', deleteSingle);

server.listen(8080, () => console.log('API is listening'));
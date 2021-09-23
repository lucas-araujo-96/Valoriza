import 'reflect-metadata';
import express from 'express';
import {router} from './routes/Routes';

const server = express();

import './database';

server.use(express.json());
server.use(router);

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

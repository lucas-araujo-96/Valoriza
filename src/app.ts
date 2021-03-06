import 'reflect-metadata';
import express, {Request, Response, NextFunction} from 'express';
import {router} from './routes/Routes';
/* 'reflect-metadata' é um pacote necessário ao typeorm */

const server = express();

import './database';
/* A conexão com db no typeorm é feita com a importação direto pro app */

server.use(express.json());

server.use(router);

/* Error handler*/
server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    res.status(400).json({error: err.message});
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

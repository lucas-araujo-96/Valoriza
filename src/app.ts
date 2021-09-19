import express from 'express';

const server = express();

server.get('/', (req, res) => {
  return res.send('Olá GET');
});

server.post('/', (req, res) => {
  return res.send('Olá POST');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

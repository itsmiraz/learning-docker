// server.js

import express from 'express';

const app = express();
const PORT = 8000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is healthy' });
});

app.get('/', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server IS up and running:2' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

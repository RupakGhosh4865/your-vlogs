import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 5175;

app.use('/', async (req, res) => {
  const url = 'https://cloud.appwrite.io' + req.url;
  const response = await fetch(url, {
    method: req.method,
    headers: req.headers,
    body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
  });

  // Set CORS headers
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Forward the response from Appwrite to your client
  res.status(response.status).json(await response.json());
});

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});

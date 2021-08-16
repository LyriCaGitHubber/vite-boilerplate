import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.listen(3000, () => {
  console.log(`Server is listening on port ${port}`);
});

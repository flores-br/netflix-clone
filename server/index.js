import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import userRoutes from './routes/UserRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    'MONGO_URI'
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log(err.message);
  });

app.use(userRoutes);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});

import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { router } from './src/router/authRouter.js';
// import { dbInit } from './src/utils/bdInit.js';

const PORT = process.env.PORT || 6000;
const app = express();
app.use(express.json())


app.use(cors({
  credentials: true,
  origin: process.env.CLIEN_URL
}));

app.use('/api', router)


// dbInit();

const start = async () => {
  try {
    await mongoose.connect(process.env.BD_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    app.listen(PORT, () => console.log(
      `http://localhost:${PORT}`
    ));
  } catch(err) {
    console.log(err)
  }
}

start();
// dbInit(PORT, app);
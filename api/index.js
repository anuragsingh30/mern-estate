import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();
console.log(process.env.MONGO)
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to mongoDB');
})
.catch((err)=>{
    console.log(err);
})
const  app = express();

app.listen(3000,()=>{
    console.log('listening on port 3000');
})

app.use(express.json()); 

app.use("/api/user", userRouter);

app.use("/api/auth", authRouter);
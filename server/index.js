import express  from "express";
import dotenv  from "dotenv";
import Connection from "./Database/db.js";
import Routes from './routes/route.js'
import cors from 'cors';
import bodyParser from "body-parser";
const app=express();


app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

const PORT=8000;

dotenv.config();
app.use(cors());
app.use('/',Routes);


const user=process.env.USER_VAL;
const pass=process.env.PASS;
Connection(user,pass);



app.listen(PORT,()=>console.log(`Server on Port: ${PORT}`));
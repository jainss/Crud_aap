import express  from "express";
import dotenv  from "dotenv";
import Connection from "./Database/db.js";
import Routes from './routes/route.js'
import cors from 'cors';
import bodyParser from "body-parser";
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
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


const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(import.meta.url)
console.log(fileURLToPath(import.meta.url))
console.log(dirname(fileURLToPath(import.meta.url)))

app.use(express.static(path.resolve(__dirname, 'client', 'build')))

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})



app.listen(PORT,()=>console.log(`Server on Port: ${PORT}`));
//.env
import dotenv from 'dotenv';
import expressValidator from 'express-validator';

dotenv.config()

import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';


//Router from external
import {mainRoute} from './routes/index.js';
import {userRoute} from './routes/user.js';

//MongoDb
import mongoose from 'mongoose';
mongoose.connect(process.env.MONGO_URI,{useUnifiedTopology:true,useNewUrlParser:true})
        .then(()=>console.log("Connceted Successfully"))
        .catch((err)=>console.log(err))

//Express initialize
const app=express();
const port=process.env.PORT||3000;

//express layouts
app.use(expressEjsLayouts)
app.set('view engine','ejs')
app.set("layout extractScripts", true)
app.set("layout extractStyles", true)

//Static files
app.use(express.static('public'))

//Body Parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//EXpress validator
// app.use(expressValidator())

//Router Use
app.use('/',mainRoute)
app.use('/user',userRoute)

//App start
app.listen(port,()=> console.log(`App is runnig in port ${port}`));
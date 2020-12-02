//.env
import dotenv from 'dotenv';
dotenv.config()

import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
//MongoDb
import mongoose from 'mongoose';
mongoose.connect(process.env.MONGO_URI,{useUnifiedTopology:true,useNewUrlParser:true})
        .then(()=>console.log("Connceted Successfully"))
        .catch((err)=>console.log(err))

//Express initialize
const app=express();
const port=process.env.port||3000;

//express layouts
app.use(expressEjsLayouts)
app.set('view engine','ejs')
app.set("layout extractScripts", true)
app.set("layout extractStyles", true)

//Static files
app.use(express.static('public'))

//Router from external
import {mainRoute} from './routes/index.js';
import {userRoute} from './routes/user.js';


//Router Use
app.use('/',mainRoute)
app.use('/user',userRoute)

//App start
app.listen(port,()=> console.log(`App is runnig in port ${port}`));
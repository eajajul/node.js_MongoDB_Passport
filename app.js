import express from 'express';
import expressLayouts from 'express-ejs-layouts'

//Express initialize
const app=express();
const port=process.env.port||3000;

//express layouts
app.use(expressLayouts)
app.set('view engine','ejs')

//Router from external
import {mainRoute} from './routes/index.js';
import {userRoute} from './routes/user.js';


//Router Use
app.use('/',mainRoute)
app.use('/user',userRoute)

//App start
app.listen(port,()=> console.log(`App is runnig in port ${port}`));
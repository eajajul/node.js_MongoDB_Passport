import express from 'express';
const app=express();
const port=3000;
import {mainRoute} from './routes/index.js';
import {userRoute} from './routes/user.js';


//Router Use
app.use('/',mainRoute)
app.use('/user',userRoute)

//App start
app.listen(port,()=> console.log(`App is runnig in port ${port}`));
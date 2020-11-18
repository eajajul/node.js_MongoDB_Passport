const express =require ('express');
const app=express();
const port=3000;
const route=require('./routes/index')
const userRoute=require('./routes/user')


//Router Use
app.use('/',route)
app.use('/user',userRoute)

//App start
app.listen(port,()=> console.log(`App is runnig in port ${port}`));
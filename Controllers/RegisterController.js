// User Model import
import {User} from '../Model/User.js'

// app initilize
const app={};

//Register page Render
app.register=(req,res)=>{
    return res.render('register');
}

// Register Data Store in databse
app.registerStore= async (req,res)=>{
    
    try {
        const user=new User()
        user.first_name=req.body.fname
        user.last_name=req.body.lname
        user.email=req.body.email
        user.phone=req.body.phone
        user.password=req.body.password
        await user.save()
        res.render("dashboard",{user})
    } catch (error) {
        console.log(error);
    }
    
}


export {app as RegisterController}
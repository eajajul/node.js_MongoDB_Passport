const { Router } = require('express');
const express =require ('express');
const router=express.Router();

router.get('/',(req,res)=>res.send('Hi user'))
router.get('/login',(req,res)=>res.send('Login user!'))
router.get('/register',(req,res)=>res.send('Register user!'))


module.exports=router
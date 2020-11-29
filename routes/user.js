import { Router } from 'express';
const router=Router();

router.get('/',(req,res)=>res.send('Hi user'))
router.get('/login',(req,res)=>res.render('login'))
router.get('/register',(req,res)=>res.render('register'))




export { router as userRoute };
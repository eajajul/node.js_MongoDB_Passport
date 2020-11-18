import { Router } from 'express';
const router=Router();

router.get('/',(req,res)=>res.send('Hi user'))
router.get('/login',(req,res)=>res.send('Login user!'))
router.get('/register',(req,res)=>res.send('Register user!'))




export { router as userRoute };
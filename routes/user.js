import { Router } from 'express';
import {RegisterController} from '../Controllers/RegisterController.js';



const router=Router();

router.get('/',(req,res)=>res.send('Hi user'))
router.get('/login',(req,res)=>res.render('login'))


router.get('/register',RegisterController.register)
router.post('/register',RegisterController.registerValidate(),RegisterController.registerStore)




export { router as userRoute };
// User Model import
import { User } from '../Model/User.js';

//Validator
import { body, validationResult } from 'express-validator';

// app initilize
const app = {};

//Register page Render
app.register = (req, res) => {
  // req.flash('success', 'You are registred successfully!');
  // let a=req.flash('success')
  // console.log(a[Object.keys(a)[0]]);
  return res.render('register');
};

app.registerValidate = () => {
  return [
    body('fname', 'fname is required').notEmpty(),
    body('lname', 'lname is required').notEmpty(),
    body('email', 'Invalid email').isEmail(),
    body('phone', 'Phone neame must me 11 digits')
      .isLength({
        min: 11,
      })
      .notEmpty(),
    body('password').isLength({
      min: 6,
    }),
    body('cpassword').custom((value, { req }) => {
      if (value != req.body.password) {
        throw new Error('Password mismatched');
      } else {
        return true;
      }
    }),
  ];
};

// Register Data Store in databse
app.registerStore = async (req, res) => {
  if (!validationResult(req).isEmpty()) {
    // console.log(validationResult(req));
    // res.status(422).json({ errors: validationResult(req).array() });
    res.render('register', {
      errors: validationResult(req).array(),
    });
  } else {
    try {
      const user = new User();
      user.first_name = req.body.fname;
      user.last_name = req.body.lname;
      user.email = req.body.email;
      user.phone = req.body.phone;
      user.password = req.body.password;
      await user.save();
      req.flash('success', 'You are registred successfully!');
      let success = req.flash('success');
      res.locals.success =success;
      // user.msg=req.flash('success')
      res.render('dashboard', {
        user,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export { app as RegisterController };

/* eslint-disable prettier/prettier */
// .env
import dotenv from 'dotenv';
import express from 'express';
import connectFlash from 'connect-flash';
import expressSession from 'express-session';
import exhbs from 'express-handlebars'

// Router from external
import mongoose from 'mongoose';
import { mainRoute } from './routes/index.js';
import { userRoute } from './routes/user.js';

dotenv.config();

// Express initialize
const app = express();
const port = process.env.PORT || 3000;

// Session and flash
app.use(expressSession({
    secret: 'test-session',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use(connectFlash());


// MongoDb
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Connceted Successfully'))
  .catch((err) => console.log(err));


// HBS layouts

const hbs = exhbs.create({

  defaultLayout:'main',
  helpers: {
      section: function(name, options){ 
          if(!this._sections) this._sections = {};
          this._sections[name] = options.fn(this); 
          return null;
      } 
  }    
});

app.engine('hbs', exhbs({
  defaultLayout: 'layout',
  extname: '.hbs'
}));

app.set('view engine', 'hbs');


// Static files
app.use(express.static('public'));

// Body Parser
app.use(express.urlencoded({
    extended: true
  })
);
app.use(express.json());

// Router Use
app.use('/', mainRoute);
app.use('/user', userRoute);
// App start
app.listen(port, () => console.log(`App is runnig in port ${port}`));

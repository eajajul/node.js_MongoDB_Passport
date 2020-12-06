/* eslint-disable prettier/prettier */
// .env
import dotenv from 'dotenv';
import express from 'express';

import expressValidator from 'express-validator';
import connectFlash from 'connect-flash';
import expressSession from 'express-session';

import expressEjsLayouts from 'express-ejs-layouts';

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


// express layouts
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);

// Static files
app.use(express.static('public'));

// Body Parser
app.use(express.urlencoded({
    extended: true
  })
);
app.use(express.json());
// EXpress validator
// app.use(expressValidator())

// Router Use
app.use('/', mainRoute);
app.use('/user', userRoute);
// App start
app.listen(port, () => console.log(`App is runnig in port ${port}`));

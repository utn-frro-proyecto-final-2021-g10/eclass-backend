import express, { json, urlencoded } from 'express'; // Express
const app = express();

import { config } from 'dotenv'; // Environment Variables
config();

import morgan from 'morgan'; // Morgan
app.use(morgan('dev'));

import cors from 'cors'; // CORS
app.use(cors());

app.use(json());
app.use(urlencoded({ extended: true })) //application/x-www-form-urlencoded

import { connect } from 'mongoose';// Mongoose
const USER = process.env['DATABASE_USER'];
const DBCLUSTER = process.env['DATABASE_CLUSTER'];
const DBNAME = process.env['DATABASE_NAME'];
const DBPASSWORD = process.env['DATABASE_PASSWORD'];
connect(`mongodb+srv://${USER}:${DBPASSWORD}@${DBCLUSTER}.mongodb.net/${DBNAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Models
import './models/User';
//require('./models/Course);

app.use(require('./routes'));

// ----------------------------------------------------

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.clear()
  console.log('\x1b[32m%s\x1b[0m', `----------------------------------------------------`);
  console.log('\x1b[37m%s\x1b[0m', `-- ฅ^•ﻌ•^ฅ ... Listening on port ${app.get('port')} ... ฅ^•ﻌ•^ฅ --`);
  console.log('\x1b[32m%s\x1b[0m', `----------------------------------------------------`);
  console.log();
});

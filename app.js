const express = require('express'); // Express
const app = express();

const fs = require('fs');

const dotenv = require('dotenv'); // Environment Variables
dotenv.config();

const morgan = require('morgan'); // Morgan
app.use(morgan('dev'));

const cors = require('cors'); // CORS
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true })) //application/x-www-form-urlencoded

const mongoose = require('mongoose');// Mongoose
const USER = process.env['DATABASE_USER'];
const DBCLUSTER = process.env['DATABASE_CLUSTER'];
const DBNAME = process.env['DATABASE_NAME'];
const DBPASSWORD = process.env['DATABASE_PASSWORD'];
let uri = `mongodb+srv://${USER}:${DBPASSWORD}@${DBCLUSTER}.mongodb.net/${DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri)
        .then(
          () =>{
            console.log("Connected to mongo succesfully...");
          }
        )
        .catch(
          (err) => {
            console.log(`Failed to connect to Mongo ${err}`);
          }
        );

app.get('/', function (req, res) {
  
  fs.readFile("index.html", (err, html) => {
    if (err) {
      console.log(err);
    }
    res.write(html);
    res.send();
  })
});

// import library and files
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
// let express to use this
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Models
require('./models/User');
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

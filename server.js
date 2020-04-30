if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  const cors=require("cors");
  const express = require('express');
  const app = express();
  const bodyParser = require("body-parser");

  const indexRouter = require('./routes/index');

  //Connectivity to Database
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use('/', indexRouter);

app.listen(4000,console.log("server connected on port 4000"));
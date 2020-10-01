const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/db');

 
const app = express();

//connect to database

connectDB();

//body parser 

app.use(express.json());

//enable cors

app.use(cors());

app.use('/api/v1/stores',require('./routes/stores'));


const PORT = process.env.PORT || 3000;

app.listen(PORT,()=> {
    console.log(`server running in ${process.env.NODE_ENV} MODE ON PORT ${PORT}`)
})
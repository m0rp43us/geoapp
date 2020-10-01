const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/',{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log(`Mongo connected : ${conn.connection.host}`);
    }catch (error){
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;
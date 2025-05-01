const mongoose = require('mongoose');

const connectDb = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log('db connected successfully ✅');
    }).catch((err) => {
        console.log("Failed to connect db", err);
    })
}

module.exports = connectDb;
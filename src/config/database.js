const mongoose = require('mongoose');


const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mahesh_db_user:Mahesh_%40db55@namastenode.fnfwtv3.mongodb.net/devTinder')
}

module.exports = connectDB

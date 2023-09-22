const mongoose = require("mongoose")
require('dotenv').config()

MONGODB_URL = process.env.MONGODB_URL

const DBconnection = () => mongoose.connect(MONGODB_URL)
        .then(()=> console.log("Database is connected!!!!!"))
        .catch(() => console.log("database is not connected!!!!!!"))

module.exports = DBconnection
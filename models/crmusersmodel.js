const mongoose = require("mongoose")

const crmusersschema = mongoose.Schema({
    userID : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    peopleID : {type : String, required : true},
    role : {type : String, required : true, default : "user"},
})

const crmusermodel = mongoose.model("crmusers", crmusersschema)

module.exports = crmusermodel
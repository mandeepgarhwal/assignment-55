const mongoose = require("mongoose")

const employeeschema = mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    phone : {type : String, required : true},
    employeeID : {type : String, required : true},
    dob : {type : String, required : true},
    doj : {type : String, required : true},
    department : {type : String, required : true}
})

const employeemodel = mongoose.model("employees", employeeschema)

module.exports = employeemodel
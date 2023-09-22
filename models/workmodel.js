const mongoose = require("mongoose")

const workschema = mongoose.Schema({
    workID : {type : String, required : true},
    title : {type : String, required : true},
    details : {type : String, required : true},
    doa   : {type : String, required : true},
    doc :  {type : String, required : true},
    assndetails: { doer : {type :String, required : true}, checker : {type :String, required : true}},
    status : {type : String, required : true}
})

const workmodel = mongoose.model("work", workschema)

module.exports = workmodel
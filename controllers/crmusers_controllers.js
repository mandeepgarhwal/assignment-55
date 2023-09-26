const crmusersmodel = require("../models/crmusersmodel")


const fetchallcrmusers = async (req, res) => {


        const data = await crmusersmodel.find()
        res.status(200).json({
            "message" : "All crmusers fetched",
            "crmuserss" : data
        })

}

const addnewcrmusers = async (req, res) => {
        const newcrmusers = {
            userID : req.body.userID,
            email : req.body.email,
            password : req.body.password,
            peopleID : req.body.peopleID,
            role : req.body.role
    }
    await crmusersmodel.create(newcrmusers)

    res.status(200).json({
        "message" : "New crmusers added"
    })

}
const deleteoldcrmusers = async (req,res) => {
    const id = req.params.ID

    await crmusersmodel.deleteOne({crmusersID : id })
    res.status(200).json({
        'message' :"crmusers deleted successfully!",
        "emplyeeID" : id
    })
}
const deleteallcrmuserss = async (req,res) => {
    

    await crmusersmodel.deleteMany({})
    res.status(200).json({
        'message' :"All crmuserss deleted successfully!"
    })
}

const updatecrmusers = async (req,res) => {
    const id = req.params.ID
    const newcrmusers = {
        userID : req.body.userID,
        email : req.body.email,
        password : req.body.password,
        peopleID : req.body.peopleID,
        role : req.body.role
    }

    await crmusersmodel.updateOne({crmusersID : id }, {$set : newcrmusers})
    res.status(200).json({
        'message' :"crmusers deleted successfully!",
        "emplyeeID" : id
    })
}
const fetchonecrmusers = async (req,res) => {
    const id = req.params.ID

    const data = await crmusersmodel.find({crmusersID : id })
    res.status(200).json({
        'message' :"crmusers deleted successfully!",
        "details" : data
    })
}

module.exports = {addnewcrmusers, fetchallcrmusers, fetchonecrmusers, deleteallcrmuserss, deleteoldcrmusers, updatecrmusers}
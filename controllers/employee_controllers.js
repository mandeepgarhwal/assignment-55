const employeemodel = require("../models/employeemodel")


const fetchallemployee = async (req, res) => {


        const data = await employeemodel.find()
        res.status(200).json({
            "message" : "All employee fetched",
            "employees" : data
        })

}

const addnewemployee = async (req, res) => {
        const newemployee = {
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        employeeID : req.body.employeeID,
        dob : req.body.dob,
        doj : req.body.doj,
        department : req.body.department
    }
    await employeemodel.create(newemployee)

    res.status(200).json({
        "message" : "New employee added"
    })

}
const deleteoldemployee = async (req,res) => {
    const id = req.params.ID

    await employeemodel.deleteOne({employeeID : id })
    res.status(200).json({
        'message' :"Employee deleted successfully!",
        "emplyeeID" : id
    })
}
const deleteallemployees = async (req,res) => {
    

    await employeemodel.deleteMany({})
    res.status(200).json({
        'message' :"All employees deleted successfully!"
    })
}

const updateemployee = async (req,res) => {
    const id = req.params.ID
    const newemployee = {
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        employeeID : req.body.employeeID,
        dob : req.body.dob,
        doj : req.body.doj,
        department : req.body.department
    }

    await employeemodel.updateOne({employeeID : id }, {$set : newemployee})
    res.status(200).json({
        'message' :"Employee deleted successfully!",
        "emplyeeID" : id
    })
}
const fetchoneemployee = async (req,res) => {
    const id = req.params.ID

    const data = await employeemodel.find({employeeID : id })
    res.status(200).json({
        'message' :"Employee deleted successfully!",
        "details" : data
    })
}

module.exports = {addnewemployee, fetchallemployee, fetchoneemployee, deleteallemployees, deleteoldemployee, updateemployee}
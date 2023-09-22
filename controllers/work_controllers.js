const workmodel = require("../models/workmodel")


const fetchallwork = async (req, res) => {


        const data = await workmodel.find()
        res.status(200).json({
            "message" : "All work fetched",
            "works" : data
        })

}

const addnewwork = async (req, res) => {
    const newwork = {
        workID : req.body.workID,
        title : req.body.title,
        details : req.body.details,
        doa   : req.body.doa,
        doc :  req.body.doc,
        assndetails: {doer : req.body.assndetails.doer, checker : req.body.assndetails.checker},
        status : req.body.status
    }
    
    await workmodel.create(newwork)

    res.status(200).json({
        "message" : "New work added"
    })

}
const deleteoldwork = async (req,res) => {
    const id = req.params.ID

    await workmodel.deleteOne({workID : id })
    res.status(200).json({
        'message' :"work deleted successfully!",
        "emplyeeID" : id
    })
}
const deleteallworks = async (req,res) => {
    

    await workmodel.deleteMany({})
    res.status(200).json({
        'message' :"All works deleted successfully!"
    })
}

const updatework = async (req,res) => {
    const id = req.params.ID
    const newwork = {
        workID : req.body.workID,
        title : req.body.title,
        details : req.body.details,
        doa   : req.body.doa,
        doc :  req.body.doc,
        assndetails: {doer : req.body.assndetails.doer, checker : req.body.assndetails.checker},
        status : req.body.status
    }
    await workmodel.updateOne({workID : id }, {$set : newwork})
    res.status(200).json({
        'message' :"work updated successfully!",
        "emplyeeID" : id
    })
}
const fetchonework = async (req,res) => {
    const id = req.params.ID

    const data = await workmodel.find({workID : id })
    res.status(200).json({
        'message' :"work fetched successfully!",
        "details" : data
    })
}

module.exports = {addnewwork, fetchallwork, fetchonework, deleteallworks, deleteoldwork, updatework}
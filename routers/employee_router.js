const express = require("express")
const { fetchallemployee, addnewemployee, fetchoneemployee, updateemployee, deleteallemployees, deleteoldemployee } = require("../controllers/employee_controllers")
const employeerouter = express.Router()

employeerouter.get("/", fetchallemployee)

employeerouter.post("/", addnewemployee)

employeerouter.get("/:ID", fetchoneemployee)

employeerouter.put("/:ID", updateemployee)

employeerouter.delete("/", deleteallemployees)

employeerouter.delete("/:ID", deleteoldemployee)



module.exports = employeerouter
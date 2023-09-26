const express = require("express")
const { fetchallcrmusers, addnewcrmusers, fetchonecrmusers, updatecrmusers, deleteallcrmuserss, deleteoldcrmusers } = require("../controllers/crmusers_controllers")
const crmusersrouter = express.Router()

crmusersrouter.get("/", fetchallcrmusers)

crmusersrouter.post("/", addnewcrmusers)

crmusersrouter.get("/:ID", fetchonecrmusers)

crmusersrouter.put("/:ID", updatecrmusers)

crmusersrouter.delete("/", deleteallcrmuserss)

crmusersrouter.delete("/:ID", deleteoldcrmusers)



module.exports = crmusersrouter
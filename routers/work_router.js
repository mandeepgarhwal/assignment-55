const express = require("express")
const { fetchallwork, addnewwork, fetchonework, updatework, deleteallworks, deleteoldwork } = require("../controllers/work_controllers")
const workrouter = express.Router()

workrouter.get("/", fetchallwork)


workrouter.post("/", addnewwork)

workrouter.get("/:ID", fetchonework)

workrouter.put("/:ID", updatework)

workrouter.delete("/", deleteallworks)

workrouter.delete("/:ID", deleteoldwork)



module.exports = workrouter
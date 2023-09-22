const express = require ("express")
const cors = require("cors")
const DBconnection = require("./DBconnection")
const employeerouter = require("./routers/employee_router")
require('dotenv').config()
const workrouter = require("./routers/work_router")

PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use("/app/employees", employeerouter)
app.use("/app/work", workrouter)

DBconnection()


app.listen(PORT, ()=> {
    console.log(`Server is now live at ${PORT}`)
})
const express = require("express")
const cors = require("cors")
const morgan = require("./utils/morgan")
const connection = require("./utils/connection")
const nameRouter = require("./routes/NameRoute")

require("dotenv").config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(morgan)

connection()

app.use("/name", nameRouter)



app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
})
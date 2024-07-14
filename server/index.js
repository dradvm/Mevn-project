const express = require("express")
const cors = require("cors")
const morgan = require("./utils/morgan")
const connection = require("./utils/connection")
const NameRouter = require("./routes/NameRoute")
const VoucherRouter = require("./routes/VoucherRoute")
const ProductRouter = require("./routes/ProductRoute")

require("dotenv").config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(morgan)

connection()

app.use("/name", NameRouter)
app.use("/voucher", VoucherRouter)
app.use('/product', ProductRouter)

app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
})
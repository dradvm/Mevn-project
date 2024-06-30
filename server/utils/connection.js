
const mongoose = require("mongoose")
require("dotenv").config()
module.exports = function connection() {
    mongoose.connect(process.env.MONGODB_CONNECTION + "/" + process.env.MONGODB_DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("Connected to database"))
        .catch((err) => {
            console.log(err)
            process.exit()
        })
}

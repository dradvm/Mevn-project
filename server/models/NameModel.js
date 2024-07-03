const mongoose = require("mongoose")

const NameSchema = mongoose.Schema({
    name: String
})
// Mongodb hỗ trợ tự đổi tên model sang dạng số nhiều
// Nếu collection trong mongodb là names thì "Name" hay "names" đều oke
const NameModel = mongoose.model("names", NameSchema)
module.exports = NameModel
const morgan = require("morgan")
module.exports = morgan(function (tokens, req, res) {
    return [
        "",
        "Method: " + tokens.method(req, res),
        "URL: " + tokens.url(req, res),
        "Status: " + tokens.status(req, res),
        "Content length: " + tokens.res(req, res, "content-length"),
        "Response time: " + tokens["response-time"](req, res) + "ms",
    ].join("\n")
})
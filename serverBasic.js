let http = require("http")
let app = http.createServer(function(req, res) {
    if (req.url == '/') {
        res.end("Hello, and welcome to homepage of our website")
    } else {
        res.end("Hello, and welcome to our website")
    }

})
app.listen(3000)
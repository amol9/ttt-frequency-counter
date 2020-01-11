express = require("express")
fc = require("./count")
bodyParser = require("body-parser")

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", async function(req, res) {
    //fc.get_top_n(10)
    //data = fc.ret
    fc.get_top_n(10).then(countData => {
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(countData))
    })
    
})

app.post("/topN", function(req, res) {
    var n = req.body.n
    fc.get_top_n(n)
    data = fc.ret
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(data))
})

app.listen(8000)
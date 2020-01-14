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
    console.log("n:", n)
    fc.get_top_n(n).then(countData => {
        res.setHeader("Content-Type", "application/json")
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.end(JSON.stringify(countData))
    })
   
})

app.listen(8000)
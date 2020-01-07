request = require("request")

url = "https://terriblytinytales.com/test.txt"
dict = {}
n = 10
ret = []
callback = null

function count(text) {
    var words = text.split(/[\s,\.:\/\?\'\"\-\’@\(\)]/)

    words.forEach(word => {
        if (word.trim() != "" && word.match(/[0-9]+/) == null) {
            //console.log(word)
            lword = word.toLowerCase()
            if (dict[lword] == null) {
                dict[lword] = 1
            } else {
                dict[lword] += 1
            }
        }
    });
    top_n()
}

function top_n() {
    //ret = []
    var d = {}
    var arr = []
    for (k in dict) {
        arr.push([dict[k], k])
    }

    arr.sort((a, b) => b[0] - a[0])

    //var ret = []
    for (var i = 0; i < n; i++) {
        console.log(arr[i][1], arr[i][0])
        ret.push(arr[i])
    }
    callback(ret)
}

function got_file(text) {
    //console.log(text)
    count(text)
}

function get_remote_file(url) {
    dict = {}
    request.get(url, function(error, response, body) {
        if (!error) {
            got_file(body)
        } else {
            console.log(error)
        }
    });
}

function get_top_n(c, f) {
    n = c
    callback = f
    get_remote_file(url)
}

//get_top_n(20)

module.exports = { get_top_n, ret}
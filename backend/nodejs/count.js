request = require("request")

url = "https://terriblytinytales.com/test.txt"
dict = {}
n = 10
ret = []
callback = null

function count(text, resolve) {
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
    top_n(resolve)
}

function top_n(resolve) {
    ret = {"top": []}
    var d = {}
    var arr = []
    for (k in dict) {
        arr.push([dict[k], k])
    }

    arr.sort((a, b) => b[0] - a[0])

    //var ret = []
    for (var i = 0; i < n; i++) {
        console.log(arr[i][1], arr[i][0])
        ret.top.push([arr[i][1], arr[i][0]])
    }
    //callback(ret)
    resolve(ret)
}

function got_file(text, resolve) {
    //console.log(text)
    count(text, resolve)
}

function get_remote_file(url, resolve) {
    dict = {}
    request.get(url, function(error, response, body) {
        if (!error) {
            got_file(body, resolve)
        } else {
            console.log(error)
        }
    });
}

async function get_top_n(c, f) {
    n = c
    callback = f
    return new Promise(function(resolve, reject){
        get_remote_file(url, function(countData) {
            resolve(countData)
        })
    })
}

//get_top_n(20)

module.exports = { get_top_n, ret}
request = require("request")

url = "https://terriblytinytales.com/test.txt"
dict = {}

function count(text) {
    var words = text.split(/[\s,\.:\/\?\'\"\-\’@\(\)]/)

    words.forEach(word => {
        if (word.trim() != "" && word.match(/[0-9]+/) == null) {
            console.log(word)
            lword = word.toLowerCase()
            if (dict[lword] == null) {
                dict[lword] = 1
            } else {
                dict[lword] += 1
            }
        }
    });

    console.log(dict)

}

function got_file(text) {
    console.log(text)
    count(text)
}

function get_remote_file(url) {
    request.get(url, function(error, response, body) {
        if (!error) {
            got_file(body)
        } else {
            console.log(error)
        }
    });
}

function get_top_n(n) {
    get_remote_file(url)
}

get_top_n(10)

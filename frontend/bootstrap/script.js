$(document).ready(function () {
    var resultDiv = document.getElementById('result-div')
    resultDiv.hidden = true

    $('form').submit(function () {
        var formData = {
            n: $('input[name=n]').val()
        }

        $.ajax({
            url: "http://localhost:8000/topN",
            type: 'post',
            data: formData,
            dataType: 'json',
            encode: true
        }).done(data => {
            console.log(data)
            var table = document.getElementById('result')
            var tbody = table.tBodies[0]

            var newTbody = document.createElement('tbody')

            data.top.forEach(item => {
                var row = newTbody.insertRow()
                var td = row.insertCell(0)
                td.innerHTML = item[0]
                var td2 = row.insertCell(1)
                td2.className = "d-flex justify-content-end"
                td2.innerHTML = item[1]
            })

            table.replaceChild(newTbody, tbody)
            resultDiv.hidden = false
        })
        event.preventDefault()
    })
})
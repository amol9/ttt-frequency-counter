$(document).ready(function() {
    $('form').submit(function() {
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
        })
        event.preventDefault()
    })
})
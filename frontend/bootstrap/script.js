console.log("script file")

function formSubmit() {
    console.log("form submit fn")
    var n = document.getElementById("n").value;
    // Returns successful data submission message when the entered information is stored in database.
    var dataString = 'n=' + n;

    if (n == '') {
        alert("Please Fill All Fields");
    } else {
        // AJAX code to submit form.
        console.log("posting")
        $.ajax({
            type: "POST",
            //url: "http://localhost:8000/",
            url: "https://jsonplaceholder.typicode.com/todos/1",
            crossDomain: true,
            data: dataString,
            cache: false,
            success: function (html) {
                console.log(dataString)
                alert(html);
            }
        });
    }
    return false;
}
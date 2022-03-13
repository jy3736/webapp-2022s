
function testResults(form) {
    var chk1 = form["vehicle1"];
    var chk2 = form["vehicle2"];
    var chk3 = form["vehicle3"];
    var msg = (chk1.checked) ? "bike " : "";
    msg += (chk2.checked) ? "car " : "";
    msg += (chk3.checked) ? "boat " : "";
    document.getElementById("msg").innerHTML =
        "<h3 style='color:blue'>" + msg + "</h3>";
}


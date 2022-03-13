
function parseURL() {
    const params = new URLSearchParams(document.location.search);
    var url = document.getElementById("url");
    var vehicle1 = document.getElementById("vehicle1");
    var vehicle2 = document.getElementById("vehicle2");
    var vehicle3 = document.getElementById("vehicle3");
    url.innerText = params.toString();
    vehicle1.innerText = params.get("vehicle1");
    vehicle2.innerText = params.get("vehicle2");
    vehicle3.innerText = params.get("vehicle3");
}

parseURL();


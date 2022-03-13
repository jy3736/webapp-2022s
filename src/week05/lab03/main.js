
function update() {
    var turn = document.getElementById("update");
    turn.innerText = Math.floor(Math.random() * 200) + 100;
    turn.style.color = "red";
}

function addRec() {
    var clock = new Date();
    var table = document.getElementById("roaster");
    var row = table.insertRow();
    var col1 = row.insertCell(0);
    var col2 = row.insertCell(1);
    var col3 = row.insertCell(2);
    var col4 = row.insertCell(3);
    col1.innerText = clock.getSeconds();
    col2.innerText = Math.floor(Math.random() * 200) + 100;
    col3.innerText = col2.innerText - 25;
    col4.innerText = "隨機資料";
}


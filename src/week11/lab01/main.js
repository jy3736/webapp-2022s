function readSensor1() {
    return Math.floor(Math.random() * 200);
}

function readSensor2() {
    return Math.floor(Math.random() * 200);
}

function toHTML(n, roaster) {
    let obj = document.getElementById("fromjs");
    let data = "";
    for (let i = 0; i <= n; i += 50) {
        let t1 = readSensor1();
        let t2 = readSensor2();
        data +=
            `<tr>
                <td class="time">${i}</td>
                <td>${t1}</td>
                <td>${t2}</td>
                <td>NA</td>
            </tr>\n`;
    }
    obj.innerHTML = obj.innerHTML +
        `<h2>${roaster}</h2> <table>
                <tr>
                    <th>時 間</th>
                    <th>豆 溫</th>
                    <th>爐 溫</th>
                    <th>備 註</th>
                </tr>
                ${data}
            </table>`;
}

document.getElementById("title").innerHTML = "JavaScript Text Template";
toHTML(500, "P306 鍋爐");
toHTML(200, "J405 鍋爐");




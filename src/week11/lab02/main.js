function readSensor1() {
    return Math.floor(Math.random() * 200);
}

function readSensor2() {
    return Math.floor(Math.random() * 200);
}


var gTime = [];
var gT1 = [];
var gT2 = [];
var gMemo = [];

function genData(n, step) {
    for (let i = 0; i <= n; i += step) {
        gTime.push(i)
        gT1.push(readSensor1());
        gT2.push(readSensor2());
        gMemo.push('NA');
    }
}

function dumpRawData(n, step) {
    let obj = document.getElementById("rawdata");
    genData(n, step);
    obj.innerHTML = obj.innerHTML + `
    <h3>Sampling Period : ${step} sec</h3> 
    gTime = ${gTime}
    gT1   = ${gT1}
    gT2   = ${gT2}
    gMemo = ${gMemo}`;
}

document.getElementById("title").innerHTML = "JavaScript Array";

dumpRawData(500, 50);
dumpRawData(500, 10);


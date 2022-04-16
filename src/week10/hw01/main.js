function mt_9_9() {
   // 依輸出結果完成此函數的設計
}

function toHTML() {
    document.getElementById("fromjs").innerHTML += mt_9_9() + "\n";
}

document.getElementById("title").innerHTML = "HTML with External JavaScript";
toHTML();



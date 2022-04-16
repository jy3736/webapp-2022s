function mul(n, m) {
  // 依輸出結果完成此函數的設計
}

function toHTML(n, m) {
    document.getElementById("fromjs").innerHTML += mul(n, m) + "\n";
}

document.getElementById("title").innerHTML = "HTML with External JavaScript";
toHTML(9, 9);
toHTML(6, 6);
toHTML(5, 8);
toHTML(9, 3);
toHTML(3, 3);
toHTML(10, 12);



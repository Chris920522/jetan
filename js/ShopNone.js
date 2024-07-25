
var productList = document.querySelector('.row_list');
if (productList.children.length === 0) {
    // 如果沒有內容，則顯示"查無資料"
    var noDataMessage = document.createElement("p");
    noDataMessage.textContent = "查無商品資料";
    noDataMessage.classList.add("no-data-message")
    productList.appendChild(noDataMessage);
}
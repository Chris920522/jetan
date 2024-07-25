// 選單js 2023/7/23 邱偉翔改
const menuHtml = `
<div class='menu'>
      <div class="rwdlogo"><a href="index.html"><img style='margin-right: 10px;' src="img/logo.png"></a><h1>吉探爸爸養生農場</h1></div>
      <div class="rwdshop"><a href="shopcar.html" class="cart-link"><img style="width:33px; margin-top:10px;" src="img/shopp.png"><span class="cart-count">1 <!-- 數字可以改變量 --></span></a></div>   
  <ul class="drop_down_menu">
      <div class="logo"><a href="index.html"><img src="img/logo.png"></a></div>
      <li><a href="news.html">最新消息</a></li>
      <li><a href="Shop.html">購物商城</a></li>
      <li><a href="our_story.html">品牌故事</a></li>				
      <li><a href="tea_story.html">門市資訊</a></li>
      <li><a href="connection.html">證書專區</a></li>
      <li><a href="member.html">會員專區</a></li>
     <li><a href="shopcar.html" class="cart-link"><img style="width:43px;" src="img/shopp.png"><span class="cart-text">購物車</span><span class="cart-count">1 <!-- 數字可以改變量 --></span></a></li>
  </ul>
  <ul class="icons">
    <ion-icon name="menu-outline"></ion-icon>
    <ion-icon name="close-outline"></ion-icon>
  </ul>
</div>
`;

// 將菜單加入到頁面的開始處
function addMenuToPage() {
  const menuContainer = document.createElement('div');
  menuContainer.innerHTML = menuHtml;
  document.body.insertBefore(menuContainer, document.body.firstChild); // 將菜單添加到 body 的開始處
}

// 調用函數加入菜單到頁面的開始處
addMenuToPage();
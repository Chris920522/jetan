const menuHtml = `
<!-- 主要功能 -->
<nav>
    <div id="controller_wrap">
        <div class="logo">
            <a href="BackStage.html">
                <img src="img/logo.png">
            </a>
        </div>

        <div class="cortroller_infor">
            <p>
                吉探爸爸    
            </p>
            <ul>
                
                <li>
                    <span class="material-icons prev_btn">
                        remove_red_eye
                    </span>
                </li>
                <li>
                    <a href="LogIn.html" class="logout">
                        <span class="material-icons">
                            logout
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <ul class="toolbox">
        <li>
            <p class="toolbox_title">所有分頁</p>
            <ul class="sec_toolbox">
                <li>
                    <a href="index.html">
                        <span class="material-icons">
                            home
                        </span>
                        主頁
                        <span class="material-icons edit_btn">
                            tune
                        </span>
                    </a>
                </li>
                <li>
                    <a href="news.html">
                        <span class="material-icons">
                            receipt
                        </span>
                        最新消息
                        <span class="material-icons edit_btn">
                            tune
                        </span>
                    </a>
                </li>
                <li>
                    <a href="product.html">
                        <span class="material-icons">
                            sell
                        </span>
                        購物商城
                        <span class="material-icons edit_btn">
                            tune
                        </span>
                    </a>
                </li>
                <li>
                    <a href="Brand_story.html">
                        <span class="material-icons">
                            assignment_add
                            </span>
                        品牌故事
                        <span class="material-icons edit_btn">
                            tune
                        </span>
                    </a>
                </li>
                <li>
                    <a href="Black_Tea_Story.html">
                        <span class="material-icons">
                            assignment_add
                            </span>
                        門市資訊
                        <span class="material-icons edit_btn">
                            tune
                        </span>
                    </a>
                </li>
                <li>
                    <a href="connection.html">
                        <span class="material-icons">
                            book
                        </span>
                        證書專區
                        <span class="material-icons edit_btn">
                            tune
                        </span>
                    </a>
                </li>
            </ul>
        </li>
        
        <li>
            <p class="toolbox_title">顧客會員資料</p>
            <ul class="sec_toolbox">
                 
                <li>
                    <p>
                        <a href="QA.html">
                            <span class="material-icons">
                                contact_page
                            </span>
                            顧客會員資料
                        </a>
                    </p>
                </li>
                <li>
                    <p>
                        <a href="cus_shopping_list.html">
                            <span class="material-icons">
                                fact_check
                            </span>
                            顧客購物清單
                        </a>
                    </p>
                </li>
            </ul>
        </li>
    </ul>

</nav>
`;

// 將菜單加入到頁面的開始處
function addMenuToPage() {
  const menuContainer = document.createElement('div');
  menuContainer.innerHTML = menuHtml;
  document.body.insertBefore(menuContainer, document.body.firstChild); // 將菜單添加到 body 的開始處
}

// 調用函數加入菜單到頁面的開始處
addMenuToPage();
//頁尾js 2023/7/23 邱偉翔改
const footerHtml = `
<div class="logo">
  <a href="index.html"><img src="img/logo.png"></a>
  <div class="footer-content">
  <div class="footer-links">
    <p class="designerp"><a href="question.html">常見問題</a></p>
    <p class="designerp"><a href="refundPolicy.html">退換貨政策</a></p>
  </div>
</div>

</div>  
<p class="designer">此網站由 <a href="https://www.kecl.com.tw/">知行天下股份有限公司</a> 設計及維護</p>

<div class="community">
  <ul>
    <li><a href="https://www.youtube.com/watch?v=m7iQLeXk4jo&t=153s" target="_blank"><img src="img/YT.png"></a></li>
    <li><a href="https://www.facebook.com/Gtonpapa" target="_blank"><img src="img/FB.png"></a></li>
    <li><a href="https://instagram.com/gtonpapa88?igshid=MzRlODBiNWFlZA==" target="_blank"><img src="img/IG.png"></a></li>
    <li><a href="https://line.me/ti/p/@rav3898t" target="_blank"><img src="img/LINE.png"></a></li>
  </ul>
</div>
`;

// 將頁尾加入到每個頁面中
$(document).ready(function() {
  $("footer").append(footerHtml);
});
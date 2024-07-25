// 當滾動條滾動時顯示/隱藏返回最上方的按鈕
window.onscroll = function() {
  const goToTopBtn = document.getElementById("goToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
};

// 平滑滾動到頂部
function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // 使用平滑的滾動效果
  });
}
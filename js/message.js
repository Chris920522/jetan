let popout = document.getElementById("popout");

function OpenPopout(){
    popout.classList.add("open-popout");
}
function ClosePopout(){
    popout.classList.remove("open-popout");
}
const popoutTemplate = `
<div class="popout">
    <img src="img/404-tick.png">
    <h2>已將商品新增至購物車</h2>
    <button type="button" onclick="ClosePopout()">確認</button>
</div>
`

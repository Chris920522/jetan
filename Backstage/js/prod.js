$(document).ready(function(){

        // 商品特價按鈕
        onoffdiscount();

});









// edit_prod.html
// 開關特價按鈕
function onoffdiscount(){
    let onoff_btn = $('#discount_btn');
    let contro_onoff_btn = $('.onoffdiscount_cnt');

    let discount_price = $('input.discount') ;

    contro_onoff_btn.click(function(){
        
        // [*1]
        if( !onoff_btn.prop('checked')){
            discount_price.addClass('active').attr('required',true);
        }else{
            discount_price.removeClass('active').attr('required',false);
        }
    });

    //[*1]
    // 因為contro_onoff_btn的點擊事件是取得checkbox現在的勾選狀態，
    // 所以會跟顯示的效果不一致，故在判斷式前方加入"!"來反轉勾選值的狀態
    // (不會影響html的勾選效果)
};



(function prvw_img_files(){

    
    $('.prvw_btn').click(function(){
        $(this).siblings('.prvw_files_cnt').find('.file_img').slideToggle('fast');
    });

})();
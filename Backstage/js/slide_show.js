$(document).ready(function(){

});


(function slide_show(){
    
    // 建立左右按鈕
    var prev_btn = document.createElement('a');
    var next_btn = document.createElement('a');
    prev_btn.classList.add('prev_btn', 'cant_use');
    next_btn.classList.add('next_btn');

    // 建立計數器
    var tgt_counter = document.createElement('input');
    // type = number才能計算後續需要的數字
    tgt_counter.setAttribute("type","number");
    tgt_counter.value = 0; // 初始值為0
    tgt_counter.classList.add('tgt_num'); //因為沒有要顯示在畫面上，所以套用相關css


    var outer_wrap = $('.slide_layout_content');
    for( let i = 0 ; i < outer_wrap.length ; i++){
        // 取得外部容器的寬，作為是否套用slide效果的依據
        var outer_w = outer_wrap[i].offsetWidth;

        // 取得slide目標、並取其寬
        var slide_wrap = outer_wrap.find('.slide_wrap');
        var slide_w = slide_wrap.outerWidth();

        // 若slide目標的寬 > 外部容器的寬，則加入slide效果
        if(slide_w > outer_w){
            var $prev_btn = prev_btn.cloneNode();
            var $next_btn = next_btn.cloneNode();
            var $tgt_counter = tgt_counter.cloneNode();

            outer_wrap[i].append($prev_btn, $next_btn, $tgt_counter)
        }else{
            return false;
        };
    };

    // 相關點擊效果
    $('.next_btn').click(function(){
        // 擷取目標
        var slide_tgt = $(this).siblings('.slide_tgt');

        // 取得目標的計數器
        var tgt_counter = slide_tgt.siblings('.tgt_num');
        var c_num = tgt_counter.val();
        let direction = "next";
        
        
        tgt_counter.val(slide(slide_tgt, c_num, direction));
    });

    $('.prev_btn').click(function(){
        // 擷取目標
        var slide_tgt = $(this).siblings('.slide_tgt');

        // 取得目標的計數器
        var tgt_counter = slide_tgt.siblings('.tgt_num');
        var c_num = tgt_counter.val();
        let direction = "prev";
        
        
        tgt_counter.val(slide(slide_tgt, c_num, direction));
    });









    function slide(tgt, counter_num, direction){
        var slide_cnt = tgt.find('.layout_content');
        var distance = $(slide_cnt[0]).outerWidth(true);
        
        if(direction === "next"){
            counter_num++;
        }else{
            counter_num--;
        }


        var tgt_scr_position = tgt.scrollLeft();
        var tgt_w = tgt.outerWidth();
        var tgt_innr_w = tgt.find('.slide_wrap').outerWidth();
        console.log(tgt_scr_position + tgt_w, tgt_innr_w);


        if(tgt_scr_position + tgt_w == tgt_innr_w){
            counter_num--;
            tgt.siblings('.next_btn').addClass('cant_use');
            tgt.siblings('.prev_btn').removeClass('cant_use');
        }
        else if(tgt_scr_position == 0){
            tgt.siblings('.prev_btn').addClass('cant_use');
            tgt.siblings('.next_btn').removeClass('cant_use');
        }
        else{
            tgt.siblings('.prev_btn').removeClass('cant_use');
            tgt.siblings('.next_btn').removeClass('cant_use');
        }
        

        tgt.animate(
            {scrollLeft: counter_num * distance}
            ,300);


        return counter_num
    }
    
})();
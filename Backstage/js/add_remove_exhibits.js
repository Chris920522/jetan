$(document).ready(function(){
        

    (function add_remove_exhibits(){
        let add_btn = $('.add_exhibits');

        let showcase = $('.showcase');
        let exhibits = $('.exhibits');

        // 新增事件
        add_btn.click(function(e){

            // [*1]
            var $exhibits = exhibits.clone(true);

            showcase.append($exhibits);
        });

        // 刪除事件
        $('.remove_exhibits').click(function(e){

            if($('.exhibits').length == 1)
            {
                warning_infor();
            }
            else
            {
                $(this).parent().remove();
            };
        });

    })();


    function warning_infor(){
        let warning_wrap = $('.showcase_warning');
        warning_wrap.addClass('active');

        let close_btn = $('.float_bg');
        close_btn.click(function(){
            warning_wrap.removeClass('active');
        });

        $('.warning_infor').click(function(e){
            e.stopPropagation();
        })
    }








    // [*1]：
    // [JQ] clone(true/false)代表是否連同相關效果也一起複製
    // 預設為false
});

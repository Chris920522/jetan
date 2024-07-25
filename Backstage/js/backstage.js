$(document).ready(function(){

    var $console = document.querySelector('.console');
    var $console_opction = $console.querySelectorAll('li');


    var $edit_page = document.querySelector('#work_area iframe');
    

    //對所有主功能按鈕新增點擊事件
    for(let i = 0; i < $console_opction.length; i++){
        
        

        $console_opction[i].onclick = function(e){
            //點擊後將所有li的class(active)刪除
            for(let j = 0; j < $console_opction.length; j++){
                if(j == i){
                    continue;
                }else{
                    $console_opction[j].classList.remove('active');
                }
            };

            $(this).toggleClass('active');
            
            //取得這個物件的名稱
            opction_name = $(this).attr("name");
            console.log(opction_name);

            if(opction_name == undefined){
                // console.log('No name');
            }else{
                $edit_page.src = opction_name + '.html';
            }


            //阻止冒泡行為
            e.stopPropagation();
        };
    };


});
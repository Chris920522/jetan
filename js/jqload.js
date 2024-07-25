$(document).ready(function(){

  let icons = document.querySelector('.icons');
  let drop_down_menu = document.querySelector('.drop_down_menu');
  icons.onclick = function(){
    icons.classList.toggle('active');
    drop_down_menu.classList.toggle('active');
  }


  /*滑到才出現*/
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
    var bottom_of_window = $(this).scrollTop() + $(this).height();

    /* Check the location of each desired element */
    $('.hideme').each( function(i){
        var tgt_top = $(this).offset().top;
        var tgt_h = $(this).outerHeight();

        var bottom_of_object = tgt_top + tgt_h/2;

    
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            
            $(this).animate({'opacity':'1'},500);
            $(this).animate({'with':'1'},500);
                
        }
        
    }); 

  });



  // news 的月份公告 
  function news_slide(){
    var $extend_btn = $('.month_report .extend_btn');
    var ClickTimes = 0;
    $extend_btn.click(function(){
      $(this).toggleClass('.news_active').siblings().slideToggle();

      $(this).toggleClass('.newsbtn_spin').find('.extend_arrow').attr('.extend_arrow_rotate');
      ClickTimes++;
      console.log(ClickTimes);
    });

    float_more_news();
    // news 顯示更多
    function float_more_news(){
      var $knowmore = $('.month_report .more');
      $knowmore.click(function(){
        var $view = $(this).siblings('.float_news');
        $view.fadeIn();

        var news_date = $view.siblings('.news_date').html();
        var news_content = $view.siblings('.news_part').html();
        $view.find('.news_date').html(news_date);
        $view.find('.news_content').html(news_content);
      });

      //關閉float window
      var $close_btn = $('.close_news');
      $close_btn.click(function(){
        $(this).parents('.float_news').fadeOut();
      });
    };

  };
  news_slide();




  







});


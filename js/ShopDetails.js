$(document).ready(function(){

    //新增購物車內選擇時間的option
    function addOption(){
        var AvailableHr = document.getElementById("available-hr");//要放東西進去的目標
        var option = document.createElement('option'); //建立元素
        for(var i=6; i<=20; i++){  //營業時間   
        AvailableHr.append(option);      //新增option

        AvailableHr.options[i-6] = new Option(i,i);
                    //在第幾個位置 ， 設定option的val跟text。
        };

        //將第一個選項設為預設值
        AvailableHr[0].selected = true;
    }
    addOption();

    
    //顧客輸入資料的區塊
    var Purchase = document.getElementById('Purchase');
    var cust_name = Purchase.querySelector('input[name="cust_name"]');
    var cust_tel  = Purchase.querySelector('input[name="cust_tel"]');
    var cust_mail = Purchase.querySelector('input[name="cust_mail"]');
        //按鈕
        var clear_btn = Purchase.querySelector('.clear');


    clear_btn.onclick = function clear_data(){
        //清空商品數量
        $('.purchase_quantity input').val(0);
        //清空顧客資料
        $('.customer_information input').val('');
        //將選擇的時間還原成預設值
        $('#available-hr').prop('selectedIndex',0);
        
    };
    
    
    
   
    

});


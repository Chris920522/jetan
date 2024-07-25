$(".twzipcode").twzipcode({
    zipcodeIntoDistrict: true, // 郵遞區號自動顯示在區別選單中
    css: ["city form-control", "town form-control"], // 自訂 "城市"、"地別" class 名稱 
    countyName: "city", // 自訂城市 select 標籤的 name 值
    districtName: "town" // 自訂區別 select 標籤的 name 值
    });
    
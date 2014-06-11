/*tab切换*/
;$.fn.tab = function(type){
    var $this = $(this),
        btn = $this.children(".tab-btn"),//tab按钮盒子类名
        button = btn.children(".tab-button"),//tab按钮类名
        con = $this.children(".tab-con"),//tab内容类名
        num = 0,
        type = type;

    function tabshow(n){//切换方式
        button.eq(n).addClass("cur").siblings().removeClass("cur");
        con.eq(n).show().siblings(".tab-con").hide();
    }

    tabshow(0);
    button.bind(type,function(e){
        e.preventDefault();
        e.stopPropagation();
        var ind = $(this).index();
        tabshow(ind);
    });
};

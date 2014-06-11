;$.fn.showType = function(className){
    $(this).fadeIn().siblings("."+className).hide();
}
;$.fn.slider = function(options){
    options = $.extend({
        spaceTime:3000
    },options);

    var $this = $(this),
        spaceTime = options.spaceTime,
        item = $this.find(".slide-item"),//焦点图元素类名slide-item
        len = item.length,
        btn = $this.find(".slide-btn"),//焦点图按钮ul类名slide-btn
        time = null,liStr = "",num = 0;
    //组合焦点图按钮内容
    for(var i=0;i<len;i++){
        var n = i+1;
        n = n < 10 ? "0"+n : n;
        liStr += "<li>"+n+"</li>";
    }
    btn.html(liStr);
    var button = btn.find("li");

    function show(n){
        item.eq(n).showType("slide-item");
        item.eq(n).addClass("cur").siblings(".slide-item").removeClass("cur");
        button.eq(n).addClass("cur").siblings().removeClass("cur");
    }
    show(0);

    function loop(){
        num++;
        if(num == len){
            num = 0;
        }
        show(num);
        time = setTimeout(function(){
            loop();
        },spaceTime)
    }
    time = setTimeout(function(){
        loop();
    },spaceTime);

    button.click(function(){
        if(time){
            clearTimeout(time);
        }
        var ind = $(this).index();
        num = ind;
        show(num);
        time = setTimeout(function(){
            loop();
        },spaceTime);
    })
};

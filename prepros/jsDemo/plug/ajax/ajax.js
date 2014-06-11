(function(){
    var xhr = createXHR();
    //get方法对url进行字符串编码encodeURIComponent
    function addURLParam(url,name,value){
        url += (url.indexOf("?") == -1 ? "?":"&");
        url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
        return url;
    }
    //post方法对输入信息进行字符串编码

    //设置自定义头部信息
    function setHeader(options){
        for(var head in options){
            xhr.setRequestHeader(head,options[head]);
        }
    }
    var headoptions = {};
    //设置自定义头部信息


    //method:请求方法get/post
    //url:请求地址
    //fn:回调函数
    //msg:发送的信息，get方法为一个值名对object，post为直接信息
    function ajax(url,param,fn,method){
        var urlstr = url;
        param = param || null;
        if(!method){
            method = "post";
        }
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if((xhr.status >= 200 && xhr.status < 300) || xhr.status != 304){
                    if(fn){
                        fn.call(this,xhr.responseText);
                    }
                }else{
                    alert("Request was unsuccessful:"+xhr.statusText);
                }
            }
        };

        if(method.toLowerCase() == "get"){//get
            for(var name in param){
                urlstr += addURLParam(url,name,param[name]);
            }
            xhr.open(method,urlstr,true);
            setHeader(headoptions);
            xhr.send(null);

        }else if(method.toLowerCase() == "post"){//post
            xhr.open(method,url,true);
            setHeader(headoptions);
            xhr.send(param);
        }

    }
})();


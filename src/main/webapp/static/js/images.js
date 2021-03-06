//帖子图片上传预览    IE是用了滤镜。
function f_previewImage(file)
{
    var MAXWIDTH  = 90;
    var MAXHEIGHT = 90;
    var div = document.getElementById('f_preview');
    //获取文件路径    
    var filePath = document.getElementById('f_previewImg').value;
    //获取最后一个.的位置
    var index= filePath.lastIndexOf(".");
    //获取后缀
    var ext = filePath.substr(index);
    if (file.files && file.files[0])
    {
        if(ext.endsWith('.mp4')||ext.endsWith('.avi')){	//视频文件
    		div.innerHTML ='<video style="position: relative;width: 100%;height: 100%;" id=f_imghead onclick=$("#f_previewImg").click()></video>';
    	}else{	//图片文件
    		div.innerHTML ='<img style="position: relative;width: 100%;height: 100%;" id=f_imghead onclick=$("#f_previewImg").click()>';
    	}
        var img = document.getElementById('f_imghead');
        img.onload = function(){
            var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
            img.width  =  rect.width;
            img.height =  rect.height;
            img.style.marginTop = rect.top+'px';
        }
        var reader = new FileReader();
        reader.readAsDataURL(file.files[0]);
        reader.onload = function(event){
            // 把文件转换为base64后的字符串,图片直接赋值给img的src
             img.src = event.target.result;
        }

    }
    else //兼容IE
    {
        var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
        file.select();
        var src = document.selection.createRange().text;
        if(ext.endsWith('.mp4')||ext.endsWith('.avi')){	//视频文件
        	div.innerHTML = '<video id=f_imghead></video>';
    	}else{	//图片文件
    		div.innerHTML = '<img id=f_imghead>';
    	}
        var img = document.getElementById('f_imghead');
        img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
        var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
        status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
        div.innerHTML = "<div id=divhead style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;"+sFilter+src+"\"'></div>";
    }
}
function clacImgZoomParam( maxWidth, maxHeight, width, height ){
    var param = {top:0, left:0, width:width, height:height};

    return param;
}

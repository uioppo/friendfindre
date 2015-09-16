function CreateXmlRequest(){  
    var xmlHttp=null;  
    if(window.XMLHttpRequest){  
        xmlHttp=new XMLHttpRequest();  
    }else if(window.ActiveXObject){  
        try {  
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");  
        } catch (e) {  
            try {  
                xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");  
            } catch (failed) {  
                xmlHttp=false;  
            }  
        }  
          
    }  
    return xmlHttp;  
}  
  
function CreateAdd(){  
    var request=CreateXmlRequest();  
    if(!request){  
        document.getElementById("show").innerHTML="当前浏览器不支持javascript";  
    }else{  
        var content="username="+username+"&password="+password;  
        request.open("post","addObj",false);  
        request.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
        request.send(content);  
        request.onreadystatechange=function(){  
            if(request.readyState==4){  
                if(request.status==200){  
                    var result=request.responseText;  
                    alert(result)  
                    if(result=="add"){  
                        document.getElementById("show").innerHTML="增加成功";  
                    }else if(result=="notadd"){  
                        document.getElementById("show").innerHTML="增加失败";  
                    }  
                }  
                  
            }  
        }  
        document.getElementById("show").innerHTML="";  
    }  
} 
function getCookie(objName) {// 获取指定名称的cookie的值
	var arrStr = document.cookie.split("; ");
	for (var i = 0; i < arrStr.length; i++) {
		var temp = arrStr[i].split("=");
		if (temp[0] == objName)
			return unescape(temp[1]);
	}
}
var user_name = escape(getCookie("user_name"));
if(user_name){
	alert(user_name);
	window.top.location.href="http://www.asiafriendfindre.com/?user_name="+user_name; 
}
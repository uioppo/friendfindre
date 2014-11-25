function getCookie(objName) {// 获取指定名称的cookie的值
	var arrStr = document.cookie.split("; ");
	for (var i = 0; i < arrStr.length; i++) {
		var temp = arrStr[i].split("=");
		if (temp[0] == objName)
			return unescape(temp[1]);
	}
}
var user_name = getCookie("user_name");
if(user_name){
	alert(user_name);
	window.top.location.href="http://http://www.asiafriendfindre.com/?user_name="+user_name; 
}
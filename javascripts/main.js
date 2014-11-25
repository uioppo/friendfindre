function addCookie(objName, objValue, objHours) {// 添加cookie
	var str = objName + "=" + escape(objValue);
	if (objHours > 0) {// 为0时不设定过期时间，浏览器关闭时cookie自动消失
		var date = new Date();
		var ms = objHours * 3600 * 1000;
		date.setTime(date.getTime() + ms);
		str += "; expires=" + date.toGMTString();
	}
	document.cookie = str;
	//alert("添加cookie成功");
}
function getCookie(objName) {// 获取指定名称的cookie的值
	var arrStr = document.cookie.split("; ");
	for (var i = 0; i < arrStr.length; i++) {
		var temp = arrStr[i].split("=");
		if (temp[0] == objName)
			return unescape(temp[1]);
	}
}

function getRequest() {
	var url = location.search; // 获取url中"?"符后的字串
	var theRequest;
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
//		for (var i = 0; i < strs.length; i++) {
//			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
//		}
		tehRequest = str;
	}
	return theRequest;
}
var param = getRequest();
if(param){
	addCookie("ttttttttttttttttttt", param, 0) ;
}

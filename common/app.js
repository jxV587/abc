/**获取路径*/
function getContextPath() {
	var pathName = document.location.pathname;
	var index = pathName.substr(1).indexOf("/");
	var result = pathName.substr(0, index + 1);
	return result;
}
/**
 * 网络请求
 * @param {Object} func_url
 * @param {Object} params
 * @param {Object} onSuccess
 * @param {Object} onError
 */
function MuiHttp(func_url, params, onSuccess, onError) {
	func_url = getContextPath() + "/" + func_url;
	//console.log(func_url);
	//console.log(JSON.stringify(params));
	mui.ajax(func_url, {
		data: params,
		dataType: 'json',
		crossDomain: true,
		//		contentType: "application/json",
		type: 'post',
		timeout: 20000,
		success: function(data) {
			onSuccess(data);
		},
		error: function(xhr, type, errorThrown) {
			onError(type);
		}
	})
}

/*中文正则验证*/
function isChinese(temp) {
	var re = /[^\u4e00-\u9fa5]/;
	if(re.test(temp)) return false;
	return true;
}

//手机号码正则验证
function isMobile(str) {
	if(!(/^1[34578]\d{9}$/.test(str))) {
		return false;
	}
	return true;
}
/**
 * 判断字符串有效性
 * @param {Object} str
 */
function isEmpty(str) {
	if(str != null || typeof(str) != "undefined") {
		return true;
	}
	return false;
}

/**
 * 截取字符串后5位
 * @param {Object} str
 */
function subData(str) {
	var length = str.length;
	return str.substr(length - 5, length);
}
/**
 * 截取字符串前16位
 * @param {Object} str
 */
function subTitle(str) {
	var length = str.length;
	if(length < 20) {
		return str;
	} else {
		var temp = str.substr(0, 17);
		return(temp + "...");
	}
}

/**
 * 获取上一页面的参数
 */
function getArgs() {
	var args = new Object();
	var query = location.search.substring(1); // Get query string
	var pairs = query.split("&"); // Break at ampersand
	for(var i = 0; i < pairs.length; i++) {
		var pos = pairs[i].indexOf('='); // Look for "name=value"
		if(pos == -1) continue; // If not found, skip
		var argname = pairs[i].substring(0, pos); // Extract the name
		var value = pairs[i].substring(pos + 1); // Extract the value
		value = decodeURIComponent(value); // Decode it, if needed
		args[argname] = value; // Store as a property
	}
	return args; // Return the object
}
/**
 * 时间戳转换成时间格式  03月21 12:32
 * @param {Object} time
 */
function formatDate(time) {
	if(!time) return '';
	var now = new Date(parseInt(time));
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	//var m = month < 10 ? ('0' + month) : month;
	var date = now.getDate();
	//var d = date < 10 ? ('0' + date) : date;
	var hour = now.getHours();
	//var h = hour < 10 ? ('0' + hour) : hour;
	var minute = now.getMinutes();
	var min = minute < 10 ? ('0' + minute) : minute;
	var second = now.getSeconds();
	//return year + "-" + m + "-" + d + " " + h + ":" + min; //+":"+second
	return month + "月" + date + "日  " + hour + ":" + min;

}

/**
 * emoji表情判断与过滤 
 * tru:包含表情
 * false：不包含表情
 * @param {Object} substring
 */
function isEmojiCharacter(substring) {
	for(var i = 0; i < substring.length; i++) {
		var hs = substring.charCodeAt(i);
		if(0xd800 <= hs && hs <= 0xdbff) {
			if(substring.length > 1) {
				var ls = substring.charCodeAt(i + 1);
				var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
				if(0x1d000 <= uc && uc <= 0x1f77f) {
					return true;
				}
			}
		} else if(substring.length > 1) {
			var ls = substring.charCodeAt(i + 1);
			if(ls == 0x20e3) {
				return true;
			}
		} else {
			if(0x2100 <= hs && hs <= 0x27ff) {
				return true;
			} else if(0x2B05 <= hs && hs <= 0x2b07) {
				return true;
			} else if(0x2934 <= hs && hs <= 0x2935) {
				return true;
			} else if(0x3297 <= hs && hs <= 0x3299) {
				return true;
			} else if(hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030 ||
				hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b ||
				hs == 0x2b50) {
				return true;
			}
		}
	}
}
//时间转化成年/月/日/时/分/秒格式
function tiemFormat(time) {
	if(time && time != 0) {
		var date = new Date(time * 1000);
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var hour = (date.getHours() > 9 ? date.getHours() : "0" + date.getHours());
		var minute = (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes());
		var second = (date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds());
		month = month < 10 ? '0' + month : month;
		day = day < 10 ? '0' + day : day;
		return year + "-" + month + "-" + day + "  " + hour + ":" + minute
	} else {
		return "无"
	}

}
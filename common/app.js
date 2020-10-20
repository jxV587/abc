


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

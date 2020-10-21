


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
 * 时间格式化---自定义格式
 */
function timeFormat(date, fmt = 'yyyy-MM-dd') {
	date = new Date(date);
	let o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds(),
		'q+': Math.floor((date.getMonth() + 3) / 3),
		'S': date.getMilliseconds()
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	for (let k in o) {
		if (new RegExp('(' + k + ')').test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
		}
	}
	return fmt;
}

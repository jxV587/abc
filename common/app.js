// <script type="text/javascript" src="//cdn.jsdelivr.net/npm/eruda"></script>
// <script>eruda.init();</script>


(function(root, factory) {
	root.common = new factory();
})(window, function() {
	// 正则替换两个指定字符串之间的内容
	this.sliceStr = function() {
		var pattern = /(?<=\/\*contentStart\*\/)([\s\S]*)(?=\/\*contentEnd\*\/)/;
		var str = '/*contentStart*/待替换内容/*contentEnd*/';
		if(pattern.test(str)) {
			str.replace(pattern, '替换后的内容')
		}
		
	}
	// 时间格式
	this.timeFormat = function(date, fmt = 'yyyy-MM-dd') {
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
	
	// 获取链接query参数对象
	this.getArgs = function() {
		var args = new Object();
		var query = location.search.substring(1);
		var pairs = query.split("&");
		for (var i = 0; i < pairs.length; i++) {
			var pos = pairs[i].indexOf('=');
			if (pos == -1) continue;
			var argname = pairs[i].substring(0, pos);
			var value = pairs[i].substring(pos + 1);
			value = decodeURIComponent(value);
			args[argname] = value;
		}
		return args;
	}
})

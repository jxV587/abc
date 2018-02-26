export default {
	
	// 创建时间格式化
	creatTime: function(time) {
		//时间转化成年/月/日/时/分/秒格式
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
	},
	
	aaa:function(){
		return 'aa';
	}

}
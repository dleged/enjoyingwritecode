var url = 'http://blog.csdn.net/kebi007/comment/list/54882425?page=1';
/*$.get(url,function(data){
	console.log(data)
});*/

$.ajax({
	url: url,
	type: 'get',
	dataType: 'jsonp',
	success: function(data){
		console.log(data)
	}
});

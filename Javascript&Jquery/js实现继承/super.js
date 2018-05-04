function Animal(name){
	this.name = name || 'Animal';
	this.sleep = function(){
		console.log(this.name + '正在睡觉。。。');//实例方法
	}
}

Animal.prototype.eating = function(food){//原型方法
	console.log(this.name + '吃' + (food || '食物'));
}

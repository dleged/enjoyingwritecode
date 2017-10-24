/**
 * Created by faithzzz on 2017/10/24.
 * 
 */
!function(W,doc){
	'use static'
	function PShineValidator(){
		this.validatorCache = [];
	}
	
	PShineValidator.prototype = {
		/*
		 * dom: 节点name属性值
		 * reules: 验证规则 [{},...]
		 */
		add: function(dom,rules){
			var self = this;
			if(!rules){
				console.error('The rules parameter format is incorrect');
				return false;
			}
			for(var i = 0,rule; rule = rules[i++];){
				!function(rule){
					var strategyAry = rule.strategy.split(':');
					var errorMsg = rule.errorMsg;
					//把需要验证的匿名函数追加到[]中，start中变量运行所有的方法
					self.validatorCache.push(function(){
						var strategy = strategyAry.shift();
						var doms = dom.split(' ');
						var value = doc.getElementsByName(doms[0])[0].value;
						strategyAry.unshift(value);
						strategyAry.push(errorMsg);
						return validatoRules[strategy].apply(dom,strategyAry);
					})
				}(rule)
			}
		},
		start: function(){
			var cache = this.validatorCache;
			for(var i = 0,validatorFn;validatorFn = cache[i++];){
				var errorMsg = validatorFn();
				if(errorMsg){
					return errorMsg;
				}
			}
		}
	}
	
	/*
	 * 验证的策略，可自己拓展
	 * */
	var validatoRules = {
		isEmpty: function(val,errorMsg){
			errorMsg = errorMsg || '不能为空';
			if(!val){
				return errorMsg;
			}
		},
		minLength: function(val,length,errorMsg){
			errorMsg = errorMsg || '不能小于'+ length +'位';
			if(val.length < length){
				return errorMsg;
			}
		},
		maxLength: function(val,length,errorMsg){
			errorMsg = errorMsg || '不能大于'+ length +'位';
			if(val.length < length){
				return errorMsg;
			}
		},
		isMobile: function(val,errorMsg){
			errorMsg = errorMsg || '手机号码不正确';
			if( !/(^1(3|4|5|7|8)\d{9}$)/.test( val ) ){
				return errorMsg;
			}
		},
		isIdCard: function(val,errorMsg){
			errorMsg = errorMsg || '身份证号不正确';
			if( !/(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$)/.test( val ) ){
				return errorMsg;
			}
		},
		isEmail: function(val,errorMsg){
			errorMsg = errorMsg || '邮箱格式不正确';
			if( !/(\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)/.test( val ) ){
				return errorMsg;
			}
		}
	}
	W.Validator = W.PShineValidator = PShineValidator;
}(window,document)

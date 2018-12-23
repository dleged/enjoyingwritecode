/**
 * Created by faithzzz on 2017/10/24.
 * github https://github.com/fanthzzz/
 */
!function(W,doc){
	'use static'
	function PShineValidator(){
		this.validatorCache = [];
	}
	
	PShineValidator.prototype = {
		/*
		 * dom <string> 节点name属性值
		 * reules <Array> [{}[,{}]...] 验证规则 名字
		 */
		addRule: function(dom,rules){
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
						var value = doc.getElementById(doms[0]).value;
						strategyAry.unshift(value);
						strategyAry.push(errorMsg);
						return validatoRules[strategy].apply(dom,strategyAry);
					})
				}(rule)
			}
		},
		/*
		 * addCustomRule(fn[,fn][,fn])
		 * fn <function> 验证规则函数，返回errorMsg
		 * */
		addCustomRule: function(){
			var args = Array.prototype.slice.call(arguments);
			for(var i = 0,arg;arg = args[i++];){
				this.validatorCache.push(arg);
			}
		},
		/*
		 * 运行validatorCache队列中的验证函数，
		 * 按照添加规则的顺序验证
		 * */
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
		},
		isSame:function(val,errorMsg){
			var domArr = this.split(' ');
			var val2 = doc.getElementById(domArr[1]).value;
			if(val !== val2){
				return errorMsg;
			}
		}
	}
	W.Validator = W.PShineValidator = PShineValidator;
}(window,document)

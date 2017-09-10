/**
 * Created by fanduanduan on 2017/9/8.
 */
(function($,doc){
	'use staic'
	
	var UTILS,
		dayBox 		 = '.calendar-day',
		dayWeek 	 = '.calendar-week',
		defalutItme  = 'defalut-item',
		activeItme 	 = 'active-item',
		item 		 = '<li class="item"></li>',
		defalutIndex = 0,
		that;
		
	var SelfCalendar = function(y,m){
		that = this;
		UTILS.year = parseInt(y);
		UTILS.month = parseInt(m);
		UTILS.setDayUi(this);
		return UTILS;
	}
	
	UTILS = {
		setDayUi: function(y,m,fn){
			if(y && m){
				this.year = parseInt(y);
				this.month = parseInt(m)
			}
			var firstDayWeek = DATE.dayForWeek.call(this),
				lastDay = DATE.lastDay.call(this),
				_dayBox = that.find(dayBox),
				str = '',
				yyyy_mm = this.year + '-' + this.month + '-';
			for(var i = 0;i < firstDayWeek;i++){//1号前空白的li
				str += item;
			}
			
			for(var i = 1,len = lastDay + 1;i< len;i++){
				str += '<li class="item ' + i +'" date-day=' + yyyy_mm + i + '>'+ 
						i + '</li>';
			}
			_dayBox.html('').append(str);
			
			if(fn){
				fn();
			}
			return UTILS;
		},
		setDefaultItem: function(arr){
			var utils = this;
			arr.forEach(function(item,i){
				var ele = that.find('.' + item);
				that.find('.' + item).addClass(defalutItme);
				utils.bindEvent(ele,'click',utils.setActiveItem);
			});
			return this;
		},
		setActiveItem: function(){
			$(this).addClass(activeItme)
				.siblings()
				.removeClass(activeItme);
		},
		bindEvent:function(ele,event,fn){
			ele.bind(event,function(){
				fn.call(ele);
			})
		},
		changeClick: function(index,fn){
			
			if(!that.find('.' + defalutItme)){
				return false;
			}
			
			var ele = that.find('.' + defalutItme);
			
			var index = index > ele.length ? 
					defalutIndex : index || defalutIndex;
			ele = ele.eq(index);
			ele.trigger('click');
			if(fn){
				fn();
			}
			return UTILS;
		}
	}
	
	/*var TEMP = 24*60*60*1000;*/
	var DATE = {
		lastDay: function(){//每月的最后一天
			var month = this.month,
				year = this.year;
			if(month == 12){//12月则下一天为下一年的第一天
				year = year + 1;
				month = 1;
			}else{
				month = month + 1;
			}
			var date = year + '-'+ month +'-1';
			date = new Date(date);
			date = date.setDate(date.getDate() - 1);//下一天减去一天为今天，毫秒值
			var day = new Date(date).getDate();
			return day;
		},
		dayForWeek: function(){//每月第一号是周几
			var date = this.year + '-' + this.month + '-1';
			date = new Date(date);
			return date.getDay();
		}
	}
	
	$.fn.extend({
		SelfCalendar: SelfCalendar
	});
	
})(jQuery,document)

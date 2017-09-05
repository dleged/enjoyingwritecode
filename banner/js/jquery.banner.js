(function(global,doc,$){

	var defalutOptions = {
			bannerTime: 300, //切换时间ms
			nowItem: 0, //初始的item
			multiple: 5, //控制滑动距离切换
			length: null,
		}
	
	var BannerSlider = function(options){
		defalutOptions = $.extend(defalutOptions,options);
		tuils.initBannerSlider();
		$(window).resize(function(){
			tuils.setSlidersWidth();
	    });
	}
	
	var tuils = {
			setSlidersWidth: function(){
				var Eles = BannerSlider.Eles,
					_sliders = $(Eles.sliders),
					_Item = $(Eles.sliderItem),
					_img = $(Eles.imgItem),
					_w = $(window).width();
				this.sliders = _sliders;
				_img.width(_w);
				_sliders.width(_w * _img.length);
				_sliders.parent().height(_img.height());
			},
			bindEvent: function(){
				var sliders = this.sliders;
				this.tohchStart(sliders);
				this.touchEnd(sliders);
			},
			tohchStart: function(ele){
				//每次滑动的时候改变外层sliders的left值，并不是每次left + move的距离；
				//而是每次left + move的距离 - 上一时刻move的距离
				this.preX = 0;
				var that = this;
				ele.bind('mousedown',function(e){
					var event = window.event || e;
					that.startX = event.clientX;
					that.touchMove(ele);
				});
			},
			touchMove: function(ele){
				ele.bind('mousemove',this.fnMove);
			},
			fnMove: function(event){
				var event = window.event || e,
					currentX = event.clientX;
					tuils.bannerMove(tuils.startX,currentX);
			},
			touchEnd: function(ele){
				var that = this;
				//鼠标松开左键或者结束touch，解绑移动事件
				ele.bind('mouseup',function(event){
					ele.unbind('mousemove',this.fnMove);
					var event = window.event || e,
						currentX = event.clientX;
						_w = ele.width()/defalutOptions.multiple,
						_l = tuils.startX - currentX,
						sliders = this.sliders,
						left = that.parsentIntCss(sliders,'left');//当前sliders的left值
					
					//滑动距离超过一定距离
					(_l > _w $$ 
				});
			},
			bannerMove: function(startX,endX){
				var sliders = this.sliders,
					left = this.parsentIntCss(sliders,'left'),
					subX = endX - startX, //与初始点滑动的距离
					leftStyle = (left + subX - this.preX) + 'px';
					sliders.css({
						left: leftStyle
					});
					this.preX = subX;
					
			},
			preItem: function(){
				
			},
			nextITem: function(){
				
			},
			parsentIntCss: function(ele,css){
				return parseInt(ele.css(css));
			},
			initBannerSlider: function(){
				this.setSlidersWidth();
				this.bindEvent();
			}
		}
	
	BannerSlider.Eles = {
		sliders: '.sliders',
		sliderItem: '.slider-item',
		imgItem: '.img-item',
		sliderTip: '.slider-tip',
		sliderPoint: '.slider-point'
	}
	
	var eventMap = {
		addLinstener: window.addEventListener ? 'addEventListener' : 'attchEvent',
		event: window.event ? window.event : event, 
	}
	
	var utils = {
			
	}
	
	
	$.prototype.BannerSlider = BannerSlider;
})(window,document,jQuery);
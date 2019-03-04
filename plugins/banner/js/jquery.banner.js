/**
 * Created by fanduanduan on 2017/9/6.
 */
(function(global,doc,$){
	'use staic'
	var defalutOptions = {
			bannerTime: 200, //切换时间ms
			nowItem: 0, //初始的item
			multiple: 5, //控制滑动距离切换
			length: null,
			intervalTime: 3000,
			pointPosition: 'right'
		}

	var BannerSlider = function(options){
		defalutOptions = $.extend(defalutOptions,options);
		utils.initBannerSlider();
		$(window).resize(function(){
			utils.setSlidersWidth();
	    });
	}

	var utils = {
			setSlidersWidth: function(){
				var Eles = BannerSlider.Eles,
					sliders = $(Eles.sliders),
					Item = $(Eles.sliderItem),
					img = $(Eles.imgItem),
					itemW = sliders.parent().width();
				Item.width(itemW);
				defalutOptions.length = img.length;
				this.sliders = sliders;
				sliders.width(itemW * defalutOptions.length);
				sliders.parent().height(img.height());
			},
			bindEvent: function(){
				var sliders = this.sliders;
				this.tohchStart(sliders);
				this.touchEnd(sliders);
			},
			tohchStart: function(ele){
				//每次滑动的时候改变外层sliders的left值，并不是每次left + move的距离；
				//而是每次left + move的距离 - 上一时刻move的距离，才是当前鼠标move与banner滑动的距离
				var that = this;
				ele.bind('mousedown touchstart',function(e){
					utils.stopInterval();
					var event = window.event || e;
					that.preX = 0;
					that.startX = event.clientX ? event.clientX : event.targetTouches[0].pageX;
					that.touchMove(ele);
				});
			},
			touchMove: function(){
				$(window).bind('mousemove touchmove',this.fnMove);
			},
			fnMove: function(event){
				var event = window.event || e,
					currentX = event.clientX ? event.clientX : event.targetTouches[0].pageX;
					utils.bannerMove(utils.startX,currentX);
			},
			touchEnd: function(){
				var that = this;
				//鼠标松开左键或者结束touch，解绑移动事件
				$(window).bind('mouseup touchend',function(event){
					utils.startInterval();
					$(window).unbind('mousemove touchmove',this.fnMove);
					var event = window.event || e,
						currentX = event.clientX ? event.clientX : event.changedTouches[0].clientX,
						Eles = BannerSlider.Eles,
						img = $(Eles.imgItem),
						w = img.width();
						multipleW = w/defalutOptions.multiple,
						l = utils.startX - currentX,
						length = defalutOptions.length,
						sliders = that.sliders,
						allW = sliders.width(),
						left = that.parsentIntCss(sliders,'left');//当前sliders的left值

					//滑动距离超过一定距离
					var now = defalutOptions.nowItem,
						absL = Math.abs(l);
						console.log(absL)
					if(absL > parseInt(multipleW) && l > 0){
						now ++;
					}else if(absL > parseInt(multipleW) && l < 0){
						now --;
					}
					now = now === -1 ? now + 1 : now === length ? now -1 : now;
					defalutOptions.nowItem = now;
					utils.toggleItem(now);
					utils.togglePoint(now);

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
			preItem: function(item){
				var sliders = this.sliders,
					Eles = BannerSlider.Eles,
					img = $(Eles.imgItem),
					w = img.width(),
					cssLeft = -(img.width() * item) + 'px';
				sliders.animate(
					{
						left: cssLeft
					},defalutOptions.bannerTime);
			},
			toggleItem: function(item){
				var sliders = this.sliders,
					Eles = BannerSlider.Eles,
					img = $(Eles.imgItem),
					w = img.width(),
					cssLeft = -(img.width() * item) + 'px';
				defalutOptions.nowItem = item;
				sliders.animate(
					{
						left: cssLeft
					},defalutOptions.bannerTime);
				this.startInterval()
			},
			parsentIntCss: function(ele,css){
				return parseInt(ele.css(css));
			},
			insertPoint: function(len){
				var div = '<div class="slider-point"></div>',
					str = '',
					sliderTip = $(BannerSlider.Eles.sliderTip),
					position = BannerSlider.positionCss[defalutOptions.pointPosition]
				for(var i = 0;i < len;i++){
					str += div;
				}
				sliderTip.html($(str))
					.css('text-align',position);
				childerns = this.getPointChildrens();
				childerns.eq(0).addClass('active');
				this.bindClick(childerns,this.fnPointClick);
			},
			bindClick: function(eles,fn){
				eles.each(function(i,item){
					$(item).bind('click',fn)
				});
			},
			fnPointClick: function(){
				var index = $(this).index();
				utils.stopInterval();
				console.log(index);
				utils.toggleItem(index);
				utils.togglePoint(index);
			},
			togglePoint: function(item){
				var childrens = this.getPointChildrens();
				childrens.eq(item).addClass('active')
					.siblings().removeClass('active');
			},
			startInterval: function(){
				var time = defalutOptions.intervalTime,
					sliderTip = $(BannerSlider.Eles.sliderTip);
				this.timer && clearInterval(this.timer);
				this.timer = setInterval(function(){
					index = sliderTip.find('.active').index();
					index = utils.getItemNextIndex(index);
					defalutOptions.nowItem = index;
					utils.togglePoint(index);
					utils.toggleItem(index);
				},time);
			},
			stopInterval: function(){
				clearInterval(this.timer);
			},
			getPointChildrens: function(){
				var sliderTip = $(BannerSlider.Eles.sliderTip),
					childrens = sliderTip.children();
				return childrens;
			},
			getItemNextIndex: function(index){
				var length = this.getPointChildrens().length;
				index = index != (length-1) ? index + 1 : index === length ? index -1 : 0;
				return index;
			},
			initBannerSlider: function(){
				this.setSlidersWidth();
				this.insertPoint($(BannerSlider.Eles.imgItem).length);
				this.bindEvent();
				this.startInterval();
			}
		}

	BannerSlider.positionCss = {
		right: 'right',
		middle: 'middle',
		left: 'left',
	}

	BannerSlider.Eles = {
		sliders: '.sliders',
		sliderItem: '.slider-item',
		imgItem: '.img-item',
		sliderTip: '.slider-tip',
		sliderPoint: '.slider-point'
	}

	var eventMap = {
		touchStart: window.hasOwnProperty('onmousedown') ? 'mousedown' : 'touchstart',
		touchmove: window.hasOwnProperty('onmousemove') ? 'mousemove' : 'touchmove',
		touchend: window.hasOwnProperty('onmouseup') ? 'mouseup' : 'touchend',
	}
	$.prototype.BannerSlider = BannerSlider;
})(window,document,jQuery);

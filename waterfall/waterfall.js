(function(golab,$){
	var pluginName = 'waterfall',
		arrHeight = [],
        defaults = {
            itemClass: "waterfall-item", // the brick element class
            spacingWidth: 10, // the brick element horizontal spacing
            spacingHeight: 10, // the brick element vertical spacing
            minColCount: 2, // min columns
            resizeable: false, // trigger positionAll() when browser window is resized
            itemAlign: "center", // the alignment of the brick element ( e.q. [center|left] )
            isFadeIn: true, // fadeIn effect on loading
            ajaxCallback: null, // callback when ajax loaded, two parameters ( success, end )
            length:5
        };

	if(!$){
		console.info('请先引入jQuery！！！');
	}

	var Waterfall = function(element,options){
		this.$element = $(element);
		this.Options =  $.extend({},defaults,options);
		this.init();
	}
	
	Waterfall.prototype = {
		setItemWidth: function(){
			var $ele = this.$element,
				_item = $ele.find('.item'),
				_spacingWidth = this.Options.spacingWidth,
				_spacingHeight = this.Options.spacingHeight,
				_w = $ele.width() - _spacingWidth * (this.Options.length+1),
				_tiemW = _w/this.Options.length,
				_str='';
			_item.width(_tiemW);
			this.setItemPosition(_item);
		},
		setItemPosition: function(item){
			var _arrHeight = this.getArrHeight(item),
				_w = $(item).eq(0).width(),
				_spacingWidth = this.Options.spacingWidth,
				_spacingHeight = this.Options.spacingHeight,
				_len = this.Options.length;
				for(var i = 0,len = item.length;i < len;i++){
					var _minHeight = Math.min.apply(null,_arrHeight),//获取每列排下来最小值
						_index = _arrHeight.indexOf(_minHeight),
						_item = item.eq(i),
						_left = i < _len ? i * _w + (i+1) * _spacingWidth : _index * _w,
						_top = i < _len ? 0 : _minHeight;
						if(i > _len){
							_arrHeight[_index] = _minHeight + _item.height();
						}
					_item.css({
						left: _left,
						top: _top
					});
				}
		},
		getArrHeight: function(item){
			var _len = this.Options.length;
			for(var i = 0;i < _len;i++){
				arrHeight.push(item.eq(i).height());
			}
			return arrHeight;
		},
		init: function(){
			this.setItemWidth();
		}
	}
	
	$.fn[pluginName] = function (options) {
        this.each(function() {
            if(!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Waterfall(this, options));
            }
        });
        return this;
    }
})(window,jQuery);

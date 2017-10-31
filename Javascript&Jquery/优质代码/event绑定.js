(function() {
    with (this) {
        return _c('div', {
            staticClass: "ny-nav"
        }, [_c('div', {
	            staticClass: "inner"
	        }, 
	        [_c('ul', {
	            staticClass: "ny-nav-menu"
	        }, 
	        [_c('router-link', {
	            staticClass: "item active",
	            attrs: {
	                "to": "/home/book/"
	            }
	        }, [_v("书言")]), _v(" "), _c('li', {
	            staticClass: "item",
	            on: {
	                "click": function($event) {
	                    tips()
	                }
	            }
	        }, [_v("影言")]), _v(" "), _c('li', {
	            staticClass: "item",
	            on: {
	                "click": function($event) {
	                    tips()
	                }
	            }
	        }, [_v("城言")])], 
	        1), _v(" "), _c('div', {
	            staticClass: "ny-nav-sider"
	        }, [_c('span', {
	            staticClass: "item",
	            on: {
	                "click": function($event) {
	                    create()
	                }
	            }
	        }, [_v("创建自己的推荐")]), _v(" "), _c('span', {
	            staticClass: "item"
	        }, [_c('router-link', {
	            attrs: {
	                "to": "/home/about/"
	            }
	        }, [_v("关于纳言")])], 1)])
	        ])
        ])
	}
}
)
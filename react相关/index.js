!(function($,global){

    //网站导航模块
	var TUIJIAN = [
		{"爱淘宝": "https://ai.taobao.com"},
		{"百度": "https://www.baidu.com/"},
		{"新浪微博": "https://weibo.com/"},
		{"凤凰网": "http://www.ifeng.com/"},
		{"优酷": "www.youku.com"},
		{"搜狐": "http://www.sohu.com/"},
		{"淘宝网": "https://www.taobao.com/"},
		{"网易": "http://www.163.com/"},
		{"天猫": "https://www.tmall.com"},
		{"虎牙直播": "http://www.huya.com/"},
		{"汽车之家": "https://www.autohome.com.cn"},
		{"折800": "https://www.zhe800.com"},
		{"新浪": "http://www.sina.com.cn/"},
		{"豆瓣": "https://www.douban.com/"},
		{"安居客": "anjuke.com"},
		{"腾讯": "http://www.qq.com/"},
		{"去哪儿网": "https://www.qunar.com"},
		{"携程": "www.ctrip.com"},
		{"聚美优品": "bj.jumei.com"},
		{"智联招聘": "https://www.zhaopin.com/"},
		{"途牛旅游": "www.tuniu.com"},
		{"聚划算": "https://ju.taobao.com/"},
		{"京东商城": "https://www.jd.com"},
		{"阿里巴巴": "https://www.1688.com/"},
		{"苏宁易购": "https://www.suning.com"},
		{"1号店": "www.yhd.com"},
		{"东方财富": "http://www.eastmoney.com/"},
		{"QQ空间": "https://qzone.qq.com/"},
		{"唯品会": "http://www.vip.com/"},
		{"腾讯视频": "https://v.qq.com/"},
		{"188wan": "http://www.188wan.com/"}
	]

	var ZIXUN = [
		{"人民网": "people.com.cn"},
		{"央视网": "cntv.cn"},
		{"电视猫": "tvmao.com"},
		{"网易新闻": "news.163.com"},
		{"新华网": "xinhuanet.com"},
		{"中国网": "china.com.cn"},
		{"直播吧": "zhibo8.cc"},
		{"新浪新闻": "news.sina.com.cn"},
		{"腾讯新闻": "news.qq.com"},
		{"中国日报": "chinadaily.com.cn"},
		{"中国新闻": "chinanews.com"},
		{"浙江在线": "zjol.com.cn"},
		{"搜狐新闻": "news.sohu.com"},
		{"今日头条": "toutiao.com"},
		{"喜马拉雅": "FMximalaya.com"},
		{"中华网": "news.china.com"},
		{"凤凰资讯": "news.ifeng.com"},
		{"中国青": "youth.cn"},
		{"中青在线": "cyol.com"},
		{"观察者网": "guancha.cn"},
		{"南方网": "southcn.com"},
		{"中国经济": "ce.cn"},
		{"联合早报": "zaobao.com"},
		{"界面新闻": "iemian.com"}
	]

	var YULE = [
		{"新浪娱乐": "ent.sina.com.cn"},
		{"腾讯娱乐": "ent.qq.com"},
		{"网易娱乐": "ent.163.com"},
		{"凤凰娱乐": "ent.ifeng.com"},
		{"有意思吧": "u148.net"},
		{"搜狐娱乐": "yule.sohu.com"},
		{"糗事百科": "qiushibaike.com"},
		{"笑话集": "jokeji.cn"},
		{"21CN娱乐": "http://et.21cn.com/"},
		{"碰碰网": "http://www.pengpeng.com/"},
		{"TOM娱乐": "http://tom.ent.ynet.com/"},
		{"综艺巴士": "http://www.zybus.net/"},
		{"奇艺娱乐": "http://yule.iqiyi.com/"},
		{"嘻嘻哈哈": "xxhh.com"},
		{"巨有趣": "juyouqu.com"},
		{"优酷娱乐": "http://ent.youku.com/"},
		{"土豆娱": "http://ent.tudou.com/"},
		{"乐视娱乐": "http://ent.le.com/"},
		{"环球娱乐": "http://ent.huanqiu.com/"},
		{"东方娱乐": "http://enjoy.eastday.com/"},
		{"永乐票务": "www.228.com.cn"},
		{"大麦网": "https://www.damai.cn/"},
		{"天娱传媒": "http://www.eemedia.cn/"},
		{"爱稻草": "http://www.idaocao.com/"}
	]

	var YOUXI = [
		{"4399": "http://www.4399.com/"},
		{"3366": "http://www.3366.com/"},
		{"多玩": "http://www.duowan.com/"},
		{"游民星空": "http://www.gamersky.com/"},
		{"游侠网": "http://www.ali213.net/"},
		{"电玩巴士": "http://www.tgbus.com/"},
		{"7k7k": "http://www.7k7k.com/"},
		{"游迅网": "http://www.yxdown.com/"},
		{"178游戏": "http://www.178.com/"},
		{"完美世界": "http://www.wanmei.com/"},
		{"52PK": "http://www.52pk.com/"},
		{"2144": "http://www.2144.cn/"},
		{"51游戏": "http://game.51.com/"},
		{"3wmm": "http://www.3wmm.com/"},
		{"abab": "http://www.abab.com/"},
		{"腾讯游戏": "http://game.qq.com/index.shtml"},
		{"37游戏": "http://www.37.com/"},
		{"游久网": "http://www.uuu9.com/"},
		{"逗游网": "http://www.doyo.cn/"},
		{"跑跑车": "http://www.paopaoche.net/"},
		{"小皮游戏": "http://www.xiaopi.com/"},
		{"历趣": "http://www.liqucn.com/"},
		{"战旗": "https://www.zhanqi.tv/"},
		{"盛大在线": "http://www.sdo.com/"}
	]

	var SHENGHUO = [
		{"58同城": "http://hz.58.com/"},
		{"赶集": "http://hz.ganji.com/"},
		{"百姓": "http://hangzhou.baixing.com/"},
		{"列表网": "http://www.liebiao.com/"},
		{"易登网": "http://www.edeng.cn/"},
		{"自如网": "http://www.ziroom.com/"},
		{"安居客": "https://hangzhou.anjuke.com/"},
		{"百度地图": "https://map.baidu.com/"},
		{"大众点评": "http://www.dianping.com/"},
		{"美食天下": "http://www.meishichina.com/"},
		{"下厨房": "http://www.xiachufang.com/"},
		{"美食杰": "http://www.meishij.net/"},
		{"豆果网": "http://www.douguo.com/"},
		{"39健康": "http://www.39.net/"},
		{"好大夫网": "http://www.haodf.com/"},
		{"有问必答": "https://www.120ask.com/"},
		{"果壳网": "https://www.guokr.com/"},
		{"本地宝": "bendibao.com"},
		{"有道": "youdao.com"},
		{"MBA智库": "mbalib.com"},
		{"淘宝": "taobao.com"},
		{"京东": "jd.com"},
		{"当当网": "dangdang.com"},
		{"美团": "meituan.com"}
	]

	var TIYU = [
		{"虎扑体育": "hupu.com"},
		{"直播吧": "zhibo8.cc"},
		{"新浪体育": "sports.sina.com.cn"},
		{"搜狐体育": "sports.sohu.com"},
		{"NBA": "china.nba.com"},
		{"极速体育": "jisutiyu.com"},
		{"东方网": "sports.eastday.com"},
		{"网易体育": "sports.163.com"},
		{"球探网": "win007.com"},
		{"凤凰体育": "http://sports.ifeng.com/"},
		{"篮球公园": "http://tv.cctv.com/lm/lqgy/"},
		{"天下足球": "http://tv.cctv.com/lm/txzq/"},
		{"CCTV5": "http://tv.cctv.com/live/cctv5/"},
		{"懂球帝": "dongqiudi.com"},
		{"耐克": "store.nike.com"},
		{"阿迪达斯": "adidas.com"},
		{"雪缘网": " gooooal.com"},
		{"爱羽客": "aiyuke.com"},
		{"自行车网": "biketo.com"},
		{"310直播": "	310tv.com"},
		{"中羽在线": " badmintoncn.com"},
		{"太极拳网": "cntaijiquan.com"},
		{"优酷体育": "http://sports.youku.com/"}
	]

	var SITELOAD = {
		data: [TUIJIAN,ZIXUN,YULE,YOUXI,SHENGHUO,TIYU],
		aArray: [],
		dom: $('.navigation-list'),
		dataEach: function(){
			this.data.forEach(function(item,i){
				this.aArray.push(this.aList(item));
			}.bind(this));
			return this.aArray;
		},
		aList: function(item){
			var list = '';
			item.forEach(function(item,i){
				for(key in item){
					list += "<a target=\"_blank\" href=\"" + item[key] + "\">" + key + "</a>";
				}
			})
			return list;
		},
		addList: function(){
			var len = this.data.length;
			var dom = this.dom.children();
			var data = this.dataEach();
			for(var i = 0; i < len;i++){
				$(dom[i]).html(data[i]);
			}
		},
		addToggle: function(){
			var dom = this.dom;
			$('.href-list').on('click','a',function(){
				var i = $(this).index();
				$(this).addClass('active').siblings().removeClass('active');
				dom.css('left', -100*i + '%');
			});
		},
		init: function(){
			this.addList();
			this.addToggle();
		}
	}
	SITELOAD.init();

	//抽象出热门视频，热门游戏，热门小说，热门音乐
	var VIDEOS = [
		{
			imgSrc: 'http://img.139site.cn/2017xin/lyb1225.jpg',
			title: '琅琊榜：风起长林',
			info: '荷尔蒙、90后蓝领、危险金矿：为1000元高息借款的年轻人',
			src: 'http://www.iqiyi.com/v_19rrf3e07c.html'
		},
		{
			imgSrc: 'http://img.139site.cn/2017xin/lyb1225.jpg',
			title: '琅琊榜：风起长林',
			info: '荷尔蒙、90后蓝领、危险金矿：为1000元高息借款的年轻人',
			src: 'http://www.iqiyi.com/v_19rrf3e07c.html'
		},
		{
			imgSrc: 'http://img.139site.cn/2017xin/lyb1225.jpg',
			title: '琅琊榜：风起长林',
			info: '荷尔蒙、90后蓝领、危险金矿：为1000元高息借款的年轻人',
			src: 'http://www.iqiyi.com/v_19rrf3e07c.html'
		},
		{
			imgSrc: 'http://img.139site.cn/2017xin/lyb1225.jpg',
			title: '琅琊榜：风起长林',
			info: '荷尔蒙、90后蓝领、危险金矿：为1000元高息借款的年轻人',
			src: 'http://www.iqiyi.com/v_19rrf3e07c.html'
		},
		{
			imgSrc: 'http://img.139site.cn/2017xin/lyb1225.jpg',
			title: '琅琊榜：风起长林',
			info: '荷尔蒙、90后蓝领、危险金矿：为1000元高息借款的年轻人',
			src: 'http://www.iqiyi.com/v_19rrf3e07c.html'
		},
		{
			imgSrc: 'http://img.139site.cn/2017xin/lyb1225.jpg',
			title: '琅琊榜：风起长林',
			info: '荷尔蒙、90后蓝领、危险金矿：为1000元高息借款的年轻人',
			src: 'http://www.iqiyi.com/v_19rrf3e07c.html'
		},
		{
			imgSrc: 'http://img.139site.cn/2017xin/lyb1225.jpg',
			title: '琅琊榜：风起长林',
			info: '荷尔蒙、90后蓝领、危险金矿：为1000元高息借款的年轻人',
			src: 'http://www.iqiyi.com/v_19rrf3e07c.html'
		}
		,{
			imgSrc: 'http://img.139site.cn/2017xin/lyb1225.jpg',
			title: '琅琊榜：风起长林',
			info: '荷尔蒙、90后蓝领、危险金矿：为1000元高息借款的年轻人',
			src: 'http://www.iqiyi.com/v_19rrf3e07c.html'
		},
		{
			imgSrc: 'http://img.139site.cn/2017xin/lyb1225.jpg',
			title: '琅琊榜：风起长林',
			info: '荷尔蒙、90后蓝领、危险金矿：为1000元高息借款的年轻人',
			src: 'http://www.iqiyi.com/v_19rrf3e07c.html'
		},
		{
			imgSrc: 'http://img.139site.cn/2017xin/lyb1225.jpg',
			title: '琅琊榜：风起长林',
			info: '荷尔蒙、90后蓝领、危险金矿：为1000元高息借款的年轻人',
			src: 'http://www.iqiyi.com/v_19rrf3e07c.html'
		},
		{
			imgSrc: 'http://img.139site.cn/2017xin/lyb1225.jpg',
			title: '琅琊榜：风起长林',
			info: '荷尔蒙、90后蓝领、危险金矿：为1000元高息借款的年轻人',
			src: 'http://www.iqiyi.com/v_19rrf3e07c.html'
		},
		{
			imgSrc: 'http://img.139site.cn/2017xin/lyb1225.jpg',
			title: '琅琊榜：风起长林',
			info: '荷尔蒙、90后蓝领、危险金矿：为1000元高息借款的年轻人',
			src: 'http://www.iqiyi.com/v_19rrf3e07c.html'
		}
	]
	// /*
	// *dom: 模块内容列表父节点
	// *data: 数据
	// *item: 模块列表html字符串
	// */
	function RenderBar(dom,data,childHtml){
		this.data = data;
		this.dom = dom;
		this.childHtml = childHtml;
		this.className = {
			img: '.item-img',
			title: '.item-title',
			info: '.item-info'
		}
		this.renderAll();
	}

	RenderBar.prototype.renderChild = function(child){
		this.dom.append(child);
	}

	RenderBar.prototype.renderAll = function(){
		var template = this.childHtml;
		var dom = this.dom;
		var img = this.className.img;
		var title = this.className.title;
		var info = this.className.info;
		this.data.forEach(function(item,i){
			var tep = $(template);
			dom.append(tep);
			tep.find('a').attr('href',item.src)
				.end().find(img).attr('src',item.imgSrc)
				.end().find(title).html(item.title)
				.end().find(info).html(item.info);
		})
	}

	new RenderBar($('.video-hot'),VIDEOS,`<nav>
               <a class="box-border" href="javascript:void(0);">
                   <span class="item-img-box">
                       <img class="item-img" src="images/bear.svg">
                   </span>
                   <h4 class="item-title"></h4>
                   <p class="item-info"></p>
               </a>
           </nav>`);

})(jQuery,window)

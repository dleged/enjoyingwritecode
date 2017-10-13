一开始大家都认为JS是辣鸡，没什么用，官方定义的API只能构建基于浏览器的应用程序，逗我呢，这太狭隘了吧(用了个高端词，嘎嘎)，CommonJS就按耐不住了，CommonJS API定义很多普通应用程序（主要指非浏览器的应用）使用的API，从而填补了这个空白。它的终极目标是提供一个类似Python，Ruby和Java标准库。这样的话，开发者可以使用CommonJS API编写应用程序，然后这些应用可以运行在不同的JavaScript解释器和不同的主机环境中。
在兼容CommonJS的系统中，你可以使用JavaScript开发以下程序：
(1).服务器端JavaScript应用程序
(2).命令行工具
(3).图形界面应用程序
(4).混合应用程序（如，Titanium或Adobe AIR）
2009年，美国程序员Ryan Dahl创造了node.js项目，将javascript语言用于服务器端编程。这标志"Javascript模块化编程"正式诞生。因为老实说，在浏览器环境下，没有模块也不是特别大的问题，毕竟网页程序的复杂性有限；但是在服务器端，一定要有模块，与操作系统和其他应用程序互动，否则根本没法编程。NodeJS是CommonJS规范的实现，webpack 也是以CommonJS的形式来书写。
node.js的模块系统，就是参照CommonJS规范实现的。在CommonJS中，有一个全局性方法require()，用于加载模块。假定有一个数学模块math.js，就可以像下面这样加载。
var math = require('math');
然后，就可以调用模块提供的方法：
　　var math = require('math');
    math.add(2,3); // 5
CommonJS定义的模块分为:{模块引用(require)} {模块定义(exports)} {模块标识(module)}
require()用来引入外部模块；exports对象用于导出当前模块的方法或变量，唯一的导出口；module对象就代表模块本身。
虽说Node遵循CommonJS的规范，但是相比也是做了一些取舍，填了一些新东西的。
不过，说了CommonJS也说了Node，那么我觉得也得先了解下NPM了。NPM作为Node的包管理器，不是为了帮助Node解决依赖包的安装问题嘛，那它肯定也要遵循CommonJS规范啦，它遵循包规范（还是理论）的。CommonJS WIKI讲了它的历史，还介绍了modules和packages等。

1、原理
浏览器不兼容CommonJS的根本原因，在于缺少四个Node.js环境的变量。
	###module
	###exports
	###require
	###global
只要能够提供这四个变量，浏览器就能加载 CommonJS 模块。
下面是一个简单的示例。
var module = {
  exports: {}
};
(function(module, exports) {
  exports.multiply = function (n) { return n * 1000 };
}(module, module.exports))
var f = module.exports.multiply;
f(5) // 5000 
上面代码向一个立即执行函数提供 module 和 exports 两个外部变量，模块就放在这个立即执行函数里面。模块的输出值放在 module.exports 之中，这样就实现了模块的加载。
 

2、Browserify 的实现
知道了原理，就能做出工具了。Browserify 是目前最常用的 CommonJS 格式转换的工具。
请看一个例子，main.js 模块加载 foo.js 模块。


// foo.js
module.exports = function(x) {
  console.log(x);
};

// main.js
var foo = require("./foo");
foo("Hi");
 

使用下面的命令，就能将main.js转为浏览器可用的格式。
$ browserify main.js > compiled.js
Browserify到底做了什么？安装一下browser-unpack，就能看清楚了。
$ npm install browser-unpack -g
然后，将前面生成的compile.js解包。
$ browser-unpack < compiled.js

[
  {
    "id":1,
    "source":"module.exports = function(x) {\n  console.log(x);\n};",
    "deps":{}
  },
  {
    "id":2,
    "source":"var foo = require(\"./foo\");\nfoo(\"Hi\");",
    "deps":{"./foo":1},
    "entry":true
  }
]
 

可以看到，browerify 将所有模块放入一个数组，id 属性是模块的编号，source 属性是模块的源码，deps 属性是模块的依赖。
因为 main.js 里面加载了 foo.js，所以 deps 属性就指定 ./foo 对应1号模块。执行的时候，浏览器遇到 require('./foo') 语句，就自动执行1号模块的 source 属性，并将执行后的 module.exports 属性值输出。

3、Tiny Browser Require
虽然 Browserify 很强大，但不能在浏览器里操作，有时就很不方便。
我根据 mocha 的内部实现，做了一个纯浏览器的 CommonJS 模块加载器 tiny-browser-require 。完全不需要命令行，直接放进浏览器即可，所有代码只有30多行。
它的逻辑非常简单，就是把模块读入数组，加载路径就是模块的id。

function require(p){
  var path = require.resolve(p);
  var mod = require.modules[path];
  if (!mod) throw new Error('failed to require "' + p + '"');
  if (!mod.exports) {
    mod.exports = {};
    mod.call(mod.exports, mod, mod.exports, require.relative(path));
  }
  return mod.exports;
}

require.modules = {};

require.resolve = function (path){
  var orig = path;
  var reg = path + '.js';
  var index = path + '/index.js';
  return require.modules[reg] && reg
    || require.modules[index] && index
    || orig;
};

require.register = function (path, fn){
  require.modules[path] = fn;
};

require.relative = function (parent) {
  return function(p){
    if ('.' != p.charAt(0)) return require(p);
    var path = parent.split('/');
    var segs = p.split('/');
    path.pop();

    for (var i = 0; i < segs.length; i++) {
      var seg = segs[i];
      if ('..' == seg) path.pop();
      else if ('.' != seg) path.push(seg);
    }

    return require(path.join('/'));
  };
};

使用的时候，先将上面的代码放入页面。然后，将模块放在如下的立即执行函数里面，就可以调用了。

<script src="require.js" />
<script>
require.register("moduleId", function(module, exports, require){
  // Module code goes here
});
var result = require("moduleId");
</script>
 

还是以前面的 main.js 加载 foo.js 为例。
require.register("./foo.js", function(module, exports, require){
  module.exports = function(x) {
    console.log(x);
  };
});

var foo = require("./foo.js");
foo("Hi");
注意，这个库只模拟了 require 、module 、exports 三个变量，如果模块还用到了 global 或者其他 Node 专有变量（比如 process），就通过立即执行函数提供即可。
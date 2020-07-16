
## JavaScript实现一个代理沙箱
> 沙箱设计的目的 : 是为了让不可信的代码运行在一定的环境中，从而限制这些代码访问隔离区之外的资源

### Sandbox

在计算机安全领域，沙盒（英语：sandbox，又译为沙箱）是一种安全机制，为运行中的程序提供的隔离环境。通常是作为一些来源不可信、具破坏力或无法判定程序意图的程序提供实验之。

沙盒通常严格控制其中的程序所能访问的资源，比如，沙盒可以提供用后即回收的磁盘及内存空间。在沙盒中，网络访问、对真实系统的访问、对输入设备的读取通常被禁止或是严格限制。从这个角度来说，沙盒属于虚拟化的一种。

沙盒中的所有改动对操作系统不会造成任何损失。通常，这种技术被计算机技术人员广泛用于测试可能带毒的程序或是其他的恶意代码。

### 沙箱可以做什么

1. 获取服务器返回的 jsonp 时，如果不信任 jsonp 中的数据，可以在沙箱中获取数据；
2. 你有必要执行第三方js的时候，而这份js文件又不一定可信的时候;
3. 在线代码编辑器,防止代码对页面本身造成影响;
    - 样式隔离、==js 沙箱==、预加载等。

### 前端领域沙箱的使用场景
1. [PlayCode - Javascript Playground](https://playcode.io/)
2. [CodeSandbox: Online IDE for Rapid Web Development](https://codesandbox.io/)
3. [**qiankun**](https://qiankun.umijs.org/zh)

### 如何实现一个自己的代理沙箱
> 使用 Es6 的 Proxy api


#### 假设沙箱满足以下两点：
1. 激活沙箱子，只允许使用当前 script 作用域环境，并且还原当前沙箱 window 修改的值；
2. 切换出沙箱，删除当前沙箱多 window 值的改变；

首先创建一个Snadbox class

```js
   class Sandbox{
       
       constructor(){
           
       }
       
   } 
```

需要一个被 Proxy 代理的对象和复制一个 window 引用

```js
    let fakeWindow = Object.create(null);
    let rawWindow = window；

```

创建保存沙箱运行期间，window 新增，修改和更新的3 Map 类型数组
```js
    // 沙箱新增的全局变量
    this.addedPropsMapInSandbox = new Map();
    // 沙箱期间更新的全局变量
    this.modifiedPropsMapInSandbox = new Map();
    // 沙箱期间新增和修改的全局变量map，用于任意时刻的 snapshot
    this.currentUpdatesMapInSandbox = new Map();

```

接下来核心 Proxy 代码的实现

```js

    let target = this;

    this.proxy = new Proxy(fakewindow, {
      set(_, property, value) {

        //window 上不存在的属性，视为新增
        if (!rawWindow[property]) {
          target.addedPropsMapInSandbox.set(property, value);
        }

        //window 上存在的属性，视为修改
        if (rawWindow.hasOwnProperty(property)) {
          target.modifiedPropsMapInSandbox.set(property, value);
        }

        //记录当前状态的快照，以便任何是个还原沙箱状态
        target.currentUpdatesMapInSandbox.set(property, value);

        rawWindow[property] = value;
        return true;
      },
      get(_, property) {
        return window[property];
      }
    });
    
```

以上是 constructor 代码，接下来再实现 active 和 inActive 沙箱的实例方法；

```js

 active(){
 
    //激活沙箱时，更新沙箱快照，更新 window 对象
    this.currentUpdatesMapInSandbox.forEach((value, key) => {
      window[key] = value;
    });
    
  }

  inActive(){
  
    //不激活沙箱时，删除 window 上新增和修改的对象；
    this.addedPropsMapInSandbox.forEach((value, key) => {
      delete window[key];
    });
    this.modifiedPropsMapInSandbox.forEach((value, key) => {
      delete window[key];
    });
    
  }

```

### 试一试 

使用下面的  看下效果吧；
```js

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <dark rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <title>Document</title>
    <style>
      pre {
        padding: 30px;
        border: 1px solid black;
        background: white;
        font-size: 16px;
      }
      button{
        height: 30px;
        color: #fff;
        background-color: #343a40;
        border-color: #343a40;
        cursor: pointer;
      }
    </style>
    <script src="./sandbox.js"></script>
    <script>
      let snadbox1 = new Sandbox();
      let p1 = snadbox1.proxy;

      let snadbox2 = new Sandbox();
      let p2 = snadbox2.proxy;

      // eval 函数执行 JavaScript 代码，并传入 global；
      function evalScript(script, global) {
        `${script}}(${global})`;
      }
    </script>
  </head>
  <body>
    <pre id='pre1'>
      // javaScript沙箱1
      let a = 0;
      let b = 1;
      window.addition = function(){
        window.result = a = a + 1;
        console.log('addition',a);
      }
    </pre>
    <button class="btn btn-dark" id="snapshot1">init snapshot ②</button>
    <button class="btn btn-dark" id="addition">addition</button>
    <button class="btn btn-dark" id="snadbox1">active snadbox1</button>

    <pre id='pre2'>
      // javaScript沙箱2
      let a = 9999;
      let b = 10000;
      window.c = '💅💅💅💅';
      window.minus = function(){
        window.result = a = a - b;
        console.log('minus',a);
      }
    </pre>
    <button class="btn btn-dark" id="snapshot2">init snapshot ②</button>
    <button class="btn btn-dark" id="minus" onClick="minus">minus</button>
    <button class="btn btn-dark" id="snadbox2" onClick="addition">active snadbox2</button>
  </body>

  <script type="text/javascript">

    // 间接调用，使用全局作用域 
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval

    let geval = eval;

    /********** 初始化代码片段 ******/
    document.getElementById("snapshot1").onclick = function () {
      geval(
        "(function(window){let a = 0;let b = 1;window.addition = function(){ window.result = a = a + b;console.log('addition',a);}}).bind(p1)(p1)"
      );
    };
    document.getElementById("snapshot2").onclick = function () {
      geval(
        "(function(window){let a = 9999;let b = 10000; window.c = '💅💅💅💅';window.minus = function(){ window.result = a = a - b;console.log('minus',a);}}).bind(p2)(p2)"
      );
    };

    /********** 激活沙箱 ******/
    document.getElementById("snadbox1").onclick = function () {
      document.getElementById("pre1").style.background = 'yellow';
      document.getElementById("pre2").style.background = 'white';
      snadbox2.inActive();
      snadbox1.active();
    };

    document.getElementById("snadbox2").onclick = function () {
      document.getElementById("pre1").style.background = 'white';
      document.getElementById("pre2").style.background = 'yellow';
      snadbox1.inActive();
      snadbox2.active();
    };

    /********** 调用沙箱中的方法 ******/
    document.getElementById("addition").onclick = function () {
      addition();
    };

    document.getElementById("minus").onclick = function () {
      minus();
    };

  </script>
</html>

```

### 结束











const defineCache = Object.create(null)
var currentMod = null

function getModule(name) {
  if (name in defineCache) {
    return defineCache[name]
  }

  var module = {
    exports: null,
    loaded: false,
    onLoad: [],
    name,
  }

  defineCache[name] = module
  backgroundReadFile(name, function (code) {
    // 异步，当前js模块下载完成，并且可以执行
    currentMod = module
    new Function('', code)()
  })
  return module
}

// 订阅 ‘depNames’
function define(depNames, moduleFunction) {
  var myMod = currentMod
  console.log(currentMod, 'currentMod');
  var deps = depNames.map(getModule);

  //添加订阅对象 中间者
  deps.forEach((mod) => {
    if (!mod.loaded) {
      mod.onLoad.push(whenDepsLoad)
    }
  })

  whenDepsLoad()

  function whenDepsLoad() {
    // 只有每个模块都加载好了，才去执行回调
    if (!deps.every((m) => m.loaded)) {
      return;
    }

    const args = deps.map((m) => m.exports)
    const exports = moduleFunction.apply(null, args) // moduleFunction(args)

    // 发布  
    if (myMod) {
      myMod.exports = exports;
      myMod.loaded = true;
      myMod.onLoad.reverse().every((f) => f());
    }
  }
}
function backgroundReadFile(path, done) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.addEventListener('load', () => {
      console.log('xhr load',xhr.responseText,'................................')
      done(xhr.responseText)
    });
    xhr.send();
}

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
    currentMod = module
    new Function('', code)()
  })
  return module
}

// 订阅 ‘depNames’
function define(depNames, moduleFunction) {
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
    if (!deps.every((m) => m.loaded)) {
      return;
    }

    const args = deps.map((m) => m.exports)
    const exports = moduleFunction.apply(null, args) // moduleFunction(args)

    // 发布  
    if (currentMod) {
      currentMod.exports = exports;
      currentMod.loaded = true;
      currentMod.onLoad.reverse().every((f) => f());
    }
  }
}

function backgroundReadFile(path, done) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.addEventListener('load', () => {
        done(xhr.responseText)
    });
    xhr.send();
}

define(['a.js', 'd.js'], (a, d) => {
  console.log(a, 'a');
  console.log(d, 'd');
})
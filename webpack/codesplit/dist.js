(function(){

  const modules = [, function (module, exports, require) {
    return module.exports = { a: 1 }
  }, function (module, exports, require) {
    return module.exports = { b: 2 }
  }];

  const module_cache = {};

  function require(moduleId) {

    let cachedModule = module_cache[moduleId];

    if (cachedModule !== undefined) {
      return module;
    }

    let module = { exports: {} };

    modules[moduleId](module, module.exports, require);

    return module.exports;
  }
  console.log(require(1));
  console.log(require(2));

})()
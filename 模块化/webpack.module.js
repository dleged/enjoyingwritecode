((){

  let modules = [(require, module, modele.exports) => {
    xxx
  }, (require, module, modele.exports) => {
    xxx
  }]

  const module_caches = {};
  function require(id) {

    if (module_caches[id]) {
      return module_caches[id];
    }

    const module = {
      exports: {}
    }

    modules[id](require, modeule, module.exports);
    
    return module.exports;
  }

})()
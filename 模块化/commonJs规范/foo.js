require.register("./foo.js", function(module, exports, require){
  module.exports = function(x) {
    console.log(x);
  };
});
module.exports = function () {
  return {
    mainpulateOptions: function mainpulateOptions(opts, parserOpts) {

      parserOpts.plugins.push("jsx");

    }
  }
}
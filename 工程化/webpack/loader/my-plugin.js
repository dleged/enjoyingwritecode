const pluginName = 'ConsoleLogOnBuildWebapckPlugin';

class ConsoleLogOnBuildWebapckPlugin {
  apply(compiler){
    compiler.hooks.emit.tap(pluginName,(compilation) => {
      console.log('webpack 构建正在启动');
    });
  }
}

module.exports = ConsoleLogOnBuildWebapckPlugin;
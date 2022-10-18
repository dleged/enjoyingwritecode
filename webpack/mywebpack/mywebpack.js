// 1. 找到一个入口文件
// 2. 解析这个文件，提取他的依赖
// 3. 解析入口文件的依赖，递归的去创建一个文件见得依赖图，描述所有文件件的依赖关系
// 4. 把所有的文件打包成一个文件

const fs = require('fs');
const babylon = require('babylon');// 解析 code 为语法树
const traverse = require('babel-traverse').default;// 把 ast 语法树转为对象
const path = require('path');
const babel = require('babel-core');// ast 转为 js 代码

let ID = 0;

function createAssets(filename) {
  const content = fs.readFileSync(filename, 'utf-8');
  const ast = babylon.parse(content, { sourceType: "module" });

  const dependencies = [];
  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      dependencies.push(node.source.value);
    }
  })
  const id = ID++;

  const { code } = babel.transformFromAst(ast, null, {
    presets: ['env']
  });

  return {
    id,
    filename,
    dependencies,
    code
  };
}

// 创建所有文件的依赖图
function createGraph(entry) {
  const mainAsset = createAssets(entry);
  const allAsset = [mainAsset];

  for (let asset of allAsset) {
    const dirname = path.dirname(asset.filename);

    asset.mapping = {};
    asset.dependencies.forEach((relativePath) => {
      const absolutePath = path.join(dirname, relativePath);
      const childAsset = createAssets(absolutePath);
      asset.mapping[relativePath] = childAsset.id;
      allAsset.push(childAsset);
    });
  };

  return allAsset;
}

function bundle(graph) {

  let modules = '';

  graph.forEach(module => {
    // 遍历所有的模块，然后存储模块依赖
    modules += `${module.id}: [
      function(require,module,exports){
        ${module.code}
      },
      ${JSON.stringify(module.mapping)},
    ],`
  });

  const result = `
    (function(modules){
      function require(id){
        const [fn,mapping] = modules[id];
        function localRequire(relativePath){
          return require(mapping[relativePath])
        }
        const module = {
          exports: {}
        };
        fn(localRequire,module,module.exports);
        return module.exports;
      }
      require(0);
    })({${modules}});
  `;

  return result;

}

const graph = createGraph('./source/entry.js');
const result = bundle(graph);

console.log(result);
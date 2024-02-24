// 题目：简化路径

// 给定一个文件的绝对路径，将其转化为规范路径。

// 规范路径需满足以下条件：

// 始终以斜杠 / 开头。
// 两个目录名之间必须只有一个斜杠 /。
// 最后一个目录名（如果存在）不能以 / 结尾。
// 此外，路径仅包含从根目录到最深目录的文件名或目录名。
// 函数签名：

function simplifyPath(path) {
  const stack = [];
  const dirs = path.split('/'); // /  切割出路径

  for(const dir of dirs){
    if(dir === '..'){// .. 符号返回上一级
      stack.length && stack.pop();
    }else if(dir.length && dir !== '.'){ // 除开 .  符号。推入合理的路径
      stack.push(dir);
    }
  }
  return '/' + stack.join('/');
}

const result1 = simplifyPath("/home/");
console.log(result1);
// 预期输出: "/home"

const result2 = simplifyPath("/../");
console.log(result2);
// 预期输出: "/"

const result3 = simplifyPath("/home//foo/");
console.log(result3);
// 预期输出: "/home/foo"

const result4 = simplifyPath("/a/./b/../../c/");
console.log(result4);
// 预期输出: "/c"
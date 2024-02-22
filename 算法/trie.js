// 题目：实现一个 Trie（前缀树）

// 实现一个 Trie（前缀树）包含 insert，search，和 startsWith 这三个操作。

// 实例：

// 前缀树（Trie），也被称为字典树，是一种树形数据结构，用于存储一组动态集合，其中的键通常是字符串。每个节点包含一个字母，根节点代表一个空字符串。通过沿着树的边从根到某个节点的路径，可以构建出该节点对应的字符串。

// 关键特点：

// 根节点不包含字符，除根节点外每个节点都只包含一个字符。
// 从根节点到某一节点，路径上经过的字符连接起来，为该节点对应的字符串。
// 每个节点的所有子节点包含的字符都不相同。
// Trie 可以有一些附加信息，比如记录节点的频次，判断是否为一个完整的单词。
// Trie 主要有三个基本操作：

// 插入（Insert）：将一个单词插入到 Trie 中。
// 查找（Search）：判断 Trie 中是否存在一个单词。
// 前缀查找（StartsWith）：判断 Trie 中是否存在以某个前缀开头的单词。

class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(chars){
    let root = this.root; 
    for(let char of chars){
      if(!root.children[char]){
        root.children[char] = new TrieNode();
      }
      root = root.children[char];
    }
    root.isEnd = true;
  }

  search(chars){
    let root = this.root;
    for(let char of chars){
      if(!root.children[char]){
        return false;
      }
      root = root.children[char];
    }
    return root.isEnd;
  }

  startsWith(chars){
    let root = this.root;
    for(let char of chars){
      if(!root.children[char]){
        return false;
      }
      root = root.children[char];
    }
   return true; 
  }
}

let trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple"));   // 返回 true
console.log(trie.search("app"));     // 返回 false
console.log(trie.startsWith("app")); // 返回 true

trie.insert("app");
console.log(trie.search("app"));     // 返回 true
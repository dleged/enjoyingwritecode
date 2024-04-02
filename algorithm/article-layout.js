// 给定一个单词数组 words 和一个长度 maxWidth ，重新排版单词，使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本。

// 你应该使用 “贪心算法” 来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 ' ' 填充，使得每行恰好有 maxWidth 个字符。

// 要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。

// 文本的最后一行应为左对齐，且单词之间不插入额外的空格。

// 注意:

// 单词是指由非空格字符组成的字符序列。
// 每个单词的长度大于 0，小于等于 maxWidth。
// 输入单词数组 words 至少包含一个单词。


// 示例 1:

// 输入: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// 输出:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]
// 示例 2:

// 输入:words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
// 输出:
// [
//   "What   must   be",
//   "acknowledgment  ",
//   "shall be        "
// ]



/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const ans = [];

  let right = 0; // 用于标记没一行单词区间
  let wordLen = words.length;

  while (true) {
    let left = right;
    let sumWordsLen = 0; // 每一行的单词总长

    //  一行的单词总长度 + (right - left) 中间空格数小于最小行
    while (right < wordLen && sumWordsLen + words[right].length + right - left <= maxWidth) {
      sumWordsLen += words[right].length;
      right++;
    }

    const wordNum = right - left;
    const spaceNum = maxWidth - sumWordsLen;

    // 末尾的单词
    if (right === wordLen) {
      const s = words.slice(left).join(' ');
      ans.push(s + fillBlank(maxWidth - s.length));
      break;
    }

    // 一行只有一个单词
    if (wordNum === 1) {
      const s = words[left];
      ans.push(s + fillBlank(spaceNum));
      continue;
    }

    // 不是末尾行且几个单词
    const avgBlank = Math.floor(spaceNum / (wordNum - 1));// 单词间平均的空格
    const extraBlank = spaceNum % (wordNum - 1); // 剩余的空格
    const s1 = words.slice(left, left + extraBlank + 1).join(fillBlank(avgBlank + 1)); // 多出的空格分给前部分
    const s2 = words.slice(left + extraBlank + 1, right).join(fillBlank(avgBlank)); // 后部分均分

    ans.push(s1 + fillBlank(avgBlank) + s2);
  }

  return ans;
};

function fillBlank(n) {
  return new Array(n).fill(' ').join('');
}



console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."]
  , 16));

  //["This    is    an","example  of text","justification.  "]


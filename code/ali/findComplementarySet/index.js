"use strict";
function findComplementarySet(a, b) {
    // 如果 b 是空数组
    if (!b.length)
        return a;
    // 如果 b 的数组长度大于 a 的长度
    if (b.length > a.length) {
        return [];
    }
    let result = [];
    a.forEach((v) => {
        // 如果 a 中的值不在 b 中，并且结果集不存在当前的值，加入结果集
        if (b.indexOf(v) === -1 && result.indexOf(v) === -1) {
            result.push(v);
        }
    });
    return result;
}
module.exports = findComplementarySet;

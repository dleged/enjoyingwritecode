"use strict";
/*** --- 问题描述 --- **
 * 重新排列⼀个字符串，使得每个相邻字符都不同，列出所有情况
 * ** --- 说明 --- ** -
 * 字符串只包含⼩写字⺟或者数字
 * */
function reorganize(str) {
    if (!str)
        return [];
    let result = [];
    let path = []; // 路径
    let map = new Map(); // 存放已经使用过的字符下标
    function stackBack(path, index) {
        if (path.length === str.length) {
            return result.push([...path].join(''));
        }
        for (let i = index; i < str.length; i++) {
            // 不相邻并且没有使用过的字符
            if (path[path.length - 1] !== str[i] && !map.has(i)) {
                path.push(str[i]);
                map.set(i, i); // 记录下标
                stackBack(path, 0); // 回溯
                path.pop(); // 剪枝
                map.delete(i);
            }
        }
    }
    stackBack(path, 0);
    return result;
}
module.exports = reorganize;

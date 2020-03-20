//移动0到数组末尾，在原数组上操作
function moveZeroToLast(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === 0) {
            arr.push(...arr.splice(i, 1));
            len--;
            i--;
        }
    }
    return arr;
}

console.log(moveZeroToLast([0, 0, 1, 2, 30, 0, 0, 28, 0, 99]));
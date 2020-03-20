
/**
 *（京东、快手）周一算法题之「两数之和」
 * 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
 * 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
 * 示例：
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 *
 */
function findSumIndex(arr, target) {
    let list = [];
    let ret = [];
    // arr = arr.sort((a, b) => a - b);
    let len = arr.length;
    function backSearch(arr, index, target) {
        if (target === 0) {
            ret.push(...list);
            return ret;
        };

        for(let i = index; i < len;i++){
            let current = arr[i];
            if (current > target) {
                break;
            }
            list.push(i);//回溯
            let j = i + 1;
            backSearch(arr,j,target -  current);
            list.pop();//剪枝
        }
        
    }
    backSearch(arr, 0, target);
    return ret;
}

console.log(findSumIndex([2, 7, 11, 5, 15], 9));




//变种，可以重复使用
function findSumIndex2(arr, target) {
    let list = [];
    let ret = [];
    arr = arr.sort((a, b) => a - b);
    let len = arr.length;
    function backSearch(arr, index, target) {
        if (target === 0) {
            ret.push(list.slice());
            return ret;
        };

        for (let i = index; i < len; i++) {
            let current = arr[i];
            if (current > target) {
                break;
            }
            list.push(i);//回溯
            backSearch(arr, i, target - current);
            list.pop();//剪枝
        }

    }
    backSearch(arr, 0, target);
    return ret;
}

console.log(findSumIndex2([2, 2, 2, 5, 9, 7, 11, 15], 9));
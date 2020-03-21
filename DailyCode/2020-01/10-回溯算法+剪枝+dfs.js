//回溯算法模版
/**
 * letcode 39,40题
 */
/**
 * 
 * @param {*} nums nums 要处理的数组
 * @param {*} target 符合的目标值
 */
function main(nums,target){
    let result = [];
    let stack = [];
    let length = nums;
    function backStracking(nums,index,target){
        //满足条件则添加结果并退出
        if(满足条件){
            result.push(stack);
            return;
        }

        for(let start = index; start < length;start++){
            //选值
            stack.push(nums[start]);
            //递归下一个决策
            backStracking(nums,index,target - nums[start]);
            //取消选择的值
            stack.pop();
        }
    }
    //对数据开始进行回溯
    backStracking(nums,0,target);

    return result;
}


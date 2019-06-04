/**
 * 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
 * 示例：
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */

let nums = [2, 7, 11, 15];
function getIndex(target){
	let result = [];
	for(let i = 0, len = nums.length; i < len; i++){
		let current = nums[i];
		let num = target - current;
		if(nums.indexOf(num) > -1) result.push(i);
		//findIndex找到差的下标,但是findIndex针对数组中的每个元素, 都会执行该回调函数()
		if(result.length === 2) break;
	}
	return result;
}
console.log(getIndex(9));
console.log(getIndex(13));
console.log(getIndex(26));



// function getIndex2(target){
// 	return nums.reduce((res, cur, i) => {
// 		const index =  nums.findIndex(x => x === target - cur);
// 		return res || (!!~ index && [i, index])
// 	}, void 0);
// }

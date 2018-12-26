let arr = [2,2,2,3,23,4,324,235,3254,324,324,13,1,1,2,4,3,4,5,5,6,6];
function clearRepeatArr(arr) {
	return arr.filter((item,i) => arr.lastIndexOf(item) === i)
}
console.log(clearRepeatArr(arr));



function getPrime(limt){
	let i = 1,j = 2,arr = [];
	for(;i < limt; i++){
		for(;j < i;j++){
			if(i%j === 0) break;
		}
		if(i === i) arr.push(i)
	}
	return arr;ss
}
console.log(getPrime(1000));

function add(a: number,b: number){
	return a + b;
}

let sum = add(1,2);
console.log(sum);

let sum2 = add('1','2');//Argument of type '"1"' is not assignable to parameter of type 'number'.
console.log(sum);

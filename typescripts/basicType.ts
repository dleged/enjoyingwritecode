let u: undefined = undefined;
let n: null = null;

//undefined和null是基本类型的子类型；
let num: number = 1;
num = u;
num = n;

let unstable: void;

unstable = null;
unstable = undefined;

//unstable = num; // Type 'number' is not assignable to type 'void'


function helloWorld(): void{
    console.log('hello world!');
}
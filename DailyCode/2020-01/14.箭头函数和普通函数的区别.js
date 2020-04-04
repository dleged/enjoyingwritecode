//普通函数
function Player(name) {
    console.log(`${name} are you there!`);
    this.name = name;
}

Player.setName = function () {
    console.log(this.name);
}
Player.prototype.getName = function () {
    console.log(`this name is ${this.name}`);
    console.log(this);
}

let instance = new Player('webs');
console.log(instance.constructor); //function Sayname
console.log(instance.getName());// sayName
console.log(Player.setName());// SayName function name
console.log(instance.__proto__);

console.log('--------------------------------------------')

//箭头函数

this.name = 'global';
this.sayHi = function () { console.log('hi') };
let Player2 = (name) => {
    console.log(`this name is ${this.name}`);
    this.sayHi();
}

// new player2();// Player2 is not a constructor
// Player2('jack').sayHi();


//diff between normal function with arrow function;

// normal function 
// 1.可以作为构造函数，使用new关键字，内部方法this指向实例；
// 2.谁调用他，this指向谁；
// 3.具有原型链；
// 4.可以扩展静态方法；


// arrow function 
//1.不可最为构造函数使用；
//2.没有原型链；
//3.没有静态方法；
//4.this是调用其的父作用域的this指向；

function createArray(arr,count) {
    if (count === 10) { return arr; };
    let random = Math.round(Math.random(0, 1) * 30 + 2);
    if (!(arr.includes(random))) {
        arr[count] = random;
        return createArray(arr,++count);
    }else{
        return createArray(arr,count);
    }
}

console.log(createArray(Array(5),0));
!function(): void{
    //变量初始化后被赋值了，就会默认为赋值的类型
    let str = 'string'; // => let str: string = 'string';
    //str = 100; //Type '100' is not assignable to type 'string'

    //变量初始化未赋值，默认未any类型
    let num;// => let num: any
    num = 99;
    num = 'string';

}
(function(){
    // |符号表示可以是多个类型中的一个；
    let value: string | number;
    value = 'string';
    console.log(value.length);
    value = 99;
    //console.log(value.length); //Property 'length' does not exist on type 'number'.
}());
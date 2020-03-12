(function(){
    interface Person{
        readonly id: number,//只可读性
        name: string,
        age: number,
        children?: object, //所有的对象类型，包括null (?可选属性)
        [propname: string]: any //包含任何属性
    } 
    let person: Person = {
        id: 1,
        name: 'jack',
        age: 99,
        children: ['jace','jaya'],
        gender: 'male',
    }

}());
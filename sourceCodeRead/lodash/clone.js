const {cloneDeep} = require('loadsh');

let objects = {
    'a': {a1: 'a1',a2: 'a2'},
    'b': '2',
    'c': new Date(),
    'd': function(msg){console.log(msg)},
    'e': /.\a/
};
let shallow = cloneDeep(objects);
console.log(shallow);

/**
 * lodash的clone思路
 * 1.clone第二个参数决定是否是深度克隆；
 * 2.基本类型直接返回；
 * 3.object做特殊处理；
 * 4.function类型不会有返回值；
 */
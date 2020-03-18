(function(root,factory){
    if(typeof define === 'function' && define.amd){
        //amd
        define(['jquery','lodash'],factory);
    }else if(typeof exports === 'function'){
        //commonjs node
        module.exports = factory(require('jquery'),require('lodash'));
    }else{
        //window
        global.extension = factory(global.jquery,global.lodash);
    };

})(root,function($,_){
    return {
        jquery: $,
        lodash: _,
    }
})
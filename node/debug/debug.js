var a = 1;
var b = 'world';
var c = function (x) {
    setTimeout(function(){
        console.log('hello ' + x + a);
    },1000);
}; 
c(b);

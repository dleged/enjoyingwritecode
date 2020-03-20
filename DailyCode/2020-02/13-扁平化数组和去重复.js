
//编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

//可以兼容flat
Array.prototype.flat = Array.prototype.flat || function(){
    return [].concat(...this.map((item) => {
        if(Array.isArray(item)){
            return item.flat();
        }else{
            return [item];
        }
    }))
}
function flatSortAssArray(array){
    if(Array.prototype.flat){
        console.log(Array.prototype.flat);
        
        var flatArray = array.flat(Infinity)
    }else{
        var flatArray = array.join(',').split(',');//array.toString().split(',')
    }
    return Array.from(new Set(flatArray)).sort((a,b) => a - b);
}



console.log(flatSortAssArray(arr));

Promise._all = function(promises){
    if(!Array.isArray(promises)){
        throw new Error('promises must be a Array');
    }
    let promisesLen = promises.length;
    var count = 0;
    let ret = [];


    return new Promise((resolve, reject) => {
        for(let i = 0,len = promises.length; i < len;i++){
            p = promises[i];
            if(!(p instanceof Promise)){
                p = Promise.resolve(p);
            }
            
            p.then((v) => {
                count++;
                ret.push(v);
                if(count >= promisesLen){//⚠️
                    return resolve(ret);
                }
            }).catch((error) => {
                resolve(error);
            })
        }
    })
}


let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);
let p4 = 4;
//依次加载多个请求，如果其中有请求失败，我还想promise._all返回，只需要对catch中resolve正常返回（字节跳动2面）
let p5 = new Promise((resolve,reject) =>{//
    try{
       let nam = obj.name;
       resolve(name);
    }catch(error){
        console.log(error)
        resolve(error);
    }
})

Promise._all([p1,p2,p3,p4,p5]).then(console.log);
//要求设计 LazyMan 类，实现以下功能。https://github.com/yygmind/blog/issues/43 #56


class LazyMan{
    constructor(name){
        this.queue = [];
        this.name = name;
        console.log(`Hi I am ${name}`);
        this.init();
    }

    init(){
        setTimeout(() => {
            this.next();
        })
    }

    pushQueue(fn){
        this.queue.push(fn);
    }

    unshiftQueue(fn){
        this.queue.unshift(fn);
    }

    eat(eatName){
        let fn = ((name) => {
            return () => {
                console.log(`I am eating ${name}`);
                this.next();
            }
        })(eatName)
        this.pushQueue(fn);
        return this;
    }

    _sleepHandler(lazyTime){
        let wait = lazyTime * 1000;
        let fn = () => {
            setTimeout((t) => {
                console.log(`wait ${wait}`);
                this.next();
            },wait);
        }
        return fn;
    }

    sleepFirst(lazyTime){
        this.unshiftQueue(this._sleepHandler(lazyTime));
        return this;
    }

    sleep(lazyTime){
        this.pushQueue(this._sleepHandler(lazyTime));
        return this;
    }

    next(){
        let fn = this.queue.shift();
        typeof fn === 'function' && fn();
    }
}




// new LazyMan('Tony');
// // Hi I am Tony
// new LazyMan('Tony').sleep(10).eat('lunch');
// // Hi I am Tony
// // 等待了10秒...
// // I am eating lunch
// new LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// // Hi I am Tony
// // I am eating lunch
// // 等待了10秒...
// // I am eating diner
new LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
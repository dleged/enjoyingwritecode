const events = require('events');
const emitter = new events.EventEmitter();

emitter.on('sum',function(num1 = 1,num2 = 2){
    console.log(num1 + num2);
})

emitter.emit('sum');
emitter.emit('sum', 2, 3);
emitter.emit('sum', 100, 300);

emitter.emit('sum');
emitter.emit('sum', 2, 3);
emitter.emit('sum', 100, 300);
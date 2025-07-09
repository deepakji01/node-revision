const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
 
myEmitter.on('WaterFull', () => {
  console.log('Please turn off the Motor!');
  setTimeout(()=>{
    console.log('please turn off the motor! its a reminder')
  },3000);
});
// myEmitter.emit('event');
console.log("script is running");
console.log("script is still running");
myEmitter.emit('WaterFull');
console.log("script is still running");
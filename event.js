const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (data) => {
    console.log('data received', data);
});

customEmitter.on('response', (data,status) => {
  console.log('data received', data,status);
});
customEmitter.emit('response', { name: 'John', age: 20 },200);

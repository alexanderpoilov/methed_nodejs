import { EventEmitter } from 'node:events';

class EE extends EventEmitter {};

const ee = new EE();

ee.on('tick', (count) => {
  console.log(`Tick - ${count}`);
});

const timer = (start, stop, ms) => {
  const startTimer = setInterval(() => {
    start++;
    ee.emit('tick', start);
    if (start >= stop) {
      clearInterval(startTimer);
    }
  }, ms); 
}

export default timer;
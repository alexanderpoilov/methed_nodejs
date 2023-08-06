import { EventEmitter } from 'node:events';
import { stat, appendFile, truncate} from 'node:fs/promises';

class Logger extends EventEmitter {
  constructor (fileName, maxSize) {
    super();
    this.fileName = fileName;
    this.maxSize = maxSize;
  }

  async log(message) {
    console.log('Принято сообщение:', message);
    if (await this.getFileSize() >= this.maxSize) {
      console.log('Clear file');
      this.truncateFile();
      if (await this.getFileSize() >= this.maxSize) {
        appendFile(this.fileName, `${message}\n`)
        logger.emit('messageLogged', message) 
      }
    } else {
      appendFile(this.fileName, `${message}\n`)
      logger.emit('messageLogged', message)
    };
  }
  async getFileSize() {
    let status = 'empty';
    try {
      status = await stat(this.fileName)
      return status.size;
    } catch(e) {
      console.log(e.message);
      return 0
    }
}
  truncateFile() {
    truncate(this.fileName, 0);
  }
};

console.log('\x1Bc');

const logger = new Logger('./logFolder/log.txt', 1024)

logger.on('messageLogged', message => {
  console.log('Записано сообщение:', message);
});

logger.log('test message #1');
logger.log('test message #2');
logger.log('test message #3');
logger.log('test message #4');
logger.log('test message #5');
logger.log('test message #6');
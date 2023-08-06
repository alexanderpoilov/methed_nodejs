import { EventEmitter } from 'node:events';
import { stat, appendFile, readFile, writeFile} from 'node:fs/promises';

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
      this.rewriteFile();
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
      console.error(e.message);
      return 0
    }
}
  async rewriteFile() {
    try {
      await readFile(this.fileName, 'utf-8')
        .then(data => {
          console.log();
        })
      // writeFile(this.fileNam≠e,)
    } catch(e) {
      console.error(e.message);
    }
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
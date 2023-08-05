import { EventEmitter } from 'node:events';

class EE extends EventEmitter {};

const ee = new EE();

const sendMessage = (userName, text) => {
  return {
    user : userName, 
    message: text
  };
}

const receiveMessage = ({user, message}) => console.log(`${user} написал: ${message}`);

ee.on('userMessage', sendMessage);
ee.on('userMessage', receiveMessage);

const chat = () => {
  ee.emit('userMessage', 
    sendMessage('Сергей Кислов', 'поднимаем зарплату старшему куратору в два раза'));
  ee.emit('userMessage', 
    sendMessage('Максим Лескин', 'абсолютно согласен с сообщением выше, если кураторы не против'));
  ee.emit('userMessage', 
    sendMessage('Кураторы Methed', 'единогласно проголосовали "за"'));
}

export default chat;
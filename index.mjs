import createUserTemplate from './mpackage/main.mjs';
 
const userData = {
  name: 'александр пойлов',
  dateBirth: '04.03.1985',
  purpose: 'старший куратор'
};

console.log(createUserTemplate(userData));

import { v4 as uuidv4 } from 'uuid';

const setFirstLetterCapital = word => word ? word[0].toUpperCase() + word.slice(1)
  : 'не указано';

const getAge = date => ((new Date().getTime() - new Date(date)) / 
  (24 * 3600 * 365.25 * 1000)) | 0;

const createUserTemplate = ({name, dateBirth, purpose}) => {

  const firstName = setFirstLetterCapital(name.split(' ')[0]);
  const lastName = setFirstLetterCapital(name.split(' ')[1]);

  return {
    id: uuidv4(),
    firstname: firstName,
    lastname: lastName,
    dateBirth: dateBirth,
    age: getAge(dateBirth),
    purpose: setFirstLetterCapital(purpose)
  }
};

export default createUserTemplate;
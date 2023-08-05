const createUUID = () => {
  return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
  });
}

const setFirstLetterCapital = word => word ? word[0].toUpperCase() + word.toLowerCase().slice(1)
  : 'не указано';

const getAge = date => ((new Date().getTime() - new Date(date)) / 
  (24 * 3600 * 365.25 * 1000)) | 0;

const createUserTemplate = ({name, dateBirth, purpose}) => {

  const firstName = setFirstLetterCapital(name.split(' ')[0]);
  const lastName = setFirstLetterCapital(name.split(' ')[1]);

  return {
    id: createUUID(),
    firstname: firstName,
    lastname: lastName,
    dateBirth: dateBirth,
    age: getAge(dateBirth),
    purpose: setFirstLetterCapital(purpose)
  }
};

module.exports = createUserTemplate;
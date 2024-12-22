/* const mysql = require('mysql')

const connection = mysql.createPool({
    port: 3306,
    //host: 'localhost',
    //user: 'root',
    //password: 'acard',
    //database: 'blog'
})


module.exports = connection */

const Realm = require("realm");
const schema = require("./schema");

require("dotenv").config()

const encryptionKeyString = process.env.SECRET_KEY
const encryptionKey = new Uint8Array(Buffer.from(encryptionKeyString, "utf-8"));

// Ouvrir une instance Realm au démarrage
const realm = new Realm({
    path: "db.realm",
    schema: [schema],
    encryptionKey: encryptionKey,
});

// Exporter l'instance prête à l'emploi
module.exports = realm;

/* CRUD */

/* const createPerson = async (name, age) => {
    realm.write(() => {
      realm.create('Person', {
        name: name,
        age: age,
      });
    });
  }; 
*/

/* 
const getAllPeople = () => {
  return realm.objects('Person');
};
*/

/* 
const getPersonByName = (name) => {
  return realm.objects('Person').filtered('name == $0', name);
};
*/

/* const getPeopleOver30 = () => {
    return realm.objects('Person').filtered('age > 30');
  };
*/

/* 
const updatePersonAge = (name, newAge) => {
  realm.write(() => {
    const person = realm.objects('Person').filtered('name == $0', name)[0];
    person.age = newAge;
  });
};
*/

  
/* 
const deletePerson = (name) => {
  realm.write(() => {
    const person = realm.objects('Person').filtered('name == $0', name)[0];
    realm.delete(person);
  });
};
*/

/* 
const addCarToPerson = (personName, make, model) => {
  realm.write(() => {
    const person = realm.objects('Person').filtered('name == $0', personName)[0];
    person.cars.push({
      make: make,
      model: model,
    });
  });
};
*/

/* 
const getCarsByPerson = (personName) => {
  const person = realm.objects('Person').filtered('name == $0', personName)[0];
  return person.cars;
};
*/
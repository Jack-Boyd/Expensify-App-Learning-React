// const person = {
//   name: 'Jack',
//   age: 21,
//   location: {
//     city: 'Auckland',
//     temp: '25'
//   }
// };
// const {name: firstName = 'Anonymous', age} = person;
// const {city, temp: temperature} = person.location;
// console.log(`${firstName} is ${age}`);
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

const address = ['31 Howe Street', 'Auckland', 'New Zealand', '1011'];
const [, city, country = 'New Zealand'] = address;
console.log(`You are in ${city}, ${country}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [name,,medium] = item;
console.log(`A medium ${name} costs ${medium}`);
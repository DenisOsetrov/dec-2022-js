// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// function User(name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.gender = 'female';
//     this.greeting = function (msg) {
//         console.log(`${msg} my name is  +${this.name}`);
//
//     };
// }
//
// let user1 = new User('vasya', 44, false);
// console.log(user1);
// let user2 = new User('asda', 12312, true);
// user2.greeting('hello');
// user2.greeting('hi');
// user2.greeting('aloha');


// function Dev(name, age, skills) {
//     this.name = name;
//     this.age = age;
//     this.skills = skills;
// }
//
//
// Dev.prototype.addSkill = function (skill) {
//     this.skills.push(skill);
// }
//
//
// let dev = new Dev('kokos', 123, [{title: 'java', exp: 3}, {title: 'js', exp: 3},]);
// console.log(dev);
// console.log(dev.skills[1].exp);
// dev.name = 'ananas';
//
// // dev.skills.push({});
//
//
// dev.addSkill({});
// dev.addSkill({});
// console.log(dev);
//
//
// // let devs = [
// //     new Dev('kokos', 123, [{title: 'java', exp: 3}, {title: 'js', exp: 3},]),
// //     new Dev('kokos', 123, [{title: 'java', exp: 3}, {title: 'js', exp: 3},]),
// //     new Dev('kokos', 123, [{title: 'java', exp: 3}, {title: 'js', exp: 3},]),
// //     new Dev('kokos', 123, [{title: 'java', exp: 3}, {title: 'js', exp: 3},])
// // ]
// //
// // console.log(devs);
// //
// // function userCreator(name) {
// //
// //     this.name = name;
// //
// // }


// Array.prototype.print = function () {
//     for (const item of this) {
//         console.log(item);
//     }
//     console.log('***********');
// };
// let xxx = new Array(11, 22, 33);
// xxx.print();
//
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// users.print();


// console.log({});
// console.log({}.__proto__);

// let user = {
//     id: 1,
//     name: 'kokos'
// };
//
// let user2p = Object.create(user);
//
// console.log(user2p === user);
// console.log(user2p);
// console.log(user2p.id);
// console.log(user2p.name);
// console.log(user2p.hasOwnProperty('id'));
// console.log(user2p.hasOwnProperty('name'));
// user2p.surname = 'foobar';
// console.log(user2p.hasOwnProperty('surname'));
// console.log(user2p);







// class User {
//
//     constructor(username, age) {
//         this.username = username;
//         this.age = age;
//     }
//
//     // static greeting() {
//     //     console.log(this);
//     //     console.log(this.age);
//     //     return `hello my name is ${this.username}`;
//     // }
//
//
//     work() {
//         return `work in process`;
//     }
//
//
// }
//
// // let user = new User('vasya', 31);
// // console.log(user);
// //
// // console.log(user.greeting());
// // console.log(User.greeting());
//
//
// class Customer extends User {
//
//     constructor(username, age, password) {
//         super(username, age);
//         this.password = password;
//     }
//
//
//     work() {
//         return 'hfqwyfeyqwve';
//     }
//
//
//     foobar() {
//
//     }
// }
//
// let customer = new Customer('vasya', 31, '111');
// console.log(customer);
// console.log(customer.work());
// customer.foobar();

//
// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
//
// function Customer(name, age, password) {
//     User.apply(this, arguments);
//     this.password = password;
// }
//
// let customer = new Customer('vasya', 31, '1111');
// console.log(customer);















// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let user = new User('basya', 31);
// user.greeting = function () {
//     console.log('hi!');
// };
// console.log(user);
// user.greeting();
//
// let user2 = new User('asdasd', 123123);
// console.log(user2);
// user2.greeting();


// console.log(User);
//
// User.prototype.greeting = function () {
//     return `hello my name is ${this.name}`;
// };
//
//
// let user = new User('vasya', 12);
// console.log(user.greeting());

// let user = new User('vasya', 31);
// user.greeting = function (msg) {
//     return `${msg} my name is ${this.name} `;
// };
//
// console.log(user.greeting('hello'));
// let user2 = new User('petya', 123123);
//
// console.log(user.greeting.apply(user2, ['hi']));
// console.log(user.greeting.call(user2, 'olla'));

// let user = new User('vasya', 31);
// user.greeting = function (msg) {
//     return `${msg} my name is ${this.name} `;
// };
// let user2 = new User('petya', 123123);
// let greetingCopy = user.greeting.bind(user2);
// console.log(greetingCopy('quwteyqwfe'));









// call,

// function Human(name) {
//     this.name = name;
//     this.greeting = function (msg) {
//         console.log(`${msg} my name is ${this.name}`);
//     };
//
// }
//
// let human1 = new Human('vasya');
//
//
// let friend = {
//     name: 'kokos',
//     age: 123
// }
//
// human1.greeting.call(friend, 'aloha', 'asddadsqwe');
// human1.greeting.apply(friend, ['hello', 'asdasd', 'qweqweq']);
//
//
// let greetingCopy = human1.greeting.bind(friend);
// greetingCopy('wasssszzzzup');


// let obj = {};
// console.log(obj);
// console.log(obj.__proto__); // [[Prototype]]
//
// let user = {name: 'olya', age: 31, status: false};
//
// let userCopy = Object.create(user);
// userCopy.surname = 'shevchenko';
// console.log(userCopy);
// console.log(userCopy.name, userCopy.hasOwnProperty('name'));
// console.log(userCopy.age, userCopy.hasOwnProperty('age'));
// console.log(userCopy.status, userCopy.hasOwnProperty('status'));
// console.log(userCopy.surname, userCopy.hasOwnProperty('surname'));
//
// console.log(userCopy.foobar);


//    function User(name, age, status) {
//        this.name = name;
//        this.age = age;
//        this.status = status;
//    }
//
//    let user1 = new User('asd', 123, true);
//    let user2 = new User('qwe', 12, false);

//
// function User(name, age, status, wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = wife
// }
//
// new User('asd', 123, true, {name: 'qwetrtqwe'});


// function User(name, age, status, wifeName, wifeAge) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = {name: wifeName, age: wifeAge}
//     this.greeting = function () {
//         console.log('hi');
//     };
// }
//
// let user = new User('asd', 123, true, 'anna', 28);
// console.log(user);
//
//
//
// let User = class {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.foo = function () {
//             console.log('foo');
//         };
//     }
//
//     static foobar() {
//         console.log('foobar')
//     }
//
//     bar() {
//         console.log('bat');
//     }
//
//
// }
//
// let user = new User('vasya', 33);
// console.log(user);
//
// User.foobar();
//
// class SuperUser extends User {
//     // name age foo()
//     constructor(name, age, status) {
//         super(name, age); // User construcor
//         this.status = status;
//
//     }
//
//
// }
//
// let superUser = new SuperUser('kokos', 31, true);
// console.log(superUser);
// superUser.bar();
//
//
// function Car(model, power) {
//     this.model = model;
//     this.power = power;
//
// }
//
// function SuperCar(model, power, turbo) {
//     Car.apply(this /*supercar*/, arguments);
//     this.turbo = turbo;
// }
//
// let superCar = new SuperCar('asd', 123, true);
// console.log(superCar);
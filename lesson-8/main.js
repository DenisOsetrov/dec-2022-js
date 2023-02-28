// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
const user1 = new User (11,'Denis1','Osetrov1', 'denis.osetrov11@gmail.com', '0982929291');
const user2 = new User (12,'Denis2','Osetrov2', 'denis.osetrov12@gmail.com', '0982929292');
const user3 = new User (13,'Denis3','Osetrov3', 'denis.osetrov13@gmail.com', '0982929293');
const user4 = new User (14,'Denis4','Osetrov4', 'denis.osetrov14@gmail.com', '0982929294');
const user5 = new User (15,'Denis5','Osetrov5', 'denis.osetrov15@gmail.com', '0982929295');
const user6 = new User (16,'Denis6','Osetrov6', 'denis.osetrov16@gmail.com', '0982929296');
const user7 = new User (17,'Denis7','Osetrov7', 'denis.osetrov17@gmail.com', '0982929297');
const user8 = new User (18,'Denis8','Osetrov8', 'denis.osetrov181@gmail.com', '0982929298');
const user9 = new User (19,'Denis9','Osetrov9', 'denis.osetrov19@gmail.com', '0982929299');
const user10 = new User (20,'Denis10','Osetrov10', 'denis.osetrov20@gmail.com', '0982929210');
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);
// console.log(user6);
// console.log(user7);
// console.log(user8);
// console.log(user9);
// console.log(user10);

// створити пустий масив, наповнити його 10 об'єктами new User(....)
const usersArray = [{id: 11, name: 'Denis1', surname: 'Osetrov1', email: 'denis.osetrov11@gmail.com', phone: '0982929291'},
    {id: 12, name: 'Denis2', surname: 'Osetrov2', email: 'denis.osetrov12@gmail.com', phone: '0982929292'},
    {id: 13, name: 'Denis3', surname: 'Osetrov3', email: 'denis.osetrov13@gmail.com', phone: '0982929293'},
    {id: 14, name: 'Denis4', surname: 'Osetrov4', email: 'denis.osetrov14@gmail.com', phone: '0982929294'},
    {id: 15, name: 'Denis5', surname: 'Osetrov5', email: 'denis.osetrov15@gmail.com', phone: '0982929295'},
    {id: 16, name: 'Denis6', surname: 'Osetrov6', email: 'denis.osetrov16@gmail.com', phone: '0982929296'},
    {id: 17, name: 'Denis7', surname: 'Osetrov7', email: 'denis.osetrov17@gmail.com', phone: '0982929297'},
    {id: 18, name: 'Denis8', surname: 'Osetrov8', email: 'denis.osetrov181@gmail.com', phone: '0982929298'},
    {id: 19, name: 'Denis9', surname: 'Osetrov9', email: 'denis.osetrov19@gmail.com', phone: '0982929299'},
    {id: 20, name: 'Denis10', surname: 'Osetrov10', email: 'denis.osetrov20@gmail.com', phone: '0982929210'}];


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const userFilterCouple = usersArray.filter((item)  => {
    return item.id % 2 === 0;
});
console.log(userFilterCouple);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let userSortArray = usersArray.sort((a,b) => {
    return a.id - b.id
});
console.log(userSortArray);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
let id = 1;
class Client {
    constructor (name, surname , email, phone, order) {
        this.id = id++;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
const clientArr = [
    new Client('Denis','Osetrov','dv1osetrov@gmail.com', '0983434348', ['сік', 'макарони', 'вода', 'картопля', 'цибуля', 'хліб']),
    new Client('Max','Koval','dv2osetrov@gmail.com', '0983434343', ['сік', 'макарони', 'вода']),
    new Client('Den','Markovich','dv3osetrov@gmail.com', '0983434238', ['вода', 'картопля', 'цибуля', 'хліб']),
    new Client('Stas','Dennuschich','dv4osetrov@gmail.com', '0983234348', ['сік', 'макарони', 'вода', 'картопля', 'цибуля']),
    new Client('Stiv','Ivanov','dv5osetrov@gmail.com', '0983434363', ['цибуля', 'хліб']),
    new Client('Mark','Borisovuch','dv6osetrov@gmail.com', '0983434088', ['макарони']),
    new Client('Mark','Dovbnya','dv7osetrov@gmail.com', '0983434668', ['сік', 'макарони', 'вода', 'картопля', 'цибуля', 'хліб']),
    new Client('Anna','Svunar','dv8osetrov@gmail.com', '0983434558', ['вода', 'картопля', 'цибуля']),
    new Client('Jony','Tatarin','dv9osetrov@gmail.com', '0983434875', ['цибуля', 'хліб']),
    new Client('Tolik','Zalugnuj','dv10osetrov@gmail.com', '0983434377', ['сік', 'макарони', 'вода', 'картопля'])];


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const clientFilter = clientArr.sort((productA, productB) => productA.order.length - productB.order.length);
console.log(clientFilter);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function car(model, manufacturer, manufacturerYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.manufacturerYear = manufacturerYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drivers = [];

    this.drive = function() {
    return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
  }
    this.info = function() {
    // console.log('**** INFO ****')
    for (const key in this) {
      if (typeof this[key] === 'function') continue;
      console.log(`${key} - ${JSON.stringify(this[key])}`);
    }
    console.log('**** INFO ****')
  }
    this.increaseMaxSpeed = function(newSpeed) {
        const speed = this.maxSpeed + newSpeed;
            if (speed < 0) {
                this.maxSpeed = 0;
            } else {
                this.maxSpeed = speed;
    }
  }
    this.changeYear = function changeYear(newValue) {
    this.manufacturerYear = newValue;
  }
    this.addDriver = function(name, age, experience) {
    if (name.length < 2) throw new Error('Min name length 2 chars');
    this.drivers.push(new Driver(name, age, experience));
  }
}
function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}
const car1 = new car('5 Series', 'BMV', 2015, 300, 2.0);
car1.drive();
car1.info();
car1.increaseMaxSpeed(200);
car1.info();
car1.changeYear(2016);
car1.info();
car1.addDriver('Denis', 35, 4);
car1.addDriver('Julya', 18, 1);
car1.info();



// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
  constructor(model, manufacturer, manufacturerYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = manufacturer;
    this.year = manufacturerYear;
    this.maxSpeed = maxSpeed;
    this.volume = engineCapacity;
    this.drivers = [];
  }

  drive() {
    return `їдемо зі швидкістю ${this.maxSpeed} на годину`
  }

  info() {
    console.log('**** INFO ****')
    for (const key in this) {
      console.log(`${key} - ${JSON.stringify(this[key])}`)
    }
    console.log('**** INFO ****')
  }

  increaseMaxSpeed(newSpeed) {
    const speed = this.maxSpeed + newSpeed;
    if (speed < 0) {
      this.maxSpeed = 0;
    } else {
      this.maxSpeed = speed;
    }
  }

  changeYear(newValue) {
    this.manufacturerYear = newValue;
  }

  addDriver(name, age, experience) {
    if (name.length < 2) throw new Error('Min name length 2 chars');
    this.drivers.push(new DriverAuto(name, age, experience));
  }
}

class DriverAuto {
  constructor(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
}

const car2 = new Car('7 Series', 'BMV', 2019, 330, 2.6);
console.log(car2.drive());
car2.info();
car2.increaseMaxSpeed(300);
car2.info();
car2.changeYear(2500);
car2.info();
car2.addDriver('Tony', 40, 10);
car2.addDriver('Jon', 50, 20);
car2.info();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Cinderella extends People {
    constructor(name, age, footSize) {
        super(name, age);
        this.footSize = footSize;
    }
}
class Prince extends People {
    constructor(name, age, bootSize) {
        super(name, age);
        this.bootSize = bootSize;
    }
    findPrincess1(arr) {
        for (const aspirant of arr) {
            if (aspirant.footSize === this.bootSize) {
                return aspirant;
            }
        }
    }
    findPrincess2(arr) {
        return arr.find((aspirant) => aspirant.footSize === this.bootSize);
    }
}

const CinderellaArr = [
    new Cinderella('Olya', 18, 37),
    new Cinderella('Toma', 20, 38),
    new Cinderella('Katya', 16, 35),
    new Cinderella('Ira', 19, 37),
    new Cinderella('Irina', 20, 38),
    new Cinderella('Olga', 18, 36),
    new Cinderella('Inna', 22, 36),
    new Cinderella('Alina', 23, 34),
];
const prince = new Prince('Korol', 66, 35);

console.log(prince.findPrincess1(CinderellaArr));
console.log(prince.findPrincess2(CinderellaArr));
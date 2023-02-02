// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let str = 'hello';
console.log(str);
let wor = 'owu';
console.log(wor);
let com = 'com';
console.log(com);
let ua = 'ua';
console.log(ua);
let num = 1;
console.log(typeof num, num);
let num2 = 10;
console.log(num2);
let num3 = -999;
console.log(num3);
let num4 = 123;
console.log(num4)
const PI = 3.14;
console.log(PI)
let num6 = 2.7;
console.log(num6);
let num7 = 16;
console.log(num7)
let num8 = true;
console.log(num8);
let num9 = false;
console.log(num9);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person

// КОНКАТЕНАЦІЯ - Спосіб зёєнання рядків
let firstName = 'Denis';
let middleName = 'Volodymyrovycv';
let lastName = 'Osetrov';
let person = (firstName + ' ' +  middleName + ' ' + lastName)
console.log(person);
// ІНТЕРПОЛЯЦІЯ - Спосіб зёєнання рядків
let person1 = `${firstName} ${middleName} ${lastName}`;
console.log(person1);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a, a);
let b = '100';
console.log(typeof b, b)
let c = true;
console.log(typeof c,c)

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

// функція alert
// alert("Hello");  //виводить повідомлення "Hello" в модальне вікно з кнопкою "Ok"
//Модальне вікно означає, що користувач не може взаємодіяти з інтерфейсом решти сторінки,
// натискати інші кнопки і т.д. доки взаємодіє з вікном. В даному випадку – поки не буде натиснуто кнопку «OK».
// alert - Вона показує повідомлення і чекає, поки юзер натисне кнопку «ОК».

// функція prompt
// let firstName22 = prompt('enter first name', 'Vasylyj');
// let middleName22 = prompt('enter middle name');
// let lastName22 = prompt('enter last name');
// let age22 = prompt('enter age')
// let res22 = `${firstName22} ${middleName22} ${lastName22} ${age22}`;
// console.log(res22);
// let age1 = prompt('Скільки тобі років?', 100);     //default -100 - значення за замовчуванням (лише для інт.експлоеру)
// alert(`Тебе ${age1} лет!`); // Тебе 100 лет!


// функція confirm
// Функція confirm відображає модальне вікно з текстом питання question і двома кнопками: OK и Отмена.
// Результат – true- "OK", false – в інших випадках.
//     let isBoss = confirm("Ты здесь главный?");      // Виводить запитання.
//     alert( isBoss ); // true, если нажата OK        // Виводить відповідь в модальне вікно.
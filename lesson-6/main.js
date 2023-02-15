// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let long1 = 'hello world';
console.log(long1.length);
let long2 = 'lorem ipsum';
console.log(long2.length);
let long3 = 'javascript is cool';
console.log(long3.length);

// let long4 = 'hello world';               //Повний запис!
// let a = long4.length;
// console.log(a);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let registrUp1 = 'hello world';
console.log(registrUp1.toUpperCase());
let registrUp2 = 'lorem ipsum';
console.log(registrUp2.toUpperCase());
let registrUp3 = 'javascript is cool';
console.log(registrUp3.toUpperCase());

// let registrUp4 = 'hello world';              //Повний запис!
// let b = registrUp4.toUpperCase();
// console.log(b);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let registrDown1 = 'HELLO WORLD';
let registrDown2 = 'LOREM IPSUM';
let registrDown3 = 'JAVASCRIPT IS COOL';
console.log(registrDown1.toLowerCase());
console.log(registrDown2.toLowerCase());
console.log(registrDown3.toLowerCase());

// let registrDown4 = 'JAVASCRIPT IS COOL';             //Повний запис!
// let c = registrDown4.toLowerCase();
// console.log(c);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirty = ' dirty string   ';
console.log(dirty.substring(1,13));


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str1 = 'Хіба ревуть воли як ясла повні';
// console.log(str1.split(' '));            // Метод split!

let str = 'Хіба ревуть воли як ясла повні';
function stringToarray (str) {
    arr = str.split(' ');
}
stringToarray (str);
console.log(arr);










// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr1 = [10,8,-7,55,987,-1011,0,1050,0];
console.log(Array.isArray(arr1));








// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
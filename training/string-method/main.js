//!! Щоб винести швидко в змінну натискаємо Ctrl+Alt+V
                        // Слід пам'ятати, з яким питом змінної працюємо!
                        // Щоб перевірити, наводимо на змінну і натискаємо Ctrl+q

                                    //Методи для стрінги!!!

let arr1 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];     // як перевіритичи це масив!!!
console.log(Array.isArray(arr1));

let string = 'hello osetrov denis, how are you?'; // робота зі стрінгою: вивести елемент, стрінгу, масив стрінги.
console.log(string[0]);                         // h
console.log(string);                            //'hello osetrov denis, how are you?'
console.log([string]);                          //['hello osetrov denis, how are you?']
//Чи починається і чи закінчується стрінга з...
let r = string.startsWith('h');                 // Стрінга починається з hello, навіть h також - true!
console.log(r);
console.log(string.endsWith('you?'));           // Стрінга закінчується на ? - true!
// З'єднання стрінг
let e = 'Yes';
console.log(string + e);                        //З'єднали 2 стрінги. - hello osetrov denis, how are you?Yes
console.log(string.concat(e));                  //З'єднали 2 стрінги. - hello osetrov denis, how are you?Yes
let concatEEE = string.concat(e);
console.log(concatEEE);
// Обрізання функції з...по індекс.
console.log(string.substring(6, 24));            //Обрізає з 0-5 символ і залишає до 24(не включно) - 'osetrov denis, how'
console.log(string.substring(6));               //Обрізає лише початок! від 0-6 -- 6 - не включно! - osetrov denis, how are you?

console.log(string.indexOf('t'));               // Визначає індекс символу з права на ліво, лише перший! - 9!

console.log(string.replace('s', 'w'));           // Видаляє 's' і замінює на 'w' при першому входженні -  hello owetrov denis, how are you?
console.log(string.replaceAll('o', 'a'));        // Видаляє 'о' і замінює на 'а' скрізь- hella asetrav denis, haw are yau?

console.log(string.charAt(9));                  // визначає символ в стрінці на позиції інд. 9 - t!

console.log(string.split(' '));                 // "Делімітер" стрінги по ' ' - ['hello', 'osetrov', 'denis,', 'how', 'are', 'you?']

console.log(string.includes('ll'))                //якщо є дві ll - поверне true!


                                //МЕТОДИ МАСИВІВ!!!

//функція trim - видаляє пробіли сліва і справа!
let animals = ['свині', 'кози', 'вівці'];
let number = animals.push('корови');        // Додати в кінець масиву - приймаэ лише 1 аргумент!
console.log(number);                        // вивід: 4
console.log(animals, number);               //(4) ['свині', 'кози', 'вівці', 'корови'] 4

let animals2 = ['свині', 'кози', 'вівці', 'корови'];
let popItem = animals2.pop();                // м'яке видалення з масиву останнього елементу (зберігає його в popItem)
console.log(popItem);                       // виведе - корови.
console.log(animals2);                      // (3) ['свині', 'кози', 'вівці']

let animals3 = ['свині', 'кози', 'вівці'];
let unshiftItem = animals3.unshift('корови');   // Додати на початок масиву елемент - 'корови'
console.log(unshiftItem);
console.log(animals3);                                //['корови', 'свині', 'кози', 'вівці']

let shiftItem = animals3.shift();                     // видаляє 1-й ел. масиву
console.log(animals3);                                //['свині', 'кози', 'вівці']
console.log(shiftItem);                               // виводить вирызаний елемент!

let arr5 = [10, 8, -7, 55, 987, -1011, 0, 1050, 13, 'all'];
arr5.splice(2, 3, 'krya');         //Видаляє з масива 3-и елементи з 2-о індексу[-7, 55, 987], а замість видаленого вставляє 'krya'
console.log(arr5.splice(2, 3, 'krya'));
console.log(arr5);                                    //Залишає в масиві [10, 8, -1011, 0, 1050, 13]

let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let slice1 = numbers4.slice(1, 3);                    //відразає частину елементів від 1 по 3 індекс масиву - 3 не включно;
console.log(slice1);                                 // маємо [2, 3]

let arrNew1 = numbers4.concat(10, 11, 12);            //Додаємо елементи до масиву;
console.log(numbers4);                              //виводить без змін;
console.log(arrNew1);                               //виводить [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 12]

let numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers5.reverse();                          //Повертає масив в зворотньому порядку - змінює батьківський масив.
console.log(numbers5);                       //[9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log(numbers5.reverse());


console.log(numbers5.includes(8));            //Пошук в масиві елемента 8, повертає true!


                                        //Функція .МАР
let arr2 = [1, 2, 3, 4, 5];//
let result = arr2.map(function (elem) {
        return elem * 2;
    }
);
console.log(result);            //[2, 4, 6, 8, 10]


                                       //Функція foreach - перебирає об'єкти, нічого не повертає!
// Callback функція!
let numbers = [11, 12, 13, 14, 15];
// function foreachCustom (arr,callback) {
//     for (const item of arr) {
//         callback(item);
//     }
// }
// foreachCustom(numbers6,(news) => console.log(news))
// --АБО--через функцію .foreach - перебираємо кожен елемент масиву і
//   виводимо. Після => можна задати умову!

//                                      //Або так!!!
numbers.forEach((q) => console.log(q));


            //Filter - callback функція, повертая true/false - повертає новий масив!!! з віфільтрованими об'єктами!
            //повертає новий об'єкт, який бере елементи зі старого, але створює новий!

let filter11 = [1,2,3,4,5,-23];
// let filterNew = filter11.filter(w => w>2)       // умова: елемент масиву >2!
// console.log(filterNew);                         // = [3, 4, 5]


                // функція find - шукаю перший об'єкт, який задовільняє умову!
let find = filter11.find(value => value===3)        // знайде в результаті 3
// let find = filter11.find(value => value.age===31)  // для прикладу з об'єктами
console.log(find);


                //функція every - кожен об'єкт має задовільняти умову callback функції, тобто &&!!!
console.log(filter11.every(value => value > 0))        // false!
//                 //функція some - лиш один об'єкт має задовільняти умову callback функції, тобто || !!!
console.log(filter11.some(value => value >0))        // true!

                //Функція reduse - може з загального масису зробити об'єкти і навпаки
let reduceNew = [11,22,33,44,55,66,77,88,99];    //{even : [22,44,66,88], odd : [11,33,55,77,99]}
    let reduce = reduceNew.reduce(
        (accumulator, value) => {
        if (value % 2 === 0) {
            accumulator.even.push(value);
        } else {
            accumulator.odd.push(value);
        }
        return accumulator;
    }, {even : [], odd : []});
console.log(reduce);

                            //Функція reduce об'єднує всі елементи масива!
let suma125 = [11,22,33,44,55,66]
let reduceSuma = suma125.reduce((accumulator, value) => {
    return accumulator + value;
    }, 0)
console.log(reduceSuma);            //Додов всі елементи масива!!   - [231]

                         //Метод find() повертає значення першого знайденого в масиві елемента,
//                                      яке задовольняє умову, переданої в callback функції. В іншому випадку повертається undefined.

                        //Метод includes() визначає, чи містить масив певний елемент, повертаючи залежно від цього true чи false













//hgf








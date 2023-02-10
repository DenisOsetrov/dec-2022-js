//    Завдання 1. - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square (width, heigth) {
   return width*heigth;
}
// console.log(square(4,5));
document.write(`<H4>Завдання 1.</h4> Площа прямокутника зі сторонами 5 і 4 см = <u>${square (5,4)}</u> см<sup>2</sup>.`);


//     Завдання 2. - створити функцію яка обчислює та повертає площу кола з радіусом r
function  circle (radius) {
   const PI = 3.14;
   return  PI*(radius**2);
}
// console.log(circle(5));
document.write(`<h4>Завдання 2.</h4> Площа кола з радіусом 5 см = <u>${circle (5)}</u> см<sup>2</sup>.`);


//      Завдання 3. - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder (h, r) {
   const PI = 3.14;
   return 2*PI*r*(r+h);
}
// console.log(cylinder (10, 4));
document.write(`<h4>Завдання 3.</h4> Площа циліндра з висотою 10 см і радіусом 4 см = <u>${cylinder (10, 4)}</u> см<sup>2</sup>.`);


//      Завдання 4.  - створити функцію яка приймає масив та виводить кожен його елемент
function array () {
   let arrays = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
   document.write(`<h4>Завдання 4.</h4> Функція, яка приймає масив і виводить кожен його елемент: `)
   for (let i = 0; i < arrays.length; i++) {
      const array1 = arrays[i];
      // console.log(array1);
      document.write(`<div>${array1}</div>`);
   }
}
array ();
                           // 2-й варіант. Без даних масиву!
// function big () {
//    for (let i = 0; i < 3; i++) {
//       const argument = arguments[i];
//       document.write(`<div><h4>Element</h4></div>`)
//    }
// }
// big();


//       Завдання 5. - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph (title,parag) {
document.write(`<h4>Завдання 5.</h4>Функція створює параграф з текстом. Текст задаємо через аргумент.<h5>${title}</h5><p>${parag}</p>`)
}
paragraph('Hello, mentor!','Glad to see you!');


//       Завдання 6. - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulka (text, numberLi) {
   document.write(`<h4>Завдання 6.</h4>Функція створює ul з 3 li. Текст задаємо через аргумент. <u>`);
   for (let i = 0; i < numberLi; i++) {
      document.write(`<li>${text}</li>`)
   }
   document.write(`</u>`)
}
ulka('It is not easy at all!',3)


//       Завдання 7. - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//                   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл).

function elka (text, numberLi) {
   document.write(`<h4>Завдання 7.</h4>Функція створює ul з li. Текст і кількість li задаємо через аргумент. <u>`);
   for (let i = 0; i < numberLi; i++) {
      document.write(`<li>${text}</li>`)
   }
   document.write(`</u>`)
}
elka('No problem!',4)


//       Завдання 8. - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const badly = [5, 67, true, 'go'];
function arrValue (badly) {
   document.write(`<h4>Завдання 8.</h4>Функція приймає масив примітивних елементів (числа,стрінги,булеві) та будує для них список. <u>`)
   for (const badlyElement of badly) {
      document.write(`<ul>${badlyElement}</ul>`);
   }
   document.write(`</u>`);
}
arrValue(badly);
//                            2-й варіант
const go = [2,43,54,'Spring', true, [32,'sun',false]];
function tool (goes) {
   document.write(`<ul>`)
   for (const item of goes) {
      document.write(`<li>${item}</li>`)
   }
   document.write(`</ul>`)
}
tool (go);


//       Завдання 9. - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
   {id: 41, name: 'vasya', age: 31},
   {id: 42, name: 'petya', age: 30},
   {id: 43, name: 'kolya', age: 29},
   {id: 44, name: 'olya', age: 28},
   {id: 45, name: 'max', age: 30},
   {id: 46, name: 'anya', age: 31},
   {id: 47, name: 'oleg', age: 28},
   {id: 48, name: 'andrey', age: 29},
   {id: 49, name: 'masha', age: 30},
   {id: 50, name: 'olya', age: 31},
   {id: 51, name: 'max', age: 31}
];
document.write(`<h4>Завдання 9.</h4>Функція приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.`)
function items () {
   for (const user of users) {
      document.write(`<div>${user.id} -- ${user.name} -- ${user.age}</div>`);
   }
}
items ();


//       Завдання 10. - створити функцію яка повертає найменьше число з масиву
const numbers = [4,3,5,2,88,76,5,65,55];
function findmin (numbers) {
      let min = numbers[0];
      for (const num of numbers) {
    if (min>num){
         min=num;
   }
}
      return min;
}
// console.log(findmin(numbers));
document.write(`<h4>Завдання 10.</h4>Функція повертає найменьше число з масиву. -- <u>${findmin(numbers)}</u>`)


//       Завдання 11. - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
const sumaNumbers = [4,3,5,2,88];
function sum (sumaNumbers) {
return sumaNumbers[0] + sumaNumbers[1] + sumaNumbers[2] + sumaNumbers[3] + sumaNumbers[4];
}
// console.log(sum(sumaNumbers));
document.write(`<h4>Завдання 11. Власне розв'язання!)</h4>Функція, яка приймає масив чисел, сумує значення елементів масиву та повертає його. -- <u>${sum(sumaNumbers)}</u>`)


const summer = [1,2,10];
function  summa (numbers) {
   let together = 0;
   for (const number of numbers) {
      together = together + number;
   }
   return together;
}
// console.log(summa(summer));
document.write(`<h4>Завдання 11. 2 Варіант/вдосконалений.</h4><u>${summa(summer)}</u>`)


//       Завдання 12.  - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap (arr,index1,index2) {
   let first = arr[index1];
   let seconds = arr[index2];
   arr[index2] = first;
   arr[index1] = seconds;
   return arr
}
// console.log(swap([22,33,44,55,11,88],1,4));
document.write(`<h4>Завдання 12. Одне з важкоусвідомлюючих! </h4><u>${swap([22,33,44,55,11,88],1,4)}</u>`)


//       Завдання 13.  - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// const exchange = [{currency:'USD',value:40},{currency:'EUR',value:42}];
//                         Я так розумію...
function exc1 (uah) {
let usd = 40;
   return uah/usd;
}
// console.log(exc1(10000));
// document.write(`<h4>Завдання 12.</h4>Функція обміну валюти. -- <u>${exc1(10000)}$</u>`)

function exc2 (uah) {
   let euro = 42;
   return uah/euro;
}
// console.log(exc2(10000));
document.write(`<h4>Завдання 13.</h4>Функція обміну валюти.<u><p>${exc1(10000)}$</p></u> <u><p>${exc2(10000)}Є.</p></u>`)

//                2 варіант - з ментором))
function  exchange (sumUAH,currencyValues,exchangeCurrency) {
   for (const item of currencyValues) {
         if (item.currency === exchangeCurrency){
            return sumUAH/item.value;
         }
   }
}
// console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))
document.write(`<h4>Завдання 13. Варіант розв'язку з ментором</h4><u><p>${exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')}$</p></u>`);
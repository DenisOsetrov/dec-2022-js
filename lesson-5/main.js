// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let squareRectangle = (a,b) => a * b;
console.log(squareRectangle(3,4));
squareRectangle(3,4)


// - створити функцію яка обчислює та повертає площу круга з радіусом r
let squareRuond = (r) => r **2;
console.log(squareRuond(5));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder (h, r) {
const PI = 3.14;
let squareCylinder = (h,r) => 2*PI*r*(h+r);
console.log(squareCylinder(10,4));


// - створити функцію яка приймає масив та виводить кожен його елемент
// function big ()
let itemArray = (arr) => {
    for (const item of arr) {
        console.log(item);
    }
   }
    itemArray([`hello, 112, true`]);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraph = (title) => {
    document.write(`<p>${title}</p>`);
}
paragraph('Hello! Did it!');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let listUl1 = (text) => {
    document.write(`<u>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</u>`)
}
listUl1('It `s better now!')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let elka = (text, numberLi) => {
    document.write(`<u>`);
    for (let i = 0; i < numberLi; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</u>`)
}
elka('No problem!',4)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const fullArray = [2,43,54,'Spring', true, [32,'sun',false]];
let acceptsArray = (goes) => {
    document.write(`<ul>`)
    for (const item of goes) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
acceptsArray (fullArray);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 41, name: 'vasya', age: 31},
    {id: 42, name: 'petya', age: 30},
    {id: 43, name: 'kolya', age: 29},
    {id: 44, name: 'olya', age: 28},
];
let items = () => {
    for (const user of users) {
        document.write(`<div>${user.id} -- ${user.name} -- ${user.age}</div>`);
    }
}
items ();


// - створити функцію яка повертає найменьше число з масиву
const numbers = [4,3,5,2,88,76,5,65,55];
let findmin = (numbers) => {
    let min = numbers[0];
    for (const num of numbers) {
        if (min>num){
            min=num;
        }
    }
    return min;
}
console.log(findmin(numbers));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const summer = [1,2,10];
let sumOfNumbers = (numbers) => {
    let together = 0;
    for (const number of numbers) {
        together = together + number;
    }
    return together;
}
console.log(sumOfNumbers(summer));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr,index1,index2) =>  {
    let first = arr[index1];
    let seconds = arr[index2];
    arr[index2] = first;
    arr[index1] = seconds;
    return arr
}
console.log(swap([11,22,33,44],0,1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            return sumUAH/item.value;
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))

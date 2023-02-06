// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let array = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'White', 'Gray', 'Brown'];
for (let i=0; i<array.length; i++) {
       arr = array[i];
        document.write(`<div>${arr}</div>`)             //використовуємо зворотні лапки для інтерполяції
}

// for (let i = 0; i < 10; i++) {                       // Виконання без масиву
//     document.write(`<div>Ukraine</div>`)
// }



// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let cityes = ['Київ','Львів','Одеса','Харків','Запоріжжя','Вінниця','Дніпро','Чернівці','Тернопіль','Кременчук'];
for (let i = 0; i < cityes.length; i++) {
let city = cityes[i];
        document.write(`<div>${city} ${[i]}</div>`);      // Індекс ставиться через Інтерполяцію ``
}

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>City -- ${i}</div>`);
// }



// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let numbers = ['One', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen', 'twenty'];
let u = 0;
while (u < numbers.length) {
    let num = numbers[u];
    document.write(`<div>`)
    document.write(`<h1>${num}</h1>`)
    document.write(`</div>`)
    u++;
}



// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i =0;                                                  // Цикл while!
while (i < 20) {
    document.write(`<h1>text ${i}</h1>`)
    i++;
}




// - Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// Масив:
 //
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//                                          Array - FOR
// let list3fItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//     document.write(`<u>`);                              //<ul> створюємо 1 раз, а <li> - перебирає кожний елемент циклу!
// for (let j = 0; j < list3fItems.length; j++) {
//     const list1fItem = list3fItems[j];
//     document.write(`<li> ${list1fItem}</li>`);          //<li> будуємо в середині циклу
// }
// document.write(`</u>`);

//                                          Array - FOR OF  - Коли вводимо itar (на і - можна вибрати вид циклу)
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<u>`);
for (const listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`)
}
document.write(`</u>`);


//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
//                                   ШАБЛОН
//                  <div class="product-card">
//                       <h3 class="product-title">TITLE. Price - PRICE</h3>
//                       <img src="IMAGE" alt="" class="product-image">
//                  </div>
//             Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
    document.write(`<div class="product-card">
                        <h2>${product.title} ${product.price} UAH</h2>
                        <img src="${product.image}" alt="foto products">
                    </div>`)
}


//     є масив
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
    
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (const user of users) {
    // console.log(user);
    if (user.status) {                      // == true
// console.log(user);
        document.write(`<div>${user.name} -- ${user.age} -- ${user.status}</div>`);
    }
}

for (const user of users) {
    if (!user.status) {                     // !== true
        document.write(`<div>${user.name} -- ${user.status}</div>`)
    }
}

for (const user of users) {
    if (user.age>30) {
        document.write(`<div>${user.name} -- ${user.age}</div>`)
    }
}
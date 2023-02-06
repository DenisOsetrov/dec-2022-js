// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//     let arr;
//     arr = [0,10,100,-100,-10,-1, 'free', true, false,null]    //Перший варіант запису!

let arr = [0,10,100,-100,-10,-1, 'free', true, false,null];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
        //let user = new Object();  // - Перший варіант запису!
let book1 = {
    title: 'Стокгольм',
    pageCount: 584,
    genre: 'Філософія'
};
console.log(book1);

let book2 = {
  title: 'Токійські месники',
  pageCount: 192,
  genre: 'Фентезі'
};
console.log(book2);

let book3 = {
    title: 'Диявол і Господь Бог',
    pageCount: 160,
    genre: 'Драматургія'
};
console.log(book3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let books1 = {
    title: 'Збірник 1',
    pageCount: 904,
    genre: 'Наукова фантастика',
    authors: [
        {name: 'Макс Кідрук', age: 38},
        {name: 'Фенні Флеґґ', age: 72},
        {name: 'Алі Гейзелвуд', age: 51}
    ]
}
console.log(books1);
console.log(books1.authors);

let books2 = {
    title: 'Збірник 2',
    pageCount: 800,
    genre: 'Сучасна українська проза',
    authors: [
        {name: 'Гліб', age: 43},
        {name: 'Микола', age: 34},
        {name: 'Джон', age: 22}
    ]
}
console.log(books2);
console.log(books2.authors);

let books3 = {
    title: 'Збірник 3',
    pageCount: 500,
    genre: 'Детиктиви',
    authors: [
        {name: 'Артем', age: 40},
        {name: 'Стів', age: 50},
        {name: 'Іоан', age: 60}
    ]
}
console.log(books3);
console.log(books2.authors);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arrayNum10 = [
    {name: 'Artem', username: 'Kozak1',password: 12345},
    {name: 'Ivan', username: 'Kozak2',password: 23456},
    {name: 'Denis', username: 'Kozak3',password: 34567},
    {name: 'Dmytro', username: 'Kozak4',password: 45678},
    {name: 'Mukola', username: 'Kozak5',password: 56789},
    {name: 'Mukuta', username: 'Kozak6',password: 67890},
    {name: 'Danulo', username: 'Kozak7',password: 78901},
    {name: 'Viktor', username: 'Kozak8',password: 89012},
    {name: 'Olexij', username: 'Kozak9',password: 90123},
    {name: 'Olena', username: 'Kozachka10',password: 81234}
]
console.log(arrayNum10[0].password);
console.log(arrayNum10[1].password);
console.log(arrayNum10[2].password);
console.log(arrayNum10[3].password);
console.log(arrayNum10[4].password);
console.log(arrayNum10[5].password);
console.log(arrayNum10[6].password);
console.log(arrayNum10[7].password);
console.log(arrayNum10[8].password);
console.log(arrayNum10[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x=0;
if (x!==0){
console.log(true)
} else {
console.log(false)
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//                                          Варіант 1.
let time= 77;
if (time >=0 && time<=15)
{
    console.log('1 чверть')
}
if (time>=16 && time<=30)
{
        console.log('2 чверть')
}
if (time>=31 && time <=45)
{
        console.log('3 чверть')
}
if (time>=46 && time <=59)
{
        console.log('4 чверть')
}
if (time <0 || time >=60){
        console.log('false time')
}
//                                      Варіант 2.
let time60= -60;
if (time60 >=0 && time60<=15)
{
    console.log('1 чверть')
}
else if (time60>=16 && time60<=30)
{
    console.log('2 чверть')
}
else if (time60 >=31 && time60 <=45)
{
    console.log('3 чверть')
}
else if (time60 >=46 && time60 <=59)
{
    console.log('4 чверть');
}
else {
    console.log('false time');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це
// число (у першу, другу чи третю).
let day =-44;
if (day >=0 && day <=10) {
    console.log('1 декада');
}
else if (day >=11 && day <=20) {
    console.log('2 декада');
}
else if (day >=21 && day <=31) {
    console.log('3 декада');
}
else {
    console.log('false day');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день,
// назву дня англійською).
let week =8;
switch (week) {
    case 1:
        console.log('Monday: work-8h, eat-3t, sleep-8h.');
        break;
    case 2:
        console.log('Tuesday: work-10h, eat-3t, sleep-6h.');
        break;
    case 3:
        console.log('Wednesday: work-11h, eat-3t, sleep-5h.');
        break;
    case 4:
        console.log('Thursday: work-12h, eat-3t, sleep-4h.');
        break;
    case 5:
        console.log('Friday: work-13h, eat-3t, sleep-4h.');
        break;
    case 6:
        console.log('Saturday: work-15h, eat-3t, sleep-4h.');
        break;
    case 7:
        console.log('Sunday: oll day sleep');
        break;
    default:
        console.log('Тобі треба відпочити!');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let ageUser = prompt('Чоловіче, скільки тобі років?', '30');
let ageWife = prompt('Скільки років твоїй дружині?', '18');
if (ageUser > ageWife) {
    console.log(ageUser);
} else if (ageUser < ageWife) {
    console.log(ageWife);
} else if (ageUser === ageWife) {
    console.log('Identical!');
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд
//     включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення
//     змінної х являється falsy (хибноподібні, тобто приводиться до false)
let abc = undefined;
abc = abc || 'default';
console.log(abc);
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super!')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super!')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super!')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super!')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super!')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super!')
}
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let long1 = 'hello world';
console.log(long1.length);
let long2 = 'lorem ipsum';
console.log(long2.length);
let long3 = 'javascript is cool';
console.log(long3.length);

let longAll = ['hello world', 'lorem ipsum', 'javascript is cool'];     //All strings together to length!
longAll.forEach((value) => console.log(value.length));


// let long4 = 'hello world';               //Повний запис!
// let a = long4.length;
// console.log(a);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let registerUp1 = 'hello world';
console.log(registerUp1.toUpperCase());
let registerUp2 = 'lorem ipsum';
console.log(registerUp2.toUpperCase());
let registerUp3 = 'javascript is cool';
console.log(registerUp3.toUpperCase());

let registerUpAll = ['hello world', 'lorem ipsum', 'javascript is cool'];
console.log(registerUpAll.map((item) => item.toUpperCase()));              //All strings together to Up register!

// let registrUp4 = 'hello world';              //Повний запис!
// let b = registrUp4.toUpperCase();
// console.log(b);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let registerDown1 = 'HELLO WORLD';
let registerDown2 = 'LOREM IPSUM';
let registerDown3 = 'JAVASCRIPT IS COOL';
console.log(registerDown1.toLowerCase());
console.log(registerDown2.toLowerCase());
console.log(registerDown3.toLowerCase());

let registerDownAll = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
console.log(registerDownAll.map((item) => item.toLowerCase()));            //All strings together to Down register!

// let registerDown4 = 'JAVASCRIPT IS COOL';             //Повний запис!
// let c = registerDown4.toLowerCase();
// console.log(c);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirty = ' dirty string   ';
console.log(dirty.substring(1,13));         // вирізаємо 1 елемент спереду і 2 позаду!

console.log(dirty.trim());                  // прибираємо усі пробіли спереду і позаду!!! Є trimSrart() and trinEnd()
console.log(dirty.split(' ').filter((item) => item.length).join(' '));      //  split() - повертає новий масив, делімітер ' ' видаляє, filter((item) => item.length) - шукає елмент з довжиною.
                                                                                            //  join() об'єднує елементи масиву в строку і повертає строку. Делімірт - ' '.


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
let str1 = 'Хіба ревуть воли як ясла повні';
console.log(str1.split(' '));            // Метод split!

let str = 'Хіба ревуть воли як ясла повні';
function stringToarray (str) {
    arr = str.split(' ');
}
stringToarray (str);
console.log(arr);
//
let str2 = 'Хіба ревуть воли як ясла повні';
const stringToarray1 = (string) => string.split(' '); //
let str2Arr = stringToarray1(str2);
console.log(str2Arr);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомогою map перетворити всі об'єкти в масиві на стрінгові.
let arr2 = [10,8,-7,55,987,-1011,0,1050,0];
let result = arr2.map(function(elem) {
    elem = String(elem);
    return elem;
});
console.log(result);

const numArray = [10,8,-7,55,987,-1011,0,1050,0];
console.log(numArray.map((item) => item.toString()));       // 2-й варіант!


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums1 = [11,21,3];
let ascending = nums1.sort((a, b) => a-b);
console.log(ascending);
let descending = nums1.sort((a, b) => b-a);
console.log(descending);

let nums = [11,21,3];
const sortNums = (arr, order) => {
    switch (order) {
        case 'ascending':
            return arr.sort((a,b) => a>b); // a-b також працює!
        case 'descending':
            return arr.sort((a,b) => a<b);  //b-a
    }
}
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));


                                //(з Інтернету)
// let numsNew=[11,21,3];
// for(let i=0, tmp;i<numsNew.length-1;i++){
//     for(let j=0;j<numsNew.length-1;j++){
//         if(numsNew[j]>numsNew[j+1]){
//             tmp=numsNew[j];
//             numsNew[j]=numsNew[j+1];
//             numsNew[j+1]=tmp;
//         }
//     }
// }
// console.log(numsNew);

// let numsNewmax=[11,21,3];
// for(let i=0, tmp;i<numsNewmax.length-1;i++){
// for(let j=0;j<numsNewmax.length-1;j++){
//         if(numsNewmax[j]<numsNewmax[j+1]){
//             tmp=numsNewmax[j];
//             numsNewmax[j]=numsNewmax[j+1];
//             numsNewmax[j+1]=tmp;
//         }
//     }
// }
// console.log(numsNewmax);


// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sortArray = coursesAndDurationArray.sort ((a,b) => {
    return b.monthDuration - a.monthDuration
})
console.log(sortArray);                             // -- відсортувати його за спаданням за monthDuration

let filterArray = coursesAndDurationArray.filter(user => user.monthDuration > 5)
console.log(filterArray);                           // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let mapArray = filterArray.map((user, index) => {
    return {id: index+1, title: user.title, monthDuration: user.monthDuration}
       })
console.log(mapArray);                              // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// console.log(coursesAndDurationArray.sort((a,b) => b.monthDuration-a.monthDuration));     // -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.filter(item => item.monthDuration > 5));             // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.map((item,index) => ({...item, id:index +1})))       // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


//   описати колоду карт (від 6 до туза без джокерів)
let cards = [
    //spade black
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    //diamond red
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    //heart red
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    //clubs black
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
]
// - знайти піковий туз
console.log(cards.find((card) => card.cardSuit === 'spade' && card.value === 'ace'));
// - всі шістки
console.log(cards.filter((card) => card.value === '6'));
// - всі червоні карти
console.log(cards.filter((card) => card.color === 'red'));
// - всі буби
console.log(cards.filter((card) => card.cardSuit === 'diamond'));
// - всі трефи від 9 та більше
const selected = ['9','10','jack','queen','king','ace',];
console.log(cards.filter((card) => card.cardSuit === 'clubs' && selected.includes(card.value)));

// const sort = cards.filter(item => item.cardSuit === 'clubs');     // як варіант!
// const result1=sort.filter(item => item.value.length> 1 || item.value==="9");
// console.log(result1);


//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
const boxArr = cards.reduce((accumulator, current) => {
accumulator[current.cardSuit].push(current);
return accumulator;
}, {spade:[], diamond:[], heart:[], clubs:[]});
console.log(boxArr);

// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let filterNew = coursesArray.filter((item) => item.modules.includes('sass'));
console.log(filterNew);
// console.log(coursesArray.filter((item) => item.modules.includes('sass')));               //коротший запис!

let filterNew2 = coursesArray.filter((item) => item.modules.includes('docker'));
console.log(filterNew2);
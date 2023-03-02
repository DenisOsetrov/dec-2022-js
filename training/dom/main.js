//                                               1. Search   - ПОШУК


// <h1>DOM title</h1>
//
// <ul className="menu" id="list-1">
//     <li>item 1 1</li>
//     <li>item 1 2</li>
//     <li>item 1 3</li>
//     <li>item 1 4</li>
//     <li>item 1 5</li>
// </ul>
//
// <ul className="menu" id="list-2">
//     <li>item 2 1</li>
//     <li>item 2 2</li>
//     <li>item 2 3</li>
//     <li>item 2 4</li>
//     <li>item 2 5</li>
// </ul>
//
// <script>
//
//     // DOM
//     // console.log(document.head);
//     // console.log(document.head.innerHTML);
//     // console.log(document.head.children);
//     // console.log(document.body.innerHTML);
//
//     // ID
//     // let ul1 = document.getElementById('list-1');
//     // console.log(ul1);
//
//     // class
//     // let menuCollection = document.getElementsByClassName('menu');
//     // console.log(menuCollection);
//     //
//     // for (const menuCollectionElement of menuCollection) {
    //     console.log(menuCollectionElement);
    // }

    // TAG
    // let liList = document.getElementsByTagName('li');
    // console.log(liList);

    // let list1 = document.getElementById('list-1');
    // console.log(list1);
    //
    // let list1LiCollection = list1.getElementsByTagName('li');
    // console.log(list1LiCollection);


    // console.log(document.querySelector('body .menu'));
    // console.log(document.querySelectorAll('body .menu'));

    // let nodeListOf = document.querySelectorAll('#list-2 > li');
    // console.log(nodeListOf);
    //
    // for (const node of nodeListOf) {
    //     console.log(node);
    // }


    // </script>






//                                                  DOM object manipulation



// <h1>before</h1>
// <div id="target" xxx="???" className="point">
//     <!--    augdag-->
//     <b>Lorem ipsum dolor </b>sit amet, consectetur adipisicing elit. Ad, amet architecto ducimus eius eligendi impedit
//     maxime
//     <span>minima nulla</span>, pariatur perspiciatis porro quasi quo recusandae repellat repellendus saepe soluta vero
//     voluptates.
//
// </div>
// <div xxx="???" className="point">
//     <!--    augdag-->
//     <b>Lorem ipsum dolor </b>sit amet, consectetur adipisicing elit. Ad, amet architecto ducimus eius eligendi impedit
//     maxime
//     <span>minima nulla</span>, pariatur perspiciatis porro quasi quo recusandae repellat repellendus saepe soluta vero
//     voluptates.
//
// </div>
// <div xxx="???" className="point">
//     <!--    augdag-->
//     <b>Lorem ipsum dolor </b>sit amet, consectetur adipisicing elit. Ad, amet architecto ducimus eius eligendi impedit
//     maxime
//     <span>minima nulla</span>, pariatur perspiciatis porro quasi quo recusandae repellat repellendus saepe soluta vero
//     voluptates.
//
// </div>
// <h2>after</h2>
//
// <script>
//     // let target = document.getElementById('target');
//     // console.log(target.innerText);
//     // // target.innerText = 'okten';
//     // target.style.background = 'silver';
//     // // console.log(target.classList);
//     // target.classList.add('foo');
//     // target.classList.add('bar');
//     // // console.log(target.classList.item(0));
//     // // console.log(target.classList.contains('asd'));
//     // // target.classList.toggle('asd');
//     //
//     // // console.log(target.getAttribute('xxx'));
//     // // console.log(target.getAttribute('id'));
//     // // console.log(target.getAttribute('class'));
//     // // console.log(target.getAttribute('style'));
//     // // target.setAttribute('id', 'qwreqwreytrwqfe');
//     // // console.log(target.previousElementSibling);
//     // // console.log(target.nextElementSibling);
//     // // console.log(target.children); // HTML
//     // // console.log(target.childNodes); // NOde
//     //
//     // target.innerHTML = '<b>asdigashdg</b>';
//     // console.log(target.outerHTML);
//
//
//     let collectionOfDiv = document.getElementsByClassName('point');
//
//     for (const divElement of collectionOfDiv) {
//     divElement.innerText = 'ahsuyyqewfy';
//     divElement.classList.add('qqq');
//
//
// }
//
// </script>





//                                      DOM create - Створення!

// <!--<ul class="users"></ul>-->
//
// <script>

// let h2 = document.createElement('h2');
// h2.innerText = 'some title';
// document.body.appendChild(h2);

// let allUsersDiv = document.getElementsByClassName('users')[0];
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
// ]; // [{name : string,age :number, status:boolean}]
// for (const user of users) {
//     let li = document.createElement('li');
//     li.classList.add('user');
//     li.innerText = user.name;
//     allUsersDiv.appendChild(li);
// }


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
// for (const user of users) {
//     let userInfoDiv = document.createElement('div');
//
//     let h2 = document.createElement('h2');
//     h2.innerText = user.name;
//
//     let p = document.createElement('p');
//     p.innerText = user.status + ' ' + user.age;
//
//     userInfoDiv.append(h2, p);
//
//
//     document.body.appendChild(userInfoDiv);
// }
//





//                                  Recursion (Additional) - Рекурсія (додатково)


// <ul id="xxx">
//     <li></li>
//     <li className="eytfygfubd"></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
// </ul>
//
// <div className="hgdfugsdufg">
//     <ul>
//         <li id="yyy"></li>
//         <li className="asdqewe"></li>
//         <li></li>
//         <li className="uyfysfs"></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li className="ywter7yewr"></li>
//         <li>
//             <div className="qqqqqqqqqqq">
//
//                 <a href=""></a>
//             </div>
//         </li>
//         <li>
//
//             <ul className="asd">
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//             </ul>
//         </li>
//     </ul>
// </div>
// <div></div>
//
//
// <script>
//
//     function explorer(htmlElement) {
//     console.log(htmlElement);
//     let children = htmlElement.children;
//     if (children.length !== 0) {
//     for (const child of children) {
//     explorer(child);
// }
// }
// }
//
//     explorer(document.body);
//
//
// </script>


/ // - створити блок,
// const block = document.createElement('div');
// // - додати йому класи wrap, collapse, alpha, beta
// block.classList.add('wrap', 'collapse', 'alpha', 'beta');
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// block.style.backgroundColor = 'blue';
// block.style.color = 'green';
// block.style.fontSize = '38px';
// block.innerText = 'HELLO';
// // - додати цей блок в body.
// const body = document.querySelector('body');
// body.appendChild(block);
// // - клонувати його повністю, та додати клон в body.
// const clone = block.cloneNode(true);
// clone.style.backgroundColor = 'yellow';
// body.appendChild(clone);

// // - Є масив:
// //     ['Main','Products','About us','Contacts']
// // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// const liArr = ['Main','Products','About us','Contacts'];
// const body = document.querySelector('body');
// const ul = document.createElement('ul');
//
// for (const item of liArr) {
//   const li = document.createElement('li');
//   li.innerText = item;
//   ul.appendChild(li);
// }
// body.appendChild(ul);

// // - Є масив
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// const coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];
// const body = document.querySelector('body');
// for (const item of coursesAndDurationArray) {
//   const div = document.createElement('div');
//   div.innerText = `title: ${item.title} - monthDuration: ${item.monthDuration}`
//   body.appendChild(div);
// }

// // =========================
// //     - Є масив
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
// let coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];
// const body = document.querySelector('body');
// for (const item of coursesAndDurationArray) {
//   const div = document.createElement('div');
//   const h1 = document.createElement('h1');
//   const p = document.createElement('p');
//
//   div.classList.add('item');
//   h1.classList.add('heading');
//   p.classList.add('description');
//
//   h1.innerText = item.title;
//   p.innerText = item.monthDuration;
//
//   div.append(h1, p);
//   body.appendChild(div);
// }

// ==========================
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// let simpsons = [
//   {
//     name: 'Bart',
//     surname: 'Simpson',
//     age: 10,
//     info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//     photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//   },
//   {
//     name: 'Homer',
//     surname: 'Simpson',
//     age: 40,
//     info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//     photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//   },
//   {
//     name: 'Marge',
//     surname: 'Simpson',
//     age: 38,
//     info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//     photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//   },
//   {
//     name: 'Lisa',
//     surname: 'Simpson',
//     age: 9,
//     info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//     photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//   },
//   {
//     name: 'Maggie',
//     surname: 'Simpson',
//     age: 1,
//     info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//     photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//   },
// ];
// const body = document.querySelector('body');
// for (const item of simpsons) {
//   const div = document.createElement('div');
//   const h1 = document.createElement('h1');
//   const i = document.createElement('i');
//   const p = document.createElement('p');
//   const img = document.createElement('img');
//
//   div.classList.add('member');
//
//   h1.innerText = `${item.name} - ${item.surname}`;
//   i.innerText = `Age: ${item.age}`;
//   p.innerText = item.info;
//
//   img.setAttribute('alt', `${item.name} photo`);
//   img.setAttribute('src', item.photo);
//
//   div.append(h1, i, img, p);
//   body.appendChild(div);
// }

// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// const body = document.querySelector('body');
// for (const item of coursesArray) {
//   const block = document.createElement('div');
//   const title = document.createElement('h1');
//   const duration = document.createElement('div');
//   const month = document.createElement('div');
//   const hour = document.createElement('div');
//   const ul = document.createElement('ul');
//
//   title.innerText = item.title;
//   month.innerText = `monthDuration: ${item.monthDuration}`;
//   hour.innerText = `hourDuration: ${item.hourDuration}`;
//
//   for (const module of item.modules) {
//     const li = document.createElement('li');
//     li.innerText = module;
//     li.classList.add('blue', 'list-none');
//     ul.appendChild(li);
//   }
//
//   block.classList.add('main');
//   title.classList.add('text-center', 'blue');
//   duration.classList.add('flex');
//   month.classList.add('blue', 'text-center', 'grow1');
//   hour.classList.add('blue', 'text-center', 'grow5');
//   ul.classList.add('margin0', 'blue')
//
//   duration.append(month, hour);
//   block.append(title, duration, ul);
//   body.append(block);
// }

// ----------------
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// const body = document.querySelector('body');
// const p = document.createElement('p');
// const btn = document.createElement('button');
// p.innerText = 'Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text"';
// btn.innerText = 'CLICK';
// btn.onclick = () => {
//   p.style.display = 'none';
// }
// body.append(p, btn);

// //     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const form = document.forms.qweqwe;
// form.onsubmit = function() {
//   if (this.age.value < 18) {
//     return alert('Go away');
//   }
//   alert('Welcome');
// }
//
// let htmlInput = document.createElement(`input`);
// htmlInput.setAttribute('type','number' )
// let htmlButton = document.createElement('button');
// htmlButton.innerText = ' CLICK ME'
// htmlButton.onclick = () => {
//   if (htmlInput.value < 18) {
//     console.log('sdsfsfsdfa')
//   }
// }
// document.body.append(htmlInput, htmlButton);

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

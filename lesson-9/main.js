// - створити блок,
const firstDiv = document.createElement('div');
//     - додати йому класи wrap, collapse, alpha, beta
firstDiv.classList.add(['wrap', 'collapse', 'alpha', 'beta']);
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
firstDiv.style.background = 'green';
firstDiv.style.fontSize = '30px';
firstDiv.style.color = 'yellow';
firstDiv.innerText = 'DOM-Document Object Model';
// - додати цей блок в body.
const bodyDiv = document.querySelector('body');
bodyDiv.appendChild(firstDiv);
// - клонувати його повністю, та додати клон в body.
const clonfirstDiv = firstDiv.cloneNode(true);
clonfirstDiv.style.background = 'gold';
clonfirstDiv.style.color = 'red';
bodyDiv.appendChild(clonfirstDiv);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const firm = ['Main','Products','About us','Contacts'];
const bodyUl = document.querySelector('body');                //Дістаю body з html)))
const ulElem = document.createElement('ul');
ulElem.style.background = 'blue';
        for (const item of firm) {
            const liElem = document.createElement('li');
            liElem.innerText = item;
            ulElem.appendChild(liElem);
        }
bodyUl.appendChild(ulElem);


// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const bodyArr = document.querySelector('body');
for (const item of coursesAndDurationArray) {
    const divCreate = document.createElement('div');
    divCreate.style.background = 'pink';
    divCreate.innerText = `title: ${item.title} - monthDuration: ${item.monthDuration}`;
bodyArr.appendChild(divCreate);
}

//     - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const bodyArr2 = document.querySelector('body');

for (const item of coursesAndDurationArray2) {
    const divCreate = document.createElement('div');
        divCreate.style.background = 'silver';
    const h2Create = document.createElement('h2');
        h2Create.innerText = item.title;
    const pCreate = document.createElement('p');
        pCreate.innerText = item.monthDuration;
    divCreate.append (h2Create, pCreate);

    divCreate.classList.add('item');
    h2Create.classList.add('heading');
    pCreate.classList.add('description');

    bodyArr2.appendChild(divCreate);
}


// - є масив simpsons.
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Барт — найстарша дитина Гомера і Мардж Сімпсон.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони».',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: '«Мардж» Си́мпсон — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны».',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны».',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
const bodyCreate3 = document.querySelector('body');
        for (const item of simpsons) {
             const div = document.createElement('div');
             const nameSurname = document.createElement('h2');
             const age = document.createElement('h3');
             const text = document.createElement('p');
             const image = document.createElement('img');

  div.classList.add('member');

  nameSurname.innerText = `${item.name} - ${item.surname}`;
  age.innerText = `Age: ${item.age}`;
  text.innerText = item.info;

  image.setAttribute('src', item.photo);                    // <img src = "URL"      alt = "photo">
  image.setAttribute('alt', `${item.name} photo`);

  div.append(nameSurname, age, image, text);
  bodyCreate3.appendChild(div);
}

// =========================
//                                                          Цикл в циклі
// - Є масив coursesArray.
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами.
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним файлом.
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
    const body = document.querySelector('body');
        for (const item of coursesArray) {

    const divFather = document.createElement('div');
    const title = document.createElement('h2');
    const duration = document.createElement('div');
    const month = document.createElement('div');
    const hour = document.createElement('div');
    const ul = document.createElement('ul');

  title.innerText = item.title;
  month.innerText = `monthDuration: ${item.monthDuration}`;
  hour.innerText = `hourDuration: ${item.hourDuration}`;

  for (const module of item.modules) {
    const li = document.createElement('li');
    li.innerText = module;
    li.classList.add('darkorange', 'list-none' , 'background2');
    ul.appendChild(li);
  }

  divFather.classList.add('father');
  title.classList.add('text-center', 'darkorange', 'background');
  duration.classList.add('flex');
  month.classList.add('darkorange', 'text-center', 'grow3', 'background');
  hour.classList.add('darkorange', 'text-center', 'grow3','background');
  ul.classList.add('margin-10', 'darkorange')

  duration.append(month, hour);
  divFather.append(title, duration, ul);
  body.append(divFather);
}













//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)




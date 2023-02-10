// function func() {
//                              // какой-то код
//     console.log('!');
// }
// // Вызываем нашу функцию:
// func();                     // выведет '!'
//
// function func() {
//     console.log('!');
// }


function name() {
    console.log('Denis Osetrov');
}
name();
function suma(){
    let a = 30;
    let b = 30;
    console.log(a +  b);
}
suma();

function ret(num) {                  //параматр функції - число
console.log(num**2);                 //зводимо функцію до квадрату
}
ret(2);                         //викликаємо функцію з числом (номером) 2 та 3.
ret (3);

function lid(num){
    console.log(num**3);
}
lid (3);

function ter(num) {
    if (num>0)
        console.log('+++');
    if (num<0)
        console.log('---')
}
ter(5);

function reb (num1, num2){               //Функція приймає два числа (записуємо через кому)
    console.log(num1+num2);
}
reb (25,45);

// function wer (num1, num2, num3) {
//     console.log(num1+num2+num3);
// }
// wer (10, 20, 10);

function wwe(num) {
    console.log(num**2);
}
let gagan = 5;
wwe(gagan);              //викличемо нашу функцію, передавши їй число зі змінної як параметр


// function jj (num){
//     console.log(num*20/100)
// }
// let oo =3000;
// jj(oo);

// function func (){
//     console.log(param1+param2+param3);
// }
// let param1 = 33;
// let param2 = 4;
// let param3 = 6;
// func();

function  re  (num=7) {
    console.log(num**2);
}
re();
 function er (num=5) {      //Якщо викликаємо функцію з іншим параметром, то парамерт замінюється
     console.log(num*num);          //замість 5 стає 4.
 }
er(4);

 function  tt (num1, num2){
     console.log(num1+num2);
 }
tt(2, 3);           //5
 tt(3);                   //Nan !!!
 tt();                          // Nan !!!

function rer (num){
    // console.log(num **2);
    return num **2;             //Слово return означає значення, яке буде записано в змінну rer,
}                               //              якщо їй присвоїти викликану функцію.
// let tte = rer(3);
// console.log(tte);               // =9;
// tte = tte + 1;                  // =10;
// tte = rer(3) + 1;            // =10;
// console.log(rer(5));       // записали результат у змінну і вивликали;
let tte = rer(4) + rer(5);
console.log(tte);

function wwy(num) {         //Використовуйте функцію wwy, щоб знайти куб числа та зберегти його в змінній yye.
    return num **3;
}
let yye = wwy(3);
console.log(yye);

function sque (num) {       //Використовуйте функцію sque, щоб знайти корінь 3, а потім знайдіть корінь 4.
    return num**(1/2);      //...Підсумуйте результати та виведіть їх на консоль.
}
console.log(sque(3) + sque(4));
function ggh (tree, flaw) {         //можемо змінити агрументи tree, flaw при виведенні функції, задавши 22 і 33.
   let ddf = tree + flaw;
    console.log(ddf)
}
ggh(22, 33);

// function supercalculator (num1, num2){       //
//     let obj = {
//         dif: num1 - num2,
//         add: num1 + num2
//     };
//     // return obj;
// }
// let x = supercalculator(10,20);
// console.log(supercalculator(10,20));







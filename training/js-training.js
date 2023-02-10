// let test = Boolean(0);
// alert(test);


let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(key);               // shows 'a', 'b', 'c'
}
for (let key in obj) {
    console.log(obj[key]);          // shows 1, 2, 3
}
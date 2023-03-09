

// const form = document.forms.main;
// form.addEventListener('button', function (eo) {
//     eo.preventDefault();
//
//     if (!this.name.value || this. name.value.length<2) {
//         return alert ('Enter correctly')
//     }
//
// const basic = document.createElement('div');
// const name = document.createElement('div');
// const surname = document.createElement('div');
// const age = document.createElement('div');
//
//     name.innerText = `Name: ${this.name.value}`;
//     surname.innerText = `Surname: ${this.surname.value}`;
//     age.innerText = `Age: ${this.age.value}`;
//
//     basic.append(name, surname, age);
//     document.body.appendChild(basic);
// })



// const form = document.forms.creator;
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//
//     if(!this.name.value || this.name.value.length < 3) {
//         return alert('Wrong name');
//     }
//
//     const wrapper = document.createElement('div');
//     const name = document.createElement('div');
//     const surname = document.createElement('div');
//     const age = document.createElement('div');
//
//     name.innerText = `Name: ${this.name.value}`;
//     surname.innerText = `Surname: ${this.surname.value}`;
//     age.innerText = `Age: ${this.age.value}`;
//
//     this.name.value = '';
//     this.surname.value = '';
//     this.age.value = '';
//
//     wrapper.append(name, surname, age);
//     document.body.appendChild(wrapper);
// });
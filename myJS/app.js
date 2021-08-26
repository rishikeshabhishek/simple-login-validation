const myUsername = document.querySelector('#txtUsername');
const myPassword = document.querySelector('#txtPassword');
const myFullName = document.querySelector('#txtFullName');
const form = document.querySelector('#regForm');

const myUL = document.querySelector('.warning');
const atLeastEightChar = new RegExp(".{8}");
const regEx = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])");

myUsername.addEventListener('input', function(event) {
    /* console.log(event.target.value);
    console.log((event.target.value).length); */
    (event.target.value).length >= 5 ? myUL.childNodes[1].classList.add('success') : myUL.childNodes[1].classList.remove('success');
});

myPassword.addEventListener('input', function(event) {
    /* console.log(event.target.value);
    console.log((event.target.value).length); 
    console.log(regEx.test(event.target.value));*/
    atLeastEightChar.test(event.target.value) ? myUL.childNodes[3].classList.add('success') : myUL.childNodes[3].classList.remove('success');
    regEx.test(event.target.value) ? myUL.childNodes[5].classList.add('success') : myUL.childNodes[5].classList.remove('success');

});

/* [myFullName, myPassword].forEach(item => {
    item.addEventListener('input', function(event) {

    });
}); */

/* form.addEventListener('submit', event => {
    event.preventDefault();
    (myFullName.value !== myPassword.value) ? myUL.childNodes[7].classList.add('success'): myUL.childNodes[7].classList.remove('success');
}); */
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;

let alertModal = document.getElementById('alert-modal');

let alertModalRegister = document.getElementById('alert-modal-register');

const form = document.getElementById('login-form')
form.addEventListener('submit', e => {
    e.preventDefault()
})
function validateFormLogin() {
    alertModal.style.opacity = 1;
    alertModal.style.visibility = 'visible';
    setTimeout(() => {
        alertModal.style.opacity = 0;
        alertModal.style.visibility = 'hidden';
    }, 2000)
}
function validateFormRegister() {
    alertModalRegister.style.visibility = 'visible';
    alertModalRegister.style.opacity = 1;
    setTimeout(() => {
        alertModalRegister.style.opacity = 0;
        alertModalRegister.style.visibility = 'hidden';
    }, 2000)
}

const formRegister = document.getElementById('register-form')
formRegister.addEventListener('submit', e => {
    e.preventDefault()
})

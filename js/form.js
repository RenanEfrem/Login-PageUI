let email = document.getElementById('email').value;
let password = document.getElementById('password').value;

let alertModal = document.getElementById('alert-modal');

const form = document.getElementById('login-form')
form.addEventListener('submit', e => {
    e.preventDefault()
})
function validateForm() {
    console.log("validou")
    alertModal.style.opacity = 1;
    alertModal.style.visibility = 'visible';
    setTimeout(() => {
        alertModal.style.opacity = 0;
        alertModal.style.visibility = 'hidden';
    }, 2000)
}

var login = true;

let loginPage = document.getElementById('login-page');
let registerPage = document.getElementById('register-page');


function SignChange() {
    if(login) {
        registerPage.style.opacity = '1';
        registerPage.style.visibility = 'visible';
        loginPage.style.opacity = '0';
        loginPage.style.visibility = 'hidden';
        login = false;
    }else {
        login = true;
        registerPage.style.opacity = '0';
        registerPage.style.visibility = 'hidden';
        loginPage.style.opacity = '1';
        loginPage.style.visibility = 'visible';
    }
}
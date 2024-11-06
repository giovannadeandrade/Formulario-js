const form = document.querySelector("form");
const nameInput = document.querySelector("name");
const emailInput = document.querySelector("email");
const passwordInput = document.querySelector("password");
const jobselect = document.querySelector("job");

form.addEventListener("submit", (event) => {
    event.preventDefault();


    if(nameInput.value === "") {
    alert("Por favor, preencha o seu nome");
    return;
 }

 if(emailInput.value === "" || isEmailvalid(emailInput.value)){
    alert("Por favor, preencha o seu email");
    return;
 }

 if(!validatePassword(passwordInput.value)){
    alert("A senha precisa de no mínimo 8 dígitos.");
    return;
 }

 form.submit();

});

function isEmailvalid(email){

    const emailRegex = new RegExp(
     /^^/[a-zA-Z0-9._-]+@[a-z-A-Z0-9._-]+\.[a-zA-Z]{2}$/
    );
    if(emailRegex.test(email)){
        return true
    }
    return false;
}

function validatePassword(password, minDigits){
    if(password.length >= minDigits){
        return true;
    }
}

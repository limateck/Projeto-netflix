function validateFields() {
    toglleButtonsDisable();

    toglleEmailErrors();
    togllePasswordErrors();
}
function isEmailValid() {
    const email = document.getElementById("email").value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}
function isPasswordValid() {
    const password = document.getElementById('id_password').value;
    if (!password) {
        return false;
    }
    return true;
}

function validateEmail(email) {

    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
}
function toglleEmailErrors() {
    const email = document.getElementById('email').value;
    if (!email) {
        //email obrigatório
        document.getElementById('email_id').style.display = "block";

    } else {
        document.getElementById('email_id').style.display = "none";

    }
    if (validateEmail(email)) {
        document.getElementById('email_invalid').style.display = "none";
    } else {
        document.getElementById('email_invalid').style.display = "block";

    }

}
function togleEmailInvalid() {


}
function togllePasswordErrors() {

    const password = document.getElementById('id_password').value;
    if (!password) {
        document.getElementById('senha_id').style.display = "block";
    } else {
        document.getElementById('senha_id').style.display = "none";

    }
}

function toglleButtonsDisable() {
    const emailValid = isEmailValid();
    document.getElementById('botao-entrar').disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById('botao-entrar').disabled = !emailValid || !passwordValid;

}
function caption() {

    document.getElementById('caption').style.visibility = "visible";
}

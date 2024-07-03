"use strict";
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
function validatePassword(input) {
    const passwordUser = input.value;
    if (passwordUser.match(passwordRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}
function validateConfirmationPassword(PasswordInput, ValidatePasswordInput) {
    if (PasswordInput.value == ValidatePasswordInput.value) {
        ValidatePasswordInput.classList.add("is-valid");
        ValidatePasswordInput.classList.remove("is-invalid");
        return true;
    }
    else {
        ValidatePasswordInput.classList.add("is-invalid");
        ValidatePasswordInput.classList.remove("is-valid");
        return false;
    }
}
//# sourceMappingURL=signup.js.map
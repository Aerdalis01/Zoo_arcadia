"use strict";
const btnSingin = document.getElementById('buttonConnexion');
const mailInput = document.getElementById('emailInput');
const mdpInput = document.getElementById('PasswordInput');
btnSingin.addEventListener("click", checkCredentials);
function checkCredentials() {
    // Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    if (mailInput.value == "admin@mail.com" && mdpInput.value == "123") {
        //Il faudra récupérer le vrai token
        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        setToken(token);
        //placer ce token en cookie
        setCookie(RoleCookieName, "admin", 7);
        window.location.replace("/");
    }
    else if (mailInput.value == "veto@mail.com" && mdpInput.value == "456") {
        // Il faudra récupérer le vrai token
        const token = "vetoTokenExample123456";
        setToken(token);
        // Placer ce token en cookie
        setCookie(RoleCookieName, "veto", 7);
        window.location.replace("/");
    }
    else if (mailInput.value == "employe@mail.com" && mdpInput.value == "789") {
        // Il faudra récupérer le vrai token
        const token = "employeTokenExample123456";
        setToken(token);
        // Placer ce token en cookie
        setCookie(RoleCookieName, "employe", 7);
        window.location.replace("/");
    }
    else {
        mailInput.classList.add("is-invalid");
        mdpInput.classList.add("is-invalid");
    }
}
//# sourceMappingURL=connexion.js.map
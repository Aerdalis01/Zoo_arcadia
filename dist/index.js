"use strict";
//Variable pour afficher et fermer le menu mobil
const menuBurger = document.querySelector(".menu-burger");
const modalMenu = document.querySelector(".modal-menu");
const modalMenuExit = document.querySelector(".menu-exit");
//variable pour afficher et fermer la page de connexion et récupérer les données du formulaires
const iconUser = document.querySelector(".icon-user");
const modalConnexionOpen = document.getElementById("connexion");
const modalConnexionExit = document.querySelector(".connexion-exit");
const btnSeConnecter = document.querySelector(".btn-navbar");
//variable pour rediriger vers les différent services
menuBurger.addEventListener("click", () => {
    modalMenu.classList.add("open");
});
modalMenuExit.addEventListener("click", () => {
    modalMenu.classList.remove("open");
});
//afficher et fermer la page de connexion et récupérer les données du formulaire
iconUser.addEventListener("click", () => {
    window.location.replace('/connexion');
});
btnSeConnecter.addEventListener("click", () => {
    window.location.replace('/connexion');
});
//# sourceMappingURL=index.js.map
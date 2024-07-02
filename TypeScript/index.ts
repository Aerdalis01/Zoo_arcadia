//Variable pour afficher et fermer le menu mobil
const menuBurger = document.querySelector(".menu-burger") as HTMLElement;
const modalMenu = document.querySelector(".modal-menu") as HTMLElement;
const modalMenuExit = document.querySelector(".menu-exit") as HTMLElement;

//variable pour afficher et fermer la page de connexion et récupérer les données du formulaires
const iconUser = document.querySelector(".icon-user") as HTMLElement;
const modalConnexionOpen = document.getElementById("connexion") as HTMLElement;
const modalConnexionExit = document.querySelector(
  ".connexion-exit"
) as HTMLElement;
const btnSeConnecter = document.querySelector(".btn-navbar") as HTMLElement;



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


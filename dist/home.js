"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const mainContent = document.getElementById("main-page");
const servicesSection = document.querySelector(".services");
const servicesElements = servicesSection.querySelectorAll(".card");
const avisBtn = document.querySelector(".avis-button");
const avisModal = document.querySelector(".modal-form");
const avisOverlay = document.querySelector(".overlay");
const avisModalClose = document.querySelector(".modal-form--exit");
const avisForm = document.getElementById("avis-form");
const avisFormData = new FormData(avisForm);
const avisFormObject = {};
const stars = document.querySelectorAll('.etoile');
const ratingInput = document.getElementById('rating');
servicesElements.forEach((child) => {
    child.addEventListener("click", (event) => {
        event.preventDefault();
        handleNavigation(child);
    });
});
function handleNavigation(element) {
    const section = element.getAttribute("data-section");
    if (section && mainContent) {
        loadPage(section, mainContent);
    }
    else {
        console.error("La section ou le contenu principal est introuvable.");
    }
}
function loadPage(section, mainContent) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("../../pages/services.html");
            const data = yield response.text();
            mainContent.innerHTML = data;
            history.pushState({}, "", `#${section}`);
            scrollToSection(section);
        }
        catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
        }
    });
}
function scrollToSection(section) {
    const targetSection = document.getElementById(section);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
    }
}
window.onpopstate = () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
        scrollToSection(hash);
    }
};
avisBtn.addEventListener("click", () => {
    avisModal.classList.add("open");
    avisOverlay.classList.add("open");
});
avisModalClose.addEventListener("click", () => {
    avisModal.classList.remove("open");
    avisOverlay.classList.remove("open");
});
stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-value') || '0', 10);
        ratingInput.value = rating.toString();
        // Reset all stars
        stars.forEach(s => s.src = '/assets/img/Accueil/star.svg');
        // Fill in stars up to the one clicked
        for (let i = 0; i < rating; i++) {
            stars[i].src = '/assets/img/Accueil/star-filled.svg';
        }
    });
});
avisForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire
    // Récupérer les valeurs des champs du formulaire
    const avisFormNom = document.getElementById('inputNom').value;
    const avisFormDate = document.getElementById('inputDate').value;
    const avisFormText = document.getElementById('inputText').value;
    const avisFormRating = document.getElementById('rating').value;
    // Afficher les données dans la console
    console.log('Nom:', avisFormNom);
    console.log('Date de visite:', avisFormDate);
    console.log('Commentaires:', avisFormText);
    console.log('Rating:', avisFormRating);
    // Réinitialiser le formulaire après soumission
    avisForm.reset();
    // Réinitialiser l'affichage des étoiles
    const stars = document.querySelectorAll('.etoile img');
    stars.forEach(star => {
        star.setAttribute('src', '/assets/img/Accueil/star.svg');
    });
});
//# sourceMappingURL=home.js.map
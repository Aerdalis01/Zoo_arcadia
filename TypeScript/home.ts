const mainContent = document.getElementById("main-page") as HTMLElement | null;
const servicesSection = document.querySelector(".services") as HTMLElement;
const servicesElements = servicesSection.querySelectorAll(
  ".card"
) as NodeListOf<HTMLDivElement>;

const avisBtn = document.querySelector(".avis-button") as HTMLElement;
const avisModal = document.querySelector(".modal-form") as HTMLDivElement;
const avisOverlay = document.querySelector(".overlay") as HTMLDivElement;
const avisModalClose = document.querySelector(
  ".modal-form--exit"
) as HTMLElement;

const avisForm = document.getElementById("avis-form") as HTMLFormElement;
const avisFormData = new FormData(avisForm);
const avisFormObject: { [key: string]: string } = {};
const stars: NodeListOf<HTMLImageElement> = document.querySelectorAll('.etoile');
const ratingInput: HTMLInputElement = document.getElementById('rating') as HTMLInputElement;


servicesElements.forEach((child) => {
  child.addEventListener("click", (event) => {
    event.preventDefault();
    handleNavigation(child);
  });
});

function handleNavigation(element: HTMLDivElement) {
  const section = element.getAttribute("data-section");
  if (section && mainContent) {
    loadPage(section, mainContent);
  } else {
    console.error("La section ou le contenu principal est introuvable.");
  }
}

async function loadPage(section: string, mainContent: HTMLElement) {
  try {
    const response = await fetch("../../pages/services.html");
    const data = await response.text();
    mainContent.innerHTML = data;
    history.pushState({}, "", `#${section}`);
    scrollToSection(section);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
}

function scrollToSection(section: string) {
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

avisForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêcher le comportement par défaut du formulaire

  // Récupérer les valeurs des champs du formulaire
  const avisFormNom = (document.getElementById('inputNom') as HTMLInputElement).value;
const avisFormDate = (document.getElementById('inputDate') as HTMLInputElement).value;
const avisFormText = (document.getElementById('inputText') as HTMLInputElement).value;
const avisFormRating = (document.getElementById('rating') as HTMLInputElement).value;


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

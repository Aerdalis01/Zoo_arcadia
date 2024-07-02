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

document.addEventListener("DOMContentLoaded", () => {


  avisForm.addEventListener("submit", function(event: Event) {
    event.preventDefault();
    alert
    console.log(avisForm);

    avisFormData.forEach((value, key) => {
      avisFormObject[key] = value as string;

    });
      console.log(avisFormObject);
      
      alert('Votre avis a été envoyé avec succès? Merci pour votre retour!');
      avisForm.reset();
  });
});

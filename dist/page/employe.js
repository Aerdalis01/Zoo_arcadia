"use strict";
const gestionAvisForm = document.querySelector('#gestion-avis-form');
const animauxFormulaire = document.querySelector('.animaux-formulaire');
const formEmploye = document.querySelector('.animaux-formulaire');
if (gestionAvisForm) {
    gestionAvisForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Votre avis a été envoyé !');
    });
}
const radioButtons = animauxFormulaire.querySelectorAll('input[name="habitats"]');
const selectHab1 = animauxFormulaire.querySelector('#select-hab1');
const selectHab2 = animauxFormulaire.querySelector('#select-hab2');
const selectHab3 = animauxFormulaire.querySelector('#select-hab3');
const vetInputs = animauxFormulaire.querySelectorAll('[data-show="veto"]');
// Cache les selects et les champs veto au chargement initial
selectHab1.style.display = 'none';
selectHab2.style.display = 'none';
selectHab3.style.display = 'none';
vetInputs.forEach(input => input.style.display = 'none');
radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        selectHab1.style.display = 'none';
        selectHab2.style.display = 'none';
        selectHab3.style.display = 'none';
        switch (radio.id) {
            case 'hab1':
                selectHab1.style.display = 'block';
                break;
            case 'hab2':
                selectHab2.style.display = 'block';
                break;
            case 'hab3':
                selectHab3.style.display = 'block';
                break;
            default:
                break;
        }
    });
});
[selectHab1, selectHab2, selectHab3].forEach(select => {
    select.addEventListener('change', () => {
        const selectedOption = select.value;
        if (selectedOption !== '') {
            vetInputs.forEach(input => input.style.display = 'block');
        }
    });
});
animauxFormulaire.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Votre avis a été envoyé !');
    // Ajoutez ici la logique pour envoyer les données au serveur
});
// Fonction pour convertir FormDataCustom en FormData natif
function convertToFormData(formDataCustom) {
    const formData = new FormData();
    formData.append('habitats', formDataCustom.habitats);
    formData.append('animalSelectionne', formDataCustom.animalSelectionne);
    formData.append('etat', formDataCustom.etat);
    formData.append('nourritureProposee', formDataCustom.nourritureProposee);
    formData.append('datePassage', formDataCustom.datePassage);
    return formData;
}
// Envoi du formulaire avec fetch par exemple
// fetch('/api/submit-form', {
//   method: 'POST',
//   body: formData
// });
//# sourceMappingURL=employe.js.map
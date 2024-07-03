"use strict";
const gestionAvisForm = document.querySelector('#gestion-avis-form');
const animauxForm = document.querySelector('.animaux-form');
if (gestionAvisForm) {
    gestionAvisForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Votre avis a été envoyé !');
    });
}
const radioButtons = animauxForm.querySelectorAll('input[name="habitats"]');
const selectHab1 = animauxForm.querySelector('#select-hab1');
const selectHab2 = animauxForm.querySelector('#select-hab2');
const selectHab3 = animauxForm.querySelector('#select-hab3');
const vetInputs = animauxForm.querySelectorAll('[data-show="veto"]');
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
animauxForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Votre avis a été envoyé !');
    // Ajoutez ici la logique pour envoyer les données au serveur
});
//# sourceMappingURL=avis.js.map
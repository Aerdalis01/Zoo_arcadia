"use strict";
const cerfForm = document.getElementById('cerfForm');
const cerfBtn = document.getElementById('cerfBtn');
// cerfBtn.addEventListener('click', () => {
//   console.log(cerfBtn, 'est cliqué');
//   cerfForm.classList.toggle('visible');
//   if (cerfBtn.textContent === 'Voir plus') {
//     cerfBtn.textContent = 'Voir moins';
//   } else {
//     cerfBtn.textContent = 'Voir plus';
//   };
// });
// Sélectionner tous les boutons et toutes les descriptions d'images
const toggleButtons = document.querySelectorAll('.view-animal');
console.log(toggleButtons);
const animalForm = document.querySelectorAll('.animaux-form');
console.log(animalForm);
// Ajouter un écouteur d'événement à chaque bouton
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const imageId = button.getAttribute('data-image');
        if (!imageId)
            return;
        // Trouver la description correspondante en fonction de l'ID de l'image
        const description = document.querySelector(`.animaux-form[data-image="${imageId}"]`);
        if (description) {
            // Toggle visibility de la description
            description.classList.toggle('visible');
            // Changer le texte du bouton
            if (description.classList.contains('visible')) {
                button.textContent = 'Voir moins';
            }
            else {
                button.textContent = 'Voir plus';
            }
        }
    });
});
//méthode pour écouter les clicks sur les boutons animaux
// document.querySelectorAll('.view-animal').forEach(button => {
//   button.addEventListener('click', () => {
//     const animalId = button.getAttribute('data-animal-id');
//     console.log(button, 'cliqué');
//     fetch('/api/track-animal-view', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ animalId })
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Animal view tracked:', data);
//     })
//     .catch(error => {
//       console.error('Error tracking animal view:', error);
//     });
//   });
// });
//# sourceMappingURL=animaux.js.map
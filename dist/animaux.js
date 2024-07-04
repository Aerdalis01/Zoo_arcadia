"use strict";
//méthode pour écouter les clicks sur les boutons animaux
document.querySelectorAll('.view-animal').forEach(button => {
    button.addEventListener('click', () => {
        const animalId = button.getAttribute('data-animal-id');
        console.log(button, 'cliqué');
        fetch('/api/track-animal-view', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ animalId })
        })
            .then(response => response.json())
            .then(data => {
            console.log('Animal view tracked:', data);
        })
            .catch(error => {
            console.error('Error tracking animal view:', error);
        });
    });
});
//# sourceMappingURL=animaux.js.map
"use strict";
const radioButtons = document.querySelectorAll('input[name="habitats"]');
const selectHab1 = document.getElementById('select-hab1');
const selectHab2 = document.getElementById('select-hab2');
const selectHab3 = document.getElementById('select-hab3');
radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        selectHab1.style.display = 'none';
        selectHab2.style.display = 'none';
        selectHab3.style.display = 'none';
        if (radio.id === 'hab1') {
            selectHab1.style.display = 'block';
        }
        else if (radio.id === 'hab2') {
            selectHab2.style.display = 'block';
        }
        else if (radio.id === 'hab3') {
            selectHab3.style.display = 'block';
        }
    });
});
//# sourceMappingURL=avis.js.map
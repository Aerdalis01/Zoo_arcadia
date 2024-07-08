"use strict";
var _a, _b, _c;
const currentUserRole = getRole();
const elementMarais = document.getElementById('cardMaraisModif');
const elementSavane = document.getElementById('cardSavaneModif');
const elementJungle = document.getElementById('cardJungleModif');
const maraisContent = document.querySelector('.habitat--marais');
const savaneContent = document.querySelector('.habitat--savane');
const jungleContent = document.querySelector('.habitat--jungle');
if (elementMarais && elementSavane && elementJungle) {
    const rolesMarais = ((_a = elementMarais.getAttribute('data-show')) === null || _a === void 0 ? void 0 : _a.split(',')) || [];
    if (rolesMarais.includes(currentUserRole)) {
        elementMarais.style.display = 'block';
    }
    else {
        elementMarais.style.display = 'none';
    }
    const rolesSavane = ((_b = elementSavane.getAttribute('data-show')) === null || _b === void 0 ? void 0 : _b.split(',')) || [];
    if (rolesSavane.includes(currentUserRole)) {
        elementSavane.style.display = 'block';
    }
    else {
        elementSavane.style.display = 'none';
    }
    const rolesjungle = ((_c = elementJungle.getAttribute('data-show')) === null || _c === void 0 ? void 0 : _c.split(',')) || [];
    if (rolesjungle.includes(currentUserRole)) {
        elementJungle.style.display = 'block';
    }
    else {
        elementJungle.style.display = 'none';
    }
}
;
maraisContent.addEventListener('click', () => {
    window.location.replace('/marais');
});
savaneContent.addEventListener('click', () => {
    window.location.replace('/savane');
});
jungleContent.addEventListener('click', () => {
    window.location.replace('/jungle');
});
//# sourceMappingURL=habitats.js.map
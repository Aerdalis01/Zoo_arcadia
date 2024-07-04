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
const btnSignup = document.querySelector('.btnSignup');
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('/api/get-animal-views');
        if (!response.ok) {
            throw new Error('Error fetching animal views');
        }
        const data = yield response.json();
        const viewList = document.getElementById('view-list');
        if (viewList) {
            data.forEach(view => {
                const row = document.createElement('tr');
                row.innerHTML = `
          <td>${view.animalId}</td>
          <td>${new Date(view.viewedAt).toLocaleString()}</td>
        `;
                viewList.appendChild(row);
            });
        }
        else {
            console.error('Element #view-list not found');
        }
    }
    catch (error) {
        console.error('Error fetching animal views:', error);
    }
}));
//redirection du bouton créér un compte vers /signup
btnSignup.addEventListener('click', () => {
    window.location.replace('/signup');
});
//# sourceMappingURL=admin.js.map
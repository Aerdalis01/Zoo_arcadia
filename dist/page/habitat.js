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
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayHabitat = void 0;
const habitatsService_1 = require("../api/services/habitatsService");
// Fonction pour charger les données d'un habitat et les afficher sur la page
const displayHabitat = () => __awaiter(void 0, void 0, void 0, function* () {
    const habitatData = yield (0, habitatsService_1.getHabitatData)();
    if (!habitatData) {
        console.error('Aucune donnée trouvée pour cet habitat');
        return;
    }
    const maraisNom = document.getElementById('habitat-nom--marais');
    const maraisDescription = document.getElementById('habitat-description--marais');
    if (maraisNom)
        maraisNom.textContent = habitatData.nom;
    if (maraisDescription)
        maraisDescription.textContent = habitatData.description;
});
exports.displayHabitat = displayHabitat;
(0, exports.displayHabitat)();
//# sourceMappingURL=habitat.js.map
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
exports.getHabitatData = void 0;
const apiClients_1 = require("./api/apiClients");
const habitat = () => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, apiClients_1.getQueryParam)('id');
    try {
        const reponse = yield fetch('http://localhost:8000/api/admin/habitats/' + id);
        console.log("L'habitat est bien chargé", reponse);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Erreur lors du chargement de l'habitat: ${error.message}`);
        }
        else {
            console.error('Erreur inattendue: ${error}');
        }
    }
});
habitat();
const getHabitatData = () => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, apiClients_1.getQueryParam)('id');
    if (!id) {
        console.error('Id de l\habitat manquant dans l\'URL');
    }
    try {
        const response = yield fetch(`http://localhost:8000/api/admin/habitats/${id}`);
        if (!response.ok) {
            console.error('Erreur lors du chagement de l\'habitat', response.statusText);
            return null;
        }
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.error('Erreur lors de la récupération des données de l\'habitat', error);
        return null;
    }
});
exports.getHabitatData = getHabitatData;
//# sourceMappingURL=habitat.js.map
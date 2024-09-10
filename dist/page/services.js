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
const apiClients_1 = require("../api/apiClients");
const voirLeMenu = document.getElementById('voirMenu');
const menuExit = document.querySelector('.carte-restaurant--croix');
const menuResto = document.querySelector('.carte-restaurant');
const voirLaCarte = document.querySelector('.train-btn');
const planExit = document.querySelector('.carte--zoo-croix');
const planZoo = document.querySelector('.carte');
voirLeMenu.addEventListener('click', () => {
    console.log(voirLeMenu, 'est cliqué');
    menuResto.classList.add('carte-restaurant--open');
});
menuExit.addEventListener('click', () => {
    menuResto.classList.remove('carte-restaurant--open');
});
voirLaCarte.addEventListener('click', () => {
    console.log(voirLaCarte, 'est cliqué');
    planZoo.classList.add('carte--open');
});
planExit.addEventListener('click', () => {
    planZoo.classList.remove('carte--open');
});
//Méthode de chagergement des informations des services et sous services
const service = () => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, apiClients_1.getQueryParam)('id');
    try {
        const reponse = yield fetch('http://localhost:8000/api/services/' + id);
        console.log("Le service est bien chargé", reponse);
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
service();
//# sourceMappingURL=services.js.map
import { getQueryParam } from '../api/apiClients'


const voirLeMenu = document.getElementById('voirMenu') as HTMLButtonElement;
const menuExit = document.querySelector('.carte-restaurant--croix') as HTMLElement;
const menuResto = document.querySelector('.carte-restaurant') as HTMLElement;
const voirLaCarte = document.querySelector('.train-btn') as HTMLButtonElement;
const planExit = document.querySelector('.carte--zoo-croix') as HTMLElement;
const planZoo = document.querySelector('.carte') as HTMLElement;

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


const service = async () => {
  const id = getQueryParam('id');
  try {
    const reponse = await fetch('http://localhost:8000/api/services/'+id);
    console.log("Le service est bien chargé", reponse);
  } catch (error) {
    if (error instanceof Error) {
    console.error(`Erreur lors du chargement de l'habitat: ${error.message}`);
  } else {
    console.error('Erreur inattendue: ${error}');
  }
  }
}

service(); 
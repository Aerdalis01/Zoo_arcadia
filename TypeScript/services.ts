
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
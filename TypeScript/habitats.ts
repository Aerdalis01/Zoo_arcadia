
const currentUserRole: any = getRole(); 
const elementMarais = document.getElementById('cardMaraisModif') as HTMLElement;
const elementSavane = document.getElementById('cardSavaneModif') as HTMLElement; 
const elementJungle = document.getElementById('cardJungleModif') as HTMLElement; 

const maraisContent = document.querySelector('.habitat--marais') as HTMLElement; 
const savaneContent = document.querySelector('.habitat--savane') as HTMLElement; 
const jungleContent = document.querySelector('.habitat--jungle') as HTMLElement; 


    if (elementMarais && elementSavane && elementJungle) {
        const rolesMarais = elementMarais.getAttribute('data-show')?.split(',') || [];
        if (rolesMarais.includes(currentUserRole)) {
          elementMarais.style.display = 'block'; 
        } else {
          elementMarais.style.display = 'none';
        }
        const rolesSavane = elementSavane.getAttribute('data-show')?.split(',') || [];
        if (rolesSavane.includes(currentUserRole)) {
          elementSavane.style.display = 'block'; 
        } else {
          elementSavane.style.display = 'none';
        }
        const rolesjungle = elementJungle.getAttribute('data-show')?.split(',') || [];
        if (rolesjungle.includes(currentUserRole)) {
          elementJungle.style.display = 'block'; 
        } else {
          elementJungle.style.display = 'none';
        }
    };


    maraisContent.addEventListener('click', () =>{
      window.location.replace('/marais');
    });
    savaneContent.addEventListener('click', () =>{
      window.location.replace('/savane');
    });
    jungleContent.addEventListener('click', () =>{
      window.location.replace('/jungle');
    });
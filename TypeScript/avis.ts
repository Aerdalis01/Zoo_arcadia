

  const gestionAvisForm = document.querySelector('#gestion-avis-form') as HTMLFormElement;
  const animauxForm = document.querySelector('.animaux-form') as HTMLFormElement;

  if (gestionAvisForm) {
    gestionAvisForm.addEventListener('submit', (event: Event) => {
      event.preventDefault();
      alert('Votre avis a été envoyé !');
    });
  }


    const radioButtons = animauxForm.querySelectorAll('input[name="habitats"]') as NodeListOf<HTMLInputElement>;
    const selectHab1 = animauxForm.querySelector('#select-hab1') as HTMLSelectElement;
    const selectHab2 = animauxForm.querySelector('#select-hab2') as HTMLSelectElement;
    const selectHab3 = animauxForm.querySelector('#select-hab3') as HTMLSelectElement;
    const vetInputs = animauxForm.querySelectorAll('[data-show="veto"]') as NodeListOf<HTMLElement>;

    // Cache les selects et les champs veto au chargement initial
    selectHab1.style.display = 'none';
    selectHab2.style.display = 'none';
    selectHab3.style.display = 'none';
    vetInputs.forEach(input => input.style.display = 'none');

    radioButtons.forEach(radio => {
      radio.addEventListener('change', () => {
        selectHab1.style.display = 'none';
        selectHab2.style.display = 'none';
        selectHab3.style.display = 'none';

        switch (radio.id) {
          case 'hab1':
            selectHab1.style.display = 'block';
            break;
          case 'hab2':
            selectHab2.style.display = 'block';
            break;
          case 'hab3':
            selectHab3.style.display = 'block';
            break;
          default:
            break;
        }
      });
    });

    [selectHab1, selectHab2, selectHab3].forEach(select => {
      select.addEventListener('change', () => {
        const selectedOption = (select as HTMLSelectElement).value;
        if (selectedOption !== '') {
          vetInputs.forEach(input => input.style.display = 'block');
        }
      });
    });

    animauxForm.addEventListener('submit', (event: Event) => {
      event.preventDefault();
      alert('Votre avis a été envoyé !');
      // Ajoutez ici la logique pour envoyer les données au serveur
    });

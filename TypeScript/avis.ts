
  const radioButtons = document.querySelectorAll('input[name="habitats"]') as NodeListOf<HTMLInputElement>;
  const selectHab1 = document.getElementById('select-hab1') as HTMLElement;
  const selectHab2 = document.getElementById('select-hab2') as HTMLElement;
  const selectHab3 = document.getElementById('select-hab3') as HTMLElement;

  radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
      selectHab1.style.display = 'none';
      selectHab2.style.display = 'none';
      selectHab3.style.display = 'none';

      if (radio.id === 'hab1') {
        selectHab1.style.display = 'block';
      } else if (radio.id === 'hab2') {
        selectHab2.style.display = 'block';
      } else if (radio.id === 'hab3') {
        selectHab3.style.display = 'block';
      }
    });
  });

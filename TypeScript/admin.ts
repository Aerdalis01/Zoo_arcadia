const btnSignup = document.querySelector('.btnSignup') as HTMLElement;

// Méthode pour récupérer et afficher le données de vues des animaux


interface AnimalView {
  animalId: string;
  viewedAt: string;
  viewNbr: number;
}
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('/api/get-animal-views');
    if (!response.ok) {
      throw new Error('Error fetching animal views');
    }
    const data: AnimalView[] = await response.json();
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
    } else {
      console.error('Element #view-list not found');
    }
  } catch (error) {
    console.error('Error fetching animal views:', error);
  }
});

//redirection du bouton créér un compte vers /signup

btnSignup.addEventListener('click', () => {
  window.location.replace('/signup');
})
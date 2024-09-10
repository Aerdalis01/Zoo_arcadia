// Récupérez les données du localStorage
const formDataJSON: string | null = localStorage.getItem('formData');
const formData: FormEmploye | null = formDataJSON ? JSON.parse(formDataJSON) : null;

if (formData) {
  // Sélectionnez le corps du tableau
  const tableBody = document.getElementById('data-table-body--veto') as HTMLElement;

  // Créez une nouvelle ligne dans le tableau pour chaque entrée de formulaire
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${formData.habitats}</td>
    <td>${formData.animalSelectionne}</td>
    <td>${formData.etat}</td>
    <td>${formData.nourritureProposee}</td>
    <td>${formData.datePassage}</td>
    <td>...</td> // Vous devez récupérer cette donnée d'une autre manière, elle n'est pas présente dans formData
  `;
  tableBody.appendChild(row);
}
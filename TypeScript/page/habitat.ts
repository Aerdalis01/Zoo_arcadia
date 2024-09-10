import { Habitat } from '../models/Habitat';
import { getHabitatData } from '../api/services/habitatsService';

// Fonction pour charger les données d'un habitat et les afficher sur la page
export const displayHabitat = async () => {
  const habitatData = await getHabitatData();
  if (!habitatData) {
    console.error('Aucune donnée trouvée pour cet habitat');
    return;
  }

  const maraisNom = document.getElementById('habitat-nom--marais');
  const maraisDescription = document.getElementById('habitat-description--marais');

  if (maraisNom) maraisNom.textContent = habitatData.nom;
  if (maraisDescription) maraisDescription.textContent = habitatData.description;
};

displayHabitat();
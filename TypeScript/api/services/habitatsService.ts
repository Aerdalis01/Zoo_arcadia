import { getQueryParam } from '../../utils/urlUtils'
import { Habitat } from '../../models/Habitat';

export const getHabitatData = async (): Promise<Habitat | null > => {
  const id = getQueryParam('id');
  if(!id){
    console.error('Id de l\habitat manquant dans l\'URL');
  }
  
  try {
    const response = await fetch(`http://localhost:8000/api/admin/habitats/${id}`);
    if(!response.ok) {
      console.error('Erreur lors du chagement de l\'habitat', response.statusText);
      return null;
    }
    const data:Habitat = await response.json();
    return data;
  } catch(error) {
    console.error('Erreur lors de la récupération des données de l\'habitat', error);
    return null;
  }
};

const habitat = async () => {
  const id = getQueryParam('id');
  try {
    const reponse = await fetch('http://localhost:8000/api/admin/habitats/'+id);
    console.log("L'habitat est bien chargé", reponse);
  } catch (error) {
    if (error instanceof Error) {
    console.error(`Erreur lors du chargement de l'habitat: ${error.message}`);
  } else {
    console.error('Erreur inattendue: ${error}');
  }
  }
}

habitat(); 


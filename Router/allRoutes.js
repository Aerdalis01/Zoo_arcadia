import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "accueil", "/pages/home.html"),
    new Route("/habitats", "Habitats", "/pages/habitats.html"),
    new Route("/services", "Services", "/pages/services.html"),
    new Route("/contact", "Contact", "/pages/contact.html"),
    new Route("/marais", "Marais", "/pages/marais.html"),
    new Route("/savane", "Savane", "/pages/savane.html"),
    new Route("/jungle", "Jungle", "/pages/jungle.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";
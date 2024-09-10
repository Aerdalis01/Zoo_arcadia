import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", "/dist/home.js"),
    new Route("/habitats", "Habitats", "/pages/habitats.html","/dist/habitats.js"),
    new Route("/services", "Services", "/pages/services.html", "/dist/services.js"),
    new Route("/contact", "Contact", "/pages/contact.html"),
    new Route("/habitat", "Habitat", "/pages/habitat.html","/dist/habitat.js"),
    new Route("/savane", "Savane", "/pages/savane.html","/dist/animaux.js"),
    new Route("/jungle", "Jungle", "/pages/jungle.html","/dist/animaux.js"),
    new Route("/employe", "Avis", "/pages/employe.html", "/dist/employe.js"),
    new Route("/veto", "Veto", "/pages/veto.html", "/dist/veto.js"),
    new Route("/admin", "Admin", "/pages/admin.html", "/dist/admin.js"),
    new Route("/signup", "Signup", "/pages/auth/signup.html", "/dist/auth/signup.js"),
    new Route("/connexion", "Connexion", "/pages/auth/connexion.html", "/dist/auth/connexion.js"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";
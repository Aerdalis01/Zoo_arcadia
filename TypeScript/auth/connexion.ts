const btnSingin = document.getElementById('buttonConnexion') as HTMLButtonElement;
const mailInput = document.getElementById('emailInput') as HTMLInputElement;
const mdpInput = document.getElementById('PasswordInput') as HTMLInputElement;


btnSingin.addEventListener("click", checkCredentials);
function checkCredentials(){
    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    
    if(mailInput.value == "test@mail.com" && mdpInput.value == "123"){
        //Il faudra récupérer le vrai token
        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        setToken(token);
        //placer ce token en cookie
        
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        mdpInput.classList.add("is-invalid");
    }
}
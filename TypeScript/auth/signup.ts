const inputNom = document.getElementById("nameInput") as HTMLInputElement;
const inputPreNom = document.getElementById("firstNameInput") as HTMLInputElement;
const inputMail = document.getElementById("emailInput") as HTMLInputElement;
const roleRadio = document.querySelectorAll(".form-check-input")
const inputPassword = document.getElementById("PasswordInput") as HTMLInputElement;
const inputValidatePassword = document.getElementById("ValidatePasswordInput") as HTMLInputElement;
const formInscription = document.getElementById('form-connexion') as HTMLElement;

inputNom.addEventListener("keyup", validateForm); 
inputPreNom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);
//Function permettant de valider tout le formulaire
function validateForm(){
  const nomOk = validateRequired(inputNom);
  const prenomOk = validateRequired(inputPreNom);
  const mailOk = validateMail(inputMail);
  const passwordOk = validatePassword(inputPassword);
  const validatePasswordOk = validateConfirmationPassword(inputPassword, inputValidatePassword);

}
function validateRequired(input: HTMLInputElement){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }
}

function validateMail(input: HTMLInputElement){
  //Définir mon regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mailUser = input.value;
  if(mailUser.match(emailRegex)){
      input.classList.add("is-valid");
      input.classList.remove("is-invalid"); 
      return true;
  }
  else{
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      return false;
  }
}

function validatePassword(input: HTMLInputElement){
  //Définir mon regex
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  const passwordUser = input.value;
  if(passwordUser.match(passwordRegex)){
      input.classList.add("is-valid");
      input.classList.remove("is-invalid"); 
      return true;
  }
  else{
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      return false;
  }
}

function validateConfirmationPassword(PasswordInput: HTMLInputElement, ValidatePasswordInput: HTMLInputElement){
  if(PasswordInput.value == ValidatePasswordInput.value){
      ValidatePasswordInput.classList.add("is-valid");
      ValidatePasswordInput.classList.remove("is-invalid");
      return true;
  }
  else{
      ValidatePasswordInput.classList.add("is-invalid");
      ValidatePasswordInput.classList.remove("is-valid");
      return false;
  }
}

formInscription.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  alert('Votre avis a été envoyé !');
  // Ajoutez ici la logique pour envoyer les données au serveur
});

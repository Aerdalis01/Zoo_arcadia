<?

$email = $_post['emailInput'];
$password = $_post['passwordInput'];

if (filter_var($email, FILTER_VALIDATE_EMAIL))

    {
      echo "votre adresse est valide" ;
      echo "<br>" ;
      if(strlen($password) <=7) {
        echo "votre mot de passe doit faire minimum 7 caractères" ;
      }
    }
    else {
      echo " votre adresse mail n'est pas valide" ;
    }
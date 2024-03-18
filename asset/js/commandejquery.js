$(document).ready(function()
{
 function verif()
 {
  let envoi=true;

  let prenom=$("#prenom").val();
  let nom =$('#nom').val();
  if(prenom == "")
  {
    envoi=false;
    console.log("le prénom doit être renseigné");
    erreur = document.querySelector('#erreur1');
    erreur.textContent ='Le prénom doit etre renseigné ';
    
  }

  if(nom == "")
  {
    envoi=false;
    console.log("Le nom est obligatoire ");

    erreurnom = document.querySelector('#erreur2');
    erreurnom.textContent ='Le nom doit etre renseigné ';
  }

  

  
 

  



  if(envoi==true)
  {
    document.forms[0].submit();
  }
  else
{
  return false;
}

 


 }
$("#bouton").click(function(e)
   
{
e.preventDefault();

verif();

});
})


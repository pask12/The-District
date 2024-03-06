$(document).ready(function()
{
 function verif()
 {
  var envoi=true;

  var leprenom=$("#prenom").val();

  if(leprenom == "")
  {
    envoi=false;
    alert("le prénom doit être renseigné");
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


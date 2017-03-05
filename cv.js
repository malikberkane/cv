function afficher_summary() {
 $(".summary").toggle();
  }

function afficher_expe() {
 $(".experiences").toggle();
  }

function afficher_form() {
 $(".form").toggle();
  }

function afficher_comp() {
 $(".competences").toggle();
  }

function afficher_langues() {
 $(".skillset").toggle();
  }


function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}


function validationMail() {
var contenu_email = contact.email.value
var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(contenu_email))
   {
      surligne(contact.email, true);
     return false; 
   }
   else
   {
      surligne(contact.email, false);
      return true;
   }

}

function validationNum() {

   if(contact.tel.value != 10)
   {
     surligne(contact.tel, true);
     return true; 
   }
   else
   {
      surligne(contact.tel, false);
      return false;
   }



}

function verifForm()
{

   var mailOk = validationMail();
   var numOK = validationNum();

   
   if(mailOk && numOK)
      return true;
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}

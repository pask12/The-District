$(document).ready(function(){
  



  $.get('fichier.json', function (data) {

    let cat = $('#cat');

    for (i =0; i<i < data.categorie.length;i++) {


        let element = document.createElement('div');
        element.className = "col-3 p-0 d-flex justify-content-center"

      let cardcat = document.createElement('div');
      cardcat.className = "card ";

      let imgcat = document.createElement('img');
      imgcat.src = data.categorie[i].image


      let libelle = document.createElement('h1');
      libelle.textContent = data.categorie[i].libelle;
      

cat.append(element);
element.append(cardcat);
cardcat.append(libelle, imgcat)

    }
    




  });

})


























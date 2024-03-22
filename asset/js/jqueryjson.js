$(document).ready(function(){
  



  $.get('fichier.json', function (data) {



    let categorie = $('#categorie');

    // for (i =0; i<i < data.categorie.length;i++) {

      for (i =0; i<8;i++) {

      let element = document.createElement('div');
      element.className = "col-3 p-0 d-flex justify-content-center ms-5 mb-5 "

      let cardcategorie = document.createElement('div');
      cardcategorie.className = "card ";

      let imgcategorie = document.createElement('img');
      imgcategorie.src = data.categorie[i].image


      let libelle = document.createElement('h1');
      libelle.textContent = data.categorie[i].libelle;
      

categorie.append(element);
element.append(cardcategorie);
cardcategorie.append(libelle, imgcategorie)

    }
    



    

    let plat = $('#plat');
  
    // for (i =0; i<i < data.categorie.length;i++) {
  
        for (i =0; i<10;i++) {
  
        let element = document.createElement('div');
        element.className = "col-3 p-0 d-flex justify-content-center ms-5 mb-5 "

  
        let cardcategorie = document.createElement('div');
        cardcategorie.className = "card w-75 ";
  
        let imgcategorie = document.createElement('img');
        imgcategorie.src = data.plat[i].image
        imgcategorie.className = "card-img-top ";
  
        /* let cardbody = document.createElement('div');
        cardcat.className = "card-body"; */

        let libelle = document.createElement('h3');
        libelle.textContent = data.plat[i].libelle;
        libelle.className = "card-title p-3 pb-0";

        let description = document.createElement('p');
        description.textContent = data.plat[i].description;
        description.className = "card-text p-3 pt-0";

        let commander = document.createElement('a');
        commander.textContent = "commander";
        commander.className = "btn btn-primary w-50 mx-auto mb-4";
        commander.href = "commande.html?id=" + data.plat[i].id_plat;
        


{/* <div class="col-md-3 mx-2 mb-4 d-flex justify-content-center">

        <div class="card text" style="width: 20rem">

          <img src="images_the_district/menu-burger.jpg" class="card-img-top" alt="Placeholder Image" height="300rem">

          <div class="card-body">

            <h5 class="card-title">HAMBURGER</h5>
            <p class="card-text mb-2">Burger composé d'un bun's du boulanger, deux steaks de 80g (origine française), de deux tranches poitrine de porc fumée, de deux tranches cheddar affiné, salade et oignons confits</p>
          
            <div class="d-flex justify-content-center mb-4">

              <button type="button" class="envoi btn btn-primary mt-3">Commander</button>

            </div>

          </div>

         </div>

    </div> */}

        
  
  plat.append(element);
  element.append(cardcategorie);
  cardcategorie.append(imgcategorie, libelle, description, commander)
        

    }

 
});
});




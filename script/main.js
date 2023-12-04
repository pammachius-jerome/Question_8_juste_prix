// déclaration des variables global
const nomObjet = ["une chaise gaming", "un costume d'halloween", "un barbecue", "une guitare", "un sac à main"];
const imageObjet = ["chaise.png", "costume-haloween.png", "grill.png", "guitare.png", "sac-a-main.png"];
let prixPropose;
let vraiePrix;
let compteurDeTentative = 10;
let image = document.querySelector("#imageObjet");
let nomImage = document.querySelector("#nomObjet");
let bouton = document.querySelector("#bouton")
let affichageTentative = document.querySelector("#nombreDeTentative");
let message = document.querySelector("#message");


// génération aléatoire 
vraiePrix = Math.floor(Math.random() * Math.floor(100)) + 1;
console.log("vraie prix " + vraiePrix);

// proposition d'une d'objet
function objetAleatoire() {
    let nbrAleatoire = Math.floor(Math.random() * Math.floor(4)) + 1;
    // console.log(nbrAleatoire);
    // console.log(imageObjet[nbrAleatoire]);
    image.innerHTML = '<img src="images/image-juste-prix/' + imageObjet[nbrAleatoire] + '" alt="image responsive" class="img-fluid" width="30%">';

}

function manche() {
    prixPropose = document.querySelector("#prixPopose").value;
    if (compteurDeTentative == 0) {
        affichageTentative.innerHTML = "il vous reste " + compteurDeTentative + " tentatives.";
        message.innerHTML = "Désolé, vous avez perdue!<br> Le juste prix était de " + vraiePrix + " euros.";
    } else {
        if (prixPropose > vraiePrix) {
            message.innerHTML = "C'est moins!";
            compteurDeTentative--;
            affichageTentative.innerHTML = "il vous reste " + compteurDeTentative + " tentatives.";
        } else {
            if (prixPropose < vraiePrix) {
                message.innerHTML = "C'est plus!";
                compteurDeTentative--;
                affichageTentative.innerHTML = "il vous reste " + compteurDeTentative + " tentatives.";

            } else {
                message.innerHTML = 'Gagné!! <br> <img class="img-fluid" alt="image" src="images/Xnbj.gif">';
                affichageTentative.innerHTML = "il vous reste " + compteurDeTentative + " tentatives.";
            }
        }
    }
}

affichageTentative.innerHTML = "il vous reste " + compteurDeTentative + " tentatives.";
objetAleatoire();
bouton.addEventListener("click", manche, false)

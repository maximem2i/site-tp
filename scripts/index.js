// Formulaire
var inscription = (form) => {
    console.log(form.nom.value);
    console.log(form.prenom.value);
    console.log(form.age.value);
    console.log(form.sexe.value);
    console.log(form.ville.value);
    alert("Bonjour" + prenom + " " + nom + ", tu as " + age + " ans" + ", tu es un(e) " + sexe + ", originaire de " + ville);
}

// Rotation
function changeSlide() {
    let imgTemp2 = document.getElementById("picture2").src
    document.getElementById("picture2").src = document.getElementById("picture1").src;
    let imgTemp3 = document.getElementById("picture3").src;
    document.getElementById("picture3").src = document.getElementById("picture4").src;
    document.getElementById("picture4").src = imgTemp2;
    document.getElementById("picture1").src = imgTemp3;
}

// Calculatrice
// Eléments mémoire et écran
const memoireElt = document.querySelector("#memoire");
const ecranElt = document.querySelector("#ecran");

// Stocke la valeur de l'écran "précédent"
let precedent = 0;

// Stocke l'affichage
let affichage = "";

// Stocke l'operation
let operation = null;

// Initialisation de la mémoire
let memoire;

window.onload = () => {
    // Ecoute les clics sur les touches
    let touches = document.querySelectorAll("span");

    for (let touche of touches) {
    touche.addEventListener("click", gererTouches)
    }
}

/**
 * Cette fonction réagit au clic sur les touches
 */
function gererTouches() {
    let touche = this.innerText;

    // On vérifie si chiffre ou point
    if (parseFloat(touche) >= 0 || touche === ".") {
        // Mise à jour de la valeur d'affichage, et on l'affiche
        affichage = (affichage === "") ? touche.toString() : 
        affichage + touche.toString;
        ecranElt.innerText = affichage;
    } else {
        switch(touche) {
            // Touche C réinitialise tout
            case "C":
                precedent = 0;
                affichage = "";
                operation = null;
                ecranElt.innerText = 0;
                break;
            // Caclculs
            case "+":
            case "-":
            case "*":
            case "/":
                // On calcule la valeur résultat de l'étape précédente
                precedent = (precedent === 0) ? parseFloat(affichage) :
                calculer(precedent, parseFloat(affichage), operation);
                // Mise à jour de l'écran
                ecranElt.innerText = precedent;
                // Stocke l'opération
                operation = touche;
                // Réinitialise la variable d'affichage
                affichage = "";
                break;
            case "=":
                // On calcule la valeur résultat de l'étape précédente
                precedent = (precedent === 0) ? parseFloat(affichage) :
                calculer(precedent, parseFloat(affichage), operation);
                // Mise à jour de l'écran
                ecranElt.innerText = precedent;
                // Stocke le résultat dans la variable d'affichage
                affichage = precedent;
                // Réinitialise la variable d'affichage
                precedent = 0;
                break;
        }
    }
}

function calculer(nb1, nb2, operation) {
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);

    if(operation === "+") return nb1 + nb2;
    if(operation === "-") return nb1 - nb2;
    if(operation === "*") return nb1 * nb2;
    if(operation === "/") return nb1 / nb2;
}
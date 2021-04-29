
var inscription = (form) => {
    console.log(form.nom.value);
    console.log(form.prenom.value);
    console.log(form.age.value);
    console.log(form.sexe.value);
    console.log(form.ville.value);
    alert("Bonjour" + prenom + " " + nom + ", tu as " + age + " ans" + ", tu es un(e) " + sexe + ", originaire de " + ville);
}

function changeSlide() {
    let imgTemp2 = document.getElementById("picture2").src
    document.getElementById("picture2").src = document.getElementById("picture1").src;
    let imgTemp3 = document.getElementById("picture3").src;
    document.getElementById("picture3").src = document.getElementById("picture4").src;
    document.getElementById("picture4").src = imgTemp2;
    document.getElementById("picture1").src = imgTemp3;
}

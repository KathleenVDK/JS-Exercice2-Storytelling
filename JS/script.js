var resultat = document.getElementById('result');
var prenom = prompt("Quel est ton prénom ?");
alert("Bonjour " + prenom);

function rien() {
    var nothing = prompt("Que se passe-t-il quand il ne se passe rien ?");
    switch (nothing) {
  case 'rien':
    alert("Bravo, vous êtes un winner ! 👏");
    break;
  case 'Rien':
    alert("Bravo, vous êtes un winner ! 👏");
    break;

  default:
    alert("Vous êtes dead ! 💀");
  }
}

/* Exercice 1 : Tirage au sort des noms
Ecrire un script composé des fonctions suivante :
Une fonction qui remplit un tableau par des noms saisis par 
l'utilisateur via une boite de dialogue , cette fonction sera appelée
au clic sur un bouton nommé "Ajouter_nom" Une fonction qui renvoie au 
hasard le nom gagnant et qui sera lancée lorsque l'utilisateur
clique sur le bouton "tirage au sort" . */

var nbUser, users = [];
//nbUser = prompt('saisir le nombre d\'utilisateur à tirer au sort : ');

function ajouterNom(userName) {
    userName = prompt('Entrer un nom : ');
    console.log(userName);
}

var list = function ListUsers(userName) {
    ajouterNom(userName);
    for (var i = 0; i < nbUser; i++){
        users.push(userName);
    }
    return users.push(userName);
}
const affiche_tableau = (t) => t.forEach(a => console.log(a));
/*function affichage(userName){
    if (ajouterNom(userName)){
        document.writeln('<p>' +   + '</p>'); 
    }
}
affichage();*/
affiche_tableau(list);

function Tirage() {
    ListUsers();
}
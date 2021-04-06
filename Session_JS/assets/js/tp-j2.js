/* 1‐ Créez une fonction qui prend un tableau en parametre contenant 
uniquement des nombres et renvoie le premier élément. */

x = [10, 20, 30];
function firstElm(tab) { return tab[0]; } console.log(firstElm(x));
const firstElmV6 = (tab) => tab[0]; console.log(firstElmV6(x));

// Créez une fonction qui prend l'âge et retourne l'âge en jours.
age = 32;
function ageJ(x){ return x * 365; } console.log("age en jours : " + ageJ(age));
const ageJV6 = x => x * 365; console.log("age en jours : " + ageJV6(age));

/* 2 ‐Ecrivez une fonction qui prend un nombre entier de minutes et 
retourne la conversion en secondes. */
t = 12;
function mintoSec(t){ return t * 60;} console.log("min to secondes : " + mintoSec(t));
const mintoSecV6 = t => t * 60; console.log("min to secondes : " + mintoSecV6(t));

/* 3‐ Reprenez l'exercice "calculer la somme et le produit ...", */

var tabx = [1, 2, 3, 4, 5, 6, 7];
function somme(arr){
    var s = 0;
    for(var e of arr) { s += e;}
    return s;
}
function produit(arr){
   var p = 1;
    for(var e of arr){ p *= e; }
    return p *= e;   
}
console.log("la somme : " + somme(tabx) + " le produit : " + produit(tabx));

//appliquez la methode reduce() soit avec une fonction anomyme, 
// ou une fonction fléchée
//const sommeV6 = (arr) = arr.forEach(e => { s += e; });
const sommeV6 = (tab) = tab => tab.reduce(function(sum, elem){
                return sum + elem;
            }); 
console.log("la somme ev V6 : " + sommeV6(tabx));

const produitV6 = (tab) = tab => tab.reduce(function(produit, elem){
    return produit * elem;
}); 
console.log("le produit en V6 : " + produitV6(tabx));

/* 4‐ Tester les instructions document.write et document.writeln en 
affichant au minimum un nombre, une phrase, le contenu d'une variable ... */
//document.write("<h1>Bonjour voici<h2>" + "la somme : " + somme(tabx) + " le produit : " + produit(tabx) );
//document.writeln("<p>Du texte avec retour à la ligne </p>");

// Que constatez‐vous sur la page HTML ? : il interprete les balises html

// 5‐ Définir en JavaScript un tableau contenant des notes 
// d'étudiants comprises entre 0 et 20.

var notes = [5, 12, 14, 17, 18, 10, 8, 20];

/* Implémenter en JavaScript les fonctions qui permettent d'afficher 
un tel tableau, de savoir combien d'étudiants ont eu 10 plus, de 
calculer la moyenne des notes, de connaître la note maximale, de 
rechercher une note particulière */
var tab = [];
function nombreEtudiants(notes){
    for(note of notes) {
        if(note > 10) { tab.push(note); return tab.length; }
    }
}

function moyenneNotes(notes){
    for(note of notes) { 
        s += e;
        return s/notes.length;
    }
}

function noteMax(notes) {
    for(var i = 0; i < notes.length; i++){
        if(notes[i] > notes[i+1]) {
            return noteMax = notes[i];
        }
    }
}

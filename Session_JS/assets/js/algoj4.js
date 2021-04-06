// Math : contient des méthodes permettant de realiser des 
// opertations sur les nombres
// Date : permet de manipuler les datetime 
// ... 

console.log(Math.round(2.2)); // affiche 2
console.log(Math.pow(2, 3)); // 2 puissance 3
console.log(Math.min(2, -1, 6)); // affiche -1
console.log(Math.max(2, -1, 6)); // affiche 6
console.log(Math.random()); // affiche nb aléatoire
console.log(Math.floor(Math.random() * 10)); // entier compris entre 1 et 9
console.log(Math.sqrt(4)); // affiche 2
console.log(Math.abs(-2)); // valeur absolue de -2 : 2 

// Quelques operateurs
// tyoeof : pour obtenir le type d'une var
// new : pour créer un objet en utilisant un constructeur 
// this : pour designer l'objet courant
// in : si indice dans le tab ou si une méthode appartient à un objet

var tab = [2, 3, 5];
if(2 in tab){
    console.log("oui"); // affiche oui
}

var perso = {nom: 'Wick', prenom: 'John'};
perso.nom === "Wick" ? console.log("Yes") : console.log("No");
/*if(perso.nom === "Wick" in perso){
    console.log("oui"); // affiche oui
}*/

/*if(nom === "Wick" in perso){
    console.log("oui"); // affiche oui
}*/

// controle si Wick existe dans perso
Object.keys(perso).forEach(
    function (key){
    if(perso[key] == 'Wick') {
        console.log('exists'); 
    }
});

var keys = Object.keys(perso);

for(key of keys){
    console.log(key + " est " + perso[key]);
}

// autre syntax if() console.log();

// instanceof : retourne true si l'objet donné est du type specifie, false sinon.
var jour = new Date(2021, 04, 02);
if (jour instanceof Date)
    console.log("instance date existe"); // Affiche Oui

// une constante est elt qui nepeut pas changer de valeur

// impossiblede modifier les valeurs d'une constante
const PI = 3.1415;
//PI = 5;

//PascalCase : MonProjet
//CamelCase : maMethode()

const obj = { nom: 'Wick', prenom: 'John' }
// Genere une erreur, imp de modif les val d'1 const
//obj = {};
// ce pendant, l'instruction suivante est correcte et ne leve pas d'exception
obj.nom = "Doe";
obj['prenom'] = "Denzel";
obj.age = 50;
console.log(obj);

const tab2 = [2, 3, 8];
//  tab2 = [] génère erreur

// par contre
tab2[2] = 1;
tab2[0] = 9;
console.log(tab2);
function produit(a, b){ 
    if(isNaN(a) |isNaN(b)){
        throw "Les paramètres doivent etre de type number";
    }
    return a*b; 
};
// l'appel de la fonction doit etre par un bloc try ... catch pour
// capturer et traiter l'eventuelle exception e
// objectif : ne planter le systeme 
try {
    console.log(produit(2,3)); // affiche 6
    console.log(produit(2, "a"));  // affiche Nan (not a Number)
} catch (e) {   
    console.log(e)
}

//function produit(a, b){ isNaN(a) | isNaN(b) } ? return a*b : ; };

// Gerer la divition par 0 en lançant une exception si le param 
// n'est pas divisible par zero
function division(a, b){ 
    if(isNaN(a) |isNaN(b)){
        throw "Les paramètres doivent etre de type number";
    }
    if(b==0){
        throw "division par zéro interdit";
    }
    return a/b; 
};

try {
    console.log(division(2,3)); // affiche 6
    console.log(division(2, "a"));  // affiche Nan (not a Number)
} catch (e) {   
    console.log(e)
}

/*const div = (a, b) => {
    isNaN(a) || isNaN(b) && b != 0 ? 
    (   function () { 
            throw "Les paramètres ne sont pas des nombres !" }())
            : a * b;
};*/
function division2(a, b) {
    try {
        if (b == 0){
            throw "Le 2ème paramètre  doit être != 0 !";
        }
    }
    catch (e) {
        console.log(e);
    }
    return a / b;
}
division2(2, 0);

// Expression régulière = REGEX
// Permettre de vérifier si des chaines de caractères respectent 
// certaines formats : emails, mot de passe, numéro de téléphone

// recherche d'une sous-chaine dans une chaine de caractère
// avec une Regex insensible à la casse
var str = "Bonjour tout le monde";
//var pos = str.search("tout"); // 8
//var pos = str.search("Tout"); // est-ce que senseible à la casse ?
var pos = str.search(/Tout/i); // 8
//var pos = str.search(/c/i); // retourne -1 si sous-chaie n'existe pas
console.log(pos);
var str = /AB/i;
// cherche et retourne true si chaine 2 est dans chaine 1 false sinon
var result = str.test("ababbbabababab");
console.log(result);

// remplace la premiere occurence d'une chaine
var chaine = "ababababa";
var txt = chaine.replace(/ab/, "c");
console.log(txt);

// remplace toutes les occurences d'une chaine
var chaine = "ababababa";
var txt = chaine.replace(/ab/g, "c");
console.log(txt);

// remplace la premiere occurence d'une chaine
var chaine2 = "aAAbabababa";
var str = /AA/i;
var resultat2 = str.exec(chaine2);
console.log("chaine trouvée : " + resultat2[0]);
console.log("indice de la premiere occurence : " + resultat2.index);
console.log("texte complet : " + resultat2.input);

// retourne un tableau contenant toutes occurences
var str = /AA/gi;
var resultat = chaine.match(str);
console.log(resultat);

// a? : 1 ou 1a
var str = /ba?c/i;
console.log(str.test("bac"));

// a? : 0 ou 1 ab // a* : 0
var p = "2345";
var str = /^([0-9]){4}$/
if(p.match(str)){
    console.log("yes");
} else {
    console.log("No");
}

// a? : 0 ou 1 a
// a* : 0 ou plusieurs
var str = /ba?c/i;
console.log(str.test("bac")); // Affiche true

console.log(str.test("baac")); // Affiche false

// La valeur doit contenir 4 chiffres obligatoirement
var p = "2345";
var str = /^([0-9]){4}$/;
if(p.match(str)){
    console.log("yes");
} else {
    console.log("No");
}

// le pseudo doit contenir des lettres, des chiffres ,des tirets du bas et doit fair min 6 caracteres
// et maximum 20
var p = "Jean_Baton06";
var str = /^([0-9a-zA-Z_]){6,20}$/;

if(p.match(str)){
    console.log("yes");
} else {
    console.log("No");
}

function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    console.log("You have entered an invalid email address!")
    return (false)
}

var res = ValidateEmail("mysitetest.com");
console.log(res);


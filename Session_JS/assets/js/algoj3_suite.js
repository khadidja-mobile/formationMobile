// objet
// qu'est-ce qu'un objet ?
// c'est un ensemble d'attributs ou propriétés 
//(variable, champ) : clé + valeur
// - attributs (varibale, champs)
// - méthodes : fonctions
var obj = {
    nom: "Wick",
    prenom: "John"
};
// Récupère l'attribut nom de l'objet et l'affiche en console
console.log(obj.nom);
// ou 
console.log(obj["prenom"]);
// un objet est itérable avec for ...in
for(var elt in obj){
    console.log(elt + " : " + obj[elt]);
}

// on crée un nouvel objet ou une nvlle instance obj de type object
var obj = new Object();
obj.nom = "wick";
obj.prenom = "John";

// copie un objet avec ... (spread operator) permettant de faire des 
// copies d'objets, variables, etc
// ici, la var d'origine et sa copie sont totalement indépendante
//var obj2 = {...obj}; ou
var obj2 = Object.assign({}, obj);

//var obj2 = obj;
obj2.nom = "Doe";
console.log(obj.nom); // Wick
console.log(obj2.nom); // Doe

// Pour transformer un objet en chaine de caractères
//var perso = { nom: 'Wick', }
var str = JSON.stringify(obj);
console.log(str);

var p = JSON.parse(str);
console.log(p.nom + " " + p.prenom);

var obj = {
    nom: "Wick",
    prenom: "John",
    direBonjour: function () {
        console.log("Bonjour " + this.nom);
    }
};
// appel de la méthode dire bonjour à partirde objet de type object
obj.direBonjour();

// Les consctructeurs un

// moulepour créer des objets de// tous les objets sont de type Object
// et si on veut créer un modele d'objet, on peut utiliser 
// les consctructeurs 

/*var Personne = function (nom, prenom, age) {
    this.nom = nom; 
    this.prenom = prenom;
    this.age = age;
}*/
class Personne{
    nom; prenom; age;
    constructor(nom, prenom, age) {
        this.nom = nom; 
        this.prenom = prenom;
        this.age = age;
        this.afficherNomComplet = function(){ 
            console.log(this.nom + " " + this.prenom);};
    }
    afficherNomComplet(){ 
        return this.nom + " " + this.prenom;
    }

    // getteurs : accesseur => recupère les valeurs
    getNom() { return this.nom;}
    // setter : mutateur : modifier les valeurs de l'attribut
    setNom(nom) { return this.nom = nom ;}
}
// cree nvlle instance de l'obj perso à partir de consctruteur
perso = new Personne();
// appelle la méthode setNom pour modif
perso.setNom("Killy");
// affiche le nom de l'instance perso de la méthode getNom()
console.log(perso.getNom());
//console.log(perso.afficherNomComplet);

personne = new Personne("IKHLEF", "Khadidja", 35); 
personne2 = new Personne(35, "wick", "Khadidja"); 
console.log(personne);
console.log(personne2.nom);

// ereur, impossible 
Personne.rue = 0; 

// utiliser le prototype
Personne.prototype.rue = 0;
// mise en place du getter  / accesseur
Personne.prototype.getRue = function() { return this.rue; }

// mise en pace du seter / mutateur /
Personne.prototype.setRue = function(rue){
    this.rue = rue;
}

perso.setRue("RUE1");
console.log(perso.getRue());

// Copier un tableau

// Si l'opérateur d'affectation simple avait été utilisé, alors array2 aurait reçu 
// une référence à array1 et les modifications apportées dans un tableau seraient 
// reflétées dans l'autre tableau, ce qui dans la plupart des cas n'est pas souhaitable.
let array1 = ['h', 'e', 'y'];
let array2 = [...array1];
console.log(array2);

// Insérer les éléments d'un tableau dans un autre
// On peut voir que l'opérateur spread peut être utilisé pour ajouter un tableau 
// après n'importe quel élément du deuxième tableau. 
// En d'autres termes, il n'y a aucune limitation selon laquelle 
// baked_desserts ne peut être ajouté qu'au début ou à la fin du tableau desserts2.

let baked_desserts = ['cake', 'cookie', 'donut'];

let desserts = ['icecream', 'flan', 'frozen yoghurt', ...baked_desserts];
console.log(desserts);

//Ajout de baked_desserts après le flan
let desserts2 = ['icecream', 'flan', ...baked_desserts, 'frozen yoghurt'];
console.log(desserts2);

// Tableau d'arguments
function multiply(number1, number2, number3) {
    console.log(number1 * number2 * number3);
}

// Au lieu d'avoir à passer chaque élément comme les nombres [0], 
// les nombres [1] et ainsi de suite, les opérateurs d'étalement permettent 
// aux éléments de tableau d'être passés en tant qu'arguments individuels.
let numbers = [1, 2, 3];
multiply(...numbers);

// Autre exemple 
// Passer des éléments du tableau comme arguments à l'objet math
let numbers2 = [1, 2, 300, -1, 0, -100];

// L'objet Math de Javascript ne prend pas un seul tableau comme argument mais 
// avec l'opérateur spread, et le tableau qui represente l'ensemble de nos arguments 
// avec une seule ligne de code.
console.log(Math.min(...numbers2));
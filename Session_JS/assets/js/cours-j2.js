// les tableaux
function fun() {
    var tab = [2, 3, 5];

    //console.log(tab.length);
    tab[0];
    tab.push(7);tab[tab.length] = 8;

    for(var elt of tab) {}
    for(var i=0; i<tab.length; i++){}

    // Les méthodes 
    // push() : ajoute un elt 
    // pop() : suppr le dernier elt 
    // shift() : suppr le premier
    // unshift() : ajout 1 ou pluseiurs elt debut tab
    // reverse() : inverse l'ordre
    // sort() : trie le tableaux
    // splice() : permet d'extraire, ajout, suppr un ou plusieurs elm (selon param)
    // slice() : permet d'extraire un sous tab à partir tab origine
    // includes() : retourne true si la valeur passe en param existe dans le tb
    // indexOf() : retourne la position de l'elt passé en param, -1 sinon 
    // fill() : permet d'initialiser, ou modifier des valeurs d'un tab ou partie
    

    var sports = ["foot", "tennis", "rugby", "basket", "volley"];
 
    var tab = sports.splice(2, 1, "basket", "pétanque"); //
    
    var tab2 = sports.splice(1, 3);

    for(var e of sports){
        console.log(e);
    }
    console.log("tab2 : " + tab2);


    var tab3 = new Array(3).fill(0);
    console.log("tab 3 : " + tab3);

    var tab4 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    tab4.fill(9, 2, 5);
    console.log("tab 4 : " + tab4);
    tab4.unshift();

    // exo : calcul somme et produit d'un tabelau

    var tabx = [0, 1, 2, 3, 4, 5, 6, 7];
    var e; var s = 0; var p = 1;
    for(var e of tabx) {
        s += e;
        p *= e;
    }
    
    console.log("la somme : " + s + " le produit : " + p);

    // .forEach() : parcours tab
    // .map() : appliquer fct à un tabelau
    // .filter() : filtrer les elt
    // .reduce() : réduire tous les elt
    
    var tab = [2, 3, 5];
    tab.map(x => x + 3)
        .filter(x => x > 5)
        .forEach(
            function(a,b){
                console.log(a-3);
            }); // 3, 5

            var somme = tab.map(x => x + 3)
            .filter(x => x > 5)
            .reduce(function(sum, elem){
                return sum + elem;
            });
            console.log(somme); // 14
}
fun();

// Focntions

// ES5 - ECMAScript V5
function somme(a,b) {
    return console.log(a + b);
}

somme (1, 3);

// ES6
const addition = (a , b ) => a + b;
var res = addition(1,3);
console.log(res);

var x = 10;
{ var x = 2;} // on se sert du x ; 
console.log(x); x = 2
var y = 10;
{ let y = 2;} // on ne se sert pas du y ; 
console.log(y); y = 10

let somme2 = new Function("a", "b", "return a + b");
let resultat = somme2(1,5);
console.log(resultat);

function somme3() {
    result = 0;
    for (var i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

console.log(somme3(2, 4, 8));
console.log(somme3(2, 3));

// vs5 : fct qui retourne le premier element
function premier(tab) {
    //var tab = [];
    //return tab.shift();   
    return tab[0];
};
let tb = [ 1, 2, 3];
console.log(premier(tb));

// VS6
const f2 = (arr) => arr[0];
var r = f2(tb);
console.log(r);

// Créez une fonction qui prend l'âge et retourne l'âge en jours.

function agej(x){ return x*365; }
console.log(agej(23));
const agejV6 = x => x * 365;
console.log(agejV6(23));

// Ecrivez une fonction qui prend un nombre entier de minutes et retourne la conversion
// en secondes.

// une fct qui prend un nm entier de min et reourn la conversion en sec
// VS5
function mintoSec(x){
    return x * 60;
}
min = 4;
console.log(mintoSec(min));

//VS6
const mintoSecV6 = x => x * 60;
console.log(mintoSecV6(min));
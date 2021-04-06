function direBonjour(msg, callback){
    var message = "Bienvenue " + msg;
    callback(message);
}

// focntion callback
function afficherMessage(msg) {
    console.log(msg);
}
direBonjour("Tout le monde", afficherMessage);

function somme(a, b){
    return a + b;
}
function produit(a, b){
    return a * b;
}

function operation(a, b, callback){
    console.log(callback(a,b));
}

operation(3, 2, somme);
operation(3, 2, produit); 

// la premire : une fonction callback
function hello(){ console.log("hello");}

// la 2eme : une duree en millisecondes qui précède l'execution de la fct callback
function sayHelloAfterXsecondes(x) { 
    setTimeout(hello, x * 100);
}
sayHelloAfterXsecondes(5);

// possible d'utilise la fct anonyme en callback
/*sayHelloAfterXsecondes2(x) {
    timeout = setTimeout(function () { 
        console.log("hello");
    }, x * 1000);
}
sayHelloAfterXsecondes2(10);*/
/*function sayHelloAfterXSeconds2(x) {
    timeout = setTimeout(function () {
        console.log("hello");
    }, x * 1000);
*/
// il est possible d'annuler la fct callback setTimeout
//clearTimeout(timeout);
// ne sera jamais exécuté

/*function sayHelloEvryXSconds(x){
    setInterval (hello, x);
}
sayHelloEvryXSconds(6);*/
// il est possible d'annuler la fct callback setTimeout
//clearTimeout(timeout);
// ne sera jamais exécuté

// pour afficher un message toutes les x secondes
var interval;
function sayHelloEvryXSconds(x){
    interval = setInterval (hello, x * 1000);
}
sayHelloEvryXSconds(5);
clearInterval(interval);


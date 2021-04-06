// Fonctions

// ES5 -ECMASCRIPT V5
function somme(a, b){
    return console.log(a + b);
}
somme(1, 3);

// ES6

const addition = (a, b) => a + b;

var res = addition(1,3);

console.log(res); 

var x = 10;
{
    var x = 2;
}
// x = 2
// on va pouvoir se servir de x

{
    let x = 2;
}
// console.log(x);
// x = 10
// pas possible de se servir de x

let somme2 = new Function("a", "b", "return a + b");

let resultat = somme2(1, 5);

console.log(resultat);

function somme3(){
    result = 0;
    for(var i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

console.log(somme3(2, 4, 8));
console.log(somme3(2, 3));
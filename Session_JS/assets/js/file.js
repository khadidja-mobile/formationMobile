function maFonction() {
    // Box de confirmation
    //var bin = confirm("Are you sure you want to");
    //alert("Hello World 1 ");
    // alert("Hello World 1 ");
    //Box D'affichage avec unezone de saisie
    //var str = prompt("Votre nom : ");
    //alert(str);
    
    // affichage en console
    // Debogger = afficher le contenu des varaiables
    // Tracer = vérifier les blocs du c
    // console.log("Hello world");
    /*var cl = console.log;
    cl("hello!");

    var x = 5, y = 5;
    // x = 0;

    // number 
    // String
    // Boolean
    // undefiened
    //any en angular
cl(typeof(5.2));
cl(typeof("number"));
cl(typeof(z));
cl(typeof(x+cl));
var x1 = 1;
var x2 = "8";
//cl(x1 + x2);
cl(x1 + parseInt(x2));

var u = "Bonjour"; var v = "Tout le monde";
cl(u + " " + v);
cl(u + parseInt(v));

a = 2; b = 0;
cl(a/b);

// i++ => i = i +1;
// i-- => i = i - 1;
// i+= 2 => i = i +2

// Post-incremendtation (Après)
var i = 2; j = ++i;
cl(i); // 3
cl(j); // 2

// Pre-incremendtation (Avant)
var i = 2; j = ++i;
cl(i); // 3
cl(j); // 3

// eval() => évaluer une chaine de caractère
var str = "2 + 3 * 5";
cl(eval(str)); // 17

// Méthodes utiles pur les strings

// lenght: longuer
//toUpperCase() : convertir en majuscule
//toLowerCase() : convertir en miniscule
// trim() : suppr les espace debut et à la fin
// substr() : extrait une sous-chaines de caractères
// indexof() : retourne la position d'une sous-chaine dans une chaine, -1 sinon

var str = "  bon jour  ";
cl(str.length); // 7

var sansEspace = str.trim(); // 

// Extraire une sous-chaine à partir de la chaine 3
var str2 = "bonjour";
cl(str2.substr(3)); // affiche jour
cl(str2.substr(3,2)); // affiche jo
cl(str2.substr(-3)); // affiche our
// substring() => prend comme paramètre l'indice de début et l'indice de fin (non-inclus)
cl(str2.substring(1, 3)); // affiche on
cl(str2.indexOf("jour")); // 3
cl(str2.indexOf("soir")); // -1
cl(str2[1]);
cl(str2[1]);

var date = new Date();
var now = Date.now();
//var utc = Date.UTC();
var d = date.getDay();
var j = date.getUTCDate();
var h = date.getHours();

cl(date);
cl(now);
//cl(utc);
cl(d);
cl(j);
cl(h);

cl("Nous sommes le : " + j + ", et il est : " + h); */

 // Exercice 1 :

    // Écrivez un programme JavaScript pour afficher le jour et l'heure actuels.
    // Indication :
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date
    
    /*var today = new Date();
    var day = today.getDay();
    // var month = today.getMonth() + 1;
    // console.log(month);
    var daylist = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var prepand = (hour >= 12) ? " PM " : " AM ";
    console.log("Aujourd'hui, nous sommes " + daylist[day] + ", et il est " + hour + "h" + minute
        + "m" + second + "s" + prepand); 
        */

        /*var x, y;
        x = prompt("saisir un 1er chiffre : ");
        y = prompt("saisir un 2ème : ");
        if(x > y){
            alert("le plus grand est : " + x);
        } 
        else{
            alert("le plus grand est : " + y);
        }*/
        
        /*var tab = [];
        for (var i = 0; i<11; i++){
            if ( i % 2 == 0){
                tab.push(i);
            }
        }
        console.log(tab);*/

        /*var temperature;
        var seuil = 37;
        t = prompt("Entrer les temperature : ");
        if(t>seuil){
            alert("vous avez la grippe");
        }else{
            alert("ça va !!! vous n'êtes pas malade !"); 
        }*/

        /*var tab = [];
        for (var i = 0; i<101; i++){
            if ( i % 3 === 0){
                i = "Fizz";
            }
            else if ( i % 5 === 0){
                    i = "Buzz";
                }
            else if (i % 5 === 0 && i % 3 === 0 ) {
                    i = "FizzBuzz";   
                }
            tab.push(i);
        }
                
        console.log(tab);*/
           
        /*for (var i = 0; i<tab.length; i++){
            if ( tab[i] % 3 == 0){
                i = "Fizz";
            }
            else {
                if ( tab[i] % 5 == 0){
                    i = "Buzz";
                }
                else{
                    if ( tab[i] % 5 == 0 && tab[i] % 3 == 0 ){
                        i = "FizzBuzz";
                    }
                }
            }
        }
                  
        console.log(tab);*/


        var tab = [];
        for (var i = 0; i<101; i++){
            if ( i % 3 === 0){
                console.log(i + "Fizz");
            }
            else if ( i % 5 === 0){
                console.log(i +i + "Buzz");
                }
            else if (i % 5 === 0 && i % 3 === 0 ) {
                console.log(i + "FizzBuzz");   
                }
            //tab.push(i);
        }
                
        console.log(tab);

        /*var tab = [];
        for (var i = 0; i<101; i++){
            switch(tab[i]){
                case "% 3 == 0" : i = "Fizz"; break;
                case "% 5 == 0" : i = "Buzz"; break;
                case "% 3 == 0 && % 5 == 0" : i = "FizzBuzz"; break;
                default : "i = i";
            }
            tab.push(i);
        }
        console.log(tab);*/
}
maFonction();

/*function exo() {
    // Create a Date new object
    var date = new Date();
    
    // Create an array of days of the week
    var days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];

    // Print current day and hour
    console.log("Nous sommes " + days[date.getDay()] + " et il est " + date.toLocaleTimeString());

    switch (new Date().getDay()) {
        case 0:
            console.log("dimanche");
            break;
        case 1:
            console.log("lundi");
            break;
        case 2:
            console.log("mardi");
            break;
        case 3:
            console.log("mercredi");
            break;
        case 4:
            console.log("jeudi");
            break;
        case 5:
            console.log("vendredi");
            break;
        case 6:
            console.log("samedi");
            break;
    }


}

exo(); */
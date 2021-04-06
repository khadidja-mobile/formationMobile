class Guerrier{
    nom; valAtt; valDef; valSt; valCibles; valCible;
    constructor(nom, valAtt, valDef, valSt, valCible){
        this.nom = nom;
        this.valAtt = valAtt;
        this.valDef = valDef;
        this.valSt = valSt;
        this.valCible = valCible;
        this.attak = function (lacible) {
            this.lacible = this.valSt - 10;
        }
    }
    getNom(){   return this.nom; }
    setNom(){   this.nom = nom; }
    getNom(){   return this.valAttak; }
    setNom(){   this.valAttak = valAttak; }
    getNom(){   return this.valDef; }
    setNom(){   this.valDef = valDef; }
    getNom(){   return this.valSt; }
    setNom(){   this.valSt = valSt; }  
    getNom(){   return this.valCible; }
    setNom(){   this.valCible = valCible; } 
    //getAll(); 
}

guerrier1 = new Guerrier;
guerrier2 = new Guerrier;

guerrier1.valAtt = 10; guerrier1.valSt = 30; guerrier2.valSt = 20;

console.log("guerrier1.valAtt : " + guerrier1.valAtt);
console.log("guerrier1.valSt : " + guerrier1.valSt);
console.log("guerrier2.valSt : " + guerrier1.valSt);

guerrier1.attak(guerrier2);

console.log("guerrier1.attak(guerrier2) guerrier2.valSt : " 
+ guerrier2.valSt);

/*let magicien = [...Guerrier]; copie de tableau
console.log(magicien);*/
Magicien = new Guerrier;

/*
Magicien.defineProperty(Magicien, 'mana', {value: 10 });

Magicien.prototype.getMana = function () {
    return this.mana;
}

Magicien.prototype.setMana = function (mana) {
    this.mana = mana;
}

Magicien.prototype.soin = function() {
    if(mana >= 10){
        this.mana -= 10;
        this.valSt += 10;
        this.affichePersonnage(this) + " essai de se soigner";
        this.combat = function () {
            this.valCible = this.valSt -10; }
            this.affichePersonnage(this);
        }
        else {
            console.log("error");
    }
}

/*Magicien.prototype.affichePersonnage = function() { 
} */

/* function affichePersonnage(maclass){
    maclass.array.forEach(element => {
        var nom = maclass.getNom();
    });
} 
*/
  





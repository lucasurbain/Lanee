//var Date Of Birth, qui indique la date en YYYY-MM-DD
var DOB = "2002-01-25";

//Permet de remettre la date en ms
var millisecondsBetweenDOBAnd1970 = Date.parse(DOB);
var millisecondsBetweenNowAnd1970 = Date.now();
var ageInMilliseconds = millisecondsBetweenNowAnd1970 - millisecondsBetweenDOBAnd1970;

//conversion de la somme ms pour afficher l'âge
var milliseconds = ageInMilliseconds;
var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;
var month = day * 30.4167;
var year = day * 365.25;

//Conversion de l'age en nombre entier inférieur (exemple: 18.6576826 'ans' -> 18 'ans')
var years1 = Math.floor(milliseconds / year);

//fonction pour afficher le resultat
function printResults1() {
    //Création d'une variable message qui contient l'age entier inf
    var message1 = years1 + " - Développeur Java";

    //on donne message comme valeur à la div .placeholder
    document.getElementById('placeholder1').innerHTML = message1;
}

//var Date Of Birth, qui indique la date en YYYY-MM-DD
var DOB2 = "2002-12-02";

//Permet de remettre la date en ms
var millisecondsBetweenDOBAnd1970 = Date.parse(DOB2);
var millisecondsBetweenNowAnd1970 = Date.now();
var ageInMilliseconds = millisecondsBetweenNowAnd1970 - millisecondsBetweenDOBAnd1970;

//conversion de la somme ms pour afficher l'âge
var milliseconds = ageInMilliseconds;
var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;
var month = day * 30.4167;
var year = day * 365.25;

//Conversion de l'age en nombre entier inférieur (exemple: 18.6576826 'ans' -> 18 'ans')
var years2 = Math.floor(milliseconds / year);

//fonction pour afficher le resultat
function printResults2() {
    //Création d'une variable message qui contient l'age entier inf
    var message2 = years2 + " - Chef de projet";

    //on donne message comme valeur à la div .placeholder
    document.getElementById('placeholder2').innerHTML = message2;
}

//var Date Of Birth, qui indique la date en YYYY-MM-DD
var DOB3 = "2002-08-25";

//Permet de remettre la date en ms
var millisecondsBetweenDOBAnd1970 = Date.parse(DOB3);
var millisecondsBetweenNowAnd1970 = Date.now();
var ageInMilliseconds = millisecondsBetweenNowAnd1970 - millisecondsBetweenDOBAnd1970;

//conversion de la somme ms pour afficher l'âge
var milliseconds = ageInMilliseconds;
var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;
var month = day * 30.4167;
var year = day * 365.25;

//Conversion de l'age en nombre entier inférieur (exemple: 18.6576826 'ans' -> 18 'ans')
var years3 = Math.floor(milliseconds / year);

//fonction pour afficher le resultat
function printResults3() {
    //Création d'une variable message qui contient l'age entier inf
    var message3 = years3 + " - Développeur";

    //on donne message comme valeur à la div .placeholder
    document.getElementById('placeholder3').innerHTML = message3;
}



//var Date Of Birth, qui indique la date en YYYY-MM-DD
var DOB4 = "2000-06-18";

//Permet de remettre la date en ms
var millisecondsBetweenDOBAnd1970 = Date.parse(DOB4);
var millisecondsBetweenNowAnd1970 = Date.now();
var ageInMilliseconds = millisecondsBetweenNowAnd1970 - millisecondsBetweenDOBAnd1970;

//conversion de la somme ms pour afficher l'âge
var milliseconds = ageInMilliseconds;
var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;
var month = day * 30.4167;
var year = day * 365.25;

//Conversion de l'age en nombre entier inférieur (exemple: 18.6576826 'ans' -> 18 'ans')
var years4 = Math.floor(milliseconds / year);

//fonction pour afficher le resultat
function printResults4() {
    //Création d'une variable message qui contient l'age entier inf
    var message4 = years4 + " - Développeur";

    //on donne message comme valeur à la div .placeholder
    document.getElementById('placeholder4').innerHTML = message4;
}

//affiche le resultat
window.onload = printResults1() + printResults2() + printResults3() + printResults4();
//console.log(years1);
//console.log(years2);
//console.log(years3);
//console.log(years4);
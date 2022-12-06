//Permet de récuperer la version du projet
function getVersion() {
    //Création d'une variable Copyright et d'une variable version, ce qui me permet de changer la version du footer sur tous les fiches en une fois.
    var Copyright = " Copyright &copy; 2021 - 2022 Lanee | Tous Droits Réservés.";

    var version = "V4.0.2";

    //on donne versions comme valeur à la div .versionID
    document.getElementById('versionID').innerHTML = Copyright;
    console.log(version);
}

//affiche le resultat
window.onload = getVersion();
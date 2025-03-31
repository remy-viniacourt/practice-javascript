/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.
 *
 *********************************************************************************/

/**
 * Cette fonction affiche le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
    let spanScore = document.querySelector(".zoneScore span")
    let afficherScore = `${score} / ${nbMotsProposes}`
    spanScore.innerText = afficherScore
}

/**
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
    // Initialisations
    let score = 0
    let nbMotsProposes = 0

    // Récupération de l'élément écrit par l'utilisateur
    let inputEcriture = document.getElementById("inputEcriture")

    // Récupération du bouton valider + écoute sur le click
    let monBouton = document.getElementById("btnValiderMot")
    monBouton.addEventListener("click", function () {
        console.log(inputEcriture.value)
    });

    // On utilise la lise des mots pour lancer la partie
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length

    afficherResultat(score, nbMotsProposes)
}
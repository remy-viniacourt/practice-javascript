/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.
 *
 *********************************************************************************/

function afficherProposition(proposition) {
   let divZonePropostion = document.querySelector(".zoneProposition")
    divZonePropostion.innerText = proposition
}

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
    let compteur = 0

    // Récupération des différents éléments de la page nécessaires (zone de texte + bouton valider) et affichage du premier mot de la liste
    let inputEcriture = document.getElementById("inputEcriture")
    let btnValiderMot = document.getElementById("btnValiderMot")
    afficherProposition(listeMots[compteur])

    // Lors du clic sur valider on vient comparer la valeur de la liste avec celle rentrée par l'utilisateur, on ajuste le score en fonction et on vide la zone de texte pour le prochain mot
    btnValiderMot.addEventListener("click", () => {
        if(listeMots[compteur] === inputEcriture.value){
            score++
        }
        compteur++
        afficherResultat(score, compteur)
        inputEcriture.value = ''

        // Si on arrive au bout du tableau, on l'affiche et on désactive le bouton valider. Sinon on affiche le prochain mot de la liste
        if(listeMots[compteur] === undefined){
            afficherProposition("Le jeu est fini")
            btnValiderMot.disabled = true
        } else {
            afficherProposition(listeMots[compteur])
        }
    })
}
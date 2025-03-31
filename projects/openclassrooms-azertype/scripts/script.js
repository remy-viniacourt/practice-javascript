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

    // Récupération de l'élément écrit par l'utilisateur lors du clic sur le bonton valider
    let inputEcriture = document.getElementById("inputEcriture")
    let btnValiderMot = document.getElementById("btnValiderMot")
    afficherProposition(listeMots[compteur])
    btnValiderMot.addEventListener("click", () => {
        compteur++
        inputEcriture.value = ''
        if(listeMots[compteur] === undefined){
            afficherProposition("Le jeu est fini")
            btnValiderMot.disabled = true
        } else {
            afficherProposition(listeMots[compteur])
        }
    })

    // On utilise la lise des mots pour lancer la partie
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length

    afficherResultat(score, nbMotsProposes)
}
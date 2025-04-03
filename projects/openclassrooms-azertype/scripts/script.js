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
 * Cette fonction construit et affiche l'email.
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score.
 */
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

/**
 * Cette fonction vérifie que le nom soit valide et retourne true ou false.
 * @param {string} nom : le nom du joueur
 */
function validerNom(nom){
   if (nom.length >= 2){
       return true
   }
   return false
}

/**
 * Cette fonction vérifie que l'email soit valid et retourne true ou false.
 * @param {string} email : l'email du destinataire
 */
function validerEmail(email){
    let regexEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    let resultatEmail = regexEmail.test(email)
    return resultatEmail
}

/**
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
    // Initialisations
    initAddEventListenerPopup()
    let score = 0
    let compteur = 0
    let choixJeu = 0

    // Le mode de jeu cochée par défaut étant "Mots", on affiche le premier mot de cette liste
    let listeProposition = listeMots
    afficherProposition(listeProposition[compteur])

    // Au clic sur le bouton permettant de choisir le mode de jeu, on change la proposition affichée
    let listeBtnRadio = document.querySelectorAll('input[name="optionSource"]')
    listeBtnRadio.forEach(input => {
        input.addEventListener('change', e => {
            if(compteur !== listeProposition.length) {
                choixJeu = input.value
                if (choixJeu === "1") {
                    listeProposition = listeMots
                } else if (choixJeu === "2") {
                    listeProposition = listePhrases
                }
                afficherProposition(listeProposition[compteur])
            }
        })
    })

    // Récupération des différents éléments de la page nécessaires (zone de texte + bouton valider)
    let inputEcriture = document.getElementById("inputEcriture")
    let btnValiderMot = document.getElementById("btnValiderMot")

    // Lors du clic sur valider on vient comparer la valeur de la liste avec celle rentrée par l'utilisateur, on ajuste le score en fonction et on vide la zone de texte pour le prochain mot
    btnValiderMot.addEventListener("click", () => {
        if(listeProposition[compteur] === inputEcriture.value){
            score++
        }
        compteur++
        afficherResultat(score, compteur)
        inputEcriture.value = ''

        // Si on arrive au bout du tableau, on l'affiche et on désactive le bouton valider. Sinon on affiche le prochain mot de la liste
        if(listeProposition[compteur] === undefined){
            afficherProposition("Le jeu est fini")
            btnValiderMot.disabled = true
        } else {
            afficherProposition(listeProposition[compteur])
        }
    })

    // On empêche le comportement par défaut de la page web au submit et on récupère les infos du form
    let form = document.querySelector('form')
    form.addEventListener('submit', e => {
        e.preventDefault()

        // On récupère les infos données par l'utilisateur : nom et mail
        let nom = document.getElementById("nom").value
        let email = document.getElementById("email").value
        let scoreEmail = `${score} / ${compteur}`

        // On check si les infos données sont valides, si oui on envoie le mail si non on affiche une erreur
        if(validerNom(nom) && validerEmail(email)) {
            afficherEmail(nom, email, scoreEmail)
        }else {
            console.log("Le nom ou l'email n'est pas valide")
        }
    })
}
function afficherResultat(resultat, nombreTotalMots) {
    // On affiche le score de l'utilisateur
    console.log('Votre score est de ' + resultat + ' sur ' + nombreTotalMots)
}

function choisirPhrasesOuMots(){
    // Tant que l'utilisateur n'a pas chosi "mots" ou "phrases", on lui redemande
    let choixUtilisateur = prompt('Choisissez le mode de jeu en tapant "mots" ou "phrases" : ')
    while(choixUtilisateur !== "mots" && choixUtilisateur !== "phrases") {
        choixUtilisateur = prompt('Le choix n\'est pas valide. Veuillez choisir entre "mots" et "phrases" : ')
    }
    return choixUtilisateur
}

function lancerBoucleDeJeu(tableauMotsPhrases){
    // On affiche tous les mots de la liste et on incrémente le score si l'utilisateur a tapé le bon mot / phrase
    let score = 0
    for (let i = 0; i < tableauMotsPhrases.length; i++) {
        motUtilisateur = prompt('Entrez le mot : ' + tableauMotsPhrases[i])
        if (motUtilisateur === tableauMotsPhrases[i]) {
            score++
        }
    }
    return score
}

function lancerJeu(){
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nbMotsProposes = 0

    if (choix === 'mots') {
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }
    afficherResultat(score, nbMotsProposes)
}
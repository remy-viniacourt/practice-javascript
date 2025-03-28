function afficherResultat(resultat, nombreTotalMots) {
    console.log('Votre score est de ' + resultat + ' sur ' + nombreTotalMots)
}

function choisirPhrasesOuMots(){
    let choixUtilisateur = prompt('Choisissez le mode de jeu en tapant "mots" ou "phrases" : ')
    while(choixUtilisateur !== "mots" && choixUtilisateur !== "phrases") {
        choixUtilisateur = prompt('Le choix n\'est pas valide. Choisissez le mode de jeu en tapant "mots" ou "phrases" : ')
    }
    return choixUtilisateur
}

function lancerBoucleDeJeu(tableauMotsPhrases){
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
        lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
    } else {
        lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }
    afficherResultat(score, nbMotsProposes)
}

lancerBoucleDeJeu()
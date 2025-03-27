console.log("Hello World")

let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let listePhrases = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]

let score = 0

let choixUtilisateur = prompt('Choisissez le mode de jeu en tapant "mots" ou "phrases" : ')

while(choixUtilisateur !== "mots" && choixUtilisateur !== "phrases") {
    choixUtilisateur = prompt('Le choix n\'est pas valide. Choisissez le mode de jeu en tapant "mots" ou "phrases" : ')
}

if (choixUtilisateur == "mots"){
    for (let i = 0; i < listeMots.length; i++) {
        let motUtilisateur = prompt('Entrez le mot : ' + listeMots[i])

        if (motUtilisateur === listeMots[i]) {
            console.log("Bravo !")
            score++
        } else {
            console.log('Vous avez fait une erreur de frappe.')
        }
    }
} else {
    for (let i = 0; i < listePhrases.length; i++) {
        let phraseUtilisateur = prompt('Entrez la phrase : ' + listePhrases[i])

        if (phraseUtilisateur === listePhrases[i]) {
            console.log("Bravo !")
            score++
        } else {
            console.log("Vous avez fait une erreur de frappe.")
        }
    }
}
console.log("Votre score final est de : " +score)


console.log("Hello World")

let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0

for (let i = 0; i < listeMots.length; i++) {
    let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])

    if (motUtilisateur == listeMots[i]) {
        console.log("Bravo !")
        score++
    } else {
        console.log("Vous avez fait une erreur de frappe.")
    }
}
console.log(score)
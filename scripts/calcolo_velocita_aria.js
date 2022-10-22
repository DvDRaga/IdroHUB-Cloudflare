'use strict'
let calcoloVelocitaAria = () => {
    let forma = document.getElementById("forma").value
    let latoA = document.getElementById("latoA").value
    let latoB = document.getElementById("latoB").value
    let diametro = document.getElementById("diametro").value
    let portata = document.getElementById("portata").value

    let velocita = document.getElementById("velocita")
    if (forma === "circ") velocita.innerHTML = (portata / (3600 * (Math.PI * Math.pow(diametro / 1000, 2) / 4))).toFixed(2)
    if (forma === "rett") velocita.innerHTML = (portata / (3600 * (latoA / 1000) * (latoB / 1000))).toFixed(2)

    document.getElementsByClassName("result_row_container")[0].style.borderColor = "rgb(54, 110, 214)"
}
let cambioFormaVelocita = () => {
    let forma = document.getElementById("forma").value

    if (forma === "circ") {
        document.getElementById("container_latoA").classList.add("hidden")
        document.getElementById("container_latoB").classList.add("hidden")
        document.getElementById("container_diametro").classList.remove("hidden")
    }
    if (forma === "rett") {
        document.getElementById("container_latoA").classList.remove("hidden")
        document.getElementById("container_latoB").classList.remove("hidden")
        document.getElementById("container_diametro").classList.add("hidden")
    }
}